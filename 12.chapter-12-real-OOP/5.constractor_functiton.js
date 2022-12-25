//create an object with constractor function
const Obj = function (width, height) {
   this.width = width
   this.height = height
   this.area = function () {
      console.log('width is ' + this.width);
      console.log('width is ' + this.height);
   }
}

const objOne = new Obj(20, 25);
console.log(objOne);
objOne.area();

const objTwo = new Obj(15, 11);
console.log(objTwo);
objTwo.area();