var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fullTime = 8;
var partTime = 4;
var hourlyWage = 20;
function generateShift() {
    var shift = Math.floor(Math.random() * 10 % 3);
    switch (shift) {
        case 0:
            return "Fulltime Shift";
        case 1:
            return "Parttime Shift";
        case 2:
            return "No Shift - Absent";
        default:
            return "error";
    }
}
var Ciaz = {
    pid: 1,
    company: "Maruti",
    type: "Sedan",
    released: true
};
var Alto = {
    pid: 2,
    company: "Maruti",
    type: "Hatchback",
    released: true
};
var add = function (x, y) { return x + y; }; //arrow function
// console.log(add(5, 10))
function add2(x, y) {
    return x + y; //normal function w interface cant be done
}
var Person = /** @class */ (function () {
    function Person(id, name, isBruh) {
        this.id = id;
        this.name = name;
        this.isBruh = isBruh;
    }
    Person.prototype.register = function () {
        return this.name + " has been registered";
    };
    return Person;
}());
var person1 = new Person(420, "Bhaaya", true); //subclass
// console.log(person1)
// console.log(person1.register())
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, isBruh, school) {
        var _this = _super.call(this, id, name, isBruh) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.caught = function () {
        return this.name + " is caught studying too much for " + this.school;
    };
    return Student;
}(Person));
var student1 = new Student(420, "Ramya", true, "BridgeLabz");
// console.log(student1)
// console.log(student1.caught())
// console.log(student1.register())
//generic
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['Ram', "Shyam", "Papya", "Ganya"]);
numArray.push(3);
numArray.push('hella'); //error
strArray.push(3); //error
strArray.push('Hella');
console.log(numArray);
console.log(strArray);
