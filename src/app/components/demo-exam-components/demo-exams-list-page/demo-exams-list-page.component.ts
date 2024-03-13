import {Component, OnInit} from '@angular/core';
import {DemoTestInfoModel} from '../../../models/demo-test-info.model';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {DemoTestsStateService} from '../../../state/demo-tests/demo-tests-state.service';
import {DemoExamDetailsComponent} from '../demo-exam-details/demo-exam-details.component';
import {UtilService} from '../../../utils/util.service';
import {ConstantValues} from '../../../utils/constant-values';
import {DialogYesNoComponent} from '../../dialog-yes-no/dialog-yes-no.component';
import {UserActionEnum} from '../../../models/enums/user-action.enum';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GermanStatesEnum} from '../../../models/enums/german-states.enum';

@Component({
  selector: 'app-demo-exams-list-page',
  templateUrl: './demo-exams-list-page.component.html',
  styleUrls: ['./demo-exams-list-page.component.scss']
})
export class DemoExamsListPageComponent implements OnInit {
  protected readonly UtilService = UtilService;
  demoTestsList!: DemoTestInfoModel[];
  displayedColumns = ['id', 'title', 'examTime', 'isExamFinished', 'correctAnswered', 'incorrectAnswered', 'score', 'dateCreated', 'dateLastModified', 'edit', 'delete'];
  trPrefixTable = 'demo-exams-list.table.';

  constructor(private demoTestsStateService: DemoTestsStateService,
              private utilService: UtilService, private router: Router,
              private snackBar: MatSnackBar, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.demoTestsStateService.allDemoTests$.subscribe(allDemoTests => this.demoTestsList = allDemoTests);
  }

  onSelectedTestClick(selectedTest: DemoTestInfoModel): void {
    this.demoTestsStateService.setSelectedDemoTestId(selectedTest.id);
    this.router.navigate(['/demo-exam']).then();
  }

  getScore(correctAnswered: number): number {
    return correctAnswered * 100 / ConstantValues.TOTAL_EXAM_QUESTIONS;
  }

  getTableCaptionStyle(isExamFinished: boolean, correctAnswered: number): any {
    return {
      'passed-caption': isExamFinished && correctAnswered >= 17,
      'failed-caption': isExamFinished && correctAnswered < 17
    }
  }

  onCreateExamClick(): void {
    this.utilService.openDialog(DemoExamDetailsComponent, false, 400, 400, {
      trPrefix: this.trPrefixTable + 'exam-details-dialog.',
      isNewExamCreate: true,
      demoExamData: undefined
    }).subscribe((result: {userAction: UserActionEnum, title: string, selectedState: GermanStatesEnum}) => {
      if (result.userAction === UserActionEnum.CREATE) {
        this.demoTestsStateService.createNewExam(result.title, result.selectedState);
        this.snackBar.open(
          this.translate.instant(this.trPrefixTable + 'create-snackbar-message'),
          'OK', {duration: ConstantValues.SNACKBAR_DURATION}
        );
      }
  });
  }

  onEditClick(selectedDemoExam: DemoTestInfoModel): void {
    this.utilService.openDialog(DemoExamDetailsComponent, false, 400, 400, {
      trPrefix: this.trPrefixTable + 'exam-details-dialog.',
      isNewExamCreate: false,
      demoExamData: selectedDemoExam
    }).subscribe((result: {userAction: UserActionEnum, title: string}) => {
      if (result) {
        switch (result.userAction) {
          case UserActionEnum.RESET:
            this.demoTestsStateService.resetExam(selectedDemoExam.id);
            this.snackBar.open(
              this.translate.instant(
                this.trPrefixTable + 'reset-snackbar-message', {examId: selectedDemoExam.id}
              ),
              'OK', {duration: ConstantValues.SNACKBAR_DURATION}
            );
            break;
          case UserActionEnum.UPDATE:
            this.demoTestsStateService.updateExamTitle(selectedDemoExam.id, result.title);
            this.snackBar.open(
              this.translate.instant(
                this.trPrefixTable + 'update-snackbar-message', {examId: selectedDemoExam.id}
              ),
              'OK', {duration: ConstantValues.SNACKBAR_DURATION}
            );
            break;
        }
      }
    });
  }

  onDeleteClick(examId: number): void {
    this.utilService.openDialog(DialogYesNoComponent, true, 400, 400, {
      trPrefix: this.trPrefixTable + 'delete-exam-dialog.'
    }).subscribe((res: UserActionEnum) => {
      if (res === UserActionEnum.YES) {
        this.demoTestsStateService.deleteAnExamFromList(examId);
        this.snackBar.open(
          this.translate.instant(
            this.trPrefixTable + 'delete-snackbar-message', {examId: examId}
          ),
          'OK', {duration: ConstantValues.SNACKBAR_DURATION}
        );
      }
    });
  }
}
