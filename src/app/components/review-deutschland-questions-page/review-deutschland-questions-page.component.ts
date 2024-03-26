import {Component, OnInit} from '@angular/core';
import {
  ReviewDeutschlandQuestionsStateService
} from '../../state/review-deutschland-questions/review-deutschland-questions-state.service';
import {ConstantValues} from '../../utils/constant-values';
import {StateChangeExpansionPanelBehaviorEnum} from '../../models/enums/state-change-expansion-panel-behavior.enum';

@Component({
  selector: 'app-review-deutschland-tests',
  templateUrl: './review-deutschland-questions-page.component.html',
  styleUrls: ['./review-deutschland-questions-page.component.scss']
})
export class ReviewDeutschlandQuestionsPageComponent implements OnInit {
  protected readonly selectedStateInfo = ConstantValues.DEUTSCHLAND_STATE;
  showAnswersKeys = true;

  constructor(public reviewDeutschlandQuestionsStateService: ReviewDeutschlandQuestionsStateService) {
  }

  ngOnInit(): void {
    this.reviewDeutschlandQuestionsStateService.showAnswersKeys$.subscribe(showAnswersKeys => this.showAnswersKeys = showAnswersKeys);
  }

    protected readonly StateChangeExpansionPanelBehaviorEnum = StateChangeExpansionPanelBehaviorEnum;
}
