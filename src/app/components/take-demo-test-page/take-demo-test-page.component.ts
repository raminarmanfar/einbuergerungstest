import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {ConstantValues} from '../../utils/constant-values';
import {CountdownService} from "../../utils/countdown.service";
import {TimeModel} from "../../models/time.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-take-demo-test-page',
  templateUrl: './take-demo-test-page.component.html',
  styleUrls: ['./take-demo-test-page.component.scss']
})
export class TakeDemoTestPageComponent implements OnInit, OnDestroy {
  testInfo!: DemoTestInfoModel;
  examTime!: TimeModel;
  private testInfoSubscription!: Subscription;
  private getTimeSubscription!: Subscription;
  protected readonly QuestionSetTypeEnum = QuestionSetTypeEnum;
  protected readonly trPrefix = 'demo-test-exam.';
  protected readonly trPrefixStateName = 'review-states-tests.german-states.';
  protected readonly statePaginatorData: PageEvent = {
    pageSize: ConstantValues.STATES_EXAM_QUESTIONS_COUNT,
    pageIndex: 0,
    length: ConstantValues.STATES_EXAM_QUESTIONS_COUNT
  };
  protected readonly deutschlandPaginatorData: PageEvent = {
    pageSize: ConstantValues.DEUTSCHLAND_EXAM_QUESTIONS_COUNT,
    pageIndex: 0,
    length: ConstantValues.DEUTSCHLAND_EXAM_QUESTIONS_COUNT
  };

  constructor(public demoTestsStateService: DemoTestsStateService,
              public countdownService: CountdownService,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.testInfoSubscription = this.demoTestsStateService.currentTest$.subscribe(currentTest => {
      this.testInfo = currentTest;
      this.countdownService.startCountdown({minutes: currentTest.examTime.minutes, seconds: currentTest.examTime.seconds});
    });
    this.getTimeSubscription = this.countdownService.getTime().subscribe(time => this.examTime = time);
  }

  ngOnDestroy(): void {
    this.demoTestsStateService.setExamCountdownTimer(this.examTime);
    this.countdownService.stopCountdown();
    this.testInfoSubscription.unsubscribe();
    this.getTimeSubscription.unsubscribe();
  }

  onReturnClick(): void {
    this.countdownService.stopCountdown();
    this.router.navigate(['/demo-exams-list']).then();
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
