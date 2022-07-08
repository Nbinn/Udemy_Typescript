import { Sorter } from "./Sorter"
// import { NumbersCollection } from "./NumbersCollection"
// import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"
// const number = new NumbersCollection([10,5,1,7,6,9,4,3,2,8])
// const character = new CharactersCollection('xaysscsweg')
const linklist = new LinkedList()
// const sorter = new Sorter(number)
// const sorter2 = new Sorter(character)
linklist.add(30)
linklist.add(600)
linklist.add(-40)
linklist.add(-200)
linklist.add(1)

const sorter = new Sorter(linklist)
sorter.sort()
linklist.print()
// sorter2.sort()
// sorter.sort()
// console.log(character.data)
// console.log(number.data)