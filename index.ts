let fullTime: number = 8
let partTime: number = 4
let hourlyWage: number = 20


function generateShift(): string{
    let shift: number = Math.floor(Math.random()*10%3)    
    switch(shift){
        case 0:
            return "Fulltime Shift"
        case 1:
            return "Parttime Shift"
        case 2:
            return "No Shift - Absent"
        default:
            return "error"
    }
}

generateShift()

