/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import styled from 'styled-components/native';

import SignInImg from '../../assets/img/sign-in.svg';

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

const CustomImg = styled(SignInImg)`
  margin-bottom: 56px;
`;

class SignIn extends Component {
  render() {
    return (
      <MainContainer>
        <CustomImg width={228} height={178} />

        <InputLabel>Email</InputLabel>
        <TextInput placeholder="you@domain.com" autoCapitalize="none" />

        <InputLabel>Password</InputLabel>
        <TextInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
        />

        <SubmitButton>
          <SubmitButtonLabel>Sign In</SubmitButtonLabel>
        </SubmitButton>

        <TextLink>Forgot password? Click here</TextLink>
      </MainContainer>
    );
  }
}

export default SignIn;
