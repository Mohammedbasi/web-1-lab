const person = {
    firstName: 'Mohammed',
    lastName: 'Basil',
    age: 24,
    id: 120201234
};

document.getElementById('demo').innerHTML =
    person.id + ": " + person.firstName + " " + person.lastName

let text = "";

for (let x in person) {
    text += person[x] + " ";
};

document.getElementById('demo').innerHTML = text;

const arr = Object.values(person);

document.getElementById('demo').innerHTML = arr;

let result = "";

for (let [prop, value] of Object.entries(person)) {
    result += prop + ": " + value + "<br>";
}

document.getElementById('demo').innerHTML = result;

result = JSON.stringify(person);

document.getElementById('demo').innerHTML = result;