var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from './schema';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import bcrypt from 'bcrypt';
function generateHashedPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt.hash(password, 8);
        return hashedPassword;
    });
}
function isEmailInUse(args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        /** checks if email is already in use */
        const data = yield context.prisma
            .users({ where: { email: args.email } })
            .catch(err => console.log(err));
        const foundEmail = data.find(user => user.email === args.email);
        if (foundEmail) {
            return true;
        }
        return false;
    });
}
function isUsernameAvailable(args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield context.prisma
            .users({ where: { name: args.name } })
            .catch(err => console.log(err));
        const foundUser = data.find(user => user.name === args.name);
        if (foundUser) {
            return true;
        }
        return false;
    });
}
export const createUser = () => {
    return {
        type: User,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString),
            },
            email: {
                type: new GraphQLNonNull(GraphQLString),
            },
            password: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: (root, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const hashPass = yield generateHashedPassword(args.password);
            if (yield isEmailInUse(args, context)) {
                throw new Error('Email already in use');
            }
            if (yield isUsernameAvailable(args, context)) {
                throw new Error('This username is not available anymore 😢. Please use another one');
            }
            return context.prisma.createUser(Object.assign(Object.assign({}, args), { password: hashPass }));
        }),
    };
};
