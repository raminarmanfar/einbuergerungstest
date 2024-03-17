import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Direction} from '@angular/cdk/bidi';
import {Subscription} from 'rxjs';
import {AppStateService} from '../../state/app-state.service';
import {Language} from '../../models/enums/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public dir: Direction = 'ltr';

  private _dirChangeSubscription = Subscription.EMPTY;

  constructor(private translate: TranslateService, private appStateService: AppStateService) {
  }

  ngOnInit(): void {
    this.translate.addLangs([Language.EN, Language.DE, Language.TR, Language.FA]);
    this.translate.setDefaultLang(Language.DE);
    this.translate.currentLang = '';
    this.appStateService.activeLanguage$.subscribe(activeLanguage => {
      this.translate.use(activeLanguage);
      this.dir = activeLanguage === Language.FA ? 'rtl' : 'ltr';
    });
  }

  ngOnDestroy(): void {
    this._dirChangeSubscription.unsubscribe();
  }
}
