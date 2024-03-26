import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ReviewStatesQuestionsState} from './review-states-questions.state';
import {
  SetStateChangeExpansionPanelBehavior,
  SetCurrentQuestionIndex,
  SetShowAnswersKeys,
  SetStateIndex
} from './review-states-questions.action';
import {ReviewStatesQuestionsStateModel} from '../models/review-states-questions-state.model';
import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';

@Injectable({
  providedIn: 'root'
})
export class ReviewStatesQuestionsStateService {

  @Select(ReviewStatesQuestionsState.getAllSubState) allSubState$!: Observable<ReviewStatesQuestionsStateModel>;
  @Select(ReviewStatesQuestionsState.getCurrentQuestionIndex) currentQuestionIndex$!: Observable<number>;
  @Select(ReviewStatesQuestionsState.getSelectedStateIndex) selectedStateIndex$!: Observable<number>;
  @Select(ReviewStatesQuestionsState.getShowAnswersKeys) showAnswersKeys$!: Observable<boolean>;

  constructor(private store: Store) {
  }

  setCurrentQuestionIndex(currentQuestionIndex: number): void {
    this.store.dispatch(new SetCurrentQuestionIndex(currentQuestionIndex));
  }

  setStateIndex(selectedStateIndex: number): void {
    this.store.dispatch(new SetStateIndex(selectedStateIndex));
  }

  setShowAnswersKeys(showAnswersKeys: boolean): void {
    this.store.dispatch(new SetShowAnswersKeys(showAnswersKeys));
  }

  setStateChangeExpansionPanelBehavior(stateChangeExpansionPanelBehaviorEnum: StateChangeExpansionPanelBehaviorEnum): void {
    this.store.dispatch(new SetStateChangeExpansionPanelBehavior(stateChangeExpansionPanelBehaviorEnum));
  }
}
