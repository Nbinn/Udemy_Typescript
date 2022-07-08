"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchresult = MatchReader_1.MatchReader.fromCsv('football.csv');
matchresult.load();
const summary = Summary_1.Summary.analysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchresult.matches);
