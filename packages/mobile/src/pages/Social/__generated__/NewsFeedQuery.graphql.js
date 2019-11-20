/**
 * @flow
 * @relayHash 545608ea48b7df5b31fc17554f1ca966
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TextPost_post$ref = any;
export type NewsFeedQueryVariables = {|
  count?: ?number
|};
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
query NewsFeedQuery(
  $count: Int
) {
  posts(first: $count) {
    ...TextPost_post
  }
}

fragment TextPost_post on TextPost {
  edge {
    postedBy {
      name
      email
      id
    }
    content
    id
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
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TextPost",
        "plural": true,
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
                  (v2/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "content",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsFeedQuery",
    "id": null,
    "text": "query NewsFeedQuery(\n  $count: Int\n) {\n  posts(first: $count) {\n    ...TextPost_post\n  }\n}\n\nfragment TextPost_post on TextPost {\n  edge {\n    postedBy {\n      name\n      email\n      id\n    }\n    content\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '01fa28117a57915a1d49cde1b3a6189d';
module.exports = node;
