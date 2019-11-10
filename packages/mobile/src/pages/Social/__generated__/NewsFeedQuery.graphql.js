/**
 * @flow
 * @relayHash 09ea1f0eec008d38d2ce749cad98874a
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
v1 = {
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsFeedQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "TextPost",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsFeedQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "TextPost",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v0/*: any*/)
        ]
      }
    ]
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
(node/*: any*/).hash = '85f5e7cea470271d29fd2c5d85da391d';
module.exports = node;
