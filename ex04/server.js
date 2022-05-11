const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const carts = new Map();

router.get("/carts/:username/items", ctx => {
    const cart = carts.get(ctx.params.username);
    if (cart) {
        ctx.body = cart;
    } else {
        ctx.status = 404;
    }
    
    // console.log(`get${  ctx.status}`);
});

router.post("/carts/:username/items/:item", ctx => {
    const { username, item } = ctx.params;
    const newItems = (carts.get(username) || []).concat(item);
    carts.set(username, newItems);
    ctx.body = newItems;
    
    // console.log(`post${  ctx.body}`);
});

app.use(router.routes());

module.exports = app.listen(3000);