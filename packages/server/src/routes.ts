import Router from 'koa-router';
import graphqlHTTP  from 'koa-graphql';

import { Schema } from './graphql';

import { prisma } from './prisma/generated/prisma-client';

const router = new Router();  

router.all('/graphiql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
  context: { prisma },
}))

export default router;