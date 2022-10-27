function fun(a) {
  function fun() {
    a *= 2;
    console.log(a);
  }
  return fun;
}
let x = fun(8);
x();
x();
x();
