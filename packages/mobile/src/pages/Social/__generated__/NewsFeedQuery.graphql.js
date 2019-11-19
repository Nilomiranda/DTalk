/**
 * @flow
 * @relayHash 4c4453394636c83617227c6beb93f00c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TextPost_post$ref = any;
export type NewsFeedQueryVariables = {||};
export type NewsFeedQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TextPost_post$ref
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
    ...TextPost_post
    id
  }
}

fragment TextPost_post on TextPost {
  postedBy {
    name
    email
    id
  }
  content
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
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
          {
            "kind": "FragmentSpread",
            "name": "TextPost_post",
            "args": null
          }
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsFeedQuery",
    "id": null,
    "text": "query NewsFeedQuery {\n  posts {\n    ...TextPost_post\n    id\n  }\n}\n\nfragment TextPost_post on TextPost {\n  postedBy {\n    name\n    email\n    id\n  }\n  content\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '50d69e2506048c6a2e13129d80b19cff';
module.exports = node;
