import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSettingsScreenComponent } from './basic-settings-screen.component';

describe('BasicSettingsScreenComponent', () => {
  let component: BasicSettingsScreenComponent;
  let fixture: ComponentFixture<BasicSettingsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSettingsScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSettingsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
