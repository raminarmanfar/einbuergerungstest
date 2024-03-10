import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {TimeModel} from "../models/time.model";

@Injectable({providedIn: 'root'})
export class CountdownService {
  private intervalId!: number;
  private timeSubject!: BehaviorSubject<TimeModel>;

  public getFormattedTime(time: TimeModel): string {
    const formattedMinutes = time.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false,});
    const formattedSeconds = time.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false,});
    return formattedMinutes + ':' + formattedSeconds;
  }

  public getTime(): Observable<TimeModel> {
    return this.timeSubject.asObservable();
  }

  public stopCountdown(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  public startCountdown(countdownTime: TimeModel): void {
    const time: TimeModel = {...countdownTime};
    this.timeSubject = new BehaviorSubject<TimeModel>(time);

    this.intervalId = setInterval(() => {
      this.timeSubject.next(time);
      time.seconds--;
      if (time.minutes >= 0 && time.seconds < 0) {
        time.seconds = 59;
        time.minutes--;
        if (time.minutes < 0) {
          time.minutes = time.seconds = 0;
          this.timeSubject.next(time);
          this.stopCountdown();
        }
      }
    }, 1000);
  }
}
