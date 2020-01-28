import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

const tron = Reactotron.configure()
  // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  // .configure({ host: '192.168.0.37' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .setAsyncStorageHandler(AsyncStorage)
  .connect(); // let's connect!

console.tron = tron;

export default tron;
