//? Sort in array of number.....

const arr = [2, 5, 7, 6, 97, 46, 458, 47, 698, 11, -1]
arr.sort();
console.log(arr);

// this sort method can't sort perfectly this array. For sorting this array in perfectly you have to use sort method with callback function.

const sortOne = arr.sort(function (a, b) {
   if (a > b) {
      return 1
   } else if (a < b) {
      return - 1
   }
   else {
      return 0;
   }
})

console.log(sortOne);

// Now the number of array has sorted perfectly in assending way. If you want to sort them in decending way follow the roules in bellow.

const resx = arr.sort(function (a, b) {
   if (a > b) {
      return -1
   } else if (a < b) {
      return 1
   }
   else {
      return 0;
   }
})

console.log(resx)


//? Sort in object in Array.....

const persons = [
   {
      name: 'a',
      age: 20
   },

   {
      name: 'b',
      age: 22
   },

   {
      name: 'c',
      age: 11
   },
   {
      name: 'f',
      age: 1
   },
]

persons.sort();
console.log(persons)

//Only this simple sort method can not be sort this type of array. you have to use call back funciton for sorting this array properly.

const res2 = persons.sort(function (a, b) {
   if (a.age > b.age) {
      return 1;
   } else if (a.age < b.age) {
      return -1
   }
   else {
      return 0;
   }
})

console.log(res2)