import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import User from '../../users/schema';
const TextPost = new GraphQLObjectType({
    name: 'TextPost',
    fields: {
        user: {
            type: GraphQLNonNull(User),
            resolve(parent) {
                return parent.user;
            },
        },
        content: {
            type: GraphQLNonNull(GraphQLString),
            resolve(parent) {
                return parent.content;
            },
        },
    },
});
export default TextPost;
