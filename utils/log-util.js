"use strict";

const log4js = require("log4js");
const LOG_LEVEL = process.env.LOG_LEVEL || "debug";

module.exports.createLogger = name => {
  const logger = log4js.getLogger(name);
  logger.level = LOG_LEVEL;
  return logger;
};
