window.onload = function () {
  document.getElementById("button").onclick = test;
};
var aObj = {
  name: "fred",
  major: "music",
  smallestOfTwo: function (a, b) {
    if (a > b) {
      return b;
    } else if (a == b) {
      return a * a;
    } else {
      return a;
    }
  },
};

function test() {
  let max = maxOfThree(1,2,6);
  alert(max);
}

function Employee(name, salary, position) {
  this.name = name;
  this.salary = salary;
  this.position = position;
}
var emp1 = new Employee("Km Hira", 4000, "Software-Developer");
var emp2 = new Employee("Vishnu", 2000, "Junior-Developer");
var emp3 = new Employee("Anne", 6000, "Manager");

function productOfArguments() {
  let i;
  let productResult = 1;
  for (i = 0; i < arguments.length; ++i) {
    productResult *= arguments[i];
  }
  console.log(productResult);
  return productResult;
}
function product(x, y, ...more) {
  var total = x * y;
  if (more.length > 0) {
    for (var i = 0; i < more.length; i++) {
      total *= more[i];
    }
  }
  return total;
}

var maxOfThree = (a,b,c) =>{
    let max = Math.max(a,b);
    return Math.max(c,max);
}
