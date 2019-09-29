import { GraphQLObjectType } from 'graphql';

/** USER */
import { createUser } from './users/mutations';
import { userLogin } from './session/mutation';
import { testSession } from './session/mutation';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'First mutation example',
  fields: {
    createUser: createUser(),
    userLogin: userLogin(),
    testSession: testSession(),
  },
});

export default Mutation;
