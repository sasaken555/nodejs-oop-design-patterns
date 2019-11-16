"use strict";
const ticker = require("./ticker");

ticker.on("tick", tickCount => console.log("tickCount:", tickCount));
// ticker.emit(); <-- EventEmitter.emitは外部に公開していないので呼び出せない
