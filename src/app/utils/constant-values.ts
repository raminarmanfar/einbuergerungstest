import {StateInfoModel} from '../models/state-info.model';
import {GermanStatesEnum} from '../models/enums/german-states.enum';
import {GermanStatesCapitalCityEnum} from '../models/enums/german-states-capital-city.enum';
import {StateQuestionModel} from '../models/state-question.model';

export class ConstantValues {
  public static readonly BADEN_WUERTTEMBERG_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 1, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 1, correctAnswer: 2, questionImagesName: []},
    {id: 3, stateId: 1, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 1, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 1, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 1, correctAnswer: 3, questionImagesName: []},
    {id: 7, stateId: 1, correctAnswer: 2, questionImagesName: []},
    {id: 8, stateId: 1, correctAnswer: 2, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 1, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 1, correctAnswer: 4, questionImagesName: []}
  ];
  public static readonly BAVARIA_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 2, correctAnswer: 2, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 2, correctAnswer: 4, questionImagesName: []},
    {id: 3, stateId: 2, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 2, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 2, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 2, correctAnswer: 2, questionImagesName: []},
    {id: 7, stateId: 2, correctAnswer: 4, questionImagesName: []},
    {id: 8, stateId: 2, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 2, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 2, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly BERLIN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 3, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 3, correctAnswer: 3, questionImagesName: []},
    {id: 3, stateId: 3, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 3, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 3, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 3, correctAnswer: 4, questionImagesName: []},
    {id: 7, stateId: 3, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 3, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 3, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 3, correctAnswer: 3, questionImagesName: []}
  ];
  public static readonly BRANDENBURG_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 4, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 4, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 4, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 4, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 4, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 4, correctAnswer: 3, questionImagesName: []},
    {id: 7, stateId: 4, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 4, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 4, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 4, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly BREMEN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 5, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 3, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 4, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 7, stateId: 5, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 5, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 5, correctAnswer: 3, questionImagesName: []},
    {id: 10, stateId: 5, correctAnswer: 1, questionImagesName: []}
  ];
  public static readonly HAMBURG_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 6, correctAnswer: 2, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 6, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 6, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 6, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 6, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 6, correctAnswer: 4, questionImagesName: []},
    {id: 7, stateId: 6, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 6, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 6, correctAnswer: 2, questionImagesName: []},
    {id: 10, stateId: 6, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly HESSEN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 7, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 7, correctAnswer: 4, questionImagesName: []},
    {id: 3, stateId: 7, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 7, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 7, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 7, correctAnswer: 1, questionImagesName: []},
    {id: 7, stateId: 7, correctAnswer: 4, questionImagesName: []},
    {id: 8, stateId: 7, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 7, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 7, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly MECKLENBURG_VORPOMMERN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 8, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 8, correctAnswer: 2, questionImagesName: []},
    {id: 3, stateId: 8, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 8, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 8, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 8, correctAnswer: 1, questionImagesName: []},
    {id: 7, stateId: 8, correctAnswer: 2, questionImagesName: []},
    {id: 8, stateId: 8, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 8, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 8, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly NIEDERSACHSEN_VORPOMMERN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 9, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 9, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 9, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 9, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 9, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 9, correctAnswer: 1, questionImagesName: []},
    {id: 7, stateId: 9, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 9, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 9, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 9, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly NORTH_RHINE_WESTPHALIA_VORPOMMERN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 10, correctAnswer: 2, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 10, correctAnswer: 2, questionImagesName: []},
    {id: 3, stateId: 10, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 10, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 10, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 10, correctAnswer: 4, questionImagesName: []},
    {id: 7, stateId: 10, correctAnswer: 3, questionImagesName: []},
    {id: 8, stateId: 10, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 10, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 10, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly RHINELAND_PALATINATE_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 11, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 11, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 11, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 11, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 11, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 11, correctAnswer: 4, questionImagesName: []},
    {id: 7, stateId: 11, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 11, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 11, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 11, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SAARLAND_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 12, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 12, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 12, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 12, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 12, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 12, correctAnswer: 4, questionImagesName: []},
    {id: 7, stateId: 12, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 12, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 12, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 12, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SAXONY_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 13, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 13, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 13, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 13, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 13, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 13, correctAnswer: 1, questionImagesName: []},
    {id: 7, stateId: 13, correctAnswer: 2, questionImagesName: []},
    {id: 8, stateId: 13, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 13, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 13, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SAXONY_ANHALT_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 14, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 14, correctAnswer: 4, questionImagesName: []},
    {id: 3, stateId: 14, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 14, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 14, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 14, correctAnswer: 2, questionImagesName: []},
    {id: 7, stateId: 14, correctAnswer: 3, questionImagesName: []},
    {id: 8, stateId: 14, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 14, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 14, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SCHLESWIG_HOLSTEIN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 15, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 15, correctAnswer: 3, questionImagesName: []},
    {id: 3, stateId: 15, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 15, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 15, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 15, correctAnswer: 3, questionImagesName: []},
    {id: 7, stateId: 15, correctAnswer: 4, questionImagesName: []},
    {id: 8, stateId: 15, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 15, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 15, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly THURINGIA_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 15, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 15, correctAnswer: 4, questionImagesName: []},
    {id: 3, stateId: 15, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 15, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 15, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 15, correctAnswer: 3, questionImagesName: []},
    {id: 7, stateId: 15, correctAnswer: 2, questionImagesName: []},
    {id: 8, stateId: 15, correctAnswer: 2, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 15, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 15, correctAnswer: 2, questionImagesName: []}
  ];

  public static readonly GERMAN_STATES: StateInfoModel[] = [
    {
      id: 1,
      name: GermanStatesEnum.BADEN_WUERTTEMBERG,
      capital: GermanStatesCapitalCityEnum.STUTTGART,
      population: 0,
      stateTests: ConstantValues.BADEN_WUERTTEMBERG_STATE_QUESTIONS
    },
    {
      id: 2,
      name: GermanStatesEnum.BAVARIA,
      capital: GermanStatesCapitalCityEnum.MUNICH,
      population: 0,
      stateTests: ConstantValues.BAVARIA_STATE_QUESTIONS
    },
    {
      id: 3,
      name: GermanStatesEnum.BERLIN,
      capital: GermanStatesCapitalCityEnum.BERLIN,
      population: 0,
      stateTests: ConstantValues.BERLIN_STATE_QUESTIONS
    },
    {
      id: 4,
      name: GermanStatesEnum.BRANDENBURG,
      capital: GermanStatesCapitalCityEnum.POTSDAM,
      population: 0,
      stateTests: ConstantValues.BRANDENBURG_STATE_QUESTIONS
    },
    {
      id: 5,
      name: GermanStatesEnum.BREMEN,
      capital: GermanStatesCapitalCityEnum.BREMEN,
      population: 0,
      stateTests: ConstantValues.BREMEN_STATE_QUESTIONS
    },
    {
      id: 6,
      name: GermanStatesEnum.HAMBURG,
      capital: GermanStatesCapitalCityEnum.HAMBURG,
      population: 0,
      stateTests: ConstantValues.HAMBURG_STATE_QUESTIONS
    },
    {
      id: 7,
      name: GermanStatesEnum.HESSEN,
      capital: GermanStatesCapitalCityEnum.WIESBADEN,
      population: 0,
      stateTests: ConstantValues.HESSEN_STATE_QUESTIONS
    },
    {
      id: 8,
      name: GermanStatesEnum.MECKLENBURG_VORPOMMERN,
      capital: GermanStatesCapitalCityEnum.SCHWERIN,
      population: 0,
      stateTests: ConstantValues.MECKLENBURG_VORPOMMERN_STATE_QUESTIONS
    },
    {
      id: 9,
      name: GermanStatesEnum.NIEDERSACHSEN,
      capital: GermanStatesCapitalCityEnum.HANOVER,
      population: 0,
      stateTests: ConstantValues.NIEDERSACHSEN_VORPOMMERN_STATE_QUESTIONS
    },
    {
      id: 10,
      name: GermanStatesEnum.NORTH_RHINE_WESTPHALIA,
      capital: GermanStatesCapitalCityEnum.DUESSELDORF,
      population: 0,
      stateTests: ConstantValues.NORTH_RHINE_WESTPHALIA_VORPOMMERN_STATE_QUESTIONS
    },
    {
      id: 11,
      name: GermanStatesEnum.RHINELAND_PALATINATE,
      capital: GermanStatesCapitalCityEnum.MAINZ,
      population: 0,
      stateTests: ConstantValues.RHINELAND_PALATINATE_STATE_QUESTIONS
    },
    {
      id: 12,
      name: GermanStatesEnum.SAARLAND,
      capital: GermanStatesCapitalCityEnum.SAARBRUECKEN,
      population: 0,
      stateTests: ConstantValues.SAARLAND_STATE_QUESTIONS
    },
    {
      id: 13,
      name: GermanStatesEnum.SAXONY,
      capital: GermanStatesCapitalCityEnum.SAARBRUECKEN,
      population: 0,
      stateTests: ConstantValues.SAXONY_STATE_QUESTIONS
    },
    {
      id: 14,
      name: GermanStatesEnum.SAXONY_ANHALT,
      capital: GermanStatesCapitalCityEnum.MAGDEBURG,
      population: 0,
      stateTests: ConstantValues.SAXONY_ANHALT_STATE_QUESTIONS
    },
    {
      id: 15,
      name: GermanStatesEnum.SCHLESWIG_HOLSTEIN,
      capital: GermanStatesCapitalCityEnum.KIEL,
      population: 0,
      stateTests: ConstantValues.SCHLESWIG_HOLSTEIN_STATE_QUESTIONS
    },
    {
      id: 16,
      name: GermanStatesEnum.THURINGIA,
      capital: GermanStatesCapitalCityEnum.ERFURT,
      population: 0,
      stateTests: ConstantValues.THURINGIA_STATE_QUESTIONS
    }
  ];
}
