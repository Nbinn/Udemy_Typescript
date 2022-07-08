"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = exports.matchResult = void 0;
var matchResult;
(function (matchResult) {
    matchResult["Homewin"] = "H";
    matchResult["Awaywin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult = exports.matchResult || (exports.matchResult = {}));
const dateStringToDate = (dateString) => {
    const date = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(date[2], date[1] - 1, date[0]);
};
exports.dateStringToDate = dateStringToDate;
