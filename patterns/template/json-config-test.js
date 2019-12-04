"use strict";
const JsonConfig = require("./json-config");
const config = new JsonConfig();

config.read("conf.json");
config.set("whitepaper", "The Node Way");
config.save("conf.mod.json");
