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
      // posts: {
      //   type: new GraphQLObjectType({
      //     name: 'TextPosts',
      //     fields: {
      //       TextPost: {
      //         type: TextPost,
      //         resolve(root, args, context, info) {
      //           // console.log('TCL: resolve -> context', context);
      //           return context.prisma.textPosts();
      //         },
      //       },
      //     },
      //   }),
      // },
      posts: {
        type: new GraphQLList(TextPost),
        async resolve(root, args, context, info) {
          return context.prisma.textPosts();
        },
      },
    },
  }),
  mutation: Mutation,
});
