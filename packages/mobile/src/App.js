import './config/ReactotronConfig';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppContainer from './routes';

const App = () => (
  <PaperProvider>
    <AppContainer />
  </PaperProvider>
);

export default App;
