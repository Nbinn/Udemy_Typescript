import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer{
    run(matches: MatchData[]):string
}
export interface OutputTarget{
    print(report: string):void
}

export class Summary{
    static analysisWithHtmlReport(team: string):Summary{
        return new Summary(new WinsAnalysis(team), new HtmlReport())
    }
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

    buildAndPrintReport(matches: MatchData[]): void{
        const result = this.analyzer.run(matches)
        this.outputTarget.print(result)
    }
}