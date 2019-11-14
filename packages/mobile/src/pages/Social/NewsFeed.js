import React, { useEffect, useState } from 'react';
import { 
View, Text, Modal, TouchableOpacity 
} from 'react-native';
import styled from 'styled-components/native';
import { graphql, QueryRenderer, fetchQuery } from 'react-relay';

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
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisibility] = useState(false);

  console.tron.log(modalVisible);

  const postsQuery = graphql`
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

  const renderFetchedPosts = ({ error, props }) => {
    if (error) {
      if (error.message.endsWith('Not authorized')) {
        return <Text>Error when trying to fetch posts 😢😢 </Text>;
      }
    } else if (props) {
      const { posts: loadedPosts } = props;
      console.tron.log('TCL: renderFetchedPosts -> loadedPosts', loadedPosts);

      return loadedPosts.map((post) => (
        <TextPost
          author={post.postedBy.name}
          content={post.content}
          key={post.id}
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
      <TextPostModal visible={modalVisible} closeModal={closeModal} />
    </View>
  );
};

export default NewsFeed;
