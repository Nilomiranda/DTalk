import Router from 'koa-router';
import graphqlHTTP  from 'koa-graphql';

import schema from './schemas';

const router = new Router();

router.all('/graphiql', graphqlHTTP({
  schema,
  graphiql: true,
}))

export default router;