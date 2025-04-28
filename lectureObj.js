//Creating Objects

//obj ->address of this particlar object
const obj = {
  name: "yashu",
  id: 23,
  address: {
    city: "lko",
    pincode: [
      123,
      123,
      {
        name: "mayur vihar",
      },
    ],
  },
};

// obj2 same address as obj
let obj2 = obj;

let obj3 = obj2;

//asame address
// obj== obj2==obj3
console.log(obj);

//Accessing Object Properties
// const address = "address";
console.log(obj.name);
console.log(obj["address"]["pincode"]);
console.log(obj["name"]);

// Modifying Objects
// Modifying existing properties

obj2.name = "chhavi";
obj2["name"] = "lavi rastogi";

// Adding new properties

obj.tech = "frontened";

console.log(obj, obj2, obj3);

// Deleting properties
//delete obj[age]

delete obj2["id"];

console.log(obj, obj2, obj3);
//Computed Property Names (ES6) - dynamic

let add = "address";
console.log(obj[add]);
//property
console.log(obj.add);

//Methods in Objects
//Objects can contain functions as properties, which are called methods:

//Object.freeze() and Object.seal()

// Object.freeze() - prevents adding, removing, or changing properties
// Object.seal() - prevents adding or removing properties, but allows changing existing ones

//Property Shorthand (ES6)

let firstName = "lavi";
let id = 45;
// let objES6 = {
//   firstName: firstName,
//   id: id,
// };

let objES6 = {
  firstName,
  id,
};
console.log(objES6);

//Object Destructuring (ES6)
// Basic destructuring
// Nested destructuring
// Default values
// Destructuring with new variable names

// refence how object is stored
