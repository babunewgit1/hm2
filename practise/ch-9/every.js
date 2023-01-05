const arr = [12,13,15,11,5,1,2,3,4,5,6,7,8,9];

const resultOne = arr.every(function(value) {
    return value > 0;
})
console.log(resultOne);

const resultTwo = arr.every(function (value) {
    return value > 5;
})

console.log(resultTwo);

const person = {
    name : 'babu',
    age: 20
}
