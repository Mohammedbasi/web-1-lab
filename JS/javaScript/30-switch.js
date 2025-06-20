
let day = '';

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        console.log(day);
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
}
console.log(day);

switch (new Date().getDay()) {
    case 6:
        day = 'Satruday';
        break;
    case 0:
        day = 'Sunday';
        break;
    default:
        day = 'anyday';
        break;
}

switch (new Date().getDay()) {
    case 4:
    case 5:
        day = 'Soon it is weekend';
        break;
    case 0:
    case 6:
        day = 'It is weekend';
        break;
    default:
        day = 'anyday';
}

let x = "10";
switch (x) { // === 
    case 9:

    case 10:

}
console.log(day);
console.log();
