import {Injectable} from '@angular/core';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../models/enums/language';

@Injectable()
export class CustomPaginatorService implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';
  private currentLanguage: string = Language.EN;

  constructor(public translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(currentLanguage => {
      this.currentLanguage = currentLanguage.lang;
      this.translateService.get('general.next')
        .subscribe(labelValue => {
          console.log(labelValue);
          this.itemsPerPageLabel = labelValue;

          // must call this method after change label.
          this.changes.next();
        });

    });
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    let pageRangeLabel = ''
    switch (this.currentLanguage) {
      case Language.DE:
        pageRangeLabel = 'Seite';
        break;
      case Language.EN:
        pageRangeLabel = 'Page';
        break;
      case Language.TR:
        pageRangeLabel = 'Sayfa';
        break;
      case Language.FA:
        pageRangeLabel = 'صفحه';
        break;
    }
    if (length === 0) {
      return `${pageRangeLabel} 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `${pageRangeLabel} ${page + 1} of ${amountPages}`;
  }
}
