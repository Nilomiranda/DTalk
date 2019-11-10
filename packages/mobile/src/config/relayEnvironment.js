import { 
Environment, Network, RecordSource, Store 
} from 'relay-runtime';
import AsyncStorage from '@react-native-community/async-storage';

async function fetchQuery(operation, variables) {
  const token = await AsyncStorage.getItem('SESSION_TOKEN');
  console.tron.log('TCL: fetchQuery -> token', token);

  return fetch('http://localhost:3333/graphiql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((res) => res.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
