const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World!'
})

app.listen(3333, () => {
  console.log('Koa server running');
})