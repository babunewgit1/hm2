const arr = [1,2,3,4,5,6];
arr.forEach(function(value, index, arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
});

// do sum of array elements.

let sum = 0;
arr.forEach(function (value) {
    sum += value;
})
console.log(sum);

// make for each funciton manually.
const name = ['one', 'two', 'three', 'four', 'five'];

function myFor(nameOfArray, callback) {
    for(let i = 0; i<nameOfArray.length; i++) {
        callback(nameOfArray, i, nameOfArray[i]);
    }
}

myFor(name, function(fullarray, index, arrayElement) {
    console.log('custom full array is ['+ fullarray + ']');
    console.log(index);
    console.log(arrayElement);
})