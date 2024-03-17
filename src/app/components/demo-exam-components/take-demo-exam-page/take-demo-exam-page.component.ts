import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {concatMap, Subscription} from 'rxjs';

import {DemoTestsStateService} from '../../../state/demo-tests/demo-tests-state.service';
import {DemoTestInfoModel} from '../../../models/demo-test-info.model';
import {TestQuestionModel} from '../../../models/test-question.model';
import {QuestionSetTypeEnum} from '../../../models/enums/question-set-type.enum';
import {ExamFinishReasonEnum} from '../../../models/enums/exam-finish-reason.enum';
import {DialogYesNoComponent} from '../../dialog-yes-no/dialog-yes-no.component';
import {UserActionEnum} from '../../../models/enums/user-action.enum';
import {ConstantValues} from '../../../utils/constant-values';
import {CountdownService} from '../../../utils/countdown.service';
import {UtilService} from '../../../utils/util.service';
import {DemoExamDetailsComponent} from '../demo-exam-details/demo-exam-details.component';

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
    this.stopCountingDown();
    this.currentTestSubscription.unsubscribe();
    this.examPausedSubscription.unsubscribe();
  }

  testInfo!: DemoTestInfoModel;
  private currentTestSubscription!: Subscription;
  private examPausedSubscription!: Subscription;
  private getTimeSubscription!: Subscription;
  protected readonly QuestionSetTypeEnum = QuestionSetTypeEnum;
  protected readonly UtilService = UtilService;
  protected readonly trPrefix = 'take-demo-exam.';
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
  correctAnswersCount!: number;

  constructor(public demoTestsStateService: DemoTestsStateService,
              public countdownService: CountdownService,
              private snackBar: MatSnackBar, private translate: TranslateService,
              private utilService: UtilService) {
  }

  private startCountingDown(): void {
    this.getTimeSubscription = this.demoTestsStateService.currentExamRemainingTime$.pipe(
      concatMap(remainingTime => this.countdownService.startCountdown(remainingTime))
    ).subscribe(countdown => {
      this.testInfo.examTime = countdown;
      if (countdown.minutes === 0 && countdown.seconds === 0) {
        this.countdownService.stopCountdown();
        this.demoTestsStateService.finishExam(ExamFinishReasonEnum.TIME_OVER, countdown);
      }
    });
  }

  private stopCountingDown(): void {
    if (this.getTimeSubscription) {
      this.getTimeSubscription.unsubscribe();
    }
    this.countdownService.stopCountdown();
    if (this.testInfo.examTime) {
      this.demoTestsStateService.setExamCountdownTimer(this.testInfo.examTime);
    }
  }

  ngOnInit(): void {
    this.currentTestSubscription = this.demoTestsStateService.currentTest$.subscribe(currentTest => {
      this.testInfo = currentTest;
      this.demoTestsStateService.setCurrentExamPause(currentTest.isExamFinished);
    });
    this.examPausedSubscription = this.demoTestsStateService.currentExamPaused$.subscribe(currentExamPaused => {
      if (currentExamPaused) {
        this.correctAnswersCount = UtilService.getAnswersCounts(this.testInfo).correctAnswered;
        this.stopCountingDown();
      } else {
        this.startCountingDown();
      }
    });
  }

  ngOnDestroy(): void {
    this.stopCountingDown();
    this.currentTestSubscription.unsubscribe();
    this.examPausedSubscription.unsubscribe();
  }

  onCurrentQuestionChange(selectedQuestionIndex: number, activeQuestionSet: QuestionSetTypeEnum): void {
    this.demoTestsStateService.setCurrentQuestionIndex({selectedQuestionIndex, activeQuestionSet});
  }

  onStateAnswerChange(selectedQuestion: TestQuestionModel, activeQuestionSet: QuestionSetTypeEnum): void {
    this.demoTestsStateService.updateTestQuestion({selectedQuestion, activeQuestionSet});
  }

  onFinishExamClick(): void {
    this.utilService.openDialog(DialogYesNoComponent, true, 400, 400, {
      trPrefix: 'take-demo-exam.finish-exam-dialog.'
    }, 600).subscribe((result: UserActionEnum) => {
      if (result === UserActionEnum.YES) {
        this.demoTestsStateService.finishExam(ExamFinishReasonEnum.USER_FINISHED, this.testInfo.examTime);
      }
    });
  }

  onExamResultDetailClick(): void {
    const trPrefixTable = 'demo-exams-list.table.';
    this.utilService.openDialog(DemoExamDetailsComponent, false, 400, 400, {
      trPrefix: trPrefixTable + 'exam-details-dialog.',
      isNewExamCreate: false,
      demoExamData: UtilService.cloneDeep(this.testInfo)
    }).subscribe((result: { userAction: UserActionEnum, title: string }) => {
      if (result) {
        switch (result.userAction) {
          case UserActionEnum.RESET:
            // this.startCountingDown();
            this.demoTestsStateService.resetExam(this.testInfo.id, result.title);
            this.snackBar.open(
              this.translate.instant(
                trPrefixTable + 'reset-snackbar-message', {examId: this.testInfo.id}
              ),
              'OK', {duration: ConstantValues.SNACKBAR_DURATION}
            );
            break;
          case UserActionEnum.UPDATE:
            this.demoTestsStateService.updateExamTitle(this.testInfo.id, result.title);
            this.snackBar.open(
              this.translate.instant(
                trPrefixTable + 'update-snackbar-message', {examId: this.testInfo.id}
              ),
              'OK', {duration: ConstantValues.SNACKBAR_DURATION}
            );
            break;
        }
      }
    });
  }
}
