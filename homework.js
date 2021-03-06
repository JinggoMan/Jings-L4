//In these first 6 questions, replace `null` with the answer.

//Create a string variable. It can contain anything
const newString = 'Jings' ;

//Create a number variable. It an be any number
const newNum = 9 ;

//Create a boolean variable.
const newBool = true ;

//Solve the following math problem.
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will complete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names.

function returnString(str) {
  return str
}

function add(x, y) { 
  const sum = x + y; 
  return sum; 
}

function subtract(x, y) {
  const subtract = x - y; 
  return subtract;
}

function multiply(x, y) {
  const multiply = x * y; 
  return multiply;
}

function divide(x, y) {
  const quotient = x / y; 
  return quotient;
}

function areEqual(x, y) {
  if (x === y) {
    return true; } 
    return false;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) { 
    return true; } 
    return false;
}

function lessThanNinety(num) { 
  if (num < 90) { 
    return true;} 
    return false;
}

function greaterThanFifty(num) {
  if (num > 50) { 
    return true;} 
    return false; 
}

function getRemainder(x, y) {
  const modulo = x % y; 
  return modulo;
}

function isEven(num) {
  if (num % 2 === 0) { 
    return true;} 
    return false; 
}

function isOdd(num) {
  if (num % 2 === 1) { 
    return true;} 
    return false;
}

function square(num) {
  return num ** 2;
}

function cube(num) { 
  return num * num * num;
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  return Math.round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
// The next two questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  return length * width;
}

function getTriangleArea(base, height) {
  return 1/2 * base * height;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
