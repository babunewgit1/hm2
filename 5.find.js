const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const find = arr.find(function (value) {
   return value === 2;
})

console.log(find);


//!.... Implement it menually.....

function Myfind(arr, cb) {
   for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         return arr[i]
      }
   }
}

const a = Myfind(arr, function (value) {
   return value === 2
});

console.log(a)