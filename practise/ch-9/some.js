const arr = [12,13,15,11,5,1,2,3,4,5,6,7,8,9];

const some = arr.some((num)=> {
    return num > 200;
})

console.log(some);

const someOne = arr.some(function (value) {
    return value > 2;
})
console.log(someOne);