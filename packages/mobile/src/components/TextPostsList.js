/**
 * this component will be used to render
 * the text posts available to the NewsFeed page
 */
import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import TextPost from './TextPost';

const TextPostsList = ({ posts }) => {
  const { edges } = posts.posts;
  return (
    <View>
      {edges.map((post) => (
        <TextPost post={post} />
      ))}
    </View>
  );
};

TextPostsList.propTypes = {
  posts: propTypes.shape({
    posts: propTypes.shape({
      edges: propTypes.array,
    }).isRequired,
  }).isRequired,
};

export default createFragmentContainer(TextPostsList, {
  posts: graphql`
    fragment TextPostsList_posts on RootQueryType
      @argumentDefinitions(count: { type: "Int", defaultValue: 2 }) {
      posts(first: $count) @connection(key: "Feed_posts") {
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
  `,
});
