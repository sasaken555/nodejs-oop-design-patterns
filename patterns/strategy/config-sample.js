"use strict";
const fs = require("fs");
const objectPath = require("object-path");

class Config {
  constructor(inStrategy, outStrategy) {
    this.data = {};
    this.inStrategy = inStrategy;
    this.outStrategy = outStrategy || inStrategy;
  }

  /**
   * get value w/ path
   * @param {string} path
   */
  get(path) {
    return objectPath.get(this.data, path);
  }

  /**
   * set value w/ path
   * @param {string} path
   * @param {*} value
   */
  set(path, value) {
    return objectPath.set(this.data, path, value);
  }

  read(file) {
    console.log(`Deserializing from ${file}`);
    this.data = this.inStrategy.deserialize(fs.readFileSync(file, "utf-8"));
  }

  save(file) {
    console.log(`Serializing to ${file}`);
    fs.writeFileSync(file, this.outStrategy.serialize(this.data));
  }
}

module.exports = Config;
