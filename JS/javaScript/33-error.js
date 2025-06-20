

// throw "Too Big";
// throw 500;

function myFunc() {
    const message =
        document.getElementById('p1');
    message.innerHTML = "";

    let x =
        document.getElementById('demo').value;

    try {
        if (x.trim() == "") {
            throw "empty";
        }

        if (isNaN(x)) {
            throw 'Not a number';
        }

        x = Number(x);
        if (x < 5) throw 'Too low';
        if (x > 10) throw 'Too high';
    } catch (err) {
        message.innerHTML = "Input is " + err;
    }finally{
        document.getElementById('demo').value = "";
    }

}