"use strict";
const ConfigTemplate = require("./config-template");

class JsonConfig extends ConfigTemplate {
  _deserialize(data) {
    return JSON.parse(data);
  }

  _serialize(data) {
    return JSON.stringify(data, null, 2);
  }
}

module.exports = JsonConfig;
