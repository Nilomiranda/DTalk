import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../../../config/relayEnvironment';

const mutation = graphql`
  mutation NewPostMutation($content: String!) {
    createNewTextPost(content: $content) {
      edge {
        node {
          id
          content
          postedBy {
            name
            email
            id
          }
        }
      }
    }
  }
`;

function commit(content, rootId, onCompleted) {
  const variables = { content };

  onCompleted();

  return commitMutation(environment, {
    mutation,
    variables,
    // updater: (store) => {
    //   const postsStore = store.get(rootId);

    //   const createdPost =

    //   const posts = ConnectionHandler.getConnection(postsStore, 'Feed_posts');

    //   const edges = posts.getLinkedRecords('edges');
    //   console.tron.log('TCL: commit -> edges', edges);

    //   if (edges.lengh === 0) {

    //   }
    // },
    onCompleted: (res) => {
      console.tron.log('mutation completed ->', res);
    },
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: rootId,
        connectionInfo: [
          {
            key: 'Feed_posts',
            rangeBehavior: 'prepend',
          },
        ],
        edgeName: 'edge',
      },
    ],
  });
}

export default commit;
