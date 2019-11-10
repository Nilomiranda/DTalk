import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, } from 'graphql';
import User from '../../users/schema';
import isUserLogged from '../../../middlewares/auth';
const TextPost = new GraphQLObjectType({
    name: 'TextPost',
    fields: {
        id: {
            type: GraphQLID,
            resolve(parent, args, context) {
                isUserLogged(context);
                return parent.id;
            },
        },
        postedBy: {
            type: User,
            // args: { id: { type: GraphQLString } },
            resolve(parent, args, context) {
                console.log('TCL: resolve -> args', args.id);
                isUserLogged(context);
                return context.prisma.textPost({ id: parent.id }).postedBy();
            },
        },
        content: {
            type: GraphQLNonNull(GraphQLString),
            resolve(parent, args, context) {
                isUserLogged(context);
                return parent.content;
            },
        },
    },
});
export default TextPost;
