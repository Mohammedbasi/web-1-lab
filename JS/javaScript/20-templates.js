let text = `Hello'
"Gaza!"`;
console.log(text);

// ${}

let firstName = 'Mohammed';
let lastName = 'Basil';

let result = `Welcome ${firstName}, ${lastName}`;
console.log(result);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

let header = "Template Strings";
let tags = ["template strings", "JavaScript", "ES6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;



