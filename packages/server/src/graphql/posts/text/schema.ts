import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLScalarType,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import User from '../../users/schema';
import { Prisma, TextPost } from '../../../prisma/generated/prisma-client';
import isUserLogged from '../../../middlewares/auth';
import { resolve } from 'dns';

let totalPosts: number;
let textPosts: TextPost[] = [];
let hasNextPage: boolean;
let hasPreviousPage: boolean;
let endCursor: string;

const findAllPosts = async (root, args, context) => {
  const { prisma }: { prisma: Prisma } = context;
  const { args: queryArgs } = context;
  const { postedBy, id: postId, after, first, last } = queryArgs;

  const posts = await prisma.textPosts({
    where: { postedBy: { id: postedBy }, id: postId },
    after: after,
    first: first,
    last: last,
    orderBy: 'createdAt_DESC',
  });

  textPosts = posts;

  if (posts) {
    determineLastCursor();
    checkIfHasNextPage(context);
    checkIfHasPreviousPage(context);
  }

  return posts;
};

const countPosts = async context => {
  const { args: queryArgs } = context;
  const { postedBy, id: postId } = queryArgs;

  const postsCount: number = await context.prisma
    .textPostsConnection({
      where: { postedBy: { id: postedBy }, id: postId },
    })
    .aggregate()
    .count();

  totalPosts = postsCount;
};

const checkIfHasNextPage = context => {
  const postsCount = totalPosts;
  const { args: queryArgs } = context;
  const { first: limit } = queryArgs;

  hasNextPage = postsCount > limit && endCursor !== null;

  return hasNextPage;
};

const checkIfHasPreviousPage = context => {
  const postsCount = totalPosts;
  const { args: queryArgs } = context;
  const { first: limit } = queryArgs;

  hasPreviousPage = postsCount > limit && endCursor !== null;

  return hasNextPage;
};

const determineLastCursor = () => {
  endCursor = textPosts[textPosts.length - 1]
    ? textPosts[textPosts.length - 1].id
    : null;
};

const TextPost = new GraphQLObjectType({
  name: 'TextPost',
  fields: {
    edges: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: 'edges',
          fields: {
            node: {
              type: new GraphQLObjectType({
                name: 'node',
                fields: {
                  id: {
                    type: GraphQLID,
                    resolve(parent, args, context) {
                      isUserLogged(context);
                      return parent.id;
                    },
                  },
                  postedBy: {
                    type: User,
                    resolve(parent, args, context) {
                      isUserLogged(context);
                      return context.prisma
                        .textPost({ id: parent.id })
                        .postedBy();
                    },
                  },
                  content: {
                    type: GraphQLNonNull(GraphQLString),
                    resolve(parent, args, context) {
                      isUserLogged(context);
                      return parent.content;
                    },
                  },
                  createdAt: {
                    type: GraphQLString,
                    resolve(parent, args, context) {
                      return parent.createdAt;
                    },
                  },
                },
              }),
              async resolve(parent, args, context) {
                return parent;
              },
            },
            cursor: {
              type: GraphQLString,
              resolve(parent) {
                return parent.id;
              },
            },
          },
        })
      ),
      async resolve(parent, args, context) {
        await findAllPosts(parent, null, context);
        return textPosts;
      },
    },
    totalCount: {
      type: GraphQLInt,
      async resolve(parent, args, context) {
        await countPosts(context);
        return totalPosts;
      },
    },
    pageInfo: {
      type: new GraphQLObjectType({
        name: 'pageInfo',
        fields: {
          endCursor: {
            type: GraphQLString,
            async resolve() {
              return endCursor;
            },
          },
          startCursor: {
            type: GraphQLString,
            async resolve() {
              return endCursor;
            },
          },
          hasNextPage: {
            type: GraphQLNonNull(GraphQLBoolean),
            async resolve(parent, args, context) {
              return hasNextPage;
            },
          },
          hasPreviousPage: {
            type: GraphQLNonNull(GraphQLBoolean),
            async resolve(parent, args, context) {
              return hasPreviousPage;
            },
          },
        },
      }),
      async resolve(parent, args, context) {
        await findAllPosts(parent, null, context);
        return await parent;
      },
    },
  },
});

export default TextPost;
