import {Component, OnInit} from '@angular/core';
import {ReviewStatesTestsStateService} from '../../state/review-states-tests/review-states-tests-state.service';
import {ConstantValues} from '../../utils/constant-values';

@Component({
  selector: 'app-review-states-tests',
  templateUrl: './review-states-tests.component.html',
  styleUrls: ['./review-states-tests.component.scss']
})
export class ReviewStatesTestsComponent implements OnInit {
  step: number = 0;
  readonly bavariaStateQuestions = ConstantValues.BAVARIA_STATE_QUESTIONS;
  readonly trPrefix = 'general.states-questions.';

  constructor(public reviewStatesTestsStateService: ReviewStatesTestsStateService) {
  }

  ngOnInit(): void {
    this.reviewStatesTestsStateService.getCurrentQuestionNo$.subscribe(
      currentQuestionNo => this.step = currentQuestionNo);
  }
}
