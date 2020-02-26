/**
 * Example using classes
 */
class Programmer {
  constructor(name) {
      this.name = name;
  }
  code() {
      console.log(`${this.name} is coding...`);
  }    
}

class Frontend extends Programmer {
  angular() {
      console.log(`${this.name} is creating angular app...`);
  }
}

class Backend extends Programmer {
  nodejs() {
      console.log(`${this.name} is programming on Node JS...`);
  }
}

class Fullstack extends Programmer {
  angular() {
      console.log(`${this.name} is creating angular app...`);
  }

  nodejs() {
      console.log(`${this.name} is programming on Node JS...`);
  }
// Here is a clear example of duplication of two methods
}

let frontend = new Frontend('Mike');
let backend = new Backend('John');
let fullstack= new Backend('Peter');

/**
 * Composition pattern
 */
function createProgrammer(name) {
  const programmer = {name: name};
  return {
      ...programmer,
      ...canCode(programmer)
  }; 
}

function canCode({ name }) {
  return {
      code: () => console.log(`${name} is coding...`)
  };
}

function canAngular({ name }) {
  return {
      angular: () => console.log(`${this.name} is creating angular app...`)
  };
}

function canNodejs({ name }) {
  return {
      nodejs: () => console.log(`${this.name} is programming on Node JS...`)
  };
}

function createFrontend(name) {
  const programmer = createProgrammer(name);
  return {
      ...programmer,
      ...canAngular(programmer)
  };
}

function createBackend(name) {
  const programmer = createProgrammer(name);
  return {
      ...programmer,
      ...canNodejs(programmer)
  };
}

function createFulstack(name) {
  const programmer = createProgrammer(name);
  return {
      ...programmer,
      ...canNodejs(programmer),
      ...canAngular(programmer)
  };
}

programmer = createProgrammer('Mike');
frontend= createFrontend('John');
backend = createBackend('Peter');
fullstack= createBackend('Sally');