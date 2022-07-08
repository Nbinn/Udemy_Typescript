"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const Utils_1 = require("../Utils");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let win = 0;
        let lose = 0;
        let draw = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === Utils_1.matchResult.Homewin) {
                win++;
            }
            else if (match[2] === this.team && match[5] === Utils_1.matchResult.Awaywin) {
                win++;
            }
            else if (match[1] === this.team && match[5] === Utils_1.matchResult.Awaywin) {
                lose++;
            }
            else if (match[2] === this.team && match[5] === Utils_1.matchResult.Homewin) {
                lose++;
            }
            else if ((match[1] === this.team || match[2] === this.team) && match[5] === Utils_1.matchResult.Draw) {
                draw++;
            }
        }
        return `Team ${this.team} won ${win} games, lose ${lose} games and draw ${draw} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
