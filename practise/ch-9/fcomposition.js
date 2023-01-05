// what is funciton compostion?
    /*
        ==> jokhn amra kono function er argument hishebe onno akta function er resutl ta ke input hisibe sent kori tokhn take function composition bole. 
    */

function print (n) {
    console.log(n);
}

function multiply (x) {
    return x * 5;
}

function add(p,q) {
    return p + q;
}

print(multiply(add(10, 15)));