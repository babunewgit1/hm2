var n = 10;
function myfun(n) {
   n = n + 100;
   console.log(n)
}

myfun(n)
console.log(n);

// akhne n = 10; but funciton e amra n er man change korsi. but funciton er baire jokhn amra n er value console korsi tokhn function er vitor e n er man change holau function er baire n er value change hoi nai. Er karon ta hocche var n = 10 ata akta premetive data type. premetive data type ke jokhn funciton er vitro e use kora hoi tokhn tokhn main data ta ashe nah. er akta clone ram e joma hoi pore oi clone data ta ashe. tai function er data change holau baire data change hoi nai.

const obj = {
   a: 10,
   b: 20
}

function changeMe(obj) {
   obj.a = obj.a + 100;
   obj.b = obj.b + 100
   console.log(obj);
}
changeMe(obj);

console.log(obj)

// Akhne function er moddhe object er property gula change korar jonno funciton er vitor e object call korle change houea object ti print kortese. Abar funciton er baire jodi object ti ke console kori tahole o dekbo object er value change hoye gase.Mane main object ta change hoye gase. Er karon holo Object akta reference data type. Referance type er kono data je kono jaiga theke change korlai main data gula change hoye jabe.