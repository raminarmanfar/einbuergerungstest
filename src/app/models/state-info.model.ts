import {GermanStatesEnum} from './enums/german-states.enum';
import {GermanStatesCapitalCityEnum} from './enums/german-states-capital-city.enum';
import {TestQuestionModel} from './test-question.model';

export interface StateInfoModel {
  id: number;
  name: GermanStatesEnum;
  capital: GermanStatesCapitalCityEnum;
  population: number;
  stateTestQuestions: TestQuestionModel[];
}
