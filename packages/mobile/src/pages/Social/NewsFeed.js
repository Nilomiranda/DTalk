import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

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

const NewsFeed = () => (
  <View>
    <FeedContainer>
      <TextPost />
      <TextPost />
      <TextPost />
      <TextPost />
      <TextPost />
    </FeedContainer>
    <NewPostBadge>
      {/* <Image
        source={require('../../assets/img/new-post.jpg')}
        style={{ width: 40, height: 40 }}
      /> */}
      <BadgeLabel>New Post</BadgeLabel>
    </NewPostBadge>
  </View>
);

export default NewsFeed;
