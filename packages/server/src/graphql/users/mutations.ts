import User from './schema';
import { GraphQLNonNull, GraphQLString } from 'graphql';

export const createUser = {
  type: User,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      email: {
        type: new GraphQLNonNull(GraphQLString)
      },
    },
    resolve: (root, args: { name: string, email: string }, context) => {
      return context.prisma.createUser(args)
    }
}