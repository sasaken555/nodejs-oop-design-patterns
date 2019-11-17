"use strict";

const scientist = {
  name: "Tomas",
  surname: "Watson"
};

const uppercaseScientist = new Proxy(scientist, {
  get: (target, property) => target[property].toUpperCase()
});

console.log(uppercaseScientist.name, uppercaseScientist.surname); // TOMAS WATSON
