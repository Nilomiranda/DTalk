/**
 * @flow
 * @relayHash 2b32a142f9b2c163a3b03962f1a64472
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
      +node: ?{|
        +id: ?string,
        +content: ?string,
        +postedBy: ?{|
          +name: ?string,
          +email: ?string,
          +id: ?string,
        |},
      |}
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createNewTextPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "post",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edge",
        "storageKey": null,
        "args": null,
        "concreteType": "postedge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "postnode",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "content",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "postedBy",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "email",
                    "args": null,
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewPostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NewPostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "NewPostMutation",
    "id": null,
    "text": "mutation NewPostMutation(\n  $content: String!\n) {\n  createNewTextPost(content: $content) {\n    edge {\n      node {\n        id\n        content\n        postedBy {\n          name\n          email\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b6c9333d712a901cb8fe52dfb61ef1e';
module.exports = node;
