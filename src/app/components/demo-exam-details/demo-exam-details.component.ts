import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {UtilService} from '../../utils/util.service';
import {UserActionEnum} from '../../models/enums/user-action.enum';
import {ConstantValues} from '../../utils/constant-values';
import {DialogYesNoComponent} from '../dialog-yes-no/dialog-yes-no.component';

@Component({
  selector: 'app-demo-test-details',
  templateUrl: './demo-exam-details.component.html',
  styleUrls: ['./demo-exam-details.component.scss']
})
export class DemoExamDetailsComponent implements OnInit {
  protected readonly UtilService = UtilService;
  protected readonly userAction = UserActionEnum;
  protected readonly ConstantValues = ConstantValues;
  examTitle = '';

  constructor(private utilService: UtilService,
              private dialogRef: MatDialogRef<DemoExamDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                trPrefix: string,
                isNewExamCreate: boolean,
                demoExamData: DemoTestInfoModel
              }) {
  }

  ngOnInit(): void {
    this.examTitle = this.data.isNewExamCreate ? '' : this.data.demoExamData.title;
  }


  onResetExamClick(): void {
    this.utilService
      .openDialog(DialogYesNoComponent, true, 400, 400, {
        trPrefix: this.data.trPrefix + 'reset-exam-dialog.'
      }).subscribe((res: UserActionEnum) => {
      if (res === UserActionEnum.YES) {
        this.dialogRef.close({userAction: UserActionEnum.RESET});
      }
    });
  }

  onCreateOrUpdateClick() {
    this.dialogRef.close({
      userAction: this.data.isNewExamCreate ? UserActionEnum.CREATE : UserActionEnum.UPDATE, title: this.examTitle
    });
  }
}
