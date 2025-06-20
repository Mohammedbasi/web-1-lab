const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

const months = ['Jan', 'Feb', 'Mar', 'Apr'];
let sorted = months.toSorted();
let reversed = months.toReversed();
console.log(months);
console.log(sorted);
console.log(reversed);


const points = [40, 100, 1, 5, 25, 10];
document.getElementById('demo').innerHTML = points;

function myFunction1() {
    points.sort();
    document.getElementById('demo').innerHTML = points;
}

function myFunction2() {
    points.sort(function (a, b) { return a - b; })
    document.getElementById('demo').innerHTML = points;
}

points.sort(function (a, b) { return a - b; })
console.log(points[0]);
console.log(points[points.length - 1]);

function myArrayMin(arr) {
    return Math.max.apply(null, arr);
}

// console.log(myArrayMin(points));


points = [40, 100, 1, 5, 25, 10];

function minArray(arr){
    let len = arr.length;
    let min = Infinity;

    while(len--){ // 0
        if(arr[len] < min){ // 0   min = 1;
            min = arr[len];
        }
    }

    return min;
}

console.log(minArray(points));













