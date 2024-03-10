import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {TimeModel} from "../models/time.model";

@Injectable({providedIn: 'root'})
export class CountdownService {
  private intervalId: any;
  private time!: TimeModel;
  private timeSubject = new BehaviorSubject<TimeModel>({minutes: 0, seconds: 0});

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
      this.time = {minutes: 0, seconds: 0};
      clearInterval(this.intervalId);
    }
  }

  public startCountdown(time: TimeModel): void {
    this.time = time;
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
