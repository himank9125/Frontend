// "use strict";
// let std = {
//   name: "sanjay",
//   age: 32,
//   fun: function () {
//     console.log(this);
//   },

//   fun2: () => {
//     inner = function () {
//       console.log(this);
//     };
//     inner();
//   },
// };
// function sap() {
//   console.log("************************************");
// }
// let myfun = () => {
//   function inner() {
//     console.log(this);
//   }
//   inner();
// };
// // std.fun();
// sap();
// // myfun();
// sap();

// //***************************************************************** */
// let fun = () => {
//   let inner = () => {
//     function mostInner() {
//       console.log(this);
//     }
//     mostInner();
//   };
//   inner();
// };

// function fun2() {
//   function inner() {
//     function mostInner() {
//       let arrow = () => {
//         console.log(this);
//       };
//       arrow();
//     }
//     mostInner();
//   }
//   inner();
// }

// // fun();
// sap();
// fun2();
// // sap();

// person = {
//   age: 20,
//   fun: function () {
//     fun = () => {
//       fun = () => {
//         console.log(this);
//       };
//       fun();
//     };
//     fun();
//   },
// };

// console.log(
//   "(((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))"
// );

// person.fun();

// person = {
//   name: "mayabk",
//   age: 32,
//   mobile: 800954126,
// };

// // console.log(Object.keys(person));
// function fun(person) {
//   // console.log(Object.keys(person));
//   return Object.keys(person);
// }
// // fun(person);
// console.log(fun(person));
// const object = {
//   message: "Hello, World!",

//   logMessage() {
//     console.log(this.message); // What is logged?
//   },
// };

// setTimeout(object.logMessage, 1000);

var length = 4;

pet = {
  length: 50,
  callback: function () {
    console.log(this.length); // What is logged?  4
  },
};

const object = {
  length: 5,

  method(callback) {
    pet.callback();
  },
};

object.method(callback, 1, 2);
