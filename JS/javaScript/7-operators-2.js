let x = 5;

let y = x == "5";
console.log(y);

let y1 = x === "5";
console.log(y1);

let y2 = x != 8;
console.log(y2);

let y3 = x !== 8;
console.log(y3);

let y4 = x !== "5";
console.log(y4);

let y5 = x >= 8;
console.log(y5);

let a = 6;
let b = 3;

let c = ( a < 10 && b > 5 ) // true false
console.log(c);

let c1 = !(a == 6 || b == 5); //true false
console.log(c1);

let age = 20;
let result = (age < 18) ? 'Too young':'Old enough';
console.log(result);

// empty string -> 0
// non-numeric string converts to NAN (not a number) --> false

result = "2" == "12";
console.log(result);

// nullish (null, undefined);

let name = 'mohammed';
let text = 'missing';
result = name ?? text;
console.log(result);











