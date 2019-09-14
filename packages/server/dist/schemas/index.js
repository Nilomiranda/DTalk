import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, } from 'graphql';
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
];
const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLInt,
            resolve(parent) {
                return parent.id;
            }
        },
        name: {
            type: GraphQLString,
            resolve(parent) {
                return parent.name;
            }
        },
        email: {
            type: GraphQLString,
            resolve(parent) {
                return parent.email;
            }
        },
    }
});
export const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            info: {
                type: GraphQLString,
                resolve() {
                    return 'Dtalk API --version 1.0';
                }
            },
            users: {
                type: new GraphQLList(User),
                resolve() {
                    return users;
                }
            },
        }
    })
});
