import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {PageEvent} from '@angular/material/paginator';
import {Observable} from 'rxjs';
import {
  SetCurrentQuestionIndex,
  SetIsAllPanelExpanded,
  SetPaginatorData,
  SwitchShowHideResults,
  SetUserAnswer, ResetPractice
} from './practice-deutschland-questions.action';
import {PracticeDeutschlandQuestionsState} from './practice-deutschland-questions.state';
import {TestQuestionModel} from '../../models/test-question.model';

@Injectable({providedIn: 'root'})
export class PracticeDeutschlandQuestionsStateService {

  @Select(PracticeDeutschlandQuestionsState.getCurrentQuestionIndex) currentQuestionIndex$!: Observable<number>;
  @Select(PracticeDeutschlandQuestionsState.getPaginatorData) paginatorData$!: Observable<PageEvent>;
  @Select(PracticeDeutschlandQuestionsState.getShowResults) showResults$!: Observable<boolean>;
  @Select(PracticeDeutschlandQuestionsState.getIsAllPanelsExpanded) isAllPanelsExpanded$!: Observable<boolean>;
  @Select(PracticeDeutschlandQuestionsState.getQuestions) questions$!: Observable<TestQuestionModel[]>;

  constructor(private store: Store) {
  }

  setCurrentQuestionIndex(currentQuestionIndex: number): void {
    this.store.dispatch(new SetCurrentQuestionIndex(currentQuestionIndex));
  }

  setPaginatorData(paginatorData: PageEvent): void {
    this.store.dispatch(new SetPaginatorData(paginatorData));
  }

  switchShowHideResults(): void {
    this.store.dispatch(new SwitchShowHideResults());
  }

  setIsAllPanelExpanded(isAllPanelsExpanded: boolean): void {
    this.store.dispatch(new SetIsAllPanelExpanded(isAllPanelsExpanded));
  }

  setUserAnswer(selectedQuestion: TestQuestionModel): void {
    this.store.dispatch(new SetUserAnswer(selectedQuestion));
  }

  resetPractice(): void {
    this.store.dispatch(new ResetPractice());
  }
}
