const profiler = require("./profiler-factory");

function getRandomArray(len) {
  const p = profiler(`getRandomArray(${len})`);
  p.start();
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.random());
  }
  p.end();
}

getRandomArray(1e6);
console.log("Done!");
