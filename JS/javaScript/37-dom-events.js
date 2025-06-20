

function changeText(id) {
    id.innerHTML = 'Front End';
}

document.getElementById('btn').onclick = displayDate;

function displayDate() {
    document.getElementById('btn').innerHTML = Date();
}

function upperCase() {
    document.getElementById('fname').value = (document.getElementById('fname').value).toUpperCase();
}

function change1(){
    document.getElementById('test').innerHTML = 'Mohammed Basil';
}

function change2(){
    document.getElementById('test').innerHTML = 'Mohammed Basil Zuqlam';
}

function change3(){
    document.getElementById('test').innerHTML = 'Mohammed Basil Zuqlam!!!';
}
