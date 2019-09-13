import Koa from 'koa';
import router from './routes';

const app = new Koa();

app.use(router.routes());

const users = [
  {
    id: 1,
    name: 'Danilo Miranda',
    email: 'me@danmiranda.io'
  },
  {
    id: 2,
    name: 'Roberta Thaynara Prates Rangel',
    email: 'roberta08@gmail.com'
  }
]

let msg: number;
msg = 1332;

app.listen(3333);