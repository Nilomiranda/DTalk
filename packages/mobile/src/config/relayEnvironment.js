import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import AsyncStorage from '@react-native-community/async-storage';
import { installRelayDevTools } from 'relay-devtools';
import { Platform } from 'react-native';

async function fetchQuery(operation, variables) {
  const token = await AsyncStorage.getItem('SESSION_TOKEN');
  let API_URL = '';
  console.tron.log('TCL: fetchQuery -> token', token);

  const platform = Platform.OS;

  if (platform === 'ios') {
    API_URL = 'http://localhost:3333/graphiql';
  } else {
    API_URL = 'http://10.0.2.2:3333/graphiql';
  }

  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then(res => res.json())
    .then(json => {
      if (json.errors) {
        throw new Error(`Server error:: ${json.errors[0].message}`);
      }
      return json;
    });
}

installRelayDevTools();

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
