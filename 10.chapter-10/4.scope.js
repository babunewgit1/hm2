function a() {
   var ax = 10;
   b(ax);
}

a()

function b(value) {
   console.log('a is' + value);
}
