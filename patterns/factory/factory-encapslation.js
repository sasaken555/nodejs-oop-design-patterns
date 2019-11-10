/**
 * person factory
 * @param {string} name
 */
function createPerson(name) {
  const privateProperties = {};
  const person = {
    setName: name => {
      if (!name) throw new Error("name must be provided");
      privateProperties.name = name;
    },
    getName: () => {
      return privateProperties.name;
    }
  };

  person.setName(name);
  return person;
}

const someone = createPerson("alice");
console.log(someone.getName());
someone.setName("beth");
console.log(someone.getName());

// クロージャで公開されているのはpersonのみなので、privatePropertiesは非公開
// console.log(someone.privateProperties);
