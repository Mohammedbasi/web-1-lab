document.getElementById('btn').addEventListener('click', myFunc);
document.getElementById('btn').addEventListener('click', mySecondFunc);
document.getElementById('btn').addEventListener('mouseover', mouseOver, true);


document.getElementById('btn').removeEventListener('click', mySecondFunc);
function myFunc() {
    alert('Hello Gaza!')
}

function mySecondFunc() {
    alert('2');
}

function mouseOver() {
    document.getElementById('btn').innerHTML = 'Hello';
}

