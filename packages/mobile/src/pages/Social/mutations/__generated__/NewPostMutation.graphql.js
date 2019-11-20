/**
 * @flow
 * @relayHash eb6a7553489750fc221fce765e0fb68f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewPostMutationVariables = {|
  content: string
|};
export type NewPostMutationResponse = {|
  +createNewTextPost: ?{|
    +edge: ?{|
      +postedBy: ?{|
        +name: ?string
      |},
      +content: string,
      +id: ?string,
    |}
  |}
|};
export type NewPostMutation = {|
  variables: NewPostMutationVariables,
  response: NewPostMutationResponse,
|};
*/


/*
mutation NewPostMutation(
  $content: String!
) {
  createNewTextPost(content: $content) {
    edge {
      postedBy {
        name
        id
      }
      content
      id
    }
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
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
    "name": "NewPostMutation",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "postedBy",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ]
              },
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewPostMutation",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "postedBy",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/)
                ]
              },
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "NewPostMutation",
    "id": null,
    "text": "mutation NewPostMutation(\n  $content: String!\n) {\n  createNewTextPost(content: $content) {\n    edge {\n      postedBy {\n        name\n        id\n      }\n      content\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0d04c5e4a994ae4ac4972ef4eccbb8b2';
module.exports = node;
