import Session from './schema';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from '../../config/auth';
import { User } from '../../prisma/generated/prisma-client';
import isUserLogged from '../../middlewares/auth';

async function login(root, args, context) {
  const { password } = args;
  const user: User = await context().prisma.user({ email: args.email });

  if (!user) {
    throw new Error('User does not exist. Please check the informed email');
  }

  /** validating password */
  const isPasswordCorret: boolean = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordCorret) {
    throw new Error('Invalid credentials. Please check it and try again');
  }

  /** generates token if all credentials are correct */
  const token = await jwt.sign(user, auth.secret);

  return {
    token,
    user,
  };
}

function test(root, args, context) {
  isUserLogged(context);
}

export const userLogin = () => {
  return {
    type: Session,
    args: {
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: login,
  };
};

export const testSession = () => {
  return {
    type: Session,
    args: {
      text: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: test,
  };
};
