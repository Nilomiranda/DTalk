import React, { Component, useState } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styled from 'styled-components/native';

const MainView = styled.View`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const PhotoPreview = styled.Image`
  width: 300px;
  height: 300px;
  border: 1px solid #f00;
`;

const NewPhotoBadge = styled.TouchableOpacity`
  background: #003152;
  width: 66px;
  height: 66px;
  border-radius: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: 20px;
`;

const BadgeLabel = styled.Text`
  color: #eee;
  text-align: center;
`;

const Photos = () => {
  const [photo, setPhoto] = useState('');
  let camera;

  const takePicture = async () => {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
      };
      const data = await camera.takePictureAsync(options);
      setPhoto(data.base64);
    }
  };

  return (
    <MainView>
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      />
      {photo ? (
        <PhotoPreview
          source={{
            uri: `data:image/jpeg;base64,${photo}`,
          }}
        />
      ) : (
        <></>
      )}
      <NewPhotoBadge onPress={() => takePicture()}>
        <BadgeLabel>New Photo</BadgeLabel>
      </NewPhotoBadge>
    </MainView>
  );
};

export default Photos;
