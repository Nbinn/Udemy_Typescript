interface vehicle{
    name: string,
    year: number,
    broken: boolean,
    summary(): string
}
interface reportable{
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}`
    }
}
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}
const printSummary = (vehicle: reportable):void => {
    console.log(vehicle.summary())
}

printSummary(oldCivic)
printSummary(drink)