// create an object with factory function.
const createObje = function (width, height) {
   return {
      width: width,
      height: height,
      area: function () {
         console.log('width is ' + this.width);
         console.log('height is ' + this.height);
      }
   }
}

const objOne = createObje(50, 50);
console.log(objOne);
objOne.area();

const objTwo = createObje(20, 20);
console.log(objTwo);
objTwo.area();






