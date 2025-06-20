const person = {
    firstName: 'Mohammed',
    lastName: 'Basil',
    age: 24,
    id: 120201234,
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
};

console.log((person.fullName()).toUpperCase());

person.name = function () {
    return this.firstName + " " + this.lastName + " " + this.id
}

console.log(person.name());

