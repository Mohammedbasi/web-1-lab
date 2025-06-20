const PI = 3.14;
// PI = 3.15;
// PI = PI + 10;

// console.log(PI);

const age = 50;

// const name;
// name = 'mohammed';

// const :
/**
 * the value should not be changed 
 * declare:
 * 1- new array
 * 2- new object
 * 3- new function
 * 4- new regExp
 */

// constant array
const cars = ['Saab', 'Volvo', 'BMW'];

cars[0] = 'Toyota';
cars.push("Audi");

// cars = ['1', '2', '3']; // not allowed


// constant object

const car = { type: 'fiat', model: "500", color: 'white' };
car.color = 'red';

car.owner = 'mohammed';

console.log(car);

car = { type: 'volvo', model: 'ex60', color: 'red' } // not allowed

const x = 10;
// x here is 10
{
    const x = 20;
    // here x is 20
}
// x here is 10

var x1 = 2; // allowd
const x1 = 2; // not allowd

{
    let x1 = 2; // allowd
    const x1 = 2; // not allowd
}

{
    const x1 = 2; // allowd
    const x1 = 3; // not allowd
}

const x3 = 2;

{
    const x3 = 3;
}

{
    const x3 = 4;
}

// carName = 'volvo';
// var carName;

alert(carName);
const carName = 'volvo';






