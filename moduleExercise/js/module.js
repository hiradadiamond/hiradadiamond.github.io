/*Question 6 */
var count = {
  counter: 0,
  add: function (input) {
    if (input) {
      this.counter += input;
    } else {
      this.counter++;
    }
    return this.counter;
  },
  reset: function () {
    this.counter = 0;
  },
};
/* Question 8 */
var add = (function(){
    let counter = 0;
    return function(input){
    if(input){
    counter = counter+input;
    }
    else{
    counter = counter+1;
    }
    return counter;
    }
})();

var make_adder = function (inc) {
  return function () {
    return add(inc);
  };
};
var add5 = make_adder(10);
add5();
console.log(add5());

/* Question 10 - Revealing pattern */

var Employee = (function () {
    var name, age, salary;

    var getAge = function () {
        return age;
    };
    var getSalary = function () {
        return salary;
    };
    var getAgePubFunc = function () {
        return getAge();
    };
    var getSalaryPubFunc = function(){
        return getSalary();
    }
    var setAge = function (newAge) {
        age = newAge;
    };
    var setSalary = function(newSalary){
        salary = newSalary;
    };
    var setName = function(newName){
        name = newName;
    };
    var increaseSalary = function(percentage){
        var sal = getSalary();
        return sal + (sal*percentage)*0.01;
    };
    var incrementAge = function(){      
            var newAge = getAge() + 1;
            setAge(newAge);
    };
    return {
        setAge: setAge,
        setName:setName,
        setSalary:setSalary,
        increaseSalary:increaseSalary,
        incrementAge: incrementAge
    };
})();

/* Question 10 - Anonymous Object Literal pattern */
var Employee = (function () {
    var name, age, salary;

    var getAge = function () {
        return age;
    };
    var getSalary = function () {
        return salary;
    };
    return {
        setAge: function(newAge){
            age = newAge;
        },
        setName:function(newName){
            name = newName;
        },
        setSalary:function(newSalary){
            salary = newSalary;
        },
        increaseSalary: function(percentage){
            var sal = getSalary();
            return sal + (sal*percentage)*0.01;
        },
        incrementAge: function(){
            var newAge = getAge() + 1;
            setAge(newAge);
        }
    };
})();

/*Question 12 - Localyl Scope  pattern */
var Employee = (function () {
    var name, age, salary;

    var getAge = function () {
        return age;
    };
    var getSalary = function () {
        return salary;
    };
    var object=  {
        setAge: function(newAge){
            age = newAge;
        },
        setName:function(newName){
            name = newName;
        },
        setSalary:function(newSalary){
            salary = newSalary;
        },
        increaseSalary: function(percentage){
            var sal = getSalary();
            return sal + (sal*percentage)*0.01;
        },
        incrementAge: function(){
            var newAge = getAge() + 1;
            setAge(newAge);
        }
    };
return object;
})();


/*Question 13-*/
Employee.extension = function(){
    let address;
    return function(){
        setAddress = function(newAddress){
            address = newAddress;
        },
        getAddress = function(){
            return address;
        }
    }
};

var Employee_V1 = (function (Employee) {
    var address;
    Employee.extension = function () {
        return {
            setAdd: function(newAddress){
                address = newAddress;
            },
            getAdd: function(){
                return address;
            }
        };
       
    };

    return Employee;

})(Employee || {});
console.log(Employee);

