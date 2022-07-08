class Vehicle {
    
    constructor(public color:string){
        this.color = color
    }
    protected honk():void{
        console.log('beep beep')
    }
}
const vehicle = new Vehicle('blue')
console.log(vehicle.color)
class Car extends Vehicle{
    constructor(public wheels:number,color: string){
        super(color)
    }
    private drive(): void {
        console.log('vroom')
    }
    startDriving():void{
        console.log(`car have ${this.wheels} wheels and ${this.color}`)
        this.drive()
        this.honk()
    }
}
const car = new Car(4,'red')
car.startDriving()
