"use strict";
const fs = require("fs");

function createLoggingWritable(writableOrigin) {
  const proto = Object.getPrototypeOf(writableOrigin);

  function LoggingWritable(writableOrigin) {
    this.writableOrigin = writableOrigin;
  }

  LoggingWritable.prototype = Object.create(proto);

  LoggingWritable.prototype.write = function(chunk, encoding, callback) {
    if (!callback && typeof encoding === "function") {
      callback = encoding;
      encoding = undefined;
    }
    console.log("Writing ", chunk);
    return this.writableOrigin.write(chunk, encoding, function() {
      console.log("Finishing writing ", chunk);
      callback && callback();
    });
  };

  LoggingWritable.prototype.on = function() {
    return this.writableOrigin.on.apply(this.writableOrigin, arguments);
  };

  LoggingWritable.prototype.end = function() {
    return this.writableOrigin.end.apply(this.writableOrigin, arguments);
  };

  return new LoggingWritable(writableOrigin);
}

const writable = fs.createWriteStream("test.txt");
const writableProxy = createLoggingWritable(writable);
writableProxy.write("First chunk");
writableProxy.write("Second chunk");
writable.write("This is not logged...");
writableProxy.end();
