// console.log(document.documentElement);

let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");
const btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", () => {
  console.log(h1.getBoundingClientRect());
});
