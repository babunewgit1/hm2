// create an object with object constractor and hide some property form the user.
const User = function (width, height) {
   this.width = width;
   this.height = height;
   var position = {
      x: 100,
      y: 200,
   }

   var aera = function () {
      console.log('width is ' + this.width);
      console.log('height is ' + this.height);
   }.bind(this);

   this.draw = function () {
      console.log('x is ' + position.x);
      console.log('y is ' + position.y);
      aera();
   }

   Object.defineProperty(this, 'pos', {
      get: function () {
         return position;
      },
      set: function (value) {
         position = value
      }
   })
}

const objOne = new User(10, 20);
console.log(objOne);
objOne.draw();

console.log(objOne.pos);
objOne.pos = {
   x: 255,
   y: 120
}

console.log(objOne.pos);
