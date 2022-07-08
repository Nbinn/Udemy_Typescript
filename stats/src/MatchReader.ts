import {dateStringToDate} from './Utils'
import {matchResult} from './Utils'
interface DataReader{
    readFile():void,
    data: string[][]
}
type MatchData = [Date,string,string,number,number,matchResult,string]

export class MatchReader{
    matches: MatchData[] = []
    constructor(public reader:DataReader) {}
    load():void{
        this.reader.readFile()
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as matchResult,
                row[6]
            ]
        })
    }
}