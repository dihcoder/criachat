import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationScreenComponent } from './customization-screen.component';

describe('CustomizationScreenComponent', () => {
  let component: CustomizationScreenComponent;
  let fixture: ComponentFixture<CustomizationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizationScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
