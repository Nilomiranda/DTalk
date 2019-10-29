import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/** pages */
import Auth from './pages/Auth/Auth';
import NewsFeed from './pages/Social/NewsFeed';

/** other components */
import AuthHeader from './components/AuthHeader';
import ForgotPassword from './pages/Auth/ForgotPassword';

const MainNavigator = createStackNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: () => ({
        headerStyle: {
          height: 100,
          borderBottomWidth: 0,
          elevation: 0, // for android
        },
        headerTitle: <AuthHeader />,
      }),
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerBackTitle: 'Back',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#394a6d',
          paddingStart: 20,
          paddingEnd: 20,
          paddingBottom: 10,
          height: 60,
        },
      },
    },
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: () => ({
        headerStyle: {
          height: 100,
          borderBottomWidth: 0,
          elevation: 0, // for android
        },
        headerTitle: <AuthHeader />,
        headerLeft: () => null,
        gesturesEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(MainNavigator);
