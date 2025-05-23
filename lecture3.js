// //Function Declaration
// //Function Hoisting

// function greet() {
//   console.log("welcome its function declaration");
// }

// greet();

// //Function Expression

// const greetExp = function () {
//   console.log("welcome its function expression");
// };

// greetExp();

// //Function Parameters

// function add(a, b) {
//   console.log(a + b);
//   //a function can also return value
//   return a + b;
// }

// console.log(add(1, 2));

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply());

// //Default Parameters

// function multiply(a = 0, b = 0) {
//   return a * b;
// }

// console.log(multiply());

// // add destructing and default togther

// let userObj = {
//   name: "lavi Rastogi",
//   id: 1,
//   address: {
//     city: "lko",
//   },
// };
// let userObj2 = {
//   name: "lavi Rastogi",

//   address: {
//     city: "lko",
//   },
// };

// function displayObj({ name, address, id = Math.random() }) {
//   console.log("user deatails=>", name, address, id);
// }

// displayObj(userObj);
// displayObj(userObj2);
// //Rest Parameters

// function restExample(a, b, ...rest) {
//   console.log(a, b, rest);
// }

// restExample(2, 4, "lavi", { name: "chhavi" });

// //rest - pack all  paramerters in a array
// //rest - last paramter in a function

// //Immediately Invoked Function Expressions (IIFE)

// (function helloWorld() {
//   console.log("hello lavi");
// })();

// //arguments

// function argumentHandler() {
//   //arguments are Array type object
//   //convert to array using srpread operator
//   //[...arguments]
//   console.log(arguments);
// }

// //this

// this refers to the current object which is calling the function not where it is defined

function thisExample1() {
  console.log("window tech or object", this);
}

// here this will refer to the global object
thisExample1();

let objThis = {
  tech: "Javascript",
  name: "yashu",
};
let objThis2 = {
  tech: "Javascript2",
};

// binded this with function so now this is refering to the current object u binded
// this -> objThis
thisExample1.call(objThis);
// this=> objThis2
thisExample1.apply(objThis2);

const newFunction = thisExample1.bind(objThis);
newFunction();

let objFunction = {
  nameObj: "lavi",
  normalFunc: function () {
    console.log("inside obj and tech", this?.nameObj, this);
  },
};

nameObj = "globalLavi";

objFunction.normalFunc();
let extractNormalFunc = objFunction.normalFunc;
console.log("finction call", extractNormalFunc);
let objName = objFunction?.nameObj;
//here the function is called with global this so no object context
// so this ->global ->nameObj='globalLavi'
extractNormalFunc();

// other inside inside func
let objFunction2 = {
  name: "chhavi",
  innerNormalFunc: function () {
    console.log("inside in  with obj", this?.name);
  },
  normalFunc: function () {
    console.log("normal Func", this);
    function innerFunc() {
      console.log("inside obj inside and objFunction", this?.name, this);
    }
    // this doesnt refer to now objFunction  as its called with no object context
    //  so this refer to global

    //this -- objThis
    let bindFunc = innerFunc.bind(objThis);
    bindFunc();
    innerFunc();
    // here this refer to the objectFunction
    //objFunction2.innerNormalFunc();
  },
};

objFunction2.normalFunc();
//Arrow Functions (ES6)

// short hand
// no this
// no arguments
// no call , apply,bind

const arrowFunc = () => {
  console.log("hellow arrow func");
  return 1;
};

console.log(arrowFunc());
// const addFunc = (a, b) => {
//   return a + b;
// };

const addFunc = (a, b) => a + b;

console.log("add", addFunc(4, 6));

//Differences Between Regular and Arrow Functions

let objFunctionArrow = {
  nameObj: "lavirastogi",
  normalFuncArrow: () => {
    console.log("inside obj arrow and tech", this?.nameObj, this);
  },
};

// arrow func - doesnt have own this but take this from it parent

objFunctionArrow.normalFuncArrow();

name = "globalHelloLavi";
// other inside inside func
let objFunctionArrow2 = {
  name: "chhavi",
  innerNormalFunc: () => {
    console.log("inside in  with obj arrow ", this?.name);
  },
  normalFunc: function () {
    //objFunctionArrow2
    console.log(this);
    const innerFunc = () => {
      console.log("inside obj inside arrow check", this?.name, this);
    };
    // arrow func doesnt have its own this but of its parent where its defined

    innerFunc();
  },
};

// object called function
objFunctionArrow2.normalFunc();
let newArrowFunc = objFunctionArrow2.normalFunc;
// this - global called the function
newArrowFunc();
