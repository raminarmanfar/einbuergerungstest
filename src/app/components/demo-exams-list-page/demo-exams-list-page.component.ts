import {Component, OnInit} from '@angular/core';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {Router} from '@angular/router';
import {DemoTestsStateService} from '../../state/demo-tests/demo-tests-state.service';
import {DemoExamDetailsComponent} from '../demo-exam-details/demo-exam-details.component';
import {UtilService} from '../../utils/util.service';
import {CountdownService} from '../../utils/countdown.service';
import {ConstantValues} from '../../utils/constant-values';
import {DialogYesNoComponent} from '../dialog-yes-no/dialog-yes-no.component';
import {UserActionEnum} from '../../models/enums/user-action.enum';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

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

  constructor(private demoTestsStateService: DemoTestsStateService, public countdownService: CountdownService,
              private utilService: UtilService, private router: Router, private _snackBar: MatSnackBar, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.demoTestsStateService.allDemoTests$.subscribe(allDemoTests => this.demoTestsList = allDemoTests);
  }

  onCreateNewTest(): void {
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

  onEditClick(selectedDemoExam: DemoTestInfoModel): void {
    this.utilService.openDialog(DemoExamDetailsComponent, 400, 400, {
      trPrefix: this.trPrefixTable + 'edit-exam-dialog.',
      demoExamData: selectedDemoExam
    }, undefined, undefined, undefined, undefined, false).subscribe((userAction: UserActionEnum) => {
      switch (userAction) {
        case UserActionEnum.RESET:
          this.demoTestsStateService.resetExam(selectedDemoExam.id);
          break;
        case UserActionEnum.UPDATE:
          this.demoTestsStateService.updateExamTitle(selectedDemoExam.id, selectedDemoExam.title);
          break
      }
    });
  }

  onDeleteClick(examId: number): void {
    this.utilService.openDialog(DialogYesNoComponent, 400, 400, {
      trPrefix: this.trPrefixTable + 'delete-exam-dialog.'
    }).subscribe((res: UserActionEnum) => {
      if (res === UserActionEnum.YES) {
        this.demoTestsStateService.deleteAnExamFromList(examId);
        this._snackBar.open(
          this.translate.instant(this.trPrefixTable + 'delete-exam-dialog.snackbar-message', {examId: examId}),
          'OK', {duration: ConstantValues.SNACKBAR_DURATION}
        );
      }
    });
  }
}
