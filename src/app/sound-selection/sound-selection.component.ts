import { Component } from '@angular/core';

@Component({
  selector: 'app-sound-selection',
  templateUrl: './sound-selection.component.html',
  styleUrls: ['./sound-selection.component.css']
})
export class SoundSelectionComponent {
  sounds = ['Forest', 'Ocean', 'Rain', 'Wind'];
  selectedSound: string = this.sounds[0];

  previewSound() {
    const audio = new Audio(`assets/sounds/${this.selectedSound}.mp3`);
    audio.play();
  }
}
