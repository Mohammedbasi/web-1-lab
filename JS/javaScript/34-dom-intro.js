// HTML DOM -> Dociument Object Model
// constructed as a tree of objects
// standard object model and programming interface for HTML:
// 1- HTML elements -> objects
// 2- properties to all HTML elements
// 3- method to access HTML elemtns
// 4- events
// DOM: defines a standard for accessing documents:
// platform, language neutral interface

// DOM methods: action you can perform on HTML elemetns
// DOM properties: values of HTML ele, setting, change

const p = document.getElementById('demo');
p.innerHTML = "Hello Gaza!!"
p.title = 'Hello World!!!!'
p.style.color = "red";
p.setAttribute('title', 'This is p!!!!')

// document.createElement();
// document.removeChild();
// document.appendChild();
// document.replaceChild(new, old)
document.writeln('Mohammed');

p.onclick = function () {
    alert('Clicked');
}

console.log(document.baseURI);
// console.log(document.body);

// const body = document.body;
console.log(document.domain);



//**************************************************************** */

// DOM document: owner for all others objects in our web page
// and represent the web page

// document.getElementById() // find an element by element id
// document.getElementsByTagName() // find elements by tag name
const elements = document.getElementsByClassName('demo') // find elements by class name

// console.log(elements[1]);

