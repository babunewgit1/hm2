abc();

function abc() {
   console.log('I am abc function')
}

newAbc();

var newAbc = function () {
   console.log('I am new abc function')
}

// 1st function ta normal funciton. ai function ta amra declare korar age call korte parbo karon akta phase e giea ai function tar ref memory te thake.


// 2nd function ta akta function expression. ai function ta amra function define korar age call korte parbo nah. karon excutation phase e giea ai function ta undefine hoye thake. tai ai function ta ke call korte hobe define korar porai call korte hobe.