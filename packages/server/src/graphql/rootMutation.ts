import { GraphQLObjectType } from 'graphql';

/** USER */
import { createUser } from './users/mutations';
import { userLogin } from './session/mutation';
import { testSession } from './session/mutation';
import { postText } from './posts/text/mutation';

/** POSTS */

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'First mutation example',
  fields: {
    createUser: createUser(),
    userLogin: userLogin(),
    testSession: testSession(),
    createNewTextPost: postText(),
  },
});

export default Mutation;
