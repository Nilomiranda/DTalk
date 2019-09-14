import { GraphQLObjectType, GraphQLString } from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString,
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
  },
});

export default User;
