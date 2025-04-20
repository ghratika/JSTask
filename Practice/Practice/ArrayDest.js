// Array Destructuring
const arr = ["one", "two", "three"];

// skips the first element
const [,red] = arr;
console.log(red); // two
//console.log(yellow); // ref error green is not defined
//console.log(green); // same

console.log(".......................")

const arr1 = ["one", "two", "three"];
const [ed, yellow, green] = arr1;
console.log(ed); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

function f() {
    return [1, 2, 3];
  }
  
  const [i, , j] = f();
  console.log(i); // 1
  console.log(j); // 3
  
  const [c] = f();
  console.log(c); // 1

  



// destructure an array of obj & renaming a property
const [{ userName, userName: displayName }] = [{ userName: "jim", age: 42 }, { userName: "jane", age: 40 }];
console.log(userName); // jim
console.log(displayName); // jim


console.log(".....................")
// object destructring
const user = {
    id: 42,
    isVerified: true,
};

const { id, isVerified } = user;

console.log(user.id); // 42
console.log(isVerified); // true

console.log(".....................");

const o = {p:42, q:true};
// renaming p 
const {p:foo, q: bar} = o;
console.log(foo); // 42
console.log(bar); // true

const user1 = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        person1: "Jane",
        person2: {firstName: {correctName: "john", wrongName: "jon"}, lastName: "doh"},
        person3: {firstName: "era"},
    },
};

//const {displayName, fullName: {person2: {firstName:{correctName: corrName}}} ,fullName:{person3: {firstName:fname}}} = user1;
//console.log("hi",displayName,corrName,fname,);


console.log(".........................")
let a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);
console.log(rest);

let x = [10,20,30,40,50];
[a,b, ...rest] = x

// to check type of a
console.log(typeof(a)); // number

// to check type of rest
console.log(typeof(rest)); // object

console.log(Array.isArray(rest)); // true

// to check type of x 
console.log(typeof(x)); // object

let y = Array.from(x);
console.log("y:",y);

// converts object to array
console.log(Array.isArray(y)); // true

console.log(typeof(y)); //object


