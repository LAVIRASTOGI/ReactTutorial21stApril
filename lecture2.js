//a //undefined
//a2 -- temorial dead Zone (let /const)
//name & body - decalre

// console.log(a);

//console.log(a2); //Cannot access 'a2' before initialization
//console.log(a6); //lecture2.js:8 Uncaught ReferenceError: a6 is not defined

var a = "lavi";

let a2 = "lk";

//function scope
function xy() {
  console.log(a);
  var a = "xyz";
  console.log("Hi", a);
}
//block scope
//if(){
//}
// for(){

// }
{
  let b = "chhavi";
}

//refernce ki value
//values we cannot change
const a5 = [1, 2, 3];
// a5 = 0;

console.log(a5);

xy();
console.log("parent", a);

// <h2>Operators</h2>

console.log(1 == "1"); //true //== > values checks
console.log(1 === "1"); //false //== > type & values checks

// && - > false ->false
//&& > true && true

console.log(1 < 2 && 2 < 3); //true
console.log(1 > 2 || 2 < 3); //

console.log(1 == 2 ? 2 : 8);

let obj = {
  name: "lavi",
};
console.log(obj.name);

let example1 = "";
let dataDisplay = example1 ?? 22;
console.log(dataDisplay);
// if(obj.address){

// }
console.log(obj?.address?.pincode); //Cannot read properties of undefined (reading 'pincode')

let objSpread = { name: "chhavi", id: 890 };

let newObjSpread = { ...objSpread, id: 9 };
// const xyz1 = objSpread?.name;
const { id: xyz = "default" } = objSpread;
console.log(xyz);

let araayDes = [1, 2, 3];
const [, b435 = "99", c53443, d = 222] = araayDes;
console.log(d);
