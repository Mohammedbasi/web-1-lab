const para = document.createElement('p');
const textNode = document.createTextNode('This is new');
para.appendChild(textNode);

const element = document.getElementById('div1');
const child = document.getElementById('p1');
element.insertBefore(para, child);

// element.appendChild(para);

// const removed = document.getElementById('p2');
// removed.remove();

const parent = document.getElementById('div1');
const child1 = document.getElementById('p2');
parent.removeChild(child1);


const para1 = document.createElement('p');
const textNode1 = document.createTextNode('This is new p 1');
para1.appendChild(textNode1);

const parent1 = document.getElementById('div1');
const child2 = document.getElementById('p1');
parent1.replaceChild(para1, child2)

