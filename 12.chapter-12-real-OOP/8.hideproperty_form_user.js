//create an object with constractor and hide something in the outside of the object form the user.
const obj = function (width, height) {
   this.width = width;
   this.height = height;
   var position = {
      x: 20,
      y: 10
   }

   var area = function () {
      console.log('width is ' + width);
      console.log('height is ' + height);
   }.bind(this);

   this.draw = function () {
      console.log('x is ' + position.x);
      console.log('y is ' + position.y);
      area();
   }

}

const objOne = new obj(10, 15);
objOne.draw();





