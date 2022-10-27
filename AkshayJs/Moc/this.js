"use strict";
// function fun() {
//   console.log(this);
// }

// let fun2 = function () {
//   console.log(this);
// };

// let fun3 = () => {
//   console.log(this);
// };
// fun();
// fun2();
// fun3();
// ---------------------------------------------------------------------------------

// let student = {
//   name: "manish",
//   age: 30,
//   fun: function () {
//     console.log(this + " Normal Function");
//   },
//   fun2: () => {
//     console.log(this);
//   },
// };
// student.fun();
// student.fun2();

let a = 20;
let b = 30;
[a, b] = [b, a];

console.log(a + " " + b);
