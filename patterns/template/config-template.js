"use strict";
const fs = require("fs");
const objectPath = require("object-path");

class ConfigTemplate {
  constructor() {
    this.data = {};
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
    this.data = this._deserialize(fs.readFileSync(file, "utf-8"));
  }

  save(file) {
    console.log(`Serializing to ${file}`);
    fs.writeFileSync(file, this._serialize(this.data));
  }

  _deserialize() {
    throw new Error("_deserialize() not implemented");
  }

  _serialize() {
    throw new Error("_serialize() not implemented");
  }
}

module.exports = ConfigTemplate;
