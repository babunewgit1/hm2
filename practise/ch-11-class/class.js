const objOne = {
   width: 25,
   height: 30,
   area: function () {
      return this.width * this.height
   },

   plus: function () {
      return this.width + this.height
   }
}

console.log(objOne);
console.log(objOne.area());
console.log(objOne.plus());

// create a object with class constractor
class squre {
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

var fullObject = new squre(25, 30);
console.log(fullObject);
console.log(fullObject.area());
console.log(fullObject.plus());