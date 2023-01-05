//create an object with factory fuction

const obj = function (width, height) {
   return {
      width: width,
      height: height,
      area: function () {
         console.log(`width is ${this.width}`);
         console.log(`height is ${this.height}`);
         return this.width * this.height;
      }
   }
}

const PrintOne = obj(10, 20);
console.log(PrintOne);
PrintOne.area();
console.log(PrintOne.area());

const printTwo = obj(20, 30);
console.log(printTwo);
printTwo.area();
console.log(printTwo.area());

// factory function diea object create korar jonno protom e akta function expression declare kore argument hishabe ja ja chai se gula nite hobe. then retunr statment er moddhe oi gula diea akta object create korte hobe.