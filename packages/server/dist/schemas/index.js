import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, } from 'graphql';
const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString,
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
        createdAt: {
            type: GraphQLString,
            resolve(parent) {
                return parent.createdAt;
            }
        }
    }
});
const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'First mutation example',
    fields: {
        createUser: {
            type: User,
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                email: {
                    type: new GraphQLNonNull(GraphQLString)
                },
            },
            resolve: (root, args, context) => {
                return context.prisma.createUser(args);
            }
        }
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
                resolve(root, args, context, info) {
                    return context.prisma.users();
                }
            },
        }
    }),
    mutation: mutationType
});
