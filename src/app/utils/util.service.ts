import {TestQuestionModel} from '../models/test-question.model';
import {ConstantValues} from './constant-values';
import {ErrorMessages} from './error-messages';
import {GermanStatesEnum} from '../models/enums/german-states.enum';
import {StateInfoModel} from '../models/state-info.model';
import {MatDialog} from '@angular/material/dialog';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ComponentType} from '@angular/cdk/overlay';
import {TimeModel} from '../models/time.model';

@Injectable({providedIn: 'root'})
export class UtilService {
  constructor(private dialog: MatDialog) {
  }

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

  public static cloneDeep<T>(object: T): T {
    return object ? JSON.parse(JSON.stringify(object)) : {...object};
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

  public static formatTime(time: TimeModel): string {
    const formattedMinutes = String(time.minutes).padStart(2, '0');
    const formattedSeconds = String(time.seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  public openDialog<T, K>(component: ComponentType<T>,
                          enterAnimationDuration: number, exitAnimationDuration: number,
                          data: K, height?: number, width?: number, maxHeight?: number, maxWidth?: number, disableClose = true): Observable<any> {
    return this.dialog.open(component,
      {
        disableClose,
        height: height ? height + 'px' : undefined,
        width: width ? width + 'px' : undefined,
        maxHeight: maxHeight ? maxHeight + 'px' : undefined,
        maxWidth: maxWidth ? maxWidth + 'px' : undefined,
        enterAnimationDuration: exitAnimationDuration ? enterAnimationDuration + 'ms' : undefined,
        exitAnimationDuration: exitAnimationDuration ? exitAnimationDuration + 'ms' : undefined,
        data
      }).afterClosed();
  }
}
