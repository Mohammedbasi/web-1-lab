let i = 0;
let text = "";
while (i < 5) {
    if (i === 2)
        continue
    
    text += "The number is " + i + "<br>";
    i++;
}

document.getElementById('demo').innerHTML = text;


// let j = 0;
// let text1 = "";
// do {
//     text1 += "The number is " + j + "<br>";
//     j++;
// } while (j < 5);

// document.getElementById('demo').innerHTML = text1;


// const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

// let k = 0;
// let text2 = "";

// // for (; cars[k];) {
// //     text2 += cars[k] + "<br>";
// //     k++;
// // }

// while (cars[k]) {
//     text2 += cars[k] + "<br>";
//     k++;
// }
// document.getElementById('demo').innerHTML = text2;
