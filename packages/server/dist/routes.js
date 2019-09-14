import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import { Schema } from './schemas';
const router = new Router();
router.all('/graphiql', graphqlHTTP({
    schema: Schema,
    graphiql: true,
}));
export default router;
