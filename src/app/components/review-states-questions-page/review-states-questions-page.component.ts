import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
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
  selectedStateInfo: StateInfoModel | undefined = undefined;
  showAnswersKeys = true;
  stateChangeExpansionPanelBehavior = StateChangeExpansionPanelBehaviorEnum.SHOW_CURRENT_QUESTION;
  protected readonly StateChangeExpansionPanelBehaviorEnum = StateChangeExpansionPanelBehaviorEnum;
  protected readonly germanStates = ConstantValues.GERMAN_STATES;
  protected readonly trPrefix = 'review-states-tests.german-states.';
  protected readonly paginatorData: PageEvent = {
    pageSize: 10,
    pageIndex: 0,
    length: 10
  };

  constructor(public reviewStatesTestsStateService: ReviewStatesTestsStateService) {
  }

  ngOnInit(): void {
    this.reviewStatesTestsStateService.allSubState$.subscribe(allSubStateData => {
      this.selectedStateInfo = allSubStateData.selectedStateIndex >= 0 ? this.germanStates[allSubStateData.selectedStateIndex] : undefined;
      this.showAnswersKeys = allSubStateData.showAnswersKeys;
      this.stateChangeExpansionPanelBehavior = allSubStateData.stateChangeExpansionPanelBehavior;
    });
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
}
