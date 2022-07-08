export class CharactersCollection{
    constructor(public data: string){}

    get length(): number{
        return this.data.length
    }

    compare(leftIndex: number, rightIndex:number):boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }
    swap(leftIndex: number, rightIndex: number):void{
        const character = this.data.split('')

        const temp = character[leftIndex]
        character[leftIndex] = character[rightIndex]
        character[rightIndex] = temp

        this.data = character.join('')
    }
}