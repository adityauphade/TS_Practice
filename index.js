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
generateShift();
var ciaz = {
    pid: 1,
    company: "Maruti",
    type: "Sedan",
    released: true
};
console.log(ciaz);
