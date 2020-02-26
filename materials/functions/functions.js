/**
 * Function declaration
 */
function showMessage(text) {
  console.log(text);
}

showMessage('Hello World!!!');

//Example (let and scope)
let num = 10;

function showAnotherMessage(text) {
    let num = 1;
    console.log(num);
    console.log(text);
}

showAnotherMessage('hello!!'); 
console.log(num);

num = 1;

function showMessage(text) {
    console.log(num);
    console.log(text);
}
showMessage('hello!!');

/**
 * Example with summing
 */
function calc(a, b) {
  return (a + b);
}

console.log(calc(2,5));
console.log(calc(3,2));

function returnValue() {
  let num = 50;
  return num;
}

let anotherNum = returnValue();
console.log(anotherNum);

/**
 * Function expression
 */
const calcExpression = (a, b) => {
  return (a + b);
};

// const calc = (a, b) => a + b;

console.log(calcExpression(2,5));

/**
 * Useful functions and methods
 */
let str = 'myString';

console.log(str.length); // 8
console.log(str.toUpperCase()); // MYSTRING;
console.log(str.toLowerCase()); // mystring;

let numbr = 15.2;
console.log(Math.round(numbr)); // 15

let pix = '12px';
console.log(parseInt(pix)); // 12 