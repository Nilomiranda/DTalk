import TextPost from './schema';
import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
} from 'graphql';
import isUserLogged from '../../../middlewares/auth';
import {
  Prisma,
  User,
  TextPost as Text,
} from '../../../prisma/generated/prisma-client';
import UserSchema from '../../users/schema';

async function createPost(root, args, context, info) {
  const { prisma }: { prisma: Prisma } = context;
  isUserLogged(context);
  const { userId } = context.prisma;
  const { content } = args;
  const author: User = await prisma.user({ id: userId });
  const newPost: Text = await prisma.createTextPost({
    content,
    postedBy: { connect: { id: author.id } },
  });

  // const postAuthorName = await prisma
  //   .textPost({ id: newPost.id })
  //   .postedBy()
  //   .name();

  // const postAuthorID = await prisma
  //   .textPost({ id: newPost.id })
  //   .postedBy()
  //   .id();

  // Object.assign(newPost, {
  //   postedBy: { name: postAuthorName, id: postAuthorID },
  // });
  console.log('TCL: createPost -> newPost', newPost);

  return newPost;
}

const TextPostResponse = new GraphQLObjectType({
  name: 'post',
  fields: {
    edge: {
      type: new GraphQLObjectType({
        name: 'postedge',
        fields: {
          node: {
            type: new GraphQLObjectType({
              name: 'postnode',
              fields: {
                id: {
                  type: GraphQLID,
                  resolve(parent) {
                    return parent.id;
                  },
                },
                content: {
                  type: GraphQLString,
                  resolve(parent) {
                    return parent.content;
                  },
                },
                postedBy: {
                  type: UserSchema,
                  resolve(parent, args, context) {
                    return context.prisma
                      .textPost({ id: parent.id })
                      .postedBy();
                  },
                },
              },
            }),
            resolve(parent) {
              return parent;
            },
          },
        },
      }),
      resolve(parent) {
        return parent;
      },
    },
  },
});

export const postText = () => {
  return {
    type: TextPostResponse,
    args: {
      content: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: createPost,
  };
};
