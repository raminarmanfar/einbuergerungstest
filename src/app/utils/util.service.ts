import {TestQuestionModel} from '../models/test-question.model';
import {ConstantValues} from './constant-values';
import {ErrorMessages} from './error-messages';
import {GermanStatesEnum} from '../models/enums/german-states.enum';

export class UtilService {

  constructor() {
  }


  public static generateRandomQuestionsIds(length: number, maxNumber: number): number[] {
    if (length <= 0 || maxNumber <= 0) {
      throw new Error(ErrorMessages.NUMBER_IS_LESS_THAN_ZERO);
    }
    if (length > maxNumber) {
      throw new Error(ErrorMessages.NUMBER_IS_GRATER_THAN_MAX_NUMBER);
    }

    const uniqueNumbersSet = new Set<number>();
    while (uniqueNumbersSet.size < length) {
      uniqueNumbersSet.add(Math.floor(Math.random() * maxNumber) + 1);
    }
    return Array.from(uniqueNumbersSet).sort((a, b) => a - b);
  }

  public static getRandomQuestions(questionIds: number[], questions: TestQuestionModel[]): TestQuestionModel[] {
    return questions.filter(item => questionIds.includes(item.id));
  }

  public static getRandomDeutschlandDemoTestQuestionsIds(): number[] {
    return UtilService.generateRandomQuestionsIds(27, ConstantValues.DEUTSCHLAND_QUESTIONS.length);
  }

  public static getRandomDeutschlandDemoTestQuestions(): TestQuestionModel[] {
    const randomQuestionsIds = UtilService.generateRandomQuestionsIds(27, ConstantValues.DEUTSCHLAND_QUESTIONS.length);
    return UtilService.getRandomQuestions(randomQuestionsIds, ConstantValues.DEUTSCHLAND_QUESTIONS);
  }

  public static getRandomStateQuestions(stateName: GermanStatesEnum): TestQuestionModel[] {
    const stateInfo = ConstantValues.GERMAN_STATES.find(s => s.name === stateName);
    if (!stateInfo) {
      throw new Error(ErrorMessages.STATE_NOT_FOUND);
    }
    const randomQuestionsIds = UtilService.generateRandomQuestionsIds(3, stateInfo.stateTests.length);
    return UtilService.getRandomQuestions(randomQuestionsIds,  stateInfo.stateTests);
  }

  public static getFilteredQuestionsListByIds(questionsIds: number[], questionsList: TestQuestionModel[]): TestQuestionModel[] {
    return questionsList.filter(q => questionsIds.includes(q.id));
  }
}
