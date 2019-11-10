// Stampit creates composable factory functions.
// see https://stampit.js.org/
const stampit = require("stampit");

// Character factory ... base type
const character = stampit().props({
  name: "anonymous",
  lifePoint: 100,
  x: 0,
  y: 0
});

// const c = character();
// c.name = "John";
// c.lifePoint = 200;
// console.log(c);

const mover = stampit().methods({
  move(xIncr, yIncr) {
    this.x += xIncr;
    this.y += yIncr;
    console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
  }
});

const slasher = stampit().methods({
  slash(direction) {
    console.log(`${this.name} slashed to the ${direction}`);
  }
});

const shooter = stampit()
  .props({
    bullets: 6
  })
  .methods({
    shoot(direction) {
      if (this.bullets > 0) {
        --this.bullets;
        console.log(`${this.name} shoot to the ${direction}`);
      }
    }
  });

// factoryを合成する
const runner = stampit(character, mover);
const samurai = stampit(character, mover, slasher);
const sniper = stampit(character, shooter);
const gunslinger = stampit(character, mover, shooter);
const westernSamurai = stampit(gunslinger, samurai);

const gojiro = westernSamurai();
gojiro.name = "Gojiro Sasaki";
gojiro.move(1, 2);
gojiro.slash("left");
gojiro.shoot("right");
