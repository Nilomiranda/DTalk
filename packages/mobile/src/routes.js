import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

/** pages */
import Auth from './pages/Auth/Auth';
import NewsFeed from './pages/Social/NewsFeed';

/** other components */
import AuthHeader from './components/AuthHeader';

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
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: () => ({
        headerStyle: {
          height: 100,
          borderBottomWidth: 0,
          elevation: 0, // for android
        },
        headerTitle: <AuthHeader />,
      }),
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(MainNavigator);
