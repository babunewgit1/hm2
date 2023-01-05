const arr = [12,13,15,11,5,1,2,3,4,5,6,7,8,9];

// this sort method can't sort an array properly.
const arrSort = arr.sort();
console.log(arrSort);


// use this method for sorting an array properly in assending way.
const result = arr.sort(function (a, b) {
    return a - b;
})

console.log(result);

// sort in decending way.

const resultTwo = arr.sort(function (a,b) {
    return b -a ;
})

console.log(resultTwo);


// lets try it in a object.
const person = [{name:'a', age: 10}, {name:'b', age: 11}, {name:'c', age: 12}, {name:'d', age: 2}, {name:'d', age: 22},];
const resultThree = person.sort(function (a, b) {
    return a.age - b.age;
})
console.log(resultThree);

person.map(function (value, index, arr) {
    console.log(value.name);
})


















