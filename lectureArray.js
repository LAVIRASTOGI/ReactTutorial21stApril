//  Creating Arrays

//  Array literal (most common)
// address is in fruits
const fruits = ["apple", "banana", "orange"];
const fruits1 = fruits;

const numbersArray = [1, 67, 23, 76];
const obArray = [
  { name: "lavi" },
  {
    name: "chhavi",
  },
];

console.log(fruits, numbersArray, obArray);
console.log(fruits === fruits1);

const emptyArray = new Array(5);
//length =5
console.log(emptyArray);

console.log(fruits?.length);

// fruits.length = 0;

fruits[2] = "mango";

let x = undefined;

//  Creating an array with predefined length
// const emptyArray = new Array(5); // Creates array with 5 empty slots

// Basic Array Methods

//push - end
//fruits.push("orange");
//pop - pop - end
//fruits.pop();

//shift - remove
//fruits.shift();

//unshift
//fruits.unshift("kiwi");

//splice
//const numbersArray = [1, 67, 23, 76];

//delte - orginal array effect
// start index , deleteCount , add data
numbersArray.splice(2, 1); //[1,67,76]
numbersArray.splice(1, 1, 34); // [1,34,76]
numbersArray.splice(1, 0, 23, 45, 67); // [1,23,45,67,34,76]
console.log(numbersArray);

//slice
//differnt address
const fruitsNew = ["apple", "banana", "orange", "kiwi", "papaya", "mango"];
// new  copy of array full/subsstringof the orginal array new address
// let fruits3 = fruitsNew.slice(1, 4); // 3 1,3 1,2,3 index
//let fruits3 = fruitsNew.slice(1); //  1 , length
let fruits3 = fruitsNew.slice(); // full array

console.log(fruits3 === fruitsNew);
//includes

// Array  Methods

//for
//forEach - there is no  break countinue
let valueForEach = fruitsNew.forEach((ele, index, arrayValue) => {
  console.log("element", ele, index, arrayValue);
  //operation
  fruits.push(ele);
  // return 1;
  // void return
});

console.log(valueForEach);

//map

//[] // of itearted value
let valueMap = fruitsNew.map((ele, index, arrayValue) => {
  console.log("element", ele, index, arrayValue);
  //   return ele + "good purchase";

  return 1;
});

console.log(valueMap);
//filter

//[] // of itearted value
let valueFilter = numbersArray.filter((ele, index, arrayValue) => {
  console.log("element", ele, index, arrayValue);
  if (ele > 45) return true;
  else {
    return false;
  }
  //   return ele + "good purchase";
});

console.log(valueFilter);
//reduce

//every
let valueEvery = numbersArray.every((ele, index, arrayValue) => {
  if (ele > 2) {
    return true;
  } else {
    return false;
  }
});
console.log(valueEvery);

//some
let valueSome = numbersArray.some((ele, index, arrayValue) => {
  if (ele < 2) {
    return true;
  } else {
    return false;
  }
});
console.log(valueSome);
//sort - string
// number // object

let valueSort = numbersArray.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(valueSort);

//const numbersArray = [1, 67, 23, 76];

//reduce --

const finalValue = numbersArray.reduce((sum, current) => {
  //current - index 1st
  return sum + current;
  // 0+1 = 1
  //1+67 = 68
  // 68+23 = ......
}, 0);

const finalValue2 = numbersArray.reduce((sum, current) => {
  // sum= 1 - value of 1st index
  //current - index 2nd
  return sum + current;
  // 1+67
});

console.log("reduce func", finalValue, finalValue2);

const numbersArrayReduce = [1, 67, 23, 76, 23, 1, 67];

const duplicateArray = numbersArrayReduce.reduce((acc, current) => {
  // [].includes(1)
  // [1].includes(67)
  //[1,67,23,76].includes(23)
  if (!acc.includes(current)) {
    return [...acc, current]; // [1,67,23,76]
  } else {
    return acc;
  }
}, []);

let wordsArray = ["lavi6", "chhavi", "lavi"];
// wordsObj ={
//  "lavi":2,
//  "chhavi":2
//}

let objValueArray = [
  {
    name: "lavi",
    id: 2,
  },
  {
    name: "lavi",
    id: 3,
  },
];

const duplicateArray1 = numbersArrayReduce.reduce(
  (acc, current) => (acc.includes(current) ? acc : [...acc, current]),
  []
);

console.log("duplicateArray", duplicateArray, duplicateArray1);

// let foundArrayIndex = wordsArray.findIndex((ele) => ele === "lavi000");
// console.log(foundArrayIndex);

let foundArrayIndex = objValueArray.find((ele) => ele.id === 2);
console.log(foundArrayIndex);

// //const numbersArray = [1, 67, 23, 76];
//console.log(fruits, fruits1, typeof x, Array.isArray(fruits));
