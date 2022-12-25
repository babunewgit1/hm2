// create an object with constractor function.

class createObje {
   constructor(wid, hei) {
      this.width = wid;
      this.height = hei;
   }

   area() {
      console.log('width is ' + this.width);
      console.log('height is ' + this.height);
   }
}

const objeOne = new createObje(20, 30);
console.log(objeOne);
objeOne.area();

const objeTwo = new createObje(11, 11);
console.log(objeTwo);
objeTwo.area();