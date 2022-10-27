let student = {
  name: "himanshu",
  age: 23,
  mobile: 548755,
  fun: function (lastName, middleName) {
    console.log(this.mobile + " --->" + lastName + " ----->" + middleName);
  },
};

let teacher = {
  name: "manish",
  age: 28,
  location: "Noida",
  mobile: 36254185,
};

function accessData() {
  console.log(this.name + " " + this.age);
}

accessData.call(student);
accessData.apply(teacher);

console.log("**************************************");

student.fun.call(teacher, "yadav", "singh");
student.fun.apply(student, ["sharma", "kumar"]);

// ******************Bind*****************/

let newFun = student.fun.bind(student, "srivastav", "raju");
newFun();

//************************Call apply on arrow function******************************** */
