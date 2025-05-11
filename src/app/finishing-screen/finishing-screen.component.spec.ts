import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingScreenComponent } from './finishing-screen.component';

describe('FinishingScreenComponent', () => {
  let component: FinishingScreenComponent;
  let fixture: ComponentFixture<FinishingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishingScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
