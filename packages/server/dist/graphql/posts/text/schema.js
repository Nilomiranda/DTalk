var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLList, GraphQLBoolean, } from 'graphql';
import User from '../../users/schema';
import isUserLogged from '../../../middlewares/auth';
let totalPosts;
let textPosts = [];
let hasNextPage;
let hasPreviousPage;
let endCursor;
const findAllPosts = (root, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { prisma } = context;
    const { args: queryArgs } = context;
    const { postedBy, id: postId, after, first, last } = queryArgs;
    const posts = yield prisma.textPosts({
        where: { postedBy: { id: postedBy }, id: postId },
        after: after,
        first: first,
        last: last,
        orderBy: 'createdAt_DESC',
    });
    textPosts = posts;
    if (posts) {
        determineLastCursor();
        checkIfHasNextPage(context);
        checkIfHasPreviousPage(context);
    }
    return posts;
});
const countPosts = (context) => __awaiter(void 0, void 0, void 0, function* () {
    const { args: queryArgs } = context;
    const { postedBy, id: postId } = queryArgs;
    const postsCount = yield context.prisma
        .textPostsConnection({
        where: { postedBy: { id: postedBy }, id: postId },
    })
        .aggregate()
        .count();
    totalPosts = postsCount;
});
const checkIfHasNextPage = context => {
    const postsCount = totalPosts;
    const { args: queryArgs } = context;
    const { first: limit } = queryArgs;
    hasNextPage = postsCount > limit && endCursor !== null;
    return hasNextPage;
};
const checkIfHasPreviousPage = context => {
    const postsCount = totalPosts;
    const { args: queryArgs } = context;
    const { first: limit } = queryArgs;
    hasPreviousPage = postsCount > limit && endCursor !== null;
    return hasNextPage;
};
const determineLastCursor = () => {
    endCursor = textPosts[textPosts.length - 1]
        ? textPosts[textPosts.length - 1].id
        : null;
};
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
                    yield findAllPosts(parent, null, context);
                    return textPosts;
                });
            },
        },
        totalCount: {
            type: GraphQLInt,
            resolve(parent, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield countPosts(context);
                    return totalPosts;
                });
            },
        },
        pageInfo: {
            type: new GraphQLObjectType({
                name: 'pageInfo',
                fields: {
                    endCursor: {
                        type: GraphQLString,
                        resolve() {
                            return __awaiter(this, void 0, void 0, function* () {
                                return endCursor;
                            });
                        },
                    },
                    startCursor: {
                        type: GraphQLString,
                        resolve() {
                            return __awaiter(this, void 0, void 0, function* () {
                                return endCursor;
                            });
                        },
                    },
                    hasNextPage: {
                        type: GraphQLNonNull(GraphQLBoolean),
                        resolve(parent, args, context) {
                            return __awaiter(this, void 0, void 0, function* () {
                                return hasNextPage;
                            });
                        },
                    },
                    hasPreviousPage: {
                        type: GraphQLNonNull(GraphQLBoolean),
                        resolve(parent, args, context) {
                            return __awaiter(this, void 0, void 0, function* () {
                                return hasPreviousPage;
                            });
                        },
                    },
                },
            }),
            resolve(parent, args, context) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield findAllPosts(parent, null, context);
                    return yield parent;
                });
            },
        },
    },
});
export default TextPost;
