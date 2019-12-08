"use strict";
const lastCall = new Map();

module.exports = async (ctx, next) => {
  // inbound
  const now = new Date();
  if (
    lastCall.has(ctx.ip) &&
    now.getTime() - lastCall.get(ctx.ip).getTime() < 1000
  ) {
    return (ctx.status = 429);
  }

  next();

  // outbound
  lastCall.set(ctx.ip, now);
  ctx.set("X-RateLimit-Reset", now.getTime() + 1000);
};
