import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {TimeMode} from "../models/time.mode";

@Injectable({providedIn: 'root'})
export class CountdownService {
  private timeSubject = new BehaviorSubject<TimeMode>({minutes: 0, seconds: 0});

  public getFormattedTime(time: TimeMode): string {
    const formattedMinutes = time.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false,});
    const formattedSeconds = time.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false,});
    return formattedMinutes + ':' + formattedSeconds;
  }

  public getTime(): Observable<TimeMode> {
    return this.timeSubject.asObservable();
  }

  public startCountdown(time: TimeMode): void {
    const intervalId = setInterval(() => {
      this.timeSubject.next(time);
      time.seconds--;
      if (time.minutes >= 0 && time.seconds < 0) {
        time.seconds = 59;
        time.minutes--;
        if (time.minutes < 0) {
          time.minutes = time.seconds = 0;
          this.timeSubject.next(time);
          clearInterval(intervalId);
        }
      }
    }, 1000);
  }
}
