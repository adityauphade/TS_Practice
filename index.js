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
var Bhaya = new Person(420, "BhayaBoii", true);
console.log(Bhaya);
console.log(Bhaya.register());
