const obj = {
   width: 25,
   height: 30,
   calculate: function () {
      console.log(this.width + ' px');
      console.log(this.height + ' px');
      return this.width * this.height + ' px';
   }
}

console.log(obj);
console.log(obj.calculate());

// upor er object ti te akta function ase. r oi funciton er moddhe return statement ase. jar karon e function ta kau console.log korte hobe na hole retunr print hobe nah