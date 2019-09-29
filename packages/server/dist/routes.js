import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import { verify } from 'jsonwebtoken';
import auth from './config/auth';
import { Schema } from './graphql/rootSchemas';
import { prisma } from './prisma/generated/prisma-client';
const router = new Router();
router.all('/graphiql', (ctx, next) => {
    const authorization = ctx.request.get('Authorization');
    console.log(authorization.length);
    if (authorization) {
        const token = authorization
            .replace('Bearer', '')
            .replace(' ', '');
        const { id } = verify(token, auth.secret);
        Object.assign(prisma, { userId: id });
    }
    else {
        Object.assign(prisma, { userId: undefined });
    }
    return next();
}, graphqlHTTP({
    schema: Schema,
    graphiql: true,
    context: { prisma },
}));
export default router;
