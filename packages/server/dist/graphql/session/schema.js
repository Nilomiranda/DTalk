import { GraphQLObjectType, GraphQLString } from 'graphql';
import User from '../users/schema';
const Session = new GraphQLObjectType({
    name: 'Schema',
    fields: {
        user: {
            type: User,
            resolve(parent) {
                console.log(parent);
                return parent.user;
            },
        },
        token: {
            type: GraphQLString,
            resolve(parent) {
                return parent.token;
            },
        },
    },
});
export default Session;
