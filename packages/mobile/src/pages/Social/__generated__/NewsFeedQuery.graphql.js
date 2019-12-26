/**
 * @flow
 * @relayHash 9eb500aa88ee4f7abc978bfd9abe400a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TextPostsList_posts$ref = any;
export type NewsFeedQueryVariables = {|
  count?: ?number
|};
export type NewsFeedQueryResponse = {|
  +$fragmentRefs: TextPostsList_posts$ref
|};
export type NewsFeedQuery = {|
  variables: NewsFeedQueryVariables,
  response: NewsFeedQueryResponse,
|};
*/


/*
query NewsFeedQuery(
  $count: Int
) {
  ...TextPostsList_posts_yu5n1
}

fragment TextPostsList_posts_yu5n1 on RootQueryType {
  posts(first: $count) {
    totalCount
    edges {
      node {
        id
        content
        createdAt
        postedBy {
          name
          id
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
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
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "TextPostsList_posts",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsFeedQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TextPost",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "content",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
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
                      (v2/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "posts",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "Feed_posts",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsFeedQuery",
    "id": null,
    "text": "query NewsFeedQuery(\n  $count: Int\n) {\n  ...TextPostsList_posts_yu5n1\n}\n\nfragment TextPostsList_posts_yu5n1 on RootQueryType {\n  posts(first: $count) {\n    totalCount\n    edges {\n      node {\n        id\n        content\n        createdAt\n        postedBy {\n          name\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0b9a5cfdc1246cccc0ff43c2c586df06';
module.exports = node;
