import {Component, OnInit} from '@angular/core';
import {ReviewStatesTestsStateService} from '../../state/review-states-tests/review-states-tests-state.service';
import {ConstantValues} from '../../utils/constant-values';
import {StateInfoModel} from "../../models/state-info.model";

@Component({
  selector: 'app-review-states-tests',
  templateUrl: './review-states-tests.component.html',
  styleUrls: ['./review-states-tests.component.scss']
})
export class ReviewStatesTestsComponent implements OnInit {
  currentStateIndex = 0;
  currentQuestionIndex = 0;
  readonly germanStates = ConstantValues.GERMAN_STATES;
  readonly trPrefix = 'general.german-states.';

  constructor(public reviewStatesTestsStateService: ReviewStatesTestsStateService) {
  }

  ngOnInit(): void {
    this.reviewStatesTestsStateService.setCurrentQuestionIndex(0);
    this.reviewStatesTestsStateService.getCurrentQuestionIndex$.subscribe(
      currentQuestionIndex => this.currentQuestionIndex = currentQuestionIndex);
  }

  onStateSelectChange(selectedState: StateInfoModel): void {
    this.currentStateIndex = this.germanStates.indexOf(selectedState);
  }
}
