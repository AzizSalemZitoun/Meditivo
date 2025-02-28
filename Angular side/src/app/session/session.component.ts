import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  sessionStatus: string = 'Paused';

  startPauseSession() {
    this.sessionStatus = this.sessionStatus === 'In Progress' ? 'Paused' : 'In Progress';
  }
}
