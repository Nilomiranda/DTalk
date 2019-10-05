/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components/native';

import SignUpImg from '../../assets/img/sign-up.svg';

const MainContainer = styled.View`
  align-items: center;
  /* justify-content: space-between; */
  padding: 50px 40px;
  flex: 1;
`;

const TextInput = styled.TextInput`
  /* height: 40px; */
  color: #222;
  box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  background: #fff;
  padding: 16px 10px;
  align-self: stretch;
  margin-bottom: 30px;
`;

const InputLabel = styled.Text`
  color: #222;
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 8px;
  text-align: center;
  align-self: flex-start;
`;

const SubmitButton = styled.TouchableOpacity`
  background: #394a6d;
  border-radius: 6px;
  padding: 12px;
  align-self: stretch;
`;

const SubmitButtonLabel = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  align-self: stretch;
  text-align: center;
`;

const TextLink = styled.Text`
  color: #3c9d9b;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  margin-top: 25px;
`;

const CustomImg = styled(SignUpImg)`
  margin-bottom: 33px;
`;

class SignUp extends Component {
  goToSignIn() {
    const { navigate } = this.props.navigation;

    navigate('SignIn');
  }

  render() {
    return (
      <MainContainer>
        <CustomImg width={168} height={135} />

        <InputLabel>Email</InputLabel>
        <TextInput placeholder="you@domain.com" autoCapitalize="none" />

        <InputLabel>Password</InputLabel>
        <TextInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
        />

        <InputLabel>Confirm password</InputLabel>
        <TextInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
        />

        <SubmitButton>
          <SubmitButtonLabel>Sign Up</SubmitButtonLabel>
        </SubmitButton>

        <TextLink onPress={() => this.goToSignIn()}>
          Forgot password? Click here
        </TextLink>
      </MainContainer>
    );
  }
}

export default SignUp;
