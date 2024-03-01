import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ReviewStatesTestsState} from './review-states-tests.state';
import {
  SetStateChangeExpansionPanelBehavior,
  SetCurrentQuestionIndex,
  SetShowAnswersKeys,
  SetStateIndex
} from './review-states-tests.action';
import {ReviewStatesTestsStateModel} from '../models/review-states-tests-state.model';
import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';

@Injectable({
  providedIn: 'root'
})
export class ReviewStatesTestsStateService {

  @Select(ReviewStatesTestsState.getAllSubState) allSubState$!: Observable<ReviewStatesTestsStateModel>;
  @Select(ReviewStatesTestsState.getCurrentQuestionIndex) currentQuestionIndex$!: Observable<number>;
  @Select(ReviewStatesTestsState.getSelectedStateIndex) selectedStateIndex$!: Observable<number>;
  @Select(ReviewStatesTestsState.getShowAnswersKeys) showAnswersKeys$!: Observable<boolean>;

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
