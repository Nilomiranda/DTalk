/**
 * @flow
 * @relayHash a95f3ecf893488b72443d0c4cf533ec3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewsFeedMutationVariables = {|
  content: string
|};
export type NewsFeedMutationResponse = {|
  +createNewTextPost: ?{|
    +content: string,
    +postedBy: ?{|
      +name: ?string
    |},
  |}
|};
export type NewsFeedMutation = {|
  variables: NewsFeedMutationVariables,
  response: NewsFeedMutationResponse,
|};
*/


/*
mutation NewsFeedMutation(
  $content: String!
) {
  createNewTextPost(content: $content) {
    content
    postedBy {
      name
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "content",
    "variableName": "content"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsFeedMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createNewTextPost",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TextPost",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "postedBy",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsFeedMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createNewTextPost",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TextPost",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "postedBy",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "NewsFeedMutation",
    "id": null,
    "text": "mutation NewsFeedMutation(\n  $content: String!\n) {\n  createNewTextPost(content: $content) {\n    content\n    postedBy {\n      name\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '167009300e4fa50e1d1ef5efa9eec374';
module.exports = node;
