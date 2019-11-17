"use strict";

/**
 * オブジェクトの継承を使わずにプロキシパターンを実装する。
 * サブジェクトと同一のインターフェイスを持ったプロキシを生成する。
 * ファクトリ関数で常に新しいプロキシを生成し、サブジェクトは書き換えない。
 * @param subject
 * @return {{goodbye: (function(): *), hello: (function(): string)}}
 */
function createProxy(subject) {
  return {
    hello: () => subject.hello() + " world!",
    goodbye: () => subject.goodbye.apply(subject, arguments)
  };
}

const greeter = {
  hello: () => "Hello",
  goodbye: () => console.log("Goodbye...see you again!")
};
const proxiedGreeter = createProxy(greeter);
console.log(proxiedGreeter.hello());
console.log(greeter.hello());
proxiedGreeter.goodbye();

/**
 * オブジェクト拡張(=Monkey Patching)で
 * サブジェクトと同一のインターフェイスを持ったプロキシを生成する。
 * やっていることは、サブジェクトの一部を直接書き換えである。
 * @param subject
 * @return {*}
 */
function monkeyPathProxy(subject) {
  const helloOrigin = subject.hello;
  subject.hello = () => helloOrigin.call(this) + " world...???";
  return subject;
}

const monkeyPatchedGreeter = monkeyPathProxy(greeter);
console.log(monkeyPatchedGreeter.hello());
console.log(greeter.hello()); // 元のサブジェクトが書き換えられている
