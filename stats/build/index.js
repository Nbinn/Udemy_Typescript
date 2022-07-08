"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const csvreadfile = new CsvFileReader_1.CsvFileReader('football.csv');
const matchresult = new MatchReader_1.MatchReader(csvreadfile);
matchresult.load();
let MUwin = 0;
let MULose = 0;
let MUdraw = 0;
for (let match of matchresult.matches) {
    if (match[1] === "Man United" && match[5] === Utils_1.matchResult.Homewin) {
        MUwin++;
    }
    else if (match[2] === "Man United" && match[5] === Utils_1.matchResult.Awaywin) {
        MUwin++;
    }
    else if (match[1] === "Man United" && match[5] === Utils_1.matchResult.Awaywin) {
        MULose++;
    }
    else if (match[2] === "Man United" && match[5] === Utils_1.matchResult.Homewin) {
        MULose++;
    }
    else if ((match[1] === "Man United" || match[2] === "Man United") && match[5] === Utils_1.matchResult.Draw) {
        MUdraw++;
    }
}
console.log(`Manchester United won ${MUwin} games,lose ${MULose} games and draw ${MUdraw} games`);
