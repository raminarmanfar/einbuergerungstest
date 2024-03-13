import {Component, Inject} from '@angular/core';
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
export class DemoExamDetailsComponent {
  protected readonly UtilService = UtilService;
  protected readonly userAction = UserActionEnum;
  protected readonly ConstantValues = ConstantValues;

  constructor(private utilService: UtilService,
              private dialogRef: MatDialogRef<DemoExamDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { trPrefix: string, demoExamData: DemoTestInfoModel }) {
  }


  onResetExamClick(): void {
    this.utilService
      .openDialog(DialogYesNoComponent, 400, 400, {
        trPrefix: this.data.trPrefix + 'reset-exam-dialog.'
      }).subscribe((res: UserActionEnum) => {
        if (res === UserActionEnum.YES) {
          this.dialogRef.close(UserActionEnum.RESET);
        }
    });
  }

  onUpdateClick() {
    this.dialogRef.close(UserActionEnum.UPDATE);
  }
}
