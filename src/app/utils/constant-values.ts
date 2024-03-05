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
    {id: 21, correctAnswer: 1, hasImage: true},
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
    {id: 55, correctAnswer: 1, hasImage: true},
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
    {id: 70, correctAnswer: 4, hasImage: true},
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
    {id: 101, correctAnswer: 2},
    {id: 102, correctAnswer: 2},
    {id: 103, correctAnswer: 2},
    {id: 104, correctAnswer: 4},
    {id: 105, correctAnswer: 4},
    {id: 106, correctAnswer: 4},
    {id: 107, correctAnswer: 2},
    {id: 108, correctAnswer: 2},
    {id: 109, correctAnswer: 2},
    {id: 110, correctAnswer: 3},
    {id: 111, correctAnswer: 1},
    {id: 112, correctAnswer: 2},
    {id: 113, correctAnswer: 1},
    {id: 114, correctAnswer: 2},
    {id: 115, correctAnswer: 3},
    {id: 116, correctAnswer: 4},
    {id: 117, correctAnswer: 3},
    {id: 118, correctAnswer: 4},
    {id: 119, correctAnswer: 3},
    {id: 120, correctAnswer: 3},
    {id: 121, correctAnswer: 1},
    {id: 122, correctAnswer: 1},
    {id: 123, correctAnswer: 3},
    {id: 124, correctAnswer: 3},
    {id: 125, correctAnswer: 2},
    {id: 126, correctAnswer: 1},
    {id: 127, correctAnswer: 3},
    {id: 128, correctAnswer: 1},
    {id: 129, correctAnswer: 3},
    {id: 130, correctAnswer: 1, hasImage: true},
    {id: 131, correctAnswer: 3},
    {id: 132, correctAnswer: 2},
    {id: 133, correctAnswer: 2},
    {id: 134, correctAnswer: 1},
    {id: 135, correctAnswer: 4},
    {id: 136, correctAnswer: 2},
    {id: 137, correctAnswer: 3},
    {id: 138, correctAnswer: 3},
    {id: 139, correctAnswer: 2},
    {id: 140, correctAnswer: 1},
    {id: 141, correctAnswer: 1},
    {id: 142, correctAnswer: 2},
    {id: 143, correctAnswer: 1},
    {id: 144, correctAnswer: 2},
    {id: 145, correctAnswer: 1},
    {id: 146, correctAnswer: 4},
    {id: 147, correctAnswer: 2},
    {id: 148, correctAnswer: 4},
    {id: 149, correctAnswer: 2},
    {id: 150, correctAnswer: 2},
    {id: 151, correctAnswer: 3},
    {id: 152, correctAnswer: 3},
    {id: 153, correctAnswer: 4},
    {id: 154, correctAnswer: 2},
    {id: 155, correctAnswer: 3},
    {id: 156, correctAnswer: 3},
    {id: 157, correctAnswer: 1},
    {id: 158, correctAnswer: 1},
    {id: 159, correctAnswer: 1},
    {id: 160, correctAnswer: 2},
    {id: 161, correctAnswer: 1},
    {id: 162, correctAnswer: 4},
    {id: 163, correctAnswer: 3},
    {id: 164, correctAnswer: 3},
    {id: 165, correctAnswer: 1},
    {id: 166, correctAnswer: 1},
    {id: 167, correctAnswer: 4},
    {id: 168, correctAnswer: 4},
    {id: 169, correctAnswer: 3},
    {id: 170, correctAnswer: 3},
    {id: 171, correctAnswer: 4},
    {id: 172, correctAnswer: 4},
    {id: 173, correctAnswer: 3},
    {id: 174, correctAnswer: 2},
    {id: 175, correctAnswer: 2},
    {id: 176, correctAnswer: 3, hasImage: true},
    {id: 177, correctAnswer: 2},
    {id: 178, correctAnswer: 4},
    {id: 179, correctAnswer: 2},
    {id: 180, correctAnswer: 3},
    {id: 181, correctAnswer: 2, hasImage: true},
    {id: 182, correctAnswer: 1},
    {id: 183, correctAnswer: 2},
    {id: 184, correctAnswer: 3},
    {id: 185, correctAnswer: 1},
    {id: 186, correctAnswer: 2},
    {id: 187, correctAnswer: 3, hasImage: true},
    {id: 188, correctAnswer: 4},
    {id: 189, correctAnswer: 3},
    {id: 190, correctAnswer: 4},
    {id: 191, correctAnswer: 2},
    {id: 192, correctAnswer: 1},
    {id: 193, correctAnswer: 3},
    {id: 194, correctAnswer: 1},
    {id: 195, correctAnswer: 2},
    {id: 196, correctAnswer: 1},
    {id: 197, correctAnswer: 1},
    {id: 198, correctAnswer: 3},
    {id: 199, correctAnswer: 2},
    {id: 200, correctAnswer: 3},
    {id: 201, correctAnswer: 2},
    {id: 202, correctAnswer: 2},
    {id: 203, correctAnswer: 2},
    {id: 204, correctAnswer: 2},
    {id: 205, correctAnswer: 1},
    {id: 206, correctAnswer: 2},
    {id: 207, correctAnswer: 3},
    {id: 208, correctAnswer: 3},
    {id: 209, correctAnswer: 4, hasImage: true},
    {id: 210, correctAnswer: 2},
    {id: 211, correctAnswer: 2},
    {id: 212, correctAnswer: 3},
    {id: 213, correctAnswer: 3},
    {id: 214, correctAnswer: 1},
    {id: 215, correctAnswer: 2},
    {id: 216, correctAnswer: 2, hasImage: true},
    {id: 217, correctAnswer: 3},
    {id: 218, correctAnswer: 2},
    {id: 219, correctAnswer: 4},
    {id: 220, correctAnswer: 4},
    {id: 221, correctAnswer: 1},
    {id: 222, correctAnswer: 4},
    {id: 223, correctAnswer: 3},
    {id: 224, correctAnswer: 2},
    {id: 225, correctAnswer: 4},
    {id: 226, correctAnswer: 1, hasImage: true},
    {id: 227, correctAnswer: 2},
    {id: 228, correctAnswer: 4},
    {id: 229, correctAnswer: 4},
    {id: 230, correctAnswer: 1},
    {id: 231, correctAnswer: 4},
    {id: 232, correctAnswer: 4},
    {id: 233, correctAnswer: 1},
    {id: 234, correctAnswer: 4},
    {id: 235, correctAnswer: 3, hasImage: true},
    {id: 236, correctAnswer: 4},
    {id: 237, correctAnswer: 2},
    {id: 238, correctAnswer: 2},
    {id: 239, correctAnswer: 2},
    {id: 240, correctAnswer: 3},
    {id: 241, correctAnswer: 3},
    {id: 242, correctAnswer: 3},
    {id: 243, correctAnswer: 2},
    {id: 244, correctAnswer: 1},
    {id: 245, correctAnswer: 4},
    {id: 246, correctAnswer: 2},
    {id: 247, correctAnswer: 3},
    {id: 248, correctAnswer: 2},
    {id: 249, correctAnswer: 2},
    {id: 250, correctAnswer: 2},
    {id: 251, correctAnswer: 4},
    {id: 252, correctAnswer: 1},
    {id: 253, correctAnswer: 1},
    {id: 254, correctAnswer: 4},
    {id: 255, correctAnswer: 3},
    {id: 256, correctAnswer: 4},
    {id: 257, correctAnswer: 2},
    {id: 258, correctAnswer: 2},
    {id: 259, correctAnswer: 2},
    {id: 260, correctAnswer: 4},
    {id: 261, correctAnswer: 2},
    {id: 262, correctAnswer: 1},
    {id: 263, correctAnswer: 1},
    {id: 264, correctAnswer: 1},
    {id: 265, correctAnswer: 4},
    {id: 266, correctAnswer: 2},
    {id: 267, correctAnswer: 1},
    {id: 268, correctAnswer: 2},
    {id: 269, correctAnswer: 2},
    {id: 270, correctAnswer: 3},
    {id: 271, correctAnswer: 2},
    {id: 272, correctAnswer: 4},
    {id: 273, correctAnswer: 4},
    {id: 274, correctAnswer: 2},
    {id: 275, correctAnswer: 4},
    {id: 276, correctAnswer: 4},
    {id: 277, correctAnswer: 4},
    {id: 278, correctAnswer: 1},
    {id: 279, correctAnswer: 3},
    {id: 280, correctAnswer: 3},
    {id: 281, correctAnswer: 2},
    {id: 282, correctAnswer: 3},
    {id: 283, correctAnswer: 2},
    {id: 284, correctAnswer: 3},
    {id: 285, correctAnswer: 1},
    {id: 286, correctAnswer: 1},
    {id: 287, correctAnswer: 3},
    {id: 288, correctAnswer: 3},
    {id: 289, correctAnswer: 3},
    {id: 290, correctAnswer: 2},
    {id: 291, correctAnswer: 2},
    {id: 292, correctAnswer: 3},
    {id: 293, correctAnswer: 3},
    {id: 294, correctAnswer: 1},
    {id: 295, correctAnswer: 2},
    {id: 296, correctAnswer: 3},
    {id: 297, correctAnswer: 4},
    {id: 298, correctAnswer: 1},
    {id: 299, correctAnswer: 2},
    {id: 300, correctAnswer: 1}
  ];

  public static readonly DEUTSCHLAND_STATES: StateInfoModel = {
    id: 0,
    name: GermanStatesEnum.DEUTSCHLAND,
    capital: GermanStatesCapitalCityEnum.BERLIN,
    population: 85000000,
    stateTests: ConstantValues.DEUTSCHLAND_QUESTIONS
  };

  public static readonly BADEN_WUERTTEMBERG_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 1, correctAnswer: 1, hasImage: true},
    {id: 2, stateId: 1, correctAnswer: 2},
    {id: 3, stateId: 1, correctAnswer: 3},
    {id: 4, stateId: 1, correctAnswer: 2},
    {id: 5, stateId: 1, correctAnswer: 2},
    {id: 6, stateId: 1, correctAnswer: 3},
    {id: 7, stateId: 1, correctAnswer: 2},
    {id: 8, stateId: 1, correctAnswer: 2, hasImage: true},
    {id: 9, stateId: 1, correctAnswer: 4},
    {id: 10, stateId: 1, correctAnswer: 4}
  ];
  public static readonly BAVARIA_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 2, correctAnswer: 2, hasImage: true},
    {id: 2, stateId: 2, correctAnswer: 4},
    {id: 3, stateId: 2, correctAnswer: 3},
    {id: 4, stateId: 2, correctAnswer: 3},
    {id: 5, stateId: 2, correctAnswer: 2},
    {id: 6, stateId: 2, correctAnswer: 2},
    {id: 7, stateId: 2, correctAnswer: 4},
    {id: 8, stateId: 2, correctAnswer: 4, hasImage: true},
    {id: 9, stateId: 2, correctAnswer: 4},
    {id: 10, stateId: 2, correctAnswer: 2}
  ];
  public static readonly BERLIN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 3, correctAnswer: 4, hasImage: true},
    {id: 2, stateId: 3, correctAnswer: 3},
    {id: 3, stateId: 3, correctAnswer: 3},
    {id: 4, stateId: 3, correctAnswer: 2},
    {id: 5, stateId: 3, correctAnswer: 2},
    {id: 6, stateId: 3, correctAnswer: 4},
    {id: 7, stateId: 3, correctAnswer: 1},
    {id: 8, stateId: 3, correctAnswer: 4, hasImage: true},
    {id: 9, stateId: 3, correctAnswer: 4},
    {id: 10, stateId: 3, correctAnswer: 3}
  ];
  public static readonly BRANDENBURG_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 4, correctAnswer: 1, hasImage: true},
    {id: 2, stateId: 4, correctAnswer: 1},
    {id: 3, stateId: 4, correctAnswer: 3},
    {id: 4, stateId: 4, correctAnswer: 3},
    {id: 5, stateId: 4, correctAnswer: 2},
    {id: 6, stateId: 4, correctAnswer: 3},
    {id: 7, stateId: 4, correctAnswer: 1},
    {id: 8, stateId: 4, correctAnswer: 4, hasImage: true},
    {id: 9, stateId: 4, correctAnswer: 4},
    {id: 10, stateId: 4, correctAnswer: 2}
  ];
  public static readonly BREMEN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 5, correctAnswer: 3, hasImage: true},
    {id: 2, stateId: 5, correctAnswer: 2},
    {id: 3, stateId: 5, correctAnswer: 2},
    {id: 4, stateId: 5, correctAnswer: 2},
    {id: 5, stateId: 5, correctAnswer: 2},
    {id: 6, stateId: 5, correctAnswer: 2},
    {id: 7, stateId: 5, correctAnswer: 1},
    {id: 8, stateId: 5, correctAnswer: 1, hasImage: true},
    {id: 9, stateId: 5, correctAnswer: 3},
    {id: 10, stateId: 5, correctAnswer: 1}
  ];
  public static readonly HAMBURG_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 6, correctAnswer: 2, hasImage: true},
    {id: 2, stateId: 6, correctAnswer: 1},
    {id: 3, stateId: 6, correctAnswer: 3},
    {id: 4, stateId: 6, correctAnswer: 2},
    {id: 5, stateId: 6, correctAnswer: 2},
    {id: 6, stateId: 6, correctAnswer: 4},
    {id: 7, stateId: 6, correctAnswer: 1},
    {id: 8, stateId: 6, correctAnswer: 3, hasImage: true},
    {id: 9, stateId: 6, correctAnswer: 2},
    {id: 10, stateId: 6, correctAnswer: 2}
  ];
  public static readonly HESSEN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 7, correctAnswer: 1, hasImage: true},
    {id: 2, stateId: 7, correctAnswer: 4},
    {id: 3, stateId: 7, correctAnswer: 3},
    {id: 4, stateId: 7, correctAnswer: 3},
    {id: 5, stateId: 7, correctAnswer: 2},
    {id: 6, stateId: 7, correctAnswer: 1},
    {id: 7, stateId: 7, correctAnswer: 4},
    {id: 8, stateId: 7, correctAnswer: 3, hasImage: true},
    {id: 9, stateId: 7, correctAnswer: 4},
    {id: 10, stateId: 7, correctAnswer: 2}
  ];
  public static readonly MECKLENBURG_VORPOMMERN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 8, correctAnswer: 3, hasImage: true},
    {id: 2, stateId: 8, correctAnswer: 2},
    {id: 3, stateId: 8, correctAnswer: 3},
    {id: 4, stateId: 8, correctAnswer: 2},
    {id: 5, stateId: 8, correctAnswer: 2},
    {id: 6, stateId: 8, correctAnswer: 1},
    {id: 7, stateId: 8, correctAnswer: 2},
    {id: 8, stateId: 8, correctAnswer: 3, hasImage: true},
    {id: 9, stateId: 8, correctAnswer: 4},
    {id: 10, stateId: 8, correctAnswer: 2}
  ];
  public static readonly NIEDERSACHSEN_VORPOMMERN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 9, correctAnswer: 3, hasImage: true},
    {id: 2, stateId: 9, correctAnswer: 1},
    {id: 3, stateId: 9, correctAnswer: 3},
    {id: 4, stateId: 9, correctAnswer: 2},
    {id: 5, stateId: 9, correctAnswer: 2},
    {id: 6, stateId: 9, correctAnswer: 1},
    {id: 7, stateId: 9, correctAnswer: 1},
    {id: 8, stateId: 9, correctAnswer: 1, hasImage: true},
    {id: 9, stateId: 9, correctAnswer: 4},
    {id: 10, stateId: 9, correctAnswer: 2}
  ];
  public static readonly NORTH_RHINE_WESTPHALIA_VORPOMMERN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 10, correctAnswer: 2, hasImage: true},
    {id: 2, stateId: 10, correctAnswer: 2},
    {id: 3, stateId: 10, correctAnswer: 3},
    {id: 4, stateId: 10, correctAnswer: 2},
    {id: 5, stateId: 10, correctAnswer: 2},
    {id: 6, stateId: 10, correctAnswer: 4},
    {id: 7, stateId: 10, correctAnswer: 3},
    {id: 8, stateId: 10, correctAnswer: 3, hasImage: true},
    {id: 9, stateId: 10, correctAnswer: 4},
    {id: 10, stateId: 10, correctAnswer: 2}
  ];
  public static readonly RHINELAND_PALATINATE_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 11, correctAnswer: 1, hasImage: true},
    {id: 2, stateId: 11, correctAnswer: 1},
    {id: 3, stateId: 11, correctAnswer: 3},
    {id: 4, stateId: 11, correctAnswer: 3},
    {id: 5, stateId: 11, correctAnswer: 2},
    {id: 6, stateId: 11, correctAnswer: 4},
    {id: 7, stateId: 11, correctAnswer: 1},
    {id: 8, stateId: 11, correctAnswer: 1, hasImage: true},
    {id: 9, stateId: 11, correctAnswer: 4},
    {id: 10, stateId: 11, correctAnswer: 2}
  ];
  public static readonly SAARLAND_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 12, correctAnswer: 1, hasImage: true},
    {id: 2, stateId: 12, correctAnswer: 1},
    {id: 3, stateId: 12, correctAnswer: 3},
    {id: 4, stateId: 12, correctAnswer: 3},
    {id: 5, stateId: 12, correctAnswer: 2},
    {id: 6, stateId: 12, correctAnswer: 4},
    {id: 7, stateId: 12, correctAnswer: 1},
    {id: 8, stateId: 12, correctAnswer: 1, hasImage: true},
    {id: 9, stateId: 12, correctAnswer: 4},
    {id: 10, stateId: 12, correctAnswer: 2}
  ];
  public static readonly SAXONY_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 13, correctAnswer: 4, hasImage: true},
    {id: 2, stateId: 13, correctAnswer: 1},
    {id: 3, stateId: 13, correctAnswer: 3},
    {id: 4, stateId: 13, correctAnswer: 3},
    {id: 5, stateId: 13, correctAnswer: 2},
    {id: 6, stateId: 13, correctAnswer: 1},
    {id: 7, stateId: 13, correctAnswer: 2},
    {id: 8, stateId: 13, correctAnswer: 4, hasImage: true},
    {id: 9, stateId: 13, correctAnswer: 4},
    {id: 10, stateId: 13, correctAnswer: 2}
  ];
  public static readonly SAXONY_ANHALT_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 14, correctAnswer: 4, hasImage: true},
    {id: 2, stateId: 14, correctAnswer: 4},
    {id: 3, stateId: 14, correctAnswer: 3},
    {id: 4, stateId: 14, correctAnswer: 2},
    {id: 5, stateId: 14, correctAnswer: 2},
    {id: 6, stateId: 14, correctAnswer: 2},
    {id: 7, stateId: 14, correctAnswer: 3},
    {id: 8, stateId: 14, correctAnswer: 3, hasImage: true},
    {id: 9, stateId: 14, correctAnswer: 4},
    {id: 10, stateId: 14, correctAnswer: 2}
  ];
  public static readonly SCHLESWIG_HOLSTEIN_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 15, correctAnswer: 3, hasImage: true},
    {id: 2, stateId: 15, correctAnswer: 3},
    {id: 3, stateId: 15, correctAnswer: 3},
    {id: 4, stateId: 15, correctAnswer: 2},
    {id: 5, stateId: 15, correctAnswer: 2},
    {id: 6, stateId: 15, correctAnswer: 3},
    {id: 7, stateId: 15, correctAnswer: 4},
    {id: 8, stateId: 15, correctAnswer: 1, hasImage: true},
    {id: 9, stateId: 15, correctAnswer: 4},
    {id: 10, stateId: 15, correctAnswer: 2}
  ];
  public static readonly THURINGIA_STATE_QUESTIONS: StateTestQuestionModel[] = [
    {id: 1, stateId: 15, correctAnswer: 4, hasImage: true},
    {id: 2, stateId: 15, correctAnswer: 4},
    {id: 3, stateId: 15, correctAnswer: 3},
    {id: 4, stateId: 15, correctAnswer: 3},
    {id: 5, stateId: 15, correctAnswer: 2},
    {id: 6, stateId: 15, correctAnswer: 3},
    {id: 7, stateId: 15, correctAnswer: 2},
    {id: 8, stateId: 15, correctAnswer: 2, hasImage: true},
    {id: 9, stateId: 15, correctAnswer: 4},
    {id: 10, stateId: 15, correctAnswer: 2}
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
