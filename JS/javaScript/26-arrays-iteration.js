const numbers = [45, 4, 9, 16, 25];
const numbers2 = numbers.map(myFunction1)
const over18 = numbers.filter(myFunction2)
let sum = numbers.reduce(myFunction3, 100)
let allOver18 = numbers.every(myFunction4)
let someOver18 = numbers.some(myFunction5)

numbers.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(value);
}

function myFunction1(value, index, array) {
    return value * 2;
}

function myFunction2(value, index, array) {
    return value > 18;
}

function myFunction3(total, value, index, array) {
    return total + value;
}

function myFunction4(value, index, array) {
    return value > 18;
}

function myFunction5(value, index, array) {
    return value > 18;
}
console.log(numbers2);
console.log(over18);
console.log(sum);
console.log(allOver18);
console.log(someOver18);









