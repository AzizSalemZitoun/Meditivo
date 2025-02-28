import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditivoLandingComponent } from './meditivo-landing.component';

describe('MeditivoLandingComponent', () => {
  let component: MeditivoLandingComponent;
  let fixture: ComponentFixture<MeditivoLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeditivoLandingComponent]
    });
    fixture = TestBed.createComponent(MeditivoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
