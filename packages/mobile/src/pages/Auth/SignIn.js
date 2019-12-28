/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Snackbar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { graphql, commitMutation } from 'react-relay';
import environment from '../../config/relayEnvironment';

import SignInImg from '../../assets/img/sign-in.svg';

const MainContainer = styled.ScrollView`
  /* align-items: center; */
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
  align-self: center;
`;

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errorMsg: '',
    hasError: false,
  };

  componentDidMount() {
    this.checkSession();
  }

  async checkSession() {
    const { navigation } = this.props;

    const token = await AsyncStorage.getItem('SESSION_TOKEN');
    console.tron.log('TCL: SignIn -> checkSession -> token', token);

    if (token) {
      navigation.navigate('Social');
    }
  }

  login() {
    const { email, password } = this.state;
    const { navigation } = this.props;

    console.tron.log(email);

    const mutation = graphql`
      mutation SignInMutation($email: String!, $password: String!) {
        userLogin(email: $email, password: $password) {
          token
          user {
            email
            name
          }
        }
      }
    `;

    return commitMutation(environment, {
      mutation,
      variables: {
        email,
        password,
      },
      onCompleted: (res, err) => {
        if (err) {
          const { message } = err[0];
          this.setState({ hasError: true, errorMsg: message, email: '' });
        }
        console.tron.log('TCL: SignIn -> login -> res', res.userLogin.token);
        const { token } = res.userLogin;
        console.tron.log('TCL: SignIn -> login -> token', token);

        AsyncStorage.setItem('SESSION_TOKEN', token);
        if (!err) {
          navigation.navigate('Social');
        }
      },
    });
  }

  dismissErrorToast() {
    this.setState({ hasError: false, errorMsg: '' });
  }

  gotToForgotPassword() {
    console.tron.log('going to forgot password');
    const { navigation } = this.props;

    navigation.navigate('ForgotPassword');
  }

  render() {
    const { email, password, hasError, errorMsg } = this.state;

    return (
      <ScrollView>
        <MainContainer bounces={false}>
          <CustomImg width={228} height={178} />

          <InputLabel>Email</InputLabel>
          <TextInput
            placeholder="you@domain.com"
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />

          <InputLabel>Password</InputLabel>
          <TextInput
            placeholder="********"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />

          <SubmitButton onPress={() => this.login()}>
            <SubmitButtonLabel>Sign In</SubmitButtonLabel>
          </SubmitButton>

          <TextLink onPress={() => this.gotToForgotPassword()}>
            Forgot password? Click here
          </TextLink>
        </MainContainer>
        <Snackbar
          visible={hasError}
          onDismiss={() => this.dismissErrorToast()}
          duration={7000}
        >
          {errorMsg}
        </Snackbar>
      </ScrollView>
    );
  }
}

export default SignIn;
