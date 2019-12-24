var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLList, } from 'graphql';
import User from '../../users/schema';
import isUserLogged from '../../../middlewares/auth';
const hasNextPage = () => {
    return;
};
const countPosts = (root, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const postsCount = yield context.prisma
        .textPostsConnection()
        .aggregate()
        .count();
    console.log('TCL: countPosts -> postsCount', postsCount);
    return postsCount;
});
const TextPost = new GraphQLObjectType({
    name: 'TextPost',
    fields: {
        edges: {
            type: GraphQLList(new GraphQLObjectType({
                name: 'edges',
                fields: {
                    node: {
                        type: new GraphQLObjectType({
                            name: 'node',
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
                                    resolve(parent, args, context) {
                                        console.log('TCL: resolve -> args', args.id);
                                        isUserLogged(context);
                                        return context.prisma
                                            .textPost({ id: parent.id })
                                            .postedBy();
                                    },
                                },
                                content: {
                                    type: GraphQLNonNull(GraphQLString),
                                    resolve(parent, args, context) {
                                        isUserLogged(context);
                                        return parent.content;
                                    },
                                },
                                createdAt: {
                                    type: GraphQLString,
                                    resolve(parent, args, context) {
                                        return parent.createdAt;
                                    },
                                },
                            },
                        }),
                        resolve(parent, args, context) {
                            return __awaiter(this, void 0, void 0, function* () {
                                return parent;
                            });
                        },
                    },
                    cursor: {
                        type: GraphQLString,
                        resolve(parent) {
                            return parent.id;
                        },
                    },
                },
            })),
            resolve(parent, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    return parent;
                });
            },
        },
        totalCount: {
            type: GraphQLInt,
            resolve: countPosts,
        },
    },
});
export default TextPost;
