import { SurveyModel } from '../models/survey'

export interface LoadSurveys {
  loadById (): Promise<SurveyModel>
}
