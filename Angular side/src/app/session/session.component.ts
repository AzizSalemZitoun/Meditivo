import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  step: number = 1;
  durationOptions = [5 * 60, 10 * 60, 15 * 60];
  selectedDuration: number | null = null;

  wantsSound: boolean | null = null;
  sounds = ['Rain', 'Ocean Waves', 'Guided'];
  selectedSound: string | null = null;

  timeLeft: number = 0;
  timerInterval: any = null;
  isRunning: boolean = false;
  audio: HTMLAudioElement | null = null;

  savedSessions: any[] = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.loadSavedSessions();
  }

  loadSavedSessions() {
    this.sessionService.getSessionsByUser().subscribe({
      next: sessions => {
        this.savedSessions = Array.isArray(sessions) ? sessions : [];
      },
      error: err => {
        console.error('Failed to fetch sessions', err);
        this.savedSessions = [];
      }
    });
  }

  chooseDuration(seconds: number) {
    this.selectedDuration = seconds;
    this.step = 2;
  }

  chooseWantsSound(wants: boolean) {
    this.wantsSound = wants;
    if (!wants) {
      this.step = 4;
      this.timeLeft = this.selectedDuration!;
    } else {
      this.step = 3;
    }
  }

  chooseSound(sound: string) {
    this.selectedSound = sound;
    this.step = 4;
    this.timeLeft = this.selectedDuration!;
    this.audio = new Audio();
  }

  startTimer() {
    if (this.isRunning || this.timeLeft <= 0) return;

    this.isRunning = true;

    if (this.selectedSound) {
      this.audio!.src = `assets/sounds/${this.selectedSound}.mp3`;
      this.audio!.loop = true;
      this.audio!.play();
    }

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.stopTimer();
        alert('Session complete!');
      }
    }, 1000);
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
    if (this.audio) this.audio.pause();
  }

  resetTimer() {
    this.pauseTimer();
    this.timeLeft = this.selectedDuration!;
    if (this.audio) this.audio.currentTime = 0;
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  saveSession() {
    if (!this.selectedDuration) return;

    const sessionData = {
      duration: this.selectedDuration,
      sound: this.wantsSound ? this.selectedSound : null
    };

    this.sessionService.saveSession(this.selectedDuration!, this.selectedSound)
    .subscribe({
      next: res => {
        console.log('Session saved:', res);
        this.loadSavedSessions(); // recharger les sessions
      },
      error: err => {
        console.error('Failed to save session', err);
      }
    });
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  restartSession() {
    this.stopTimer();
    this.step = 1;
    this.selectedDuration = null;
    this.wantsSound = null;
    this.selectedSound = null;
    this.timeLeft = 0;
    this.audio = null;
  }
}
