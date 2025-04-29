// The Object.assign() method only copies enumerable and own properties from a source object to a target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // true



var employee = { name: "vivek badola", title: "project lead", company: "thinksys" };
var employeeCopy = Object.assign({}, employee)

// to check if name prop changes in employee
employeeCopy.name = 'Arun Dangi';

console.log("employee", employee); // employee {name: 'vivek badola', title: 'project lead', company: 'thinksys'}company: "thinksys"name: "vivek badola"title: "project lead"[[Prototype]]: Object

console.log("employeeCopy", employeeCopy); // employeeCopy {name: 'Arun Dangi', title: 'project lead', company: 'thinksys'}company: "thinksys"name: "Arun Dangi"title: "project lead"[[Prototype]]: Object


// Object.assign(), etc creates a shallow copy(only non-primitive values). Changing one would change the other coz they point the same address object in memory


// primitives (name) are copied by value 
// objects (address) are copied by reference 

var employeeNested = {
    name: "vivek badola",      // primitive 
    title: "project lead",
    company: "thinksys",
    address: {               // non-primitive (object)
        house: '166',
        locality: 'vasundhra',
        city: 'ghaziabad',
        state: 'up'
    }
}
var employeeNestedCopy = Object.assign({}, employeeNested)
// it will change the house prop in both 
employeeNestedCopy.address.house = '168';

console.log("employeeNested", employeeNested);
console.log("employeeNestedCopy", employeeNestedCopy);

