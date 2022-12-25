function log(n) {
   if (n === 0) {
      return
   }
   console.log(n);
   log(n - 1)
}

log(10);


function sum(n) {
   if (n === 1) {
      return 1
   }

   return n + sum(n - 1);
}

console.log(sum(112))
