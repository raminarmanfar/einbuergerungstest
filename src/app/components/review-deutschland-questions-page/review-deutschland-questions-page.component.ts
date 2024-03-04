import {Component, OnInit} from '@angular/core';
import {
  ReviewDeutschlandQuestionsStateService
} from '../../state/review-deutschland-questions/review-deutschland-questions-state.service';
import {StateInfoModel} from '../../models/state-info.model';
import {ConstantValues} from '../../utils/constant-values';

@Component({
  selector: 'app-review-deutschland-tests',
  templateUrl: './review-deutschland-questions-page.component.html',
  styleUrls: ['./review-deutschland-questions-page.component.scss']
})
export class ReviewDeutschlandQuestionsPageComponent implements OnInit {
  protected readonly selectedStateInfo: StateInfoModel = ConstantValues.DEUTSCHLAND_STATES;
  showAnswersKeys: boolean = true;

  constructor(public reviewDeutschlandQuestionsStateService: ReviewDeutschlandQuestionsStateService) {
  }

  ngOnInit(): void {
  }
}
