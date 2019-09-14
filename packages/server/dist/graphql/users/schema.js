import { GraphQLObjectType, GraphQLString } from "graphql";
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
export default User;
