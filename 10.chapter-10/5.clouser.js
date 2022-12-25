function abc() {
   var msg = 'hello world'

   function print() {
      console.log(msg)
   }

   print();
}

abc()

// upor er ai function ti abc function er data print function use kortese. R print function ti chalau amra abc funciton er baire call korte parbo nah. 


function one() {
   var msg = 'this is the power of closure';

   return function () {
      console.log(msg)
   }
}

var printClouser = one();
printClouser();

//* Upor er ai function ti te thaka 2 ti function e akta function ke amra return kore dicchi. tai ai function ta ke clouser er power er jonno global scope theke call korte partesi.

//* ai function ti ke global scope theke call korar jonnno prothome e age akta variable er moddhe function ti ke store kore nite hobe. then oi varibale ta ke function er moto kore call korte hobe.