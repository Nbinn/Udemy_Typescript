const add = (a:number, b: number ) =>{
    return a + b
}

const sub = (a:number, b:number) =>{
    return a - b
}
const div = (a:number,b:number)=>{
    return a/b
}

const throwError = (message: string): void => {
    if(!message){
        throw new Error(message)
    }
}

const weatherToday = {
    date: new Date(),
    weather: "sunny"
}
const logWeather = (forecast: {date: Date, weather: string}) =>{
    console.log(forecast.date)
    console.log(forecast.weather)
}
const logWeather2 = ({date, weather}: {date: Date, weather: string}) =>{
    console.log(date)
    console.log(weather)
} 

logWeather(weatherToday)
logWeather2(weatherToday)