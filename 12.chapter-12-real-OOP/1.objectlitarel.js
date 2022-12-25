const ract = {
   width: 100,
   height: 50,
   area: function () {
      console.log('Ractangle\'s width is ' + this.width);
      console.log('Ractangle\'s width is ' + this.height);
   }
}
ract.area();


const ractTwo = {
   width: 250,
   height: 150,
   area: function () {
      console.log('RactTwo\'s width is ' + this.width);
      console.log('RactTwo\'s height is ' + this.width);
      return 'RactTwo\'s Area is ' + this.width * this.height;
   }
}

ractTwo.area();
// 2nd object ta te function er moddhe akta return ase. jokhn function ta ke call korsi tokhn return ta print hoi ni. ai return ta ke print korar jonno pura function ta ke console.log korte hobe.

console.log(ractTwo.area());