import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchresult = MatchReader.fromCsv('football.csv')
matchresult.load()

const summary = Summary.analysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchresult.matches)
