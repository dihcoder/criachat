import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingScreenComponent } from './training-screen.component';

describe('TrainingScreenComponent', () => {
  let component: TrainingScreenComponent;
  let fixture: ComponentFixture<TrainingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
