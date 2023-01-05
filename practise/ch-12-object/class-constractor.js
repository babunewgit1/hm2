// create an object with class constractor.
class obj {
   constructor(width, height) {
      this.width = width;
      this.height = height;
   }

   area() {
      return this.width * this.height;
   }
}

const objOne = new obj(10, 20);
console.log(objOne);
console.log(objOne.area());

const objTwo = new obj(20, 25);
console.log(objTwo);
console.log(objTwo.area());