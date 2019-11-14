import React, {useState} from 'react';
import {Text} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

const ModalContainer = styled(Modal)`
  /* background-color: rgba(0, 0, 0, 0.5); */
`;

const ModalView = styled.View`
  background: #fff;
  height: 200px;
  align-items: center;
  margin-top: 220px;
  width: 320px;
  margin: 220px auto;
  border-radius: 20px;
`;

const ModalHeader = styled.View`
  background: #394a6d;
  height: 50px;
  width: 320px;
  color: #fff;
  padding: 12.5px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ModalContent = styled.View`
  width: 320px;
  height: 150px;
  /* padding: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ModalTextField = styled.TextInput`
  align-self: center;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #222;
  /* margin-top: auto; */
  padding: 0 20px;
  width: 240px;
`;

const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  align-self: center;
`;

const PostButton = styled.TouchableOpacity`
  /* width: 200px; */
  background: #3c9d9b;
  /* height: 35px; */
  padding: 10px 100px;
  border-radius: 8px;
  text-align: center;
  /* margin-top: 20px; */
`;

const ButtonLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin: auto 0;
`;

const TextPostModal = ({visible, closeModal}) => (
  <ModalContainer
    isVisible={visible}
    animationType="slide"
    coverScreen
    onBackdropPress={() => closeModal()}
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={1000}>
    <ModalView>
      <ModalHeader>
        <HeaderTitle>New text post</HeaderTitle>
      </ModalHeader>
      <ModalContent>
        <ModalTextField placeholder="What are you thinking?" />
        <PostButton>
          <ButtonLabel>Post</ButtonLabel>
        </PostButton>
      </ModalContent>
    </ModalView>
  </ModalContainer>
);

export default TextPostModal;
