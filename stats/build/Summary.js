"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static analysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const result = this.analyzer.run(matches);
        this.outputTarget.print(result);
    }
}
exports.Summary = Summary;
