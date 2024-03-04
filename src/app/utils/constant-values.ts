import {StateInfoModel} from '../models/state-info.model';
import {GermanStatesEnum} from '../models/enums/german-states.enum';
import {GermanStatesCapitalCityEnum} from '../models/enums/german-states-capital-city.enum';
import {StateTestQuestionModel} from '../models/state-test-question.model';
import {TestQuestionModel} from '../models/test-question.model';

export class ConstantValues {
  public static readonly DEUTSCHLAND_QUESTIONS: TestQuestionModel[] = [
    {id: 1, correctAnswer: 4},
    {id: 2, correctAnswer: 2},
    {id: 3, correctAnswer: 1},
    {id: 4, correctAnswer: 3},
    {id: 5, correctAnswer: 2},
    {id: 6, correctAnswer: 4},
    {id: 7, correctAnswer: 1},
    {id: 8, correctAnswer: 2},
    {id: 9, correctAnswer: 3},
    {id: 10, correctAnswer: 4},
    {id: 11, correctAnswer: 1},
    {id: 12, correctAnswer: 3},
    {id: 13, correctAnswer: 2},
    {id: 14, correctAnswer: 2},
    {id: 15, correctAnswer: 2},
    {id: 16, correctAnswer: 1},
    {id: 17, correctAnswer: 4},
    {id: 18, correctAnswer: 1},
    {id: 19, correctAnswer: 1},
    {id: 20, correctAnswer: 4},
    {id: 21, correctAnswer: 1, questionImagesName: ['q21_1.png']},
    {id: 22, correctAnswer: 3},
    {id: 23, correctAnswer: 1},
    {id: 24, correctAnswer: 3},
    {id: 25, correctAnswer: 2},
    {id: 26, correctAnswer: 2},
    {id: 27, correctAnswer: 2},
    {id: 28, correctAnswer: 3},
    {id: 29, correctAnswer: 2},
    {id: 30, correctAnswer: 2},
    {id: 31, correctAnswer: 2},
    {id: 32, correctAnswer: 3},
    {id: 33, correctAnswer: 1},
    {id: 34, correctAnswer: 3},
    {id: 35, correctAnswer: 2},
    {id: 36, correctAnswer: 1},
    {id: 37, correctAnswer: 4},
    {id: 38, correctAnswer: 2},
    {id: 39, correctAnswer: 4},
    {id: 40, correctAnswer: 2},
    {id: 41, correctAnswer: 1},
    {id: 42, correctAnswer: 2},
    {id: 43, correctAnswer: 2},
    {id: 44, correctAnswer: 2},
    {id: 45, correctAnswer: 1},
    {id: 46, correctAnswer: 1},
    {id: 47, correctAnswer: 1},
    {id: 48, correctAnswer: 3},
    {id: 49, correctAnswer: 2},
    {id: 50, correctAnswer: 2},
    {id: 51, correctAnswer: 3},
    {id: 52, correctAnswer: 1},
    {id: 53, correctAnswer: 4},
    {id: 54, correctAnswer: 4},
    {id: 55, correctAnswer: 1, questionImagesName: ['q55_1.png']},
    {id: 56, correctAnswer: 2},
    {id: 57, correctAnswer: 3},
    {id: 58, correctAnswer: 2},
    {id: 59, correctAnswer: 2},
    {id: 60, correctAnswer: 2},
    {id: 61, correctAnswer: 4},
    {id: 62, correctAnswer: 2},
    {id: 63, correctAnswer: 2},
    {id: 64, correctAnswer: 4},
    {id: 65, correctAnswer: 4},
    {id: 66, correctAnswer: 4},
    {id: 67, correctAnswer: 4},
    {id: 68, correctAnswer: 4},
    {id: 69, correctAnswer: 3},
    {id: 70, correctAnswer: 4, questionImagesName: ['q70_1.png']},
    {id: 71, correctAnswer: 2},
    {id: 72, correctAnswer: 4},
    {id: 73, correctAnswer: 1},
    {id: 74, correctAnswer: 3},
    {id: 75, correctAnswer: 1},
    {id: 76, correctAnswer: 4},
    {id: 77, correctAnswer: 4},
    {id: 78, correctAnswer: 3},
    {id: 79, correctAnswer: 4},
    {id: 80, correctAnswer: 3},
    {id: 81, correctAnswer: 4},
    {id: 82, correctAnswer: 3},
    {id: 83, correctAnswer: 3},
    {id: 84, correctAnswer: 3},
    {id: 85, correctAnswer: 3},
    {id: 86, correctAnswer: 1},
    {id: 87, correctAnswer: 2},
    {id: 88, correctAnswer: 1},
    {id: 89, correctAnswer: 3},
    {id: 90, correctAnswer: 1},
    {id: 91, correctAnswer: 3},
    {id: 92, correctAnswer: 4},
    {id: 93, correctAnswer: 1},
    {id: 94, correctAnswer: 2},
    {id: 95, correctAnswer: 2},
    {id: 96, correctAnswer: 2},
    {id: 97, correctAnswer: 1},
    {id: 98, correctAnswer: 1},
    {id: 99, correctAnswer: 1},
    {id: 100, correctAnswer: 2},
  ];
  public static readonly DEUTSCHLAND_STATES: StateInfoModel = {
    id: 0,
    name: GermanStatesEnum.DEUTSCHLAND,
    capital: GermanStatesCapitalCityEnum.BERLIN,
    population: 85000000,
    stateTests: ConstantValues.DEUTSCHLAND_QUESTIONS
  };

  public static readonly BADEN_WUERTTEMBERG_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 1, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 1, correctAnswer: 2},
    {id: 3, stateId: 1, correctAnswer: 3},
    {id: 4, stateId: 1, correctAnswer: 2},
    {id: 5, stateId: 1, correctAnswer: 2},
    {id: 6, stateId: 1, correctAnswer: 3},
    {id: 7, stateId: 1, correctAnswer: 2},
    {id: 8, stateId: 1, correctAnswer: 2, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 1, correctAnswer: 4},
    {id: 10, stateId: 1, correctAnswer: 4}
  ];
  public static readonly BAVARIA_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 2, correctAnswer: 2, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 2, correctAnswer: 4},
    {id: 3, stateId: 2, correctAnswer: 3},
    {id: 4, stateId: 2, correctAnswer: 3},
    {id: 5, stateId: 2, correctAnswer: 2},
    {id: 6, stateId: 2, correctAnswer: 2},
    {id: 7, stateId: 2, correctAnswer: 4},
    {id: 8, stateId: 2, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 2, correctAnswer: 4},
    {id: 10, stateId: 2, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly BERLIN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 3, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 3, correctAnswer: 3},
    {id: 3, stateId: 3, correctAnswer: 3},
    {id: 4, stateId: 3, correctAnswer: 2},
    {id: 5, stateId: 3, correctAnswer: 2},
    {id: 6, stateId: 3, correctAnswer: 4},
    {id: 7, stateId: 3, correctAnswer: 1},
    {id: 8, stateId: 3, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 3, correctAnswer: 4},
    {id: 10, stateId: 3, correctAnswer: 3, questionImagesName: []}
  ];
  public static readonly BRANDENBURG_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 4, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 4, correctAnswer: 1},
    {id: 3, stateId: 4, correctAnswer: 3},
    {id: 4, stateId: 4, correctAnswer: 3},
    {id: 5, stateId: 4, correctAnswer: 2},
    {id: 6, stateId: 4, correctAnswer: 3},
    {id: 7, stateId: 4, correctAnswer: 1},
    {id: 8, stateId: 4, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 4, correctAnswer: 4},
    {id: 10, stateId: 4, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly BREMEN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 5, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 5, correctAnswer: 2},
    {id: 3, stateId: 5, correctAnswer: 2},
    {id: 4, stateId: 5, correctAnswer: 2},
    {id: 5, stateId: 5, correctAnswer: 2},
    {id: 6, stateId: 5, correctAnswer: 2},
    {id: 7, stateId: 5, correctAnswer: 1},
    {id: 8, stateId: 5, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 5, correctAnswer: 3},
    {id: 10, stateId: 5, correctAnswer: 1, questionImagesName: []}
  ];
  public static readonly HAMBURG_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 6, correctAnswer: 2, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 6, correctAnswer: 1},
    {id: 3, stateId: 6, correctAnswer: 3},
    {id: 4, stateId: 6, correctAnswer: 2},
    {id: 5, stateId: 6, correctAnswer: 2},
    {id: 6, stateId: 6, correctAnswer: 4},
    {id: 7, stateId: 6, correctAnswer: 1},
    {id: 8, stateId: 6, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 6, correctAnswer: 2},
    {id: 10, stateId: 6, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly HESSEN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 7, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 7, correctAnswer: 4},
    {id: 3, stateId: 7, correctAnswer: 3},
    {id: 4, stateId: 7, correctAnswer: 3},
    {id: 5, stateId: 7, correctAnswer: 2},
    {id: 6, stateId: 7, correctAnswer: 1},
    {id: 7, stateId: 7, correctAnswer: 4},
    {id: 8, stateId: 7, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 7, correctAnswer: 4},
    {id: 10, stateId: 7, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly MECKLENBURG_VORPOMMERN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 8, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 8, correctAnswer: 2},
    {id: 3, stateId: 8, correctAnswer: 3},
    {id: 4, stateId: 8, correctAnswer: 2},
    {id: 5, stateId: 8, correctAnswer: 2},
    {id: 6, stateId: 8, correctAnswer: 1},
    {id: 7, stateId: 8, correctAnswer: 2},
    {id: 8, stateId: 8, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 8, correctAnswer: 4},
    {id: 10, stateId: 8, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly NIEDERSACHSEN_VORPOMMERN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 9, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 9, correctAnswer: 1},
    {id: 3, stateId: 9, correctAnswer: 3},
    {id: 4, stateId: 9, correctAnswer: 2},
    {id: 5, stateId: 9, correctAnswer: 2},
    {id: 6, stateId: 9, correctAnswer: 1},
    {id: 7, stateId: 9, correctAnswer: 1},
    {id: 8, stateId: 9, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 9, correctAnswer: 4},
    {id: 10, stateId: 9, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly NORTH_RHINE_WESTPHALIA_VORPOMMERN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 10, correctAnswer: 2, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 10, correctAnswer: 2},
    {id: 3, stateId: 10, correctAnswer: 3},
    {id: 4, stateId: 10, correctAnswer: 2},
    {id: 5, stateId: 10, correctAnswer: 2},
    {id: 6, stateId: 10, correctAnswer: 4},
    {id: 7, stateId: 10, correctAnswer: 3},
    {id: 8, stateId: 10, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 10, correctAnswer: 4},
    {id: 10, stateId: 10, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly RHINELAND_PALATINATE_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 11, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 11, correctAnswer: 1},
    {id: 3, stateId: 11, correctAnswer: 3},
    {id: 4, stateId: 11, correctAnswer: 3},
    {id: 5, stateId: 11, correctAnswer: 2},
    {id: 6, stateId: 11, correctAnswer: 4},
    {id: 7, stateId: 11, correctAnswer: 1},
    {id: 8, stateId: 11, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 11, correctAnswer: 4},
    {id: 10, stateId: 11, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SAARLAND_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 12, correctAnswer: 1, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 12, correctAnswer: 1},
    {id: 3, stateId: 12, correctAnswer: 3},
    {id: 4, stateId: 12, correctAnswer: 3},
    {id: 5, stateId: 12, correctAnswer: 2},
    {id: 6, stateId: 12, correctAnswer: 4},
    {id: 7, stateId: 12, correctAnswer: 1},
    {id: 8, stateId: 12, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 12, correctAnswer: 4},
    {id: 10, stateId: 12, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SAXONY_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 13, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 13, correctAnswer: 1},
    {id: 3, stateId: 13, correctAnswer: 3},
    {id: 4, stateId: 13, correctAnswer: 3},
    {id: 5, stateId: 13, correctAnswer: 2},
    {id: 6, stateId: 13, correctAnswer: 1},
    {id: 7, stateId: 13, correctAnswer: 2},
    {id: 8, stateId: 13, correctAnswer: 4, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 13, correctAnswer: 4},
    {id: 10, stateId: 13, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SAXONY_ANHALT_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 14, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 14, correctAnswer: 4},
    {id: 3, stateId: 14, correctAnswer: 3},
    {id: 4, stateId: 14, correctAnswer: 2},
    {id: 5, stateId: 14, correctAnswer: 2},
    {id: 6, stateId: 14, correctAnswer: 2},
    {id: 7, stateId: 14, correctAnswer: 3},
    {id: 8, stateId: 14, correctAnswer: 3, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 14, correctAnswer: 4},
    {id: 10, stateId: 14, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly SCHLESWIG_HOLSTEIN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 15, correctAnswer: 3, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 15, correctAnswer: 3},
    {id: 3, stateId: 15, correctAnswer: 3},
    {id: 4, stateId: 15, correctAnswer: 2},
    {id: 5, stateId: 15, correctAnswer: 2},
    {id: 6, stateId: 15, correctAnswer: 3},
    {id: 7, stateId: 15, correctAnswer: 4},
    {id: 8, stateId: 15, correctAnswer: 1, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 15, correctAnswer: 4},
    {id: 10, stateId: 15, correctAnswer: 2, questionImagesName: []}
  ];
  public static readonly THURINGIA_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 15, correctAnswer: 4, questionImagesName: ['q1_1.png']},
    {id: 2, stateId: 15, correctAnswer: 4},
    {id: 3, stateId: 15, correctAnswer: 3},
    {id: 4, stateId: 15, correctAnswer: 3},
    {id: 5, stateId: 15, correctAnswer: 2},
    {id: 6, stateId: 15, correctAnswer: 3},
    {id: 7, stateId: 15, correctAnswer: 2},
    {id: 8, stateId: 15, correctAnswer: 2, questionImagesName: ['q8_1.png']},
    {id: 9, stateId: 15, correctAnswer: 4},
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
