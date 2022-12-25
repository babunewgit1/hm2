//use call method.
function myFun1(c, d) {
   console.log(this);
   console.log(this.a + this.b + c + d)
}
myFun1.call({ a: 10, b: 15 }, 5, 7)

//use apply method.
function myFun2(c, d) {
   console.log(this);
   console.log(this.a + this.b + c + d);
}
myFun2.apply({ a: 10, b: 20 }, [15, 16])

//use bind method.
function myFun3(c, d) {
   console.log(this);
   console.log(this.a + this.b + c + d);
}

let x = myFun3.bind({ a: 10, b: 10 });
x(10, 10)