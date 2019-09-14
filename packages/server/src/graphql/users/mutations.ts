import User from './schema';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import bcrypt from 'bcrypt';

async function generateHashedPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 8);
  return hashedPassword;
}

export const createUser = () => {
  return {
    type: User,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (
      root,
      args: { name: string; email: string; password: string },
      context
    ) => {
      const hashPass = await generateHashedPassword(args.password);
      console.log(hashPass);
      return context.prisma.createUser({ ...args, password: hashPass });
    },
  };
};
