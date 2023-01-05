// print 1 to 10 with recursive function.
function one (n) {
    if (n===11) {
        return;
    }
    
    console.log(n);
    one(n + 1);
}

one (1);

// print 10 to 1 with recursive funciton.
function two (n) {
    if(n === 0) {
        return;
    }
    
    console.log(n);
    
    two (n-1);
}

two (10)