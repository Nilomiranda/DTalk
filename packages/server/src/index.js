const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql'); // graphql server
const app = new Koa();
const graphql = require('graphql');

const MyGraphqlSchema = graphql.buildSchema(`
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
}

app.use(mount('/graphql', graphqlHTTP({
  schema: MyGraphqlSchema,
  graphiql: true,
  rootValue: resolver.Query,
})));

// useless test
app.use(mount('/hello', (ctx) => ctx.body = 'Hi my friend'));

app.listen(3333);