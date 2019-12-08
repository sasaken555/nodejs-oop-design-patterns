const logger = require("../../../utils/log-util").createLogger("client");
const zmq = require("zeromq/v5-compat");
const socket = zmq.socket("push");
const ZmqMiddlewareManager = require("./zmqMiddlewareManager");
const jsonMiddleware = require("./jsonMiddleware").json();

const PORT = process.env.PORT || 5000;
socket.bind(`tcp://127.0.0.1:${PORT}`);
logger.info(`Producer connected to port ${PORT}`);

const zmqm = new ZmqMiddlewareManager(socket);
zmqm.use(jsonMiddleware);

setInterval(() => {
  logger.info("send message");
  zmqm.send({ action: "hoge", echo: "it works" });
}, 1000);
