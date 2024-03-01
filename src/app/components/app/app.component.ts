import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppStateService} from '../../state/app-state.service';
import {Language} from '../../models/enums/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService, private appStateService: AppStateService) {
  }

  ngOnInit(): void {
    this.translate.addLangs([Language.EN, Language.DE, Language.TR, Language.FA]);
    this.translate.setDefaultLang(Language.DE);
    this.appStateService.activeLanguage$.subscribe(activeLanguage => this.translate.use(activeLanguage));
  }
}
