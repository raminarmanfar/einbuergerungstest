import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../models/enums/language';

@Pipe({name: 'persianNumber', pure: false})
export class PersianNumberPipe implements PipeTransform {

  private currentLanguage: string;

  constructor(private translateService: TranslateService, private cdr: ChangeDetectorRef) {
    this.currentLanguage = this.translateService.currentLang;

    this.translateService.onLangChange.subscribe(() => {
      this.currentLanguage = this.translateService.currentLang;
      this.cdr.markForCheck();
    });
  }

  transform(value: any): any {
    if (value !== null && value !== undefined) {
      return this.currentLanguage === Language.FA ?
        value.toString().replace(/\d/g, (digit: any) => {
          // Replace digits 0-9 with Persian equivalents
          if (digit === '0') return '۰';
          return String.fromCharCode(digit.charCodeAt(0) + 1728);
        }) : value;
    }
    return value;
  }
}
