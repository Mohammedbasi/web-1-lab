
// for(exp1; exp2; exp3;){

//     // block of code
// }

let text = '';

for (let i = 0; i < 5; i++) {

    text += "The number is " + i + "<br>";
}

const cars = ['Car1', 'Car2', 'Car3', ' Car4', 'Car5'];


// let i = 2;
let len = cars.length;
let result = '';

for (; i < len;) {
    result += cars[i] + "<br>";
    i++
}

// for(j = 0, len = cars.length, text1 = ""; i < len; i++){

// }

var i = 5;

for (var i = 0; i < 10; i++) {
    // some code
}

// here i = 10

// let i = 5;

for (let i = 0; i < 10; i++) {
    // some code
}

// here i = 5;

document.getElementById('demo').innerHTML = result;

const person = { fname: 'Mohammed', lname: 'Basil', age: 24 }

let text5 = "";
for (let k in person) {
    text5 += person[k] + ' ';
}

document.getElementById('demo').innerHTML = text5;

const numbers = [45, 4, 9, 16, 25];

let text6 = "";

// for (let x in numbers) {
//     text6 += numbers[x] + " ";
// }

numbers.forEach(myFunc)

function myFunc(value) {
    text6 += value + " ";
}

document.getElementById('demo').innerHTML = text6;

let text7 = "";

for (let x of cars) {
    text7 += x + " ";
}
document.getElementById('demo').innerHTML = text7;

let language = "JavaScript";

let text8 = "";

for (let x of language){
    text8 += x;
}

document.getElementById('demo').innerHTML = text8;
