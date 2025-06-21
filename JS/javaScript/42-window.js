const element1 = window.document.getElementById('demo');
const element2 = document.getElementById('demo');

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// window.open();
// window.close();
// window.moveTo();
// window.resizeTo();

// console.log(screen);
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
// console.log(screen.colorDepth);
// console.log(screen.pixelDepth);

// console.log(location);
// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.protocol);
// console.log(location.port);

// function newDoc(){
//     window.location.assign("31-dom-collection");
// }

// console.log(history);

// function goBack(){
//     history.back();
// }

// function goForward(){
//     history.forward();
// }

// console.log(navigator.cookieEnabled);
// console.log(navigator.language);
// console.log(navigator.onLine);
// console.log(navigator.userAgent);


// alert('Say Hello!!');

// let text = '';
// if(confirm('Press a button!')){
//     text = "You pressed OK!"
// }else{
//     text = "You pressed Cancel";
// }

// console.log(text);

// let name = prompt("Please\nenter your name", "John Doe");

// let text;

// if(name == null || name == ""){
//     text = "User cancelled the prompt."
// }else{
//     text = "Hello " + name + "! How are you today?"
// }

// console.log(text);

// function myFunc() {
//     alert('Hello setTimeout!');
// }

// let stopInt = setInterval(myTimer, 1000);

// function myTimer() {
//     const d = new Date();
//     document.getElementById('demo').innerHTML = d.toLocaleTimeString();
// }

// name-value pairs

// username = mohammed

// document.cookie = "username=ahmed; expires=Thu, 18 Dec 2025 12:00:00UTC; path=/";
// document.cookie = "password=123456; expires=Thu, 18 Dec 2025 12:00:00UTC; path=/";

// let cookie = document.cookie;
// console.log(cookie);

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        ['username=mohammed']
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return "";
}

function checkCookie() {
    let username = getCookie('username');
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt('Please enter your name:', "");
        if (username != "" && username != null) {
            setCookie('username', username, 365);
        }
    }
}

checkCookie();
























