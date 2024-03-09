import {TestQuestionModel} from '../models/test-question.model';
import {ConstantValues} from './constant-values';
import {ErrorMessages} from './error-messages';
import {GermanStatesEnum} from '../models/enums/german-states.enum';
import {StateInfoModel} from "../models/state-info.model";

export class UtilService {

  private static generateRandomQuestionsIds(length: number, maxNumber: number, sorted = false): number[] {
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
    return sorted ? Array.from(uniqueNumbersSet).sort((a, b) => a - b) : Array.from(uniqueNumbersSet);
  }

  private static getRandomQuestions(questionIds: number[], questions: TestQuestionModel[]): TestQuestionModel[] {
    return questions.filter(item => questionIds.includes(item.id));
  }

  private static generateQuestionsByLength(lengthOfQuestions: number, stateInfo: StateInfoModel, sortByRandomList: boolean): TestQuestionModel[] {
    const randomQuestionsIds = UtilService.generateRandomQuestionsIds(lengthOfQuestions, stateInfo.stateTestQuestions.length);
    const res = UtilService.getRandomQuestions(randomQuestionsIds, stateInfo.stateTestQuestions);
    return sortByRandomList ? res.sort((a, b) => randomQuestionsIds.indexOf(a.id) - randomQuestionsIds.indexOf(b.id)) : res;
  }

  public static getRandomStateQuestions(stateName: GermanStatesEnum, sortByRandomList = true): TestQuestionModel[] {
    const stateInfo = ConstantValues.GERMAN_STATES.find(s => s.name === stateName);
    if (!stateInfo) {
      throw new Error(ErrorMessages.STATE_NOT_FOUND);
    }
    return UtilService.generateQuestionsByLength(ConstantValues.STATES_EXAM_QUESTIONS_COUNT, stateInfo, sortByRandomList);
  }

  public static getRandomDeutschlandDemoTestQuestions(sortByRandomList = true): TestQuestionModel[] {
    return UtilService.generateQuestionsByLength(ConstantValues.DEUTSCHLAND_EXAM_QUESTIONS_COUNT, ConstantValues.DEUTSCHLAND_STATE, sortByRandomList);
  }
}
