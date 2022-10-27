// "use strict";
// let great = (msg) => {
//   let name = (firstName) => {
//     console.log(`${msg}! ${firstName}`);
//   };
//   return name;
// };

// let x = great("Hi");
// x("Himanshu");

// great("Hello")(" Manish");

// let x = () => console.log(10);
// x();

// function fun(num, counter) {
//   this.num = num;
//   this.table = num * counter;
// }

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   let x = new fun(2, i);
//   arr.push(x);
// }
// // console.log(arr);

// let y = arr.filter((elm) => {
//   return elm.table < 12;
// });
// y.map((elm) => {
//   console.log(elm);
// });

// let x = {
//   name: "manish",
//   age: 32,
// };

// let y = {
//   name: "ravi",
//   age: 55,
//   fun2(a, b) {
//     console.log(
//       `${this.name} have the age of ${this.age} and his monthly earning is ${a}, and he is living at ${b}`
//     );
//   },
// };

// function fun1(a, b) {
//   console.log(
//     `${this.name} have the age of ${this.age} and his monthly earning is ${a}, and he is living at ${b}`
//   );
// }
// // fun1.call(y, 12000, "noida");

// y.fun2(32000, "harish");

// let std1 = {
//   name: "naveen",
//   subject: "hindi",
// };

// let student = {
//   name: "ravi",
//   subject: "Maths",
//   fun() {
//     let myfun = () => {
//       console.log(`${this.name} is reading ${this.subject}`);
//     };
//     return myfun;
//   },
// };

// let x = student.fun();
// x();

// let fun = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// let fun1 = new fun("manish", 33);
// console.log(fun1);
// let fun1;
// let num = 2;
// let arr = [5, 2, 7];
// function fun() {
//   return (fun1 = function () {
//     num *= 2;
//     // arr.push(num);
//     console.log(num);
//   });
// }

// fun();
// fun1();
// fun1();
// fun1();
// console.log(num);
// x();
// x();
// x();

// x = fun();
// x();
// console.log(fun);

// console.log(this);
// let person = {
//   name: "manish",
//   age: 22,
//   print: function (subject) {
//     console.log(`${this.name}      ${this.age}    ${subject}`);
//   },
// };

// let student = {
//   name: "manish",
//   age: 22,
// };

// person.print("hindi");
// person.print.call(student, "english");
// person.print.apply(student, ["maths"]);
// let meth = person.print.bind(student);
// meth("java");
// let myobj = Object.assign(student);
// let myobj = { ...student };

// myobj.num = 55;
// console.log(myobj);
// console.log(student);

// let dd = new Date();
// console.log(dd.getDate());

// let arr = [12, 21, 56, 10];
// let promices = arr.filter();
// promices.then(function (ele) {
//   return ele % 3 == 0;
// });

// console.log(arr);

// let yy = arr.map((ele) => {
//   return ele + 2;
// });
// console.log(yy);

// let arr = [1, 2, 3, 4, 5, 8];

// let animal = {
//   legs: 4,
//   hair: "black",
//   eyes: 2,
//   size: "XL",
// };

// let birds = {
//   legs: 2,
//   hair: "No",
// };
// let cow = Object.create(animal);
// cow.heels = true;
// let parrot = Object.create(cow);
// console.log(parrot);

// let arr = [2, 4, 5, [3, 5], 5, 6, [5, [1, 5], 2, 1]];
// let arr2 = arr.flat(2);
// console.log(arr2);

// let arr = [2, 5];
// Array.prototype.sum = function () {
//   return this.reduce((ele, acc) => {
//     return ele + acc;
//   });
// };

// let x = arr.sum();
// console.log(x);

// let y = [05, 80, 41, 7, 18, 12, 44];
// Array.prototype.sorting = function () {
//   return this.sort((a, b) => {
//     return a - b;
//   });
// };
// y.sorting();
// console.log(y);
