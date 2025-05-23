import { Component } from '@angular/core';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent {
  presets: string[] = ['Relaxation', 'Focus'];
  
  savePreset() {
    const newPreset = 'My Custom Preset'; 
    this.presets.push(newPreset);
  }
}
