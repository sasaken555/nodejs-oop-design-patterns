"use strict";
const path = require("path");

const createFsAdaptor = db => {
  const fs = {};

  fs.readFile = (fileName, options, callback) => {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if (typeof options === "string") {
      options = { encoding: options };
    }

    db.get(
      path.resolve(fileName),
      { valueEncoding: options.encoding },
      (err, value) => {
        if (err) {
          if (err.type === "NotFoundError") {
            err = new Error(`ENOENT, open "${fileName}"`);
            err.code = "ENOENT";
            err.errno = 34;
            err.path = fileName;
          }
          return callback && callback(err);
        }
        callback && callback(null, value);
      }
    );
  };

  return fs;
};

module.exports = createFsAdaptor;
