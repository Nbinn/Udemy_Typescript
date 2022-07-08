const carMakers = ['ford','toyota','chevy']
const dates = [new Date(), new Date()]

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

let cars = carMakers[2];
let myCar = carMakers.pop();
carMakers.push(cars)
let a = carMakers.map((car: string): string => {
    return car.toUpperCase()
})
console.log(a)
const importantDates: (string | Date)[] = [new Date()]
importantDates.push("2030-10-02")
importantDates.push(new Date())
