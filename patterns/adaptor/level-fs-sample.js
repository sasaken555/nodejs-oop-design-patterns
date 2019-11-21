"use strict";
// Use File System API
// const fs = require("fs");
// fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) console.log(err);
// });

const levelup = require("level");
const fsAdaptor = require("./level-fs-adaptor");
const db = levelup("./fsDB", { valueEncoding: "binary" });
const fs = fsAdaptor(db);
fs.readFile("test.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("data", data);
});
