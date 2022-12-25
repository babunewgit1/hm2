/*
   //! There are three condition of this....

      ==>1. je object theke this ke call kora hobe this sai object er value gula pabe.
      ==>2. object sara onno kothau this call korle this ta window object ke reffer korbe.
      ==>3. This excution context er age value gula pai. tai this je object e call kora hobe sei object er value gula pabe.
*/

const react = {
   width: 100,
   height: 50,
   area: function () {
      console.log(`React's width is ${this.width}`);
      console.log(`React's width is ${this.height}`);
   }
}

react.area();

// ai object e object er vitor e this babohar kora hoise. jar jonno ai this diea react object er width and height pauea gase.


function myfunc() {
   console.log(this);
}
myfunc();

// Upor er ai funciton ta te this use kora hoyese. tai this jehotu kono object pai ni tai ai this ta window object ke refer korese.

function myfuncOne() {
   console.log(this);
}
new myfunc();

// Ekti funciton er virtor e this call korle seti window object ke reffer korbe. but call korar time e jodi new keyword diea funciton ta ke call kora hoi tahole ai funciton ti akta empty object print korbe.


const squert = {
   width: 250,
   height: 250,
   area: react.area,
}

squert.area()

// Upor er ai object ti te react object theke akta method niea asha hoise. je khne this ase. ai this ta je object er moddhe thakbe oi object tar value e receive korbe. jar karon e squert.area() ai tar jonno squert object er width and height this diea console e print kora jacche.

