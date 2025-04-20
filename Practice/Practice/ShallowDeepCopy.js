//a shallow copy duplicates the outer structure of an object or array, but nested objects/arrays are still references to the originals. 
// A deep copy creates entirely independent copies of all nested objects and arrays, ensuring no shared references

//Using the Object.assign() method or 
// spread syntax (...) for copying objects/arrays. If the object/array has nested objects/arrays, these will be references to the original's nested objects/arrays. 

//Using a recursive function or 
// the JSON.parse(JSON.stringify(object)) approach to create a deep copy. 

/*
const first_person = {
    name: "Jack",
    age: 24,
    }
    
    const second_person = first_person;
    
    second_person.age = 25;
    
    console.log(first_person.age); // output: 25
    console.log(second_person.age); // output: 25
*/

// Spread (...) operator
// Using the spread syntax, we can create a deep copy if there is no nesting.
     
    
    const first_person = {
    name: "Jack",
    age: 24,
    }
    
    const second_person = { ...first_person };
    
    second_person.age = 25;
    
    console.log(first_person.age); // output: 24
    console.log(second_person.age); // output: 25    

// Nesting

    const first_person = {
        name: "Jack",
        age: 24,
        address: {
          apartment: "A",
          city: "London"
        }
      };
      
      const second_person = { ...first_person };
      
      second_person.age = 25;
      second_person.address.apartment = "N";
      console.log(first_person.address.apartment); // output: N
      console.log(second_person.address.apartment); // output: N
      
     
// In case of nesting, the spread operator creates a shallow copy.
      
// If the objects/arrays are nested, then we can achieve deep copy by using
      
// JSON.parse() and JSON.stringify()
      
      
      const first_person = {
        name: "Jack",
        age: 24,
        address: {
          apartment: "A",
          city: "London"
        }
      };
      
      const second_person = JSON.parse(JSON.stringify(first_person));
      
      second_person.age = 25;
      second_person.address.apartment = "N";
      console.log(first_person);
      console.log(second_person);
      

/*
--> Shallow copy method creates a copy where the source and the copied variable reference remain the same. Changing one, would change the other as well.
--> Deep copy method creates a copy where the source and the copied variable reference are entirely different. Changing one, would not affect the other one.
--> Common methods like Array.concat(), Array.from(), Object.assign(), etc creates a shallow copy.
--> Spread(...) operator, creates a deep copy when there is no nesting.
--> One of the ways to create a deep copy is by using JSON.parse() and JSON.stringify().
*/