/**
 * @flow
 * @relayHash edbb7a99397ee4a5d11e91e83ffca403
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewsFeedQueryVariables = {||};
export type NewsFeedQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +postedBy: ?{|
      +email: ?string,
      +name: ?string,
      +id: ?string,
    |},
    +content: string,
    +id: ?string,
  |}>
|};
export type NewsFeedQuery = {|
  variables: NewsFeedQueryVariables,
  response: NewsFeedQueryResponse,
|};
*/


/*
query NewsFeedQuery {
  posts {
    postedBy {
      email
      name
      id
    }
    content
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "posts",
    "storageKey": null,
    "args": null,
    "concreteType": "TextPost",
    "plural": true,
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/)
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      },
      (v0/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsFeedQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsFeedQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "NewsFeedQuery",
    "id": null,
    "text": "query NewsFeedQuery {\n  posts {\n    postedBy {\n      email\n      name\n      id\n    }\n    content\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d6ca48d78760d9e0a5ff64f26b14b4d';
module.exports = node;
