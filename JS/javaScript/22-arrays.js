let car1 = 'BMW';
let car2 = "VOlvo";
let car3 = "Saab";

const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

const names = [];

names[0] = 'Mohammed';
names[1] = 'Ahmed';
names[2] = 'Sami';
names[3] = 50;

let name1 = names[1];
console.log(name1);

names[2] = 'Khaled';
console.log(names[2]);

document.getElementById('demo').innerText = names.toString();
console.log(typeof names);

const myArray = [];
myArray[0] = Date.now;
myArray[1] = () => { return 'hello'; };
myArray[2] = cars;

console.log(myArray.length);

console.log(names[names.length - 1]);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const fruits = ["Banana", "orange", "Apple"];
fruits.push("Lemon");
console.log(fruits[fruits.length - 1]);

console.log(Array.isArray(fruits));
console.log(cars instanceof Array);

const myObj = {
    name: "Mohammed",
    age: 24,
    cars: [
        { name: "Ford", models: ["mod1", "mod2", "mod3"] },
        { name: "Ford", models: ["mod1", "mod2", "mod3"] },
        { name: "Ford", models: ["mod1", "mod2", "mod3"] },
    ]
};

console.log(fruits.length);
// fruits.length = 2;
console.log(fruits);

console.log(fruits.toString());
console.log(fruits.at(2));
console.log(fruits.join(" * "));
console.log("**********************************************");
console.log(fruits.join(" - "));
let removed = fruits.pop();
console.log(removed);
console.log(fruits.join(" - "));

let newLen = fruits.push('Kiwi');
console.log(newLen);

console.log(fruits.join(" - "));
console.log("**********************************************");
console.log(fruits.join(" # "));
fruits.shift();
console.log(fruits.join(" # "));
fruits.unshift('Lemon')
console.log(fruits.join(" - "));

const num1 = [1,2];
const num2 = [3,4,5,6];

const numbers = num1.concat(num2);
console.log(numbers.join("  "));

let fruits1 = ["Banana", "Orange", "Apple","Mango"];
fruits1.splice(2,0,"Lemon","Kiwi");

console.log(fruits1);

const fruits2 = fruits1.slice(3);
console.log(fruits2);

















