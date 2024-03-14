import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({name: 'dateFormat'})
export class DateFormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: any, format: string = 'dd.MM.yyyy - HH:mm'): string {
    return this.datePipe.transform(value, format) || '';
  }

}
