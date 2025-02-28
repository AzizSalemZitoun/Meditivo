import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() sessionStatus: string = 'Paused';
  minutes: number = 0;
  seconds: number = 0;
  private timer$ = interval(1000);
  private timerSubscription: any;

  ngOnInit() {
    if (this.sessionStatus === 'In Progress') {
      this.startTimer();
    }
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    this.timerSubscription = this.timer$.subscribe(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.stopTimer();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    });
  }

  stopTimer() {
    this.timerSubscription.unsubscribe();
  }
}
