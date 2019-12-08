const logger = require("../../../utils/log-util").createLogger("jsonMiddleware");
module.exports.json = () => {
  return {
    inbound: (message, next) => {
      logger.debug("inbound", message.data.toString());
      message.data = JSON.parse(message.data.toString());
      next();
    },
    outbound: (message, next) => {
      logger.debug("outbound", message);
      message.data = Buffer.from(JSON.stringify(message.data));
      next();
    }
  };
};
