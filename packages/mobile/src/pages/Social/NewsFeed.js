import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

/** custom components */
import TextPost from '../../components/TextPost';

const FeedContainer = styled.ScrollView`
  padding: 10px 20px;
`;

const NewsFeed = () => (
  <FeedContainer>
    <TextPost />
    <TextPost />
    <TextPost />
    <TextPost />
    <TextPost />
  </FeedContainer>
);

export default NewsFeed;
