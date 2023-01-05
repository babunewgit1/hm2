const arr = [10, 20, 30, 40, 50, 60];

//doing sum with call back function.
function myMap(arr, cb) {
    let sum = 0;
    for(let i = 0; i<arr.length; i++) {
        sum += cb(arr[i]);
    }
    
    return sum;
}

const result = myMap(arr, function(vlaue) {
    return vlaue;
})

console.log(result);


//for Each method
const name = ['babu', 'rifta', 'sinan', 'shipa']

function myFor(arr, cb) {
    for(let i = 0; i<arr.length; i++ ){
        cb(arr, arr[i], i);
    }
}

myFor(name, function (value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
})