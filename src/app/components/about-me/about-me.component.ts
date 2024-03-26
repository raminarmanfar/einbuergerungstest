import {Component} from '@angular/core';
import {AppStateService} from '../../state/app-state.service';
import {UtilService} from '../../utils/util.service';
import {DialogYesNoComponent} from '../dialog-yes-no/dialog-yes-no.component';
import {UserActionEnum} from '../../models/enums/user-action.enum';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private appStateService: AppStateService, private utilService: UtilService) {
  }

  onAppStateResetClick(): void {
    this.utilService.openDialog(DialogYesNoComponent, true, 400, 400, {
      trPrefix: 'about-me.reset-app-data-dialog.'
    }).subscribe((res: UserActionEnum) => {
      if (res === UserActionEnum.YES) {
        this.appStateService.resetToInitialState();
      }
    });
  }
}
