import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DemoTestInfoModel} from '../../models/demo-test-info.model';
import {UtilService} from '../../utils/util.service';

@Component({
  selector: 'app-demo-test-details',
  templateUrl: './demo-exam-details.component.html',
  styleUrls: ['./demo-exam-details.component.scss']
})
export class DemoExamDetailsComponent {
  constructor(
    private dialogRef: MatDialogRef<DemoExamDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      trPrefix: string,
      demoExamData: DemoTestInfoModel
    }
  ) {
  }

  protected readonly UtilService = UtilService;
}
