import {Component, OnInit} from '@angular/core';
import {AppStateService} from '../../state/app-state.service';
import {Language} from '../../models/enums/language';
import {Country} from '../../models/enums/country';
import {ErrorMessages} from '../../utils/error-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languageList = [
    {language: Language.DE, caption: 'Deutsch', country: Country.GERMANY},
    {language: Language.EN, caption: 'English', country: Country.UK},
    {language: Language.TR, caption: 'Türkce', country: Country.TURKEY},
    {language: Language.FA, caption: 'فارسی', country: Country.IRAN},
  ];
  activeLanguage = Language.DE;
  countryName = Country.GERMANY;

  constructor(public appStateService: AppStateService) {
  }

  ngOnInit(): void {
    this.appStateService.activeLanguage$.subscribe(activeLanguage => {
      this.activeLanguage = activeLanguage;
      switch (activeLanguage) {
        case Language.EN: this.countryName = Country.UK; break;
        case Language.DE: this.countryName = Country.GERMANY; break;
        case Language.TR: this.countryName = Country.TURKEY; break;
        case Language.FA: this.countryName = Country.IRAN; break;
        default: throw new Error(ErrorMessages.LANGUAGE_NOT_EXIST);
      }
    });
  }

  changeActiveLanguage(language: Language): void {
    this.appStateService.setActiveLanguage(language);
  }

  protected readonly Language = Language;
}
