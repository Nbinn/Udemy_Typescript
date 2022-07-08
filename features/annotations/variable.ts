let number = 5;

let str = 'a string';
let bool = true
let nothing = null

let day = new Date()

let color = ['red', ' green', 'blue']

class Car{

}
let car = new Car()


let point = {
    x: 10,
    y: 5
}

const logNumber: (num:number) => void = (num: number) => {
    console.log(num)
}
// 1)
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y:number} = JSON.parse(json)

// 2)
let words = ["red","green","blue"]
let foundWord: boolean
for(let i = 0;i < words.length;i++){
    if(words[i] == "red")
        foundWord = true
}
// 3)
let numbers = [-10,12,-3]
let numberAboveZero: number | boolean = false;

for(let i = 0; i< numbers.length;i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}
