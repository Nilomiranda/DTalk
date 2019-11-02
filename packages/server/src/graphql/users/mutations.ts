import User from './schema';
import { Schema } from '../rootSchemas';
import { GraphQLNonNull, GraphQLString, graphql } from 'graphql';
import bcrypt from 'bcrypt';

async function generateHashedPassword(password): Promise<boolean> {
  const hashedPassword = await bcrypt.hash(password, 8);
  return hashedPassword;
}

async function isEmailInUse(args, context) {
  /** checks if email is already in use */
  const data = await context.prisma
    .users({ where: { email: args.email } })
    .catch(err => console.log(err));

  const foundEmail = data.find(user => user.email === args.email);

  if (foundEmail) {
    return true;
  }

  return false;
}

async function isUsernameAvailable(args, context): Promise<boolean> {
  const data = await context.prisma
    .users({ where: { name: args.name } })
    .catch(err => console.log(err));

  const foundUser = data.find(user => user.name === args.name);

  if (foundUser) {
    return true;
  }

  return false;
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

      if (await isEmailInUse(args, context)) {
        throw new Error('Email already in use');
      }

      if (await isUsernameAvailable(args, context)) {
        throw new Error(
          'This username is not available anymore 😢. Please use another one'
        );
      }

      return context.prisma.createUser({ ...args, password: hashPass });
    },
  };
};
