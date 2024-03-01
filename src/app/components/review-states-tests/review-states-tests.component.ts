import {Component, OnInit} from '@angular/core';
import {ReviewStatesTestsStateService} from '../../state/review-states-tests/review-states-tests-state.service';
import {ConstantValues} from '../../utils/constant-values';
import {StateInfoModel} from '../../models/state-info.model';

@Component({
  selector: 'app-review-states-tests',
  templateUrl: './review-states-tests.component.html',
  styleUrls: ['./review-states-tests.component.scss']
})
export class ReviewStatesTestsComponent implements OnInit {
  currentQuestionIndex = 0;
  selectedState: StateInfoModel | undefined = undefined;
  readonly germanStates = ConstantValues.GERMAN_STATES;
  readonly trPrefix = 'review-states-tests.german-states.';

  constructor(public reviewStatesTestsStateService: ReviewStatesTestsStateService) {
  }

  private getTestTrPrefix(stateNameLabel: string, questionIndex: number): string {
    return this.trPrefix + stateNameLabel + '.tests.' + (questionIndex + 1);
  }

  ngOnInit(): void {
    this.reviewStatesTestsStateService.currentQuestionIndex$.subscribe(currentQuestionIndex =>
      this.currentQuestionIndex = currentQuestionIndex);
    this.reviewStatesTestsStateService.selectedStateIndex$.subscribe(selectedStateIndex =>
      this.selectedState = selectedStateIndex >= 0 ? this.germanStates[selectedStateIndex] : undefined
    );
  }

  getQuestionTrPrefix(stateNameLabel: string, questionIndex: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex) + '.question';
  }

  getAnswerTrPrefix(stateNameLabel: string, questionIndex: number, answerId: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex) + '.answers.' + answerId;
  }

  onStateSelectChange(selectedState: StateInfoModel): void {
    this.reviewStatesTestsStateService.setCurrentQuestionIndex(-1);
    this.reviewStatesTestsStateService.setStateIndex(this.germanStates.indexOf(selectedState));
  }

  onClosePanel(isClosedByUser: boolean): void {
    if (isClosedByUser) {
      this.reviewStatesTestsStateService.setStateIndex(-1);
    }
  }
}
