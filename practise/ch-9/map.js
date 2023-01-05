const arr = [1,2,3,4,5,6];
arr.map(function (value, index, arr) {
    console.log(value, index, arr);
})

// make for each funciton manually.
function myMap(arr, callback) {
    let newArray = [];
    for(let i = 0; i<arr.length; i++) {
       let temp = callback(arr[i]) ;
        newArray.push(temp);
    }
    return newArray;
}

const resutlOne =  myMap(arr, function(value){
    return value;
})
console.log(resutlOne);

const resutlTWo = myMap(arr, function(mul) {
    return mul * mul;
})
console.log(resutlTWo);



