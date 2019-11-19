import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import {
  graphql,
  QueryRenderer,
  commitMutation,
  createFragmentContainer,
} from 'react-relay';
import propTypes from 'prop-types';

import environment from '../../config/relayEnvironment';

/** custom components */
import TextPost from '../../components/TextPost';
import TextPostModal from '../../components/TextPostModal';

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
    query NewsFeedQuery {
      posts {
        ...TextPost_post
      }
    }
  `;

  const renderFetchedPosts = ({ error, props }) => {
    if (error) {
      if (error.message.endsWith('Not authorized')) {
        return <Text>Error when trying to fetch posts</Text>;
      }
    } else if (props) {
      const { posts: loadedPosts } = props;
      console.tron.log('TCL: renderFetchedPosts -> props', props);
      return loadedPosts.map((post) => (
        <TextPost
          // author={post.postedBy.name}
          // content={post.content}
          // key={post.id}
          post={post}
          key={post.__id}
        />
      ));
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
    const newPostMutation = graphql`
      mutation NewsFeedMutation($content: String!) {
        createNewTextPost(content: $content) {
          content
          postedBy {
            name
          }
        }
      }
    `;

    closeModal();

    return commitMutation(environment, {
      mutation: newPostMutation,
      variables: { content: postContent },
    });
  };

  return (
    <View>
      <FeedContainer>
        <QueryRenderer
          environment={environment}
          query={postsQuery}
          render={renderFetchedPosts}
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

NewsFeed.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      postedBy: propTypes.shape({
        email: propTypes.string,
        name: propTypes.string,
        id: propTypes.string,
        createdAt: propTypes.string,
      }),
      content: propTypes.string,
      id: propTypes.string,
    }),
  ),
};

NewsFeed.defaultProps = {
  posts: [],
};

export default NewsFeed;
