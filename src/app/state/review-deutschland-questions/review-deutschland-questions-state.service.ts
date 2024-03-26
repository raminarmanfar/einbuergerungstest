import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {PageEvent} from '@angular/material/paginator';
import {Observable} from 'rxjs';
import {
  SetCurrentQuestionIndex,
  SetIsAllPanelExpanded,
  SetPaginatorData,
  SetShowAnswersKeys
} from './review-deutschland-questions.action';
import {ReviewDeutschlandQuestionsState} from './review-deutschland-questions.state';

@Injectable({
  providedIn: 'root'
})
export class ReviewDeutschlandQuestionsStateService {

  @Select(ReviewDeutschlandQuestionsState.getCurrentQuestionIndex) currentQuestionIndex$!: Observable<number>;
  @Select(ReviewDeutschlandQuestionsState.getPaginatorData) paginatorData$!: Observable<PageEvent>;
  @Select(ReviewDeutschlandQuestionsState.getShowAnswersKeys) showAnswersKeys$!: Observable<boolean>;
  @Select(ReviewDeutschlandQuestionsState.getIsAllPanelsExpanded) isAllPanelsExpanded$!: Observable<boolean>;

  constructor(private store: Store) {
  }

  setCurrentQuestionIndex(currentQuestionIndex: number): void {
    this.store.dispatch(new SetCurrentQuestionIndex(currentQuestionIndex));
  }

  setPaginatorData(paginatorData: PageEvent): void {
    this.store.dispatch(new SetPaginatorData(paginatorData));
  }

  setShowAnswersKeys(showAnswersKeys: boolean): void {
    this.store.dispatch(new SetShowAnswersKeys(showAnswersKeys));
  }

  setIsAllPanelExpanded(isAllPanelsExpanded: boolean): void {
    this.store.dispatch(new SetIsAllPanelExpanded(isAllPanelsExpanded));
  }
}
