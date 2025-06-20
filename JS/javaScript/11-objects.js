// let car = "fiat";
// let car1name = 'name1';
// let car1model = 500;

const car = { type: "fiat", model: "500", color: "white" };

const person = {
    firstName: "Mohammed",
    lastName: "Basil",
    age: 24,
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
};

const x = person;

x.age = 50;

console.log(person.age);


console.log(person.firstName);
console.log(person['lastName']);

const person1 = {};

person1.firstName = 'Mohammed';
person1.lastName = 'Basil';

const person2 = new Object();

person2.firstName = 'ahmed';
person2.lastName = 'mohammed';

const PI = 3.14;