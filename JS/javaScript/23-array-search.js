const names = ['Mohammed', 'Ahmed', 'Sami', 'Mohammed', 'Khaled'];
let position = names.indexOf('Mohammed');
let position2 = names.lastIndexOf('Mohammed');
console.log(position);
console.log(position2);
console.log(names.includes('sami'));

const numbers = [4, 9, 16, 25, 29];

let item = numbers.findIndex(myFunction);
console.log(item);

function myFunction(value, index, array){

    return value > 18
}

const temp = [27, 28, 30, 40, 42, 35, 30];

let max = temp.findLastIndex( x => x > 40);
console.log(max);

