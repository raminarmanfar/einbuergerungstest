import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {TestQuestionModel} from '../../models/test-question.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';
import {DialogYesNoComponent} from '../dialog-yes-no/dialog-yes-no.component';
import {YesNoEnum} from '../../models/enums/yes-no.enum';

@Component({
  selector: 'app-take-demo-test-page',
  templateUrl: './take-demo-test-page.component.html',
  styleUrls: ['./take-demo-test-page.component.scss']
})
export class TakeDemoTestPageComponent implements OnInit {
  testInfo!: DemoTestInfoModel;
  protected readonly QuestionSetTypeEnum = QuestionSetTypeEnum;
  protected readonly trPrefix = 'demo-test-exam.';
  protected readonly trPrefixStateName = 'review-states-tests.german-states.';
  protected readonly statePaginatorData: PageEvent = {pageSize: 3, pageIndex: 0, length: 3};
  protected readonly deutschlandPaginatorData: PageEvent = {pageSize: 27, pageIndex: 0, length: 27};

  constructor(public demoTestsStateService: DemoTestsStateService, private router: Router, private dialog: MatDialog) {
  }

  onReturnClick(): void {
    this.router.navigate(['/demo-exams-list']).then();
  }

  ngOnInit(): void {
    this.demoTestsStateService.currentTest$.subscribe(currentTest => this.testInfo = currentTest);
  }

  onCurrentQuestionChange(selectedQuestionIndex: number, activeQuestionSet: QuestionSetTypeEnum): void {
    this.demoTestsStateService.setCurrentQuestionIndex({selectedQuestionIndex, activeQuestionSet});
  }

  onStateAnswerChange(selectedQuestion: TestQuestionModel, activeQuestionSet: QuestionSetTypeEnum): void {
    this.demoTestsStateService.updateTestQuestion({selectedQuestion, activeQuestionSet});
  }

  onFinishExamClick(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogYesNoComponent,
      {
        disableClose: true,
        data: {
          height: '400px',
          width: '600px',
          enterAnimationDuration,
          exitAnimationDuration,
          trPrefix: 'demo-test-exam.finish-exam-dialog.'
        }
      }).afterClosed().subscribe((result: YesNoEnum) => {
      if (result === YesNoEnum.YES) {
        this.demoTestsStateService.finishExam(ExamFinishReasonEnum.USER_FINISHED);
      }
    });
  }

  onExamResultDetailClick(): void {
    console.log('>>>> complete it later');
  }
}
