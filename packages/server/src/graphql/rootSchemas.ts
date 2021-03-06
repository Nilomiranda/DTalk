import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
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
        type: TextPost,
        args: {
          postedBy: { type: GraphQLString },
          first: { type: GraphQLInt },
          last: { type: GraphQLInt },
          after: { type: GraphQLString },
          id: { type: GraphQLID },
        },
        async resolve(root, args, context, info) {
          console.log('TCL: resolve -> root', root);
          return Object.assign(context, { args });
        },
      },
    },
  }),
  mutation: Mutation,
});
