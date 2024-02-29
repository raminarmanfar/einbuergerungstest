import {Component, OnInit} from '@angular/core';
import {ReviewAllQuestionsStateService} from '../../state/review-all-questions/review-all-questions-state.service';

@Component({
  selector: 'app-review-all-tests',
  templateUrl: './review-all-tests.component.html',
  styleUrls: ['./review-all-tests.component.scss']
})
export class ReviewAllTestsComponent implements OnInit {
  step: number = 0;

  constructor(public reviewAllQuestionsStateService: ReviewAllQuestionsStateService) {
  }

  ngOnInit(): void {
    this.reviewAllQuestionsStateService.getCurrentQuestionNo$.subscribe(currentQuestionNo => this.step = currentQuestionNo);
  }
}
