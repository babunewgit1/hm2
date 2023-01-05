// create object with factory function
const objOne = function (width, height) {
   return {
      width: width,
      height: height,
      area: function () {
         return this.width * this.height
      }
   }
}

const printObjOne = objOne(10, 20);
console.log(printObjOne);
console.log(printObjOne.area());


const printObjTwo = objOne(20, 20);
console.log(printObjTwo);
console.log(printObjTwo.area());

// factory function diea object create korar jonno protom e akta function expression declare kore argument hishabe ja ja chai se gula nite hobe. then retunr statment er moddhe oi gula diea akta object create korte hobe.