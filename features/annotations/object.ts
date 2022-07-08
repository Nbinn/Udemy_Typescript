let profile = {
    Name: "nhan",
    age: 20,
    coords: {
        lat: 10.6,
        lng: 108
    },
    setAge(age: number){
        this.age = age
    }
}

let {age, Name}: {age: number; Name:string} = profile
let {coords: {lat,lng}}: {coords: {lat:number;lng:number}} = profile
console.log(`${Name}: ${age}`)