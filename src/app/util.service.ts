import { Injectable } from '@angular/core';
import {TestQuestionModel} from "./models/test-question.model";
import {ConstantValues} from "./utils/constant-values";
import {ErrorMessages} from "./utils/error-messages";

@Injectable({providedIn: 'root'})
export class UtilService {

  constructor() { }


  private generateRandomArray(length: number, maxNumber: number): number[] {
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

  getRandomQuestions(questionIds: number[], questions: TestQuestionModel[]): TestQuestionModel[] {
    return questions.filter(item => questionIds.includes(item.id));
  }

  getRandomDeutschlandDemoTestQuestions(): TestQuestionModel[] {
    const randomQuestionsIds = this.generateRandomArray(27, ConstantValues.DEUTSCHLAND_QUESTIONS.length);
    return this.getRandomQuestions(randomQuestionsIds, ConstantValues.DEUTSCHLAND_QUESTIONS);
  }
}
