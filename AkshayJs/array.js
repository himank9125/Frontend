let arr = [2, 8, 7, 4, 5, 1, 2, 7, 8];
let arr2 = [];
arr.forEach((elm) => {
  if (elm % 2 == 0) {
    arr2.push(elm);
  }
});
// console.log(arr2);

// function fun(elm) {
//   if (elm % 2 == 1) {
//     arr3.push(elm);
//   }
// }
let q = arr.map(function (elm) {
  return elm * 6;
});
// console.log(q);

let p = arr.filter((elm) => {
  return elm % 2 == 0;
});

// console.log(p);

let r = arr.reduce((acc, elm) => {
  return (acc += elm);
});

// console.log(r);
let result = {};
res = arr.reduce((acc, elm) => {
  if (result.elm == null) {
    result.elm = 1;
  }
});

console.log(res);
//-----------------------------------------------------------------------------
function even(elm) {
  return elm % 2 == 0;
}
function sum(acc, elm) {
  return (acc += elm);
}

let x = arr.filter(even).reduce(sum);
console.log(x);
