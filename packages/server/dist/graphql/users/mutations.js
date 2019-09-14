import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import User from './schema';
const Mutation = new GraphQLObjectType({
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
export default Mutation;
