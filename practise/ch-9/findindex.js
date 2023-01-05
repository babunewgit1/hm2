const arr = [1,2,3,4,5,6,7,8,9];
const result = arr.findIndex(function (value) {
    return value ===5;
})

console.log(result);

// make findIndex manually....
function index (arr, cb) {
    for(let i = 0; i<arr.length; i++ ){
        if(cb(arr[i])) {
            return i;
        }
    }
}

const resultTwo = index(arr, function (value) {
    return value === 9;
})

console.log(resultTwo);