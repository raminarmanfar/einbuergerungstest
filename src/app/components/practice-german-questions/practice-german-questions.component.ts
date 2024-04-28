import {Component, OnInit} from '@angular/core';
import {
  PracticeDeutschlandQuestionsStateService
} from '../../state/practice-deutschland-questions/practice-deutschland-questions-state.service';
import {TestQuestionModel} from '../../models/test-question.model';
import {GermanStatesEnum} from '../../models/enums/german-states.enum';
import {DialogYesNoComponent} from '../dialog-yes-no/dialog-yes-no.component';
import {UserActionEnum} from '../../models/enums/user-action.enum';
import {UtilService} from '../../utils/util.service';

@Component({
  selector: 'app-practice-german-questions',
  templateUrl: './practice-german-questions.component.html',
  styleUrls: ['./practice-german-questions.component.scss']
})
export class PracticeGermanQuestionsComponent implements OnInit {

  protected readonly trPrefix = 'practice-deutschland-questions.';
  protected readonly GermanStatesEnum = GermanStatesEnum;
  showResults = false;
  questions!: TestQuestionModel[];

  constructor(private utilService: UtilService,
              public practiceDeutschlandQuestionsStateService: PracticeDeutschlandQuestionsStateService) {
  }

  ngOnInit(): void {
    this.practiceDeutschlandQuestionsStateService.showResults$.subscribe(
      showResults => this.showResults = showResults);
    this.practiceDeutschlandQuestionsStateService.questions$.subscribe(
      questions => this.questions = questions);
  }

  onPracticeReset(): void {
    this.utilService.openDialog(DialogYesNoComponent, true, 400, 400, {
      trPrefix: 'about-me.reset-app-data-dialog.'
    }).subscribe((res: UserActionEnum) => {
      if (res === UserActionEnum.YES) {
        this.practiceDeutschlandQuestionsStateService.resetPractice();
      }
    });
  }
}
