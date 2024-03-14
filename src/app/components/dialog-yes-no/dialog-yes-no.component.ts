import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserActionEnum} from '../../models/enums/user-action.enum';

@Component({
  selector: 'app-dialog-yes-no',
  templateUrl: './dialog-yes-no.component.html',
  styleUrls: ['./dialog-yes-no.component.scss']
})
export class DialogYesNoComponent {
  protected readonly YesNoEnum = UserActionEnum;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { trPrefix: string }) {
  }
}
