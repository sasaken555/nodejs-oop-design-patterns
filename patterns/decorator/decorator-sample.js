"use strict";

function decorate(component) {
  // New method
  component.greetings = () => "Hi!";

  return component;
}

const getGreeter = () => {
  return {
    hello: name => `Hello, ${name}.`
  };
};

const rawGreeter = getGreeter();
console.log(rawGreeter.hello("Kelly")); // Hello, Kelly.
// console.log(rawGreeter.hello("Kelly")); <-- Not implemented

const decoratedGreeter = decorate(getGreeter());
console.log(decoratedGreeter.hello("Bob")); // call base method
console.log(decoratedGreeter.greetings()); // Hi!
