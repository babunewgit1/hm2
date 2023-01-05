const arr = [1,2,3,4,5,6,7,8,9];
const resutl = arr.find(function (num) {
    return num==9;
})
console.log(resutl);

// make find manuall.

function find(arr, cb) {
    for(let i = 0; i<arr.length; i++) {
        if(cb(arr[i])) {
            return arr[i];
        }
    }
}

const resultTwo = find(arr, function(value) {
    return value == 4;
})

console.log(resultTwo);