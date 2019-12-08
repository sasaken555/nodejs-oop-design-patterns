"use strict";
const logger = require("../../../utils/log-util").createLogger(
  "zmqMiddlewareManager"
);

module.exports = class ZmqMiddlewareManager {
  constructor(socket) {
    this.socket = socket;
    this.inboundMiddleware = [];
    this.outboundMiddleware = [];
    socket.on("message", message => {
      this.executeMiddleware(this.inboundMiddleware, {
        data: message
      });
    });
  }

  send(data) {
    const message = { data };
    this.executeMiddleware(this.outboundMiddleware, message, () =>
      this.socket.send(message.data)
    );
  }

  use(middleware) {
    if (middleware.inbound) {
      // middleware配列の最後尾に追加
      this.inboundMiddleware.push(middleware.inbound);
    }
    if (middleware.outbound) {
      // middleware配列の先頭に追加
      this.outboundMiddleware.unshift(middleware.outbound);
    }
  }

  executeMiddleware(middleware, arg, finish) {
    function iterator(index) {
      if (index === middleware.length) {
        return finish && finish();
      }
      middleware[index].call(this, arg, err => {
        if (err) {
          return logger.error("got error: " + err.message);
        }
        iterator.call(this, ++index);
      });
    }

    iterator.call(this, 0);
  }
};
