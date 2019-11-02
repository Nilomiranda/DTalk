var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TextPost from './schema';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import isUserLogged from '../../../middlewares/auth';
function createPost(root, args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        isUserLogged(context);
        const { userId } = context.prisma;
        const { content } = args;
        const author = yield context.prisma.user({ id: userId });
        const newPost = yield context.prisma.createTextPost({
            content,
            postedBy: { connect: { id: author.id } },
        });
        return newPost;
    });
}
export const postText = () => {
    return {
        type: TextPost,
        args: {
            content: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: createPost,
    };
};
