// let x = 20;

// console.log(x);
// console.log(x);

// let y = prompt("Please enter a number");
// console.log(y);

// function fun() {
//   this.name = "manish";
//   this.age = 32;
//   function fun2() {
//     console.log(this);
//   }
//   return fun2();
// }
// console.log("*********************************************");
// let hh = new fun();

// let a = {
//   name: "manish",
//   age: 30,
// };

// let b = {
//   name: "manish",
//   age: 30,
// };

// let c = [];

function fun(name, age) {
  this.name = name;
  this.age = age;
}
console.log("#####");
let obj = {};
fun.call(obj, "himanshu", 25);
console.log(obj);

let obj2 = {};
fun.apply(obj2, ["himanshu", 20]);
console.log(obj2);

let obj3 = {};
let hh = fun.bind(obj3);
hh("himanshu", 22);
console.log(obj3);
