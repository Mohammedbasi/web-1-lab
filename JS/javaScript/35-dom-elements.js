const pElement = document.getElementById('intro');
const mainDiv = document.getElementById('main');
const allP = mainDiv.getElementsByTagName('p');

const allIntro = document.getElementsByClassName('intro');

const selectorP = document.querySelectorAll('p.intro');

const form1 = document.forms["form1"];

let text = "";

for (let i = 0; i < form1.length; i++) {
    text += form1.elements[i].value + "<br>"
}

document.getElementById('intro').innerHTML = text;

document.getElementById('time').innerHTML = "Date : " + Date();