import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const TabNavigator = createMaterialTopTabNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Login',
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign up',
      },
    },
  },
  {
    tabBarOptions: {
      indicatorStyle: {
        borderBottomColor: '#3C9D9B',
        borderBottomWidth: 3,
      },
      labelStyle: {
        color: '#000',
        fontSize: 18,
      },
      style: {
        backgroundColor: '#FFF',
        height: 70,
        display: 'flex',
        justifyContent: 'flex-end',
      },
      tabStyle: {
        shadowColor: '#FFF',
        shadowOffset: { height: 0, width: 0 },
      },
    },
  },
);

export default createAppContainer(TabNavigator);
