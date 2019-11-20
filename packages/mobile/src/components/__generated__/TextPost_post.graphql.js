/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TextPost_post$ref: FragmentReference;
declare export opaque type TextPost_post$fragmentType: TextPost_post$ref;
export type TextPost_post = {|
  +edge: ?{|
    +postedBy: ?{|
      +name: ?string,
      +email: ?string,
      +id: ?string,
    |},
    +content: string,
    +id: ?string,
  |},
  +$refType: TextPost_post$ref,
|};
export type TextPost_post$data = TextPost_post;
export type TextPost_post$key = {
  +$data?: TextPost_post$data,
  +$fragmentRefs: TextPost_post$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "TextPost_post",
  "type": "TextPost",
  "metadata": null,
  "argumentDefinitions": [],
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '1856a076439def0483ed04c3ae0bf1e1';
module.exports = node;
