import React from 'react';
import { commitMutation, graphql } from 'react-relay';
import environment from '../../../config/relayEnvironment';

const mutation = graphql`
  mutation NewPostMutation($content: String!) {
    createNewTextPost(content: $content) {
      edge {
        postedBy {
          name
        }
        content
        id
      }
    }
  }
`;

function commit(content, onCompleted) {
  const variables = { content };

  onCompleted();

  return commitMutation(environment, {
    mutation,
    variables,
    updater: store => {
      const payloadProxy = store.getRootField('createNewTextPost');
      console.tron.log('TCL: commit -> payloadProxy', payloadProxy);

      const edge = payloadProxy.getLinkedRecord('edge');
      console.tron.log('TCL: commit -> edge', edge);

      const content = edge.getValue('content');
      const id = edge.getValue('id');
      console.tron.log('TCL: commit -> id', id);
      console.tron.log('TCL: commit -> content', content);
    },
  });
}

export default commit;
