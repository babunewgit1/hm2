// create a normal object with some method.
const objOne = {
   name: 'Babu',
   age: 25,
   print: function () {
      return `${this.name} is ${this.age} years old.`
   }
}

console.log(objOne);
console.log(objOne.print());


// create an object with some method with constractor / factory funciton.
class squere {
   constructor(width, height) {
      this.width = width;
      this.height = height;
   }

   area() {
      return this.width * this.height;
   }

   plus() {
      return this.width + this.height;
   }
}

var cOne = new squere(25, 30);
console.log(cOne);
console.log('cOne area is ' + cOne.area());
console.log('cOne area is ' + cOne.plus());


var cTwo = new squere(50, 60);
console.log(cTwo);
console.log('cTwo area is ' + cOne.area());
console.log('cTwo area is ' + cOne.plus());


