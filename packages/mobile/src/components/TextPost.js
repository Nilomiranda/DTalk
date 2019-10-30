import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  background: #eee;
  border-radius: 15px;
`;

const PostHeader = styled.View`
  border: 1px solid #ddd;
`;

const AuthorImg = styled.Image``;

const Metadata = styled.View``;

const Author = styled.Text``;

const PostDate = styled.Text``;

class TextPost extends Component {
  render() {
    return (
      <MainContainer>
        <PostHeader>
          <AuthorImg source={{ uri: '../assets/img/avatar.jpeg' }} />
          <Metadata>
            <Author>Daniel Carter</Author>
            <PostDate>1 hour ago</PostDate>
          </Metadata>
        </PostHeader>
        <Text>Hello</Text>
      </MainContainer>
    );
  }
}

export default TextPost;
