"use strict";
let fullTime = 8;
let partTime = 4;
let hourlyWage = 20;
function generateShift() {
    let shift = Math.floor(Math.random() * 10 % 3);
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
