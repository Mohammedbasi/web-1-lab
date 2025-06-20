function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.nationality = "English";
    this.fullName = function () {
        return this.firstName + " " + this.lastName
    }
}

const myFather = new Person('Basil', 'Zuqlam', 60);
myFather.nationality = "Arabic";
myFather.eyeColor = 'green';

const mySelf = new Person('Mohammed', 'Basil', 24);
mySelf.changeName = function (name) {
    this.lastName = name;
}

Person.prototype.eyeColor = 'green';

Person.prototype.changeName = function (name) {
    this.lastName = name;
}

myFather.changeName('john');
mySelf.changeName('basil');
