const obj = {
   width: 25,
   height: 50,
   area: function () {
      return this.width * this.height;
   }
}

console.log(obj);
console.log(obj.area());

// ek object er property onno object e babohar kora
const squre = {
   width: 50,
   height: 60,
   printArea: obj.area
}
console.log(squre);
console.log(squre.printArea());