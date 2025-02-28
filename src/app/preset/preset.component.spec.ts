import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetComponent } from './preset.component';

describe('PresetComponent', () => {
  let component: PresetComponent;
  let fixture: ComponentFixture<PresetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresetComponent]
    });
    fixture = TestBed.createComponent(PresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
