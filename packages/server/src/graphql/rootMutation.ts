import { GraphQLObjectType } from 'graphql';

/** USER */
import { createUser } from './users/mutations';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'First mutation example',
  fields: {
    createUser: createUser(),
  },
});

export default Mutation;
