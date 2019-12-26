var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLID, } from 'graphql';
import isUserLogged from '../../../middlewares/auth';
import UserSchema from '../../users/schema';
function createPost(root, args, context, info) {
    return __awaiter(this, void 0, void 0, function* () {
        const { prisma } = context;
        isUserLogged(context);
        const { userId } = context.prisma;
        const { content } = args;
        const author = yield prisma.user({ id: userId });
        const newPost = yield prisma.createTextPost({
            content,
            postedBy: { connect: { id: author.id } },
        });
        // const postAuthorName = await prisma
        //   .textPost({ id: newPost.id })
        //   .postedBy()
        //   .name();
        // const postAuthorID = await prisma
        //   .textPost({ id: newPost.id })
        //   .postedBy()
        //   .id();
        // Object.assign(newPost, {
        //   postedBy: { name: postAuthorName, id: postAuthorID },
        // });
        console.log('TCL: createPost -> newPost', newPost);
        return newPost;
    });
}
const TextPostResponse = new GraphQLObjectType({
    name: 'post',
    fields: {
        edge: {
            type: new GraphQLObjectType({
                name: 'postedge',
                fields: {
                    node: {
                        type: new GraphQLObjectType({
                            name: 'postnode',
                            fields: {
                                id: {
                                    type: GraphQLID,
                                    resolve(parent) {
                                        return parent.id;
                                    },
                                },
                                content: {
                                    type: GraphQLString,
                                    resolve(parent) {
                                        return parent.content;
                                    },
                                },
                                postedBy: {
                                    type: UserSchema,
                                    resolve(parent, args, context) {
                                        return context.prisma
                                            .textPost({ id: parent.id })
                                            .postedBy();
                                    },
                                },
                            },
                        }),
                        resolve(parent) {
                            return parent;
                        },
                    },
                },
            }),
            resolve(parent) {
                return parent;
            },
        },
    },
});
export const postText = () => {
    return {
        type: TextPostResponse,
        args: {
            content: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: createPost,
    };
};
