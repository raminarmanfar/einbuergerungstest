import {Injectable} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {map, Observable, of} from 'rxjs';
import {
  ResetPractice,
  ResetPracticeDeutschlandQuestionsToInitialState,
  SetCurrentQuestionIndex,
  SetIsAllPanelExpanded,
  SetPaginatorData,
  SetUserAnswer,
  SwitchShowHideResults
} from './practice-deutschland-questions.action';
import {ConstantValues} from '../../utils/constant-values';
import {PracticeDeutschlandQuestionsStateModel} from '../models/practice-deutschland-questions-state.model';
import {patch, updateItem} from '@ngxs/store/operators';
import {TestQuestionModel} from '../../models/test-question.model';


export const practiceDeutschlandQuestionsStateModel: PracticeDeutschlandQuestionsStateModel = {
  currentQuestionIndex: 0,
  showResults: false,
  isAllPanelsExpanded: false,
  questions: ConstantValues.DEUTSCHLAND_QUESTIONS,
  paginatorData: {
    pageSize: 30,
    pageIndex: 0,
    length: ConstantValues.DEUTSCHLAND_QUESTIONS.length
  }
};

@State<PracticeDeutschlandQuestionsStateModel>({
  name: 'PracticeDeutschlandQuestionsState',
  defaults: practiceDeutschlandQuestionsStateModel
})
@Injectable()
export class PracticeDeutschlandQuestionsState {

  @Selector()
  static getCurrentQuestionIndex(state: PracticeDeutschlandQuestionsStateModel): number {
    return state.currentQuestionIndex;
  }

  @Selector()
  static getPaginatorData(state: PracticeDeutschlandQuestionsStateModel): PageEvent {
    return state.paginatorData;
  }

  @Selector()
  static getShowResults(state: PracticeDeutschlandQuestionsStateModel): boolean {
    return state.showResults;
  }

  @Selector()
  static getIsAllPanelsExpanded(state: PracticeDeutschlandQuestionsStateModel): boolean {
    return state.isAllPanelsExpanded;
  }

  @Selector()
  static getQuestions(state: PracticeDeutschlandQuestionsStateModel): TestQuestionModel[] {
    return state.questions;
  }

  @Action(SetCurrentQuestionIndex)
  setCurrentQuestionIndex(ctx: StateContext<PracticeDeutschlandQuestionsStateModel>, {payload}: SetCurrentQuestionIndex): Observable<PracticeDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({currentQuestionIndex: payload}));
  }

  @Action(SwitchShowHideResults)
  switchShowHideResults(ctx: StateContext<PracticeDeutschlandQuestionsStateModel>): Observable<PracticeDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({showResults: !ctx.getState().showResults}));
  }

  @Action(SetPaginatorData)
  setPaginatorPageData(ctx: StateContext<PracticeDeutschlandQuestionsStateModel>, {payload}: SetPaginatorData): Observable<PracticeDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({paginatorData: payload}));
  }

  @Action(SetIsAllPanelExpanded)
  setIsAllPanelExpanded(ctx: StateContext<PracticeDeutschlandQuestionsStateModel>, {payload}: SetIsAllPanelExpanded): Observable<PracticeDeutschlandQuestionsStateModel> {
    return of(ctx.patchState({isAllPanelsExpanded: payload}));
  }

  @Action(ResetPracticeDeutschlandQuestionsToInitialState)
  resetPracticeDeutschlandQuestionsToInitialState(ctx: StateContext<PracticeDeutschlandQuestionsStateModel>): Observable<PracticeDeutschlandQuestionsStateModel> {
    return of(ctx.setState(practiceDeutschlandQuestionsStateModel));
  }

  @Action(SetUserAnswer)
  setUserAnswer(ctx: StateContext<PracticeDeutschlandQuestionsStateModel>, {payload}: SetUserAnswer): Observable<PracticeDeutschlandQuestionsStateModel> {
    return of(ctx.getState()).pipe(
      map(currentState => {
        let nextQuestionIndex = currentState.currentQuestionIndex + 1;
        let pageIndex = currentState.paginatorData.pageIndex;
        if (nextQuestionIndex >= currentState.paginatorData.pageSize && pageIndex + 1 < currentState.paginatorData.length / currentState.paginatorData.pageSize) {
          nextQuestionIndex = 0;
          pageIndex++;
        }

        return ctx.setState(
          patch<PracticeDeutschlandQuestionsStateModel>({
            currentQuestionIndex: nextQuestionIndex,
            paginatorData: patch<PageEvent>({pageIndex}),
            questions: updateItem<TestQuestionModel>(
              q => q.id === payload.id,
              patch<TestQuestionModel>({userAnswer: payload.userAnswer})
            )
          })
        );
      })
    );
  }

  @Action(ResetPractice)
  resetPractice(ctx: StateContext<PracticeDeutschlandQuestionsStateModel>): Observable<PracticeDeutschlandQuestionsStateModel> {
    return of(ctx.setState(practiceDeutschlandQuestionsStateModel));
  }
}
