function a() {
   b()
   console.log("I am form funciton a");
}

function b() {
   c()
   console.log("I am form funciton B");
}

function c() {
   d()
   console.log("I am form funciton C");
}

function d() {
   console.log("I am form funciton D");
}

a();