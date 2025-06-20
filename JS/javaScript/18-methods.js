let text = 'Mohammed';
console.log(text.length);
console.log(text.charAt(text.length - 1));
console.log(text.charCodeAt(0));
console.log(text.at(0));
console.log(text.at(-1));
console.log(text[2]);

let name = 'My Name Is Mohammed';
console.log(name.slice(-3));

console.log(name.substring(3));

console.log(name.toLowerCase());

let text1 = 'Hello';
let text2 = 'Gaza';
let text3 = text1.concat(" ", text2);
console.log(text1)

console.log(text3);

let text4 = '           Mohammed  ';
console.log(text4.trimEnd());

console.log(text1.repeat(5));

text = 'This is Java and Java';

console.log(text.replace(/Java/g, "JavaScript"));

text = 'This is PHP and PHP';
console.log(text.replaceAll(/PHP/g, 'JS'));

console.log(text.split(""));













