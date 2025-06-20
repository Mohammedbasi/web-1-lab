
// const myTitle = document.getElementById('title').innerHTML;
// const myTitle = document.getElementById('title').firstChild.nodeValue;
const myTitle = document.getElementById('title').childNodes[0].nodeValue;

console.log(myTitle);

// document.getElementById('demo').innerHTML = document.body.innerHTML;
// document.getElementById('demo').innerHTML = document.documentElement.innerHTML;

document.getElementById('id02').innerHTML = document.getElementById('id01').nextSibling;