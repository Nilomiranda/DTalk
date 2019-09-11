const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const app = new Koa();
const graphql = require('graphql');

const MyGraphqlSchema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'FirstQuery',
    fields: {
      info: {
        type: graphql.GraphQLString,
        resolve() {
          return 'hello graphql'
        }
      }
    }
  })
})

app.use(mount('/graphql', graphqlHTTP({
  schema: MyGraphqlSchema,
  graphiql: true,
})));

app.listen(3333);