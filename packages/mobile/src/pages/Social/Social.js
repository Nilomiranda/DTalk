import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

/** pages */
import NewsFeed from './NewsFeed';
import Photos from './Photos';
import Videos from './Videos';

const tabNavigator = createBottomTabNavigator(
  {
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: {
        title: 'News Feed',
      },
    },
    Photos: {
      screen: Photos,
      navigationOptions: {
        title: 'Photos',
      },
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        title: 'Videos',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#00FF00',
      inactiveTintColor: '#FFFFFF',

      style: {
        backgroundColor: '#003152',
        // marginBottom: 50,
        padding: 15,
        // paddingBottom: 50,
      },
    },
  },
);

export default createAppContainer(tabNavigator);
