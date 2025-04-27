// foreach only iterate over an array doesnt return new array

const arr = [1, 2, 3];

const result = arr.forEach((num) => {
  console.log(num);
});
console.log(result) // undefined

// will return nothing as new scope openes
const result2 = arr.forEach((num) => {
    //console.log(num);
    return num;
  });
  console.log(result2) // undefined
  

// .map() / .filter() --> return new arrays


const myNums = [1,2,3,4,5,6];
const newNums = myNums.filter( (num) => num > 4) 
const chNums = myNums.filter( (num) => {num > 4}) 
const chaNums = myNums.filter( (num) => {
    return num > 4
}) 
console.log(newNums); // [5,6]
console.log(chNums); // []
console.log(chaNums); // [5,6]


const newNums1 = myNums
                    .map((num) => num * 10 )
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNums1);

const mytotal = myNums.reduce(function(acc, currval) {
    return acc + currval
}, 0)
console.log(mytotal);

const mytotal1 = myNums.reduce((acc1, currval1) => acc1 + currval1);
console.log(mytotal1);