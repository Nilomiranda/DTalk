import React, {userState, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {graphql, QueryRenderer, fetchQuery} from 'react-relay';

import environment from '../../config/relayEnvironment';

/** custom components */
import TextPost from '../../components/TextPost';

/** styling */
const FeedContainer = styled.ScrollView`
  padding: 10px 20px;
`;

const NewPostBadge = styled.View`
  background: #003152;
  width: 66px;
  height: 66px;
  border-radius: 33px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const BadgeLabel = styled.Text`
  color: #eee;
`;

const NewsFeed = () => {
  const [posts, setPosts] = useState(['hello', 'bye']);

  async function loadTextPosts() {
    const query = graphql`
      query NewsFeedQuery {
        posts {
          postedBy {
            email
            name
            id
          }
          content
        }
      }
    `;

    return fetchQuery(environment, query);
  }

  useEffect(async () => {
    const postsData = await loadTextPosts();
    const {posts: loadedPosts} = postsData;
    return setPosts(loadedPosts);
  }, []);

  return (
    <View>
      <FeedContainer>
        {posts.length > 0 ? (
          posts.map(post => (
            <TextPost
              author={post.postedBy && post.postedBy.name}
              content={post.content}
            />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </FeedContainer>
      <NewPostBadge>
        <BadgeLabel>New Post</BadgeLabel>
      </NewPostBadge>
    </View>
  );
};

export default NewsFeed;
