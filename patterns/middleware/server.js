const logger = require("../../utils/log-util").createLogger("server");

const zmq = require("zeromq/v5-compat");
const socket = zmq.socket("pull");
const ZmqMiddlewareManager = require("./zmqMiddlewareManager");
const jsonMiddleware = require("./jsonMiddleware").json();

const PORT = process.env.PORT || 5000;
socket.connect(`tcp://127.0.0.1:${PORT}`);
logger.info(`Worker connected to port ${PORT}`);

const zmqm = new ZmqMiddlewareManager(socket);
zmqm.use(jsonMiddleware);

zmqm.use({
  inbound: (message, next) => {
    logger.info("received message" + message);
    next();
  }
});
