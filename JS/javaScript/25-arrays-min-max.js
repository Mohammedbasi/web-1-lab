const points = [40, 100, 1, 5, 701, 25, 10];

function minArray(arr) {
    let len = arr.length;
    let min = Infinity;

    while (len--) { // 0
        if (arr[len] < min) { // 0
            min = arr[len]  // 1
        }
    }

    return min;
}

function maxArray(arr) {
    let len = arr.length;
    let max = -Infinity;

    while (len--) { // 2
        if (arr[len] > max) { // 1
            max = arr[len] // 100
        }
    }

    return max;
}

console.log(minArray(points));
console.log(maxArray(points));
