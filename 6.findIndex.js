const arr = [45, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const index = arr.findIndex(function (value) {
   return value === 1;
});

console.log(index);


//! ........implement it menually...........

function findIndex(arr, cb) {
   for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         return i;
      }
   }
}

const resutl = findIndex(arr, function (value) {
   return value === 45;
})

console.log(resutl)