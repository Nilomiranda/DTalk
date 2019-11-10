/* eslint-disable global-require */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  background: #eee;
  border-radius: 15px;
  padding: 25px;
  margin: 10px 0;
`;

const PostHeader = styled.View`
  border-bottom-width: 1px;
  /* border-bottom-style: solid; */
  border-bottom-color: #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 13px;
`;

const AuthorImg = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 22px;
`;

const Metadata = styled.View`
  margin-left: 15px;
`;

const Author = styled.Text`
  font-size: 16px;
  color: #666;
`;

const PostDate = styled.Text`
  font-size: 13px;
  color: #bbb;
`;

const Content = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 14px;
  margin-top: 15px;
`;

class TextPost extends Component {
  render() {
    const {author, content} = this.props;

    return (
      <MainContainer>
        <PostHeader>
          <AuthorImg source={require('../assets/img/avatar.jpeg')} />
          <Metadata>
            <Author>{author}</Author>
            <PostDate>1 hour ago</PostDate>
          </Metadata>
        </PostHeader>
        <Content>{content}</Content>
      </MainContainer>
    );
  }
}

export default TextPost;
