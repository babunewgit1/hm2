// akta function er argument hishabe jokhn onno akta function theke kono data ashe tokhn take function scope bole

function abc() {
   var x = 123;
   console.log(x);
   b(x);
}

abc();

function b(value) {
   console.log('this is form function b ' + value);
}

// function b te argument hisabe function abc theke data pathanu hoise. tai akhn e function hoisting hoise.