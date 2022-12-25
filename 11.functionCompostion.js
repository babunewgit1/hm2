//! what is function compositon...
//?kono akta funciton er input hishabe amra jokhn onno akta function er output ke sent kori tokhn take funciton composition bole.

function print(inp) {
   console.log(inp)
}

function multi(n) {
   return n * 5
}

function add(a, b) {
   return a + b;
}

console.log(print(multi(add(3, 5))))


// function composition

function inp(inp) {
   console.log(inp);
}

function mul(n) {
   return n * 5;
}

function plus(a, b) {
   return a + b;
}

inp(mul(plus(3, 5)))