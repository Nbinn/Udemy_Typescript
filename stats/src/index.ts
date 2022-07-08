import { matchResult } from './Utils'
import { MatchReader } from './MatchReader'
import {CsvFileReader} from './CsvFileReader'

const csvreadfile = new CsvFileReader('football.csv')
const matchresult = new MatchReader(csvreadfile)
matchresult.load()

let MUwin = 0;
let MULose = 0;
let MUdraw = 0;
for(let match of matchresult.matches){
    if(match[1] === "Man United" && match[5] === matchResult.Homewin){
        MUwin++;
    }
    else if(match[2] === "Man United" && match[5] === matchResult.Awaywin){
        MUwin++;
    }
    else if(match[1] === "Man United" && match[5] === matchResult.Awaywin){
        MULose++;
    }
    else if(match[2] === "Man United" && match[5] === matchResult.Homewin){
        MULose++;
    }
    else if((match[1] === "Man United" ||match[2] ==="Man United" ) && match[5] === matchResult.Draw){
        MUdraw++;
    }
}
console.log(`Manchester United won ${MUwin} games,lose ${MULose} games and draw ${MUdraw} games`)