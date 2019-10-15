/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import { graphql, commitMutation } from 'react-relay';
import environment from '../../config/relayEnvironment';

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

const ErrorMsg = styled.Text`
  color: #f45;
  font-weight: bold;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 30px;
`;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordsUnmatch: false,
    };
  }

  goToSignIn() {
    const {
      navigation: { navigate },
    } = this.props;

    navigate('SignIn');
  }

  validateForm() {
    const {
 name, email, password, confirmPassword
 } = this.state;

    if (password !== confirmPassword) {
      this.setState({ passwordsUnmatch: true });
    }
  }

  createNewUser() {
    const { name, email, password } = this.state;

    this.validateForm();

    const mutation = graphql`
      mutation SignUpMutation(
        $name: String!
        $email: String!
        $password: String!
      ) {
        createUser(name: $name, email: $email, password: $password) {
          id
          name
          email
        }
      }
    `;

    return commitMutation(environment, {
      mutation,
      variables: {
        name,
        email,
        password,
      },
      onCompleted: (res, err) => {
        if (err) {
          const { message } = err[0];
          Alert.alert(
            'Sign-up error',
            'This email is already in use by another account',
            [{ text: 'OK', onPress: () => this.setState({ email: '' }) }],
          );
        }
      },
      onError: (err) => alert(err),
    });
  }

  render() {
    const { passwordsUnmatch } = this.state;

    return (
      <MainContainer>
        {/* <CustomImg width={168} height={135} /> */}

        <InputLabel>Name</InputLabel>
        <TextInput
          placeholder="Your Name"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ name: text })}
        />

        <InputLabel>Email</InputLabel>
        <TextInput
          placeholder="you@domain.com"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />

        <InputLabel>Password</InputLabel>
        <TextInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
        />
        {passwordsUnmatch ? <ErrorMsg>Passwords must match</ErrorMsg> : <></>}

        <InputLabel>Confirm password</InputLabel>
        <TextInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => this.setState({ confirmPassword: text })}
        />
        {passwordsUnmatch ? <ErrorMsg>Passwords must match</ErrorMsg> : <></>}

        <SubmitButton onPress={() => this.createNewUser()}>
          <SubmitButtonLabel>Sign Up</SubmitButtonLabel>
        </SubmitButton>

        <TextLink onPress={() => this.goToSignIn()}>
          Forgot password? Click here
        </TextLink>
      </MainContainer>
    );
  }
}

SignUp.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
