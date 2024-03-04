import {Component, OnInit} from '@angular/core';
import {ConstantValues} from '../../utils/constant-values';
import {StateInfoModel} from '../../models/state-info.model';
import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';
import {ReviewStatesTestsStateService} from '../../state/review-states-tests/review-states-tests-state.service';

@Component({
  selector: 'app-review-states-tests',
  templateUrl: './review-states-questions-page.component.html',
  styleUrls: ['./review-states-questions-page.component.scss']
})
export class ReviewStatesQuestionsPageComponent implements OnInit {
  currentQuestionIndex = 0;
  selectedState: StateInfoModel | undefined = undefined;
  showAnswersKeys = true;
  stateChangeExpansionPanelBehavior = StateChangeExpansionPanelBehaviorEnum.SHOW_CURRENT_QUESTION;
  readonly germanStates = ConstantValues.GERMAN_STATES;
  readonly trPrefix = 'review-states-tests.german-states.';

  constructor(public reviewStatesTestsStateService: ReviewStatesTestsStateService) {
  }

  private getTestTrPrefix(stateNameLabel: string, questionIndex: number): string {
    return this.trPrefix + stateNameLabel + '.tests.' + (questionIndex + 1);
  }

  ngOnInit(): void {
    this.reviewStatesTestsStateService.allSubState$.subscribe(allSubState => {
      this.currentQuestionIndex = allSubState.currentQuestionIndex;
      this.selectedState = allSubState.selectedStateIndex >= 0 ? this.germanStates[allSubState.selectedStateIndex] : undefined;
      this.showAnswersKeys = allSubState.showAnswersKeys;
      this.stateChangeExpansionPanelBehavior = allSubState.stateChangeExpansionPanelBehavior;
    });
  }

  getQuestionTrPrefix(stateNameLabel: string, questionIndex: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex) + '.question';
  }

  getAnswerTrPrefix(stateNameLabel: string, questionIndex: number, answerId: number): string {
    return this.getTestTrPrefix(stateNameLabel, questionIndex) + '.answers.' + answerId;
  }

  onStateSelectChange(selectedState: StateInfoModel): void {
    switch (this.stateChangeExpansionPanelBehavior) {
      case StateChangeExpansionPanelBehaviorEnum.SHOW_CURRENT_QUESTION:
        break;
      case StateChangeExpansionPanelBehaviorEnum.SHOW_FIRST_QUESTION:
        this.reviewStatesTestsStateService.setCurrentQuestionIndex(0);
        break;
      case StateChangeExpansionPanelBehaviorEnum.COLLAPSE_ALL_QUESTIONS:
        this.reviewStatesTestsStateService.setCurrentQuestionIndex(-1);
        break;
    }
    this.reviewStatesTestsStateService.setStateIndex(this.germanStates.indexOf(selectedState));
  }

  onClosePanel(isClosedByUser: boolean): void {
    if (isClosedByUser) {
      this.reviewStatesTestsStateService.setStateIndex(-1);
    }
  }

  protected readonly StateChangeExpansionPanelBehaviorEnum = StateChangeExpansionPanelBehaviorEnum;
}
