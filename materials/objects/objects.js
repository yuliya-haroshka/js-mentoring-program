const options = {
  width: 1024,
  height: 1024,
  name: "test"
};

/**
 * getting the property
 */
console.log(options.name); // test
console.log(options['name']); // test

/**
 * add a property
 */
options.myProperty = 'testProperty';

/**
 * Add another object to an existing object
 */
options.colors = {
    border: "black",
    background: "red"
}; 
console.log(options);

/**
 * delete the listed property from the object
 */
delete options.myProperty; 
console.log(options);

/**
 * for..in
 */
for (let key in options) {
  console.log(`Property ${key} has a value ${options[key]}`); 
}

/**
 * hasOwnProperty()
 */
console.log(options.hasOwnProperty('width')); // true
console.log(options.hasOwnProperty('test')); // false

/**
 * Object.values()
 */
console.log(Object.values(options));

/**
 * Object.create()
 */
const optionsSecond = options;
optionsSecond.width = 1200;
console.log(optionsSecond.width); // 1200
console.log(options.width); // 1200​

const optionsThird = Object.create(options);
optionsThird.width = 1300;
console.log(optionsThird.width);
console.log(options.width);

/**
 * Object.assign()
 */
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }