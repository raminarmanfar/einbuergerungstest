import {StateInfoModel} from '../models/state-info.model';
import {GermanStatesEnum} from '../models/enums/german-states.enum';
import {GermanStatesCapitalCityEnum} from '../models/enums/german-states-capital-city.enum';
import {StateQuestionModel} from '../models/state-question.model';

export class ConstantValues {
  public static readonly GERMAN_STATES: StateInfoModel[] = [
    {id: 1, name: GermanStatesEnum.BADEN_WUERTTEMBERG, capital: GermanStatesCapitalCityEnum.STUTTGART, population: 0},
    {id: 2, name: GermanStatesEnum.BAVARIA, capital: GermanStatesCapitalCityEnum.MUNICH, population: 0},
    {id: 3, name: GermanStatesEnum.BERLIN, capital: GermanStatesCapitalCityEnum.BERLIN, population: 0},
    {id: 4, name: GermanStatesEnum.BRANDENBURG, capital: GermanStatesCapitalCityEnum.POTSDAM, population: 0},
    {id: 5, name: GermanStatesEnum.BREMEN, capital: GermanStatesCapitalCityEnum.BREMEN, population: 0},
    {id: 6, name: GermanStatesEnum.HAMBURG, capital: GermanStatesCapitalCityEnum.HAMBURG, population: 0},
    {id: 7, name: GermanStatesEnum.HESSE, capital: GermanStatesCapitalCityEnum.WIESBADEN, population: 0},
    {id: 8, name: GermanStatesEnum.LOWER_SAXONY, capital: GermanStatesCapitalCityEnum.HANOVER, population: 0},
    {
      id: 9,
      name: GermanStatesEnum.MECKLENBURG_VORPOMMERN,
      capital: GermanStatesCapitalCityEnum.SCHWERIN,
      population: 0
    },
    {
      id: 10,
      name: GermanStatesEnum.NORTH_RHINE_WESTPHALIA,
      capital: GermanStatesCapitalCityEnum.DUESSELDORF,
      population: 0
    },
    {id: 11, name: GermanStatesEnum.RHINELAND_PALATINATE, capital: GermanStatesCapitalCityEnum.MAINZ, population: 0},
    {id: 12, name: GermanStatesEnum.SAARLAND, capital: GermanStatesCapitalCityEnum.SAARBRUECKEN, population: 0},
    {id: 13, name: GermanStatesEnum.SAXONY, capital: GermanStatesCapitalCityEnum.SAARBRUECKEN, population: 0},
    {id: 14, name: GermanStatesEnum.SAXONY_ANHALT, capital: GermanStatesCapitalCityEnum.MAGDEBURG, population: 0},
    {id: 15, name: GermanStatesEnum.SCHLESWIG_HOLSTEIN, capital: GermanStatesCapitalCityEnum.KIEL, population: 0},
    {id: 16, name: GermanStatesEnum.THURINGIA, capital: GermanStatesCapitalCityEnum.ERFURT, population: 0}
  ];

  public static readonly BAVARIA_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 2, correctAnswer: 2, questionImageUrl: 'q1-image'},
    {id: 2, stateId: 2, correctAnswer: 4},
    {id: 3, stateId: 2, correctAnswer: 3},
    {id: 4, stateId: 2, correctAnswer: 3},
    {id: 5, stateId: 2, correctAnswer: 2},
    {id: 6, stateId: 2, correctAnswer: 2},
    {id: 7, stateId: 2, correctAnswer: 4},
    {id: 8, stateId: 2, correctAnswer: 4, questionImageUrl: 'q8-image'},
    {id: 9, stateId: 2, correctAnswer: 4},
    {id: 10, stateId: 2, correctAnswer: 2}
  ];
}
