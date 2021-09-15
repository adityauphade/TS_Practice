let fullTime: number = 8
let partTime: number = 4
let hourlyWage: number = 20


function generateShift(): string{
    let shift: number = Math.floor(Math.random()*10%3);
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
// console.log(generateShift())

//interface - object
interface Car{
    pid: number
    company: string,
    type: string,
    released: boolean
}

let Ciaz: Car = {
    pid: 1,
    company: "Maruti",
    type: "Sedan",
    released: true,
}
let Alto: Car = {
    pid: 2,
    company: "Maruti",
    type: "Hatchback",
    released: true,
}

// console.log(Alto)

//interface - function
interface mathModel{
    (x: number, y: number): number
}


const add: mathModel = (x, y) => {return x+y;}      //arrow function
// console.log(add(5, 10))

function add2(x: number, y: number): number{        //normal function w/o interface
    return x+y;                                     //normal function w interface cant be done
}
// console.log(add2(1, 2))


//classes
interface personModel{
    id: number
    name: string
    isBruh: boolean
    register(): string
}

class Person implements personModel{
    id
    name
    isBruh

    constructor(id: number, name: string, isBruh: boolean){
        this.id = id
        this.name = name
        this.isBruh = isBruh
    }

    register(){
        return `${this.name} has been registered`
    }
}

let Bhaya = new Person(420, "BhayaBoii", true)
console.log(Bhaya)
console.log(Bhaya.register())
