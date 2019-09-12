import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql'; // graphql server
import { buildSchema } from 'graphql';
const app = new Koa();
const MyGraphqlSchema = buildSchema(`
  type Query {
    info: String!,
    errorTest: String!,
    optionalString: String
  }
`);
const resolver = {
    Query: {
        info: () => 'Hello World',
        errorTest: () => null,
        optionalString: () => 'nothing valuable really',
    }
};
app.use(mount('/graphql', graphqlHTTP({
    schema: MyGraphqlSchema,
    graphiql: true,
    rootValue: resolver.Query,
})));
let msg;
msg = 1332;
// useless test
app.use(mount('/hello', (ctx) => ctx.body = msg));
app.listen(3333);
