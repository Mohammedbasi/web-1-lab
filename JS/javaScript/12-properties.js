const person = {
    firstName: 'Mohammed',
    lastName: 'Basil',
    age: 24
}

person.nationality = "English";

let x = 'firstName';
let y = 'lastName';
console.log(person[x] + " " + person[y]);
console.log(person.nationality);

delete person['age'];

console.log(person.age);

const myObj = {
    name: 'Mohammed',
    age: 24,
    myCars: {
        car1: 'Ford',
        car2: 'BMW',
        car3: 'Fiat'
    }
}

console.log(myObj['myCars']['car3']);

