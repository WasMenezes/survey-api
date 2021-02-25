import { SurveyAnswerModel } from './survey-answer'

export interface SurveyModel {
  id: string
  question: string
  answers: SurveyAnswerModel[]
  date: Date
}
