import {GermanStatesEnum} from './enums/german-states.enum';
import {GermanStatesCapitalCityEnum} from './enums/german-states-capital-city.enum';

export interface StateInfoModel {
  id: number;
  name: GermanStatesEnum;
  capital: GermanStatesCapitalCityEnum;
  population: number;
}
