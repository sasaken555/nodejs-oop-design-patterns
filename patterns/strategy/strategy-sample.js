"use strict";
const yaml = require("js-yaml");

module.exports.json = {
  deserialize: data => JSON.parse(data),
  serialize: data => JSON.stringify(data, null, 2)
};

module.exports.yaml = {
  deserialize: data => yaml.safeLoad(data),
  serialize: data => yaml.safeDump(data, { indent: 2 })
};
