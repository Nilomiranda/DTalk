import { GraphQLSchema, GraphQLObjectType, GraphQLString, } from 'graphql';
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            name: {
                type: GraphQLString,
                resolve() {
                    return 'Danilo';
                }
            },
        }
    })
});
export default schema;
