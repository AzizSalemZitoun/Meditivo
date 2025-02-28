import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  username: string = 'JohnDoe';
  savedPresets: string[] = ['Relaxation', 'Focus'];

  // Add methods for editing settings, managing saved presets, etc.
}
