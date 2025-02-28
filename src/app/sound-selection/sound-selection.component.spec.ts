import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSelectionComponent } from './sound-selection.component';

describe('SoundSelectionComponent', () => {
  let component: SoundSelectionComponent;
  let fixture: ComponentFixture<SoundSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundSelectionComponent]
    });
    fixture = TestBed.createComponent(SoundSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
