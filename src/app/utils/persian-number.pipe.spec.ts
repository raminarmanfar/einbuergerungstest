import {inject, TestBed} from '@angular/core/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {PersianNumberPipe} from './persian-number.pipe';

class TranslateServiceMock {
  onLangChange = {
    subscribe: () => {}
  };
  currentLang = 'en';
}

describe('PersianNumberPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateService, useClass: TranslateServiceMock }
        })
      ],
      providers: [
        PersianNumberPipe
      ]
    });
  });

  it('should transform numbers to Persian when the language is set to Persian', inject(
    [PersianNumberPipe, TranslateService],
    (pipe: PersianNumberPipe, translateService: TranslateService) => {
      translateService.currentLang = 'fa';
      const result = pipe.transform(12345);
      expect(result).toBe('۱۲۳۴۵');
    }
  ));

  it('should transform numbers to Western Arabic numerals when the language is set to English', inject(
    [PersianNumberPipe, TranslateService],
    (pipe: PersianNumberPipe, translateService: TranslateService) => {
      translateService.currentLang = 'en';
      const result = pipe.transform(12345);
      expect(result).toBe('12345');
    }
  ));
});
