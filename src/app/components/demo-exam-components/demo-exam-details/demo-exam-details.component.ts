import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DemoTestInfoModel} from '../../../models/demo-test-info.model';
import {UtilService} from '../../../utils/util.service';
import {UserActionEnum} from '../../../models/enums/user-action.enum';
import {ConstantValues} from '../../../utils/constant-values';
import {DialogYesNoComponent} from '../../dialog-yes-no/dialog-yes-no.component';
import {ReviewStatesTestsStateService} from '../../../state/review-states-tests/review-states-tests-state.service';
import {StateInfoModel} from '../../../models/state-info.model';
import {DemoTestsStateService} from '../../../state/demo-tests/demo-tests-state.service';
import {AnswersCountModel} from '../../../models/answers-count.model';

@Component({
  selector: 'app-demo-test-details',
  templateUrl: './demo-exam-details.component.html',
  styleUrls: ['./demo-exam-details.component.scss']
})
export class DemoExamDetailsComponent implements OnInit {
  protected readonly UtilService = UtilService;
  protected readonly userAction = UserActionEnum;
  protected readonly ConstantValues = ConstantValues;
  protected readonly trPrefixState = 'review-states-tests.german-states.';
  protected readonly germanStates = ConstantValues.GERMAN_STATES;
  selectedStateInfo: StateInfoModel | undefined = undefined;
  examTitle = '';
  answersCounts!: AnswersCountModel;

  constructor(public demoTestsStateService: DemoTestsStateService,
              private utilService: UtilService,
              private reviewStatesTestsStateService: ReviewStatesTestsStateService,
              private dialogRef: MatDialogRef<DemoExamDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                trPrefix: string,
                isNewExamCreate: boolean,
                demoExamData: DemoTestInfoModel
              }) {
  }

  ngOnInit(): void {
    if (!this.data.isNewExamCreate) {
      this.answersCounts = UtilService.getAnswersCounts(this.data.demoExamData);
    }
    this.examTitle = this.data.isNewExamCreate ? '' : this.data.demoExamData.title;

    this.reviewStatesTestsStateService.allSubState$.subscribe(allSubStateData =>
      this.selectedStateInfo = allSubStateData.selectedStateIndex >= 0 ? this.germanStates[allSubStateData.selectedStateIndex] : undefined
    );
  }


  onResetExamClick(): void {
    this.utilService.openDialog(DialogYesNoComponent, true, 400, 400, {
      trPrefix: this.data.trPrefix + 'reset-exam-dialog.'
    }, 600).subscribe((res: UserActionEnum) => {
      if (res === UserActionEnum.YES) {
        this.dialogRef.close({userAction: UserActionEnum.RESET, title: this.examTitle});
      }
    });
  }

  onCreateOrUpdateClick() {
    this.dialogRef.close({
      userAction: this.data.isNewExamCreate ? UserActionEnum.CREATE : UserActionEnum.UPDATE,
      selectedState: this.selectedStateInfo?.name,
      title: this.examTitle
    });
  }
}
