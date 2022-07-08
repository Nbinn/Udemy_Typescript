import faker from 'faker'
import { Mappalbe } from './CustomMap'
export class User implements Mappalbe{
    name: string
    location:{
        lat: number,
        lng: number
    }
    color: string =  'red'
    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent():string{
        return `Username: ${this.name}`
    }
}
