import TextPost from './schema';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import isUserLogged from '../../../middlewares/auth';
import {
  Prisma,
  User,
  TextPost as Text,
} from '../../../prisma/generated/prisma-client';

async function createPost(root, args, context: Prisma | any) {
  isUserLogged(context);
  const { userId } = context.prisma;
  const { content } = args;
  const author: User = await context.prisma.user({ id: userId });
  const newPost: Text = await (context as any).prisma.createTextPost({
    content,
    postedBy: { connect: { id: author.id } },
  });
  return [newPost];
}

export const postText = () => {
  return {
    type: TextPost,
    args: {
      content: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: createPost,
  };
};
