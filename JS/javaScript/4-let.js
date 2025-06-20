// global scope, function scope
// let, const --> provided block scope

{
    let x = 2;
    // access here
}

// x can not be used here
console.log(x);

// variables declared with var always have global scope

{
    var x = 2;
}

console.log(x);

var name = 'mohammed';

var name = 10;

var x1 = 10;
// x1 here is 10
{
    var x1 = 20;
    // x1 here is 20
}

console.log(x1);

let x2 = 10;
// x2 here is 10

{
    let x2 = 20;
    // x2 here is 20
}


console.log(x2);

var x3 = 2;
// x3 = 2

var x3 = 3;
// x3 = 3

var x4 = 2;
let x4 = 2;

{
    let x4 = 3; //allowed
    let x4 = 5; // not allowd
}

{
    let x4 = 5;  // allowed
    var x4 = 6; // not allowed
}

let x5 = 1;

{
    let x5 = 2;
}

{
    let x5 = 3;
}

carName = "volvo";
var carName;

age = 50;
let age = 50;
