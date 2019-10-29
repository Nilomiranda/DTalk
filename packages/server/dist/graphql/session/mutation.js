var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Session from './schema';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from '../../config/auth';
import isUserLogged from '../../middlewares/auth';
function login(root, args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { password } = args;
        const user = yield context.prisma.user({ email: args.email });
        if (!user) {
            throw new Error('User does not exist. Please check the informed email');
        }
        /** validating password */
        const isPasswordCorret = yield bcrypt.compare(password, user.password);
        if (!isPasswordCorret) {
            throw new Error('Invalid credentials. Please check it and try again');
        }
        /** generates token if all credentials are correct */
        const token = yield jwt.sign(user, auth.secret);
        return {
            token,
            user,
        };
    });
}
function test(root, args, context) {
    isUserLogged(context);
}
export const userLogin = () => {
    return {
        type: Session,
        args: {
            email: {
                type: new GraphQLNonNull(GraphQLString),
            },
            password: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: login,
    };
};
export const testSession = () => {
    return {
        type: Session,
        args: {
            text: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: test,
    };
};
