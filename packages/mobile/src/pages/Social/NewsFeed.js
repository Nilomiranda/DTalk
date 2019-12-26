import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { graphql, QueryRenderer } from 'react-relay';
import { ROOT_ID } from 'relay-runtime';
import commit from './mutations/NewPostMutation';

import environment from '../../config/relayEnvironment';

/** custom components */
import TextPostModal from '../../components/TextPostModal';
import TextPostsList from '../../components/TextPostsList';

/** styling */
const FeedContainer = styled.ScrollView`
  padding: 10px 20px;
`;

const NewPostBadge = styled.TouchableOpacity`
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
  const [modalVisible, setModalVisibility] = useState(false);

  const postsQuery = graphql`
    query NewsFeedQuery($count: Int) {
      ...TextPostsList_posts @arguments(count: $count)
    }
  `;

  const renderFetchedPosts = ({ error, props }) => {
    if (error) {
      if (error.message.endsWith('Not authorized')) {
        return <Text>Error when trying to fetch posts</Text>;
      }
    } else if (props) {
      return <TextPostsList posts={props} />;
    } else {
      return <Text>Loading post</Text>;
    }
  };

  const openPostModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleNewPost = (postContent) => {
    commit(postContent, ROOT_ID, closeModal);
  };

  return (
    <View>
      <FeedContainer>
        <QueryRenderer
          environment={environment}
          query={postsQuery}
          render={renderFetchedPosts}
          variables={{ count: 10 }}
        />
      </FeedContainer>
      <NewPostBadge onPress={() => openPostModal()}>
        <BadgeLabel>New Post</BadgeLabel>
      </NewPostBadge>
      <TextPostModal
        visible={modalVisible}
        closeModal={closeModal}
        createNewPost={(post) => handleNewPost(post)}
      />
    </View>
  );
};

NewsFeed.defaultProps = {
  posts: [],
};

export default NewsFeed;
