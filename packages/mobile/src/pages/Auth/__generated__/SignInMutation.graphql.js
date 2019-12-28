/**
 * @flow
 * @relayHash 47f278eba2c47d421c6c93556d5ff358
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInMutationVariables = {|
  email: string,
  password: string,
|};
export type SignInMutationResponse = {|
  +userLogin: ?{|
    +token: ?string,
    +user: ?{|
      +email: ?string,
      +name: ?string,
    |},
  |}
|};
export type SignInMutation = {|
  variables: SignInMutationVariables,
  response: SignInMutationResponse,
|};
*/


/*
mutation SignInMutation(
  $email: String!
  $password: String!
) {
  userLogin(email: $email, password: $password) {
    token
    user {
      email
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "email",
    "variableName": "email"
  },
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userLogin",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Schema",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
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
    "name": "SignInMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userLogin",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Schema",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignInMutation",
    "id": null,
    "text": "mutation SignInMutation(\n  $email: String!\n  $password: String!\n) {\n  userLogin(email: $email, password: $password) {\n    token\n    user {\n      email\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c476ea6ee477299d6773b86c3424f6b';
module.exports = node;
