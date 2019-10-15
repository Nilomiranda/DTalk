/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
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

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  goToSignIn() {
    const {
      navigation: { navigate },
    } = this.props;

    navigate('SignIn');
  }

  createNewUser() {
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
        name: 'Lord Voldemort',
        email: 'voldemort@gmail.com',
        password: '123456',
      },
    });
  }

  render() {
    return (
      <MainContainer>
        <CustomImg width={168} height={135} />

        <InputLabel>Email</InputLabel>
        <TextInput
          placeholder="you@domain.com"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ email: text })}
        />

        <InputLabel>Password</InputLabel>
        <TextInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
        />

        <InputLabel>Confirm password</InputLabel>
        <TextInput
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => this.setState({ confirmPassword: text })}
        />

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
