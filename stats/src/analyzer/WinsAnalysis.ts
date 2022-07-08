import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { matchResult } from "../Utils";
export class WinsAnalysis implements Analyzer{
    constructor(public team: string){}
    run(matches: MatchData[]): string{
        let win = 0;
        let lose = 0;
        let draw = 0;
        for(let match of matches){
            if(match[1] === this.team && match[5] === matchResult.Homewin){
                win++;
            }
            else if(match[2] === this.team && match[5] === matchResult.Awaywin){
                win++;
            }
            else if(match[1] === this.team && match[5] === matchResult.Awaywin){
                lose++;
            }
            else if(match[2] === this.team && match[5] === matchResult.Homewin){
                lose++;
            }
            else if((match[1] === this.team ||match[2] === this.team ) && match[5] === matchResult.Draw){
                draw++;
            }
        }
        return `Team ${this.team} won ${win} games, lose ${lose} games and draw ${draw} games`
    }
}