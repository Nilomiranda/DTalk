var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, } from 'graphql';
// schemas
import User from './users/schema';
import TextPost from './posts/text/schema';
// mutations
import Mutation from './rootMutation';
export const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            info: {
                type: GraphQLString,
                resolve() {
                    return 'Dtalk API --version 1.0';
                },
            },
            users: {
                type: new GraphQLList(User),
                resolve(root, args, context, info) {
                    return context.prisma.users();
                },
            },
            posts: {
                type: new GraphQLList(TextPost),
                args: { postedBy: { type: GraphQLString } },
                resolve(root, args, context, info) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return context.prisma.textPosts({
                            where: { postedBy: { id: args.postedBy } },
                        });
                    });
                },
            },
        },
    }),
    mutation: Mutation,
});
