//! Normal way to use map funciton .....

const arr = [1, 2, 3, 4];

arr.map(function (value, index, arr) {
   console.log(value, index, arr)
});


//!manual way to use map.......

function myMap(arr, cb) {
   let newArr = []
   for (let i = 0; i < arr.length; i++) {
      let temp = cb(arr[i])
      newArr.push(temp)
   }
   return newArr;
}

let squert = myMap(arr, function (value) {
   return value * value;
});

console.log(squert);


let mten = myMap(arr, function (value) {
   return value * 10;
});
console.log(mten)

