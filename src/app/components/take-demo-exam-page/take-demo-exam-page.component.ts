import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';
import {concatMap, Subscription} from 'rxjs';

import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {TestQuestionModel} from '../../models/test-question.model';
import {QuestionSetTypeEnum} from '../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../models/enums/exam-finish-reason.enum';
import {DialogYesNoComponent} from '../dialog-yes-no/dialog-yes-no.component';
import {UserActionEnum} from '../../models/enums/user-action.enum';
import {ConstantValues} from '../../utils/constant-values';
import {CountdownService} from '../../utils/countdown.service';
import {TimeModel} from '../../models/time.model';
import {UtilService} from '../../utils/util.service';

@Component({
  selector: 'app-take-demo-test-page',
  templateUrl: './take-demo-exam-page.component.html',
  styleUrls: ['./take-demo-exam-page.component.scss']
})
export class TakeDemoExamPageComponent implements OnInit, OnDestroy {
  @HostListener('window:unload', ['$event'])
  unloadHandler(event: any): void {
    console.log('>>> event:', event);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: any): void {
    console.log('>>> event:', event);
    this.demoTestsStateService.setExamLastChanges();
    this.destroyAllAndSetCurrentTimer();
    this.testInfoSubscription.unsubscribe();
    if (this.correctAnswersCountSubscription) {
      this.correctAnswersCountSubscription.unsubscribe();
    }
  }

  testInfo!: DemoTestInfoModel;
  examTime!: TimeModel;
  correctAnswersCount = 0;
  private testInfoSubscription!: Subscription;
  private getTimeSubscription!: Subscription;
  private correctAnswersCountSubscription!: Subscription;
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
              private router: Router, private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.correctAnswersCountSubscription = this.demoTestsStateService.currentTestCorrectAnswersCount$
      .subscribe(correctAnswersCount => this.correctAnswersCount = correctAnswersCount);
    this.testInfoSubscription = this.demoTestsStateService.currentTest$.subscribe(testInfo => this.testInfo = testInfo);
    this.getTimeSubscription = this.demoTestsStateService.currentTest$.pipe(
      concatMap(() => this.countdownService.startCountdown(this.testInfo.examTime))
    ).subscribe(countdown => {
      this.examTime = countdown;
      if (countdown.minutes === 0 && countdown.seconds === 0) {
        this.destroyAllAndSetCurrentTimer();
        this.demoTestsStateService.finishExam(ExamFinishReasonEnum.TIME_OVER);
        this.testInfoSubscription.unsubscribe();
      }
    });
  }

  private destroyAllAndSetCurrentTimer(): void {
    this.countdownService.stopCountdown();
    this.getTimeSubscription.unsubscribe();
    this.demoTestsStateService.setExamCountdownTimer(this.examTime);
    if (this.correctAnswersCountSubscription) {
      this.correctAnswersCountSubscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroyAllAndSetCurrentTimer();
    this.testInfoSubscription.unsubscribe();
  }

  onReturnClick(): void {
    this.destroyAllAndSetCurrentTimer();
    this.testInfoSubscription.unsubscribe();
    this.demoTestsStateService.setExamLastChanges();
    this.router.navigate(['/demo-exams-list']).then();
  }

  onCurrentQuestionChange(selectedQuestionIndex: number, activeQuestionSet: QuestionSetTypeEnum): void {
    this.demoTestsStateService.setCurrentQuestionIndex({selectedQuestionIndex, activeQuestionSet});
  }

  onStateAnswerChange(selectedQuestion: TestQuestionModel, activeQuestionSet: QuestionSetTypeEnum): void {
    this.demoTestsStateService.updateTestQuestion({selectedQuestion, activeQuestionSet});
  }

  onFinishExamClick(): void {
    this.utilService.openDialog(DialogYesNoComponent, 400, 400, {
      trPrefix: 'demo-test-exam.finish-exam-dialog.'
    }).subscribe((result: UserActionEnum) => {
      if (result === UserActionEnum.YES) {
        this.demoTestsStateService.finishExam(ExamFinishReasonEnum.USER_FINISHED);
      }
    });
  }

  onExamResultDetailClick(): void {
    console.log('>>>> complete it later');
  }

  protected readonly UtilService = UtilService;
}
