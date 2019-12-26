import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styled from 'styled-components/native';

const TakePhotoBtn = styled.Button`
  padding: 10px 20px;
  background: #30f;
`;

const BtnLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

const PhotoPreview = styled.View`
  width: 300px;
  height: 300px;
  border: 1px solid #f00;
`;

const Photos = () => {
  let camera;

  const takePicture = async () => {
    console.tron.log(camera);
    if (camera) {
      console.tron.log('TCL: takePicture -> camera', camera);
      const options = {
        quality: 0.2,
        base64: false,
        exif: false,
        width: 10,
      };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <PhotoPreview>
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
      {/* <TakePhotoBtn onPress={() => console.tron.log(camera)}>
        <BtnLabel>Take picture</BtnLabel>
      </TakePhotoBtn> */}
      <TakePhotoBtn
        title="Take picture"
        onPress={() => console.tron.log(camera)}
      />
    </PhotoPreview>
  );
};

export default Photos;
