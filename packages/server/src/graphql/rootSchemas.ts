import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

// schemas
import User from './users/schema';
import TextPost from './posts/text/schema';

// mutations
import Mutation from './rootMutation';

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      info: {
        type: GraphQLString,
        resolve() {
          return 'Dtalk API --version 1.0';
        },
      },
      users: {
        type: new GraphQLList(User),
        resolve(root, args, context, info) {
          return context.prisma.users();
        },
      },
      posts: {
        type: new GraphQLList(TextPost),
        args: { postedBy: { type: GraphQLString } },
        async resolve(root, args, context, info) {
          return context.prisma.textPosts({
            where: { postedBy: { id: args.postedBy } },
          });
        },
      },
    },
  }),
  mutation: Mutation,
});
