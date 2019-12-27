import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import AsyncStorage from '@react-native-community/async-storage';
import { installRelayDevTools } from 'relay-devtools';

async function fetchQuery(operation, variables) {
  const token = await AsyncStorage.getItem('SESSION_TOKEN');
  console.tron.log('TCL: fetchQuery -> token', token);

  return fetch('http://10.0.2.2:3333/graphiql', {
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
