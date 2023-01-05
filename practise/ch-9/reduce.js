// do sum of array element with reduce function.
const arr = [10, 20, 30, 40, 50, 60];
const sum = arr.reduce(function(prev, current) {
    return prev + current;
})

console.log(sum);

// print maximum number form an array.
const max = arr.reduce(function (prev, current) {
    return Math.max(prev, current);
})

console.log(max);

// print minimum number form an array.
const min = arr.reduce(function (prev, current) {
    return Math.min(prev, current);
});

console.log(min);