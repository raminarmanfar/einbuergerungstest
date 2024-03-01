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
    {id: 1, stateId: 3, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 3, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 3, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 3, correctAnswer: 3, questionImagesName: []},
    {id: 5, stateId: 3, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 3, correctAnswer: 3, questionImagesName: []},
    {id: 7, stateId: 3, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 3, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 3, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 3, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly BREMEN_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 4, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 4, correctAnswer: 2, questionImagesName: []},
    {id: 3, stateId: 4, correctAnswer: 2, questionImagesName: []},
    {id: 4, stateId: 4, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 4, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 4, correctAnswer: 2, questionImagesName: []},
    {id: 7, stateId: 4, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 4, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 4, correctAnswer: 3, questionImagesName: []},
    {id: 10, stateId: 4, correctAnswer: 1, questionImagesName: []}
  ];
  public static readonly HAMBURG_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 5, correctAnswer: 2, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 5, correctAnswer: 1, questionImagesName: []},
    {id: 3, stateId: 5, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 5, correctAnswer: 4, questionImagesName: []},
    {id: 7, stateId: 5, correctAnswer: 1, questionImagesName: []},
    {id: 8, stateId: 5, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 5, correctAnswer: 2, questionImagesName: []},
    {id: 10, stateId: 5, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly HESSE_STATE_QUESTIONS: StateQuestionModel[] = [
    {id: 1, stateId: 7, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 7, correctAnswer: 4, questionImagesName: []},
    {id: 3, stateId: 7, correctAnswer: 3, questionImagesName: []},
    {id: 4, stateId: 7, correctAnswer: 2, questionImagesName: []},
    {id: 5, stateId: 7, correctAnswer: 2, questionImagesName: []},
    {id: 6, stateId: 7, correctAnswer: 1, questionImagesName: []},
    {id: 7, stateId: 7, correctAnswer: 4, questionImagesName: []},
    {id: 8, stateId: 7, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 7, correctAnswer: 4, questionImagesName: []},
    {id: 10, stateId: 7, correctAnswer: 2, questionImagesName: []}
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
      name: GermanStatesEnum.HESSE,
      capital: GermanStatesCapitalCityEnum.WIESBADEN,
      population: 0,
      stateTests: ConstantValues.HESSE_STATE_QUESTIONS
    },
    {
      id: 8,
      name: GermanStatesEnum.LOWER_SAXONY,
      capital: GermanStatesCapitalCityEnum.HANOVER,
      population: 0,
      stateTests: []
    },
    {
      id: 9,
      name: GermanStatesEnum.MECKLENBURG_VORPOMMERN,
      capital: GermanStatesCapitalCityEnum.SCHWERIN,
      population: 0,
      stateTests: []
    },
    {
      id: 10,
      name: GermanStatesEnum.NORTH_RHINE_WESTPHALIA,
      capital: GermanStatesCapitalCityEnum.DUESSELDORF,
      population: 0,
      stateTests: []
    },
    {
      id: 11,
      name: GermanStatesEnum.RHINELAND_PALATINATE,
      capital: GermanStatesCapitalCityEnum.MAINZ,
      population: 0,
      stateTests: []
    },
    {
      id: 12,
      name: GermanStatesEnum.SAARLAND,
      capital: GermanStatesCapitalCityEnum.SAARBRUECKEN,
      population: 0,
      stateTests: []
    },
    {
      id: 13,
      name: GermanStatesEnum.SAXONY,
      capital: GermanStatesCapitalCityEnum.SAARBRUECKEN,
      population: 0,
      stateTests: []
    },
    {
      id: 14,
      name: GermanStatesEnum.SAXONY_ANHALT,
      capital: GermanStatesCapitalCityEnum.MAGDEBURG,
      population: 0,
      stateTests: []
    },
    {
      id: 15,
      name: GermanStatesEnum.SCHLESWIG_HOLSTEIN,
      capital: GermanStatesCapitalCityEnum.KIEL,
      population: 0,
      stateTests: []
    },
    {
      id: 16,
      name: GermanStatesEnum.THURINGIA,
      capital: GermanStatesCapitalCityEnum.ERFURT,
      population: 0,
      stateTests: []
    }
  ];
}
