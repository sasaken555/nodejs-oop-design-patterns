"use strict";

const greeter = {
  hello: name => console.log(`Hello, ${name}`),
  goodbye: () => console.log("Goodbye...see you again!"),
  lang: "en"
};

/**
 * 全ての関数でログ出力するGreeterを生成するファクトリ関数。
 * 関数以外のプロパティはプロキシされない。
 * @param {Object} greeter
 * @return {*}
 */
const createGreeter = greeter => {
  Object.keys(greeter).forEach(funcKey => {
    console.log(`Create proxy for ${funcKey}`);
    const funcOrigin = greeter[funcKey];

    // 関数以外の型のプロパティはプロキシしない!!
    if (typeof funcOrigin !== "function") {
      console.log("Skip to apply proxy");
      return;
    }

    greeter[funcKey] = new Proxy(funcOrigin, {
      apply(target, thisArg, argArray) {
        console.log(
          `Called ${funcKey} w/ ${argArray.length === 0 ? "Nothing" : argArray}`
        );
        funcOrigin.apply(thisArg, argArray);
      }
    });
  });
  return greeter;
};

module.exports.createGreeter = createGreeter;

if (require.main === module) {
  const patchedGreeter = createGreeter(greeter);
  console.log("---------------------------------");
  patchedGreeter.hello("Ponz-san");
  patchedGreeter.goodbye();
}
