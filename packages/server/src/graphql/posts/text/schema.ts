import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLScalarType,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import User from '../../users/schema';
import { Prisma } from '../../../prisma/generated/prisma-client';
import isUserLogged from '../../../middlewares/auth';

const hasNextPage = () => {
  return;
};

const countPosts = async (root, args, context) => {
  const postsCount: number = await context.prisma
    .textPostsConnection()
    .aggregate()
    .count();
  console.log('TCL: countPosts -> postsCount', postsCount);

  return postsCount;
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
                      console.log('TCL: resolve -> args', args.id);
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
      async resolve(parent, args, context: Prisma | any) {
        return parent;
      },
    },
    totalCount: {
      type: GraphQLInt,
      resolve: countPosts,
    },
  },
});

export default TextPost;
