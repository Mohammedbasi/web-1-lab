// Variables: containers for storing data

// automatic declaration: variable declared when used to the first time
x = 10;
y = 20;
z = x + y;
console.log(z);

// var keyword
// var a = 5;
// var b = 6;
// var c = a + b;
// console.log(c);

// let keyword
// let a = 5;
// let b = 6;
// let c = a + b;
// console.log(c);

// const keyword
const a = 5;
const b = 6;
const c = a + b;
console.log(c);

// mixed example
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

var let = 5;

// when to use var, let or const?
/**
 * always declare variables
 * const: if value should not be changed
 * const: if type should not be changed (array , object)
 * let: if i can not use const
 * var: if i must support old browsers
 */

const firstName = "Mohammed";

let age = 50;
document.getElementById('demo').innerText = age;

let person = 'mohammed',
    carName = 'volovo',
    price = 20000;


var name1 = 'mohammed';
var name1;
console.log(name1);

// const name2 = 'ahmed'
// const name2;
// console.log(name2);

let x1 = 5 + 2 + 3;
console.log(x);

let x2 = "Mohammed" + " " + "Basil";
console.log(x2);

let y1 = "5" + 2 + 3;
console.log(y1);

let y2 = 2 + 3 + "5"; // 5 + "5" = 55
console.log(y2);













