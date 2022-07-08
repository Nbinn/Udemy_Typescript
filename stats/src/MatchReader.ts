import {dateStringToDate} from './Utils'
import {matchResult} from './Utils'
import {MatchData} from './MatchData'
import {CsvFileReader} from './CsvFileReader'

interface DataReader{
    readFile():void,
    data: string[][]
}


export class MatchReader{
    static fromCsv(filename: string){
        return new MatchReader(new CsvFileReader(filename))
    }
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