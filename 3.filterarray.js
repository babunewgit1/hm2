const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const filter = arr.filter(function (value) {
   return value > 2
});

console.log(filter);

//!...Make it manualy....

function myFilter(arr, cb) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         newArr.push(arr[i])
      }
   }
   return newArr
}
const x = myFilter(arr, function (value) {
   return value > 2
});

console.log(x)