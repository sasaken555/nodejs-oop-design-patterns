"use strict";
const Koa = require("koa");
const app = new Koa();
const rateLimitMiddleware = require("./rateLimit");

// middlewareにgenerator関数を使うのはKoa v3で非推奨になった。
// generatorに代わってasync関数を呼び出す。
app.use(rateLimitMiddleware);
app.use(async ctx => {
  ctx.body = { now: new Date() };
});

app.listen(3000);
