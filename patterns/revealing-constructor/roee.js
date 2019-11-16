const EventEmitter = require("events");

module.exports = class Roee extends EventEmitter {
  /**
   * イベントを出力する関数を受け取るコンストラクタ
   * @param {Function} executor
   */
  constructor(executor) {
    super();
    const emit = this.emit.bind(this);
    this.emit = undefined;
    executor(emit);
  }
};
