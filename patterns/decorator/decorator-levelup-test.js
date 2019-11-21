"use strict";
const level = require("level");
const levelSubscribe = require("./decorator-levelup-subscriber");

const rawDb = level(__dirname + "/db", { valueEncoding: "json" });
const db = levelSubscribe(rawDb);

db.subscribe({ docType: "feed", lang: "ja" }, (key, value) =>
  console.log(value)
);

// This will be logged.
db.put("1", { docType: "feed", text: "Hello", lang: "ja" });
// This won't!
db.put("2", { docType: "unknown", lang: "ja" });
