const arr = [1, 2, 3, 4, 5];

arr.forEach(function (value, index, array) {
   console.log(value, index, array);
})

//! some a array element....
let sum = 0;
arr.forEach(function (value) {
   sum += value;
})

console.log(sum);

//?make manual for each function with call back

function forEach(arr, cb) {
   for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr);
   }
}
forEach(arr, function (value, index, array) {
   console.log(value, index, array)
});

forEach(arr, function (a, b, c) {
   arr[b] = a + 5;
})

console.log(arr)


