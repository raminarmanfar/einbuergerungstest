import {Injectable} from '@angular/core';
import {map, Observable, Subject, Subscription, takeWhile, timer} from 'rxjs';
import {TimeModel} from '../models/time.model';

@Injectable({providedIn: 'root'})
export class CountdownService {
  private countdownSubscription!: Subscription;
  private countdownSubject!: Subject<TimeModel>;

  startCountdown(time: TimeModel): Observable<TimeModel> {
    const totalSeconds = time.minutes * 60 + time.seconds;
    this.countdownSubject = new Subject<TimeModel>();
    // Emit the initial value
    this.countdownSubject.next(time);

    this.countdownSubscription = timer(0, 1000).pipe(
      takeWhile((count) => count <= totalSeconds),
      map((count) => totalSeconds - count)
    ).subscribe((remainingSeconds) => {
      const time: TimeModel = {minutes: Math.floor(remainingSeconds / 60), seconds: remainingSeconds % 60};
      this.countdownSubject.next(time);

      // Emit completion when countdown reaches zero
      if (remainingSeconds === 0) {
        this.countdownSubject.complete();
      }
    });

    return this.countdownSubject.asObservable();
  }

  stopCountdown(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
      this.countdownSubject.complete();
    }
  }
}
