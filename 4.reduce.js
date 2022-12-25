const arr = [1, 2, 3, 4, 5, 6];

//print 2 number's sum.
const sum = arr.reduce(function (prev, curr) {
   return prev + curr;
})

console.log(sum);

//print maximum number form an array.

const max = arr.reduce(function (prev, curr) {
   return Math.max(prev, curr);
})

console.log(max)