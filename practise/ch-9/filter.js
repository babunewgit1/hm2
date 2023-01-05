const arr = [1,2, 2,3,4,5];
const resutlOne = arr.filter(function (num) {
    return num > 2;
})

console.log(resutlOne);

// make filter with callback function.

function filter(arr, cb) {
    let newArray = []
    for(let i = 0; i<arr.length; i++) {
        if(cb(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const resultTwo = filter(arr, function (value) {
    return value == 2;
});

console.log(resultTwo);