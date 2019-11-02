import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLOutputType,
} from 'graphql';
import TextPost from '../posts/text/schema';
import { Prisma } from '../../prisma/generated/prisma-client';

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLID,
      resolve(parent) {
        return parent.id;
      },
    },
    name: {
      type: GraphQLString,
      resolve(parent) {
        return parent.name;
      },
    },
    email: {
      type: GraphQLString,
      resolve(parent) {
        return parent.email;
      },
    },
    password: {
      type: GraphQLString,
      resolve(parent) {
        return parent.password;
      },
    },
    createdAt: {
      type: GraphQLString,
      resolve(parent) {
        return parent.createdAt;
      },
    },
    // textPosts: {
    //   type: new GraphQLList(TextPost),
    //   resolve(parent, args, context) {
    //     console.log('TCL: resolve -> parentttttt', parent);
    //     // return parent.textPosts;
    //     return context.prisma.user({ id: parent.id }).textPosts();
    //   },
    // },
  },
});

export default User;
