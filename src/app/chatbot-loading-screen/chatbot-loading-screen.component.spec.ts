import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotLoadingScreenComponent } from './chatbot-loading-screen.component';

describe('ChatbotLoadingScreenComponent', () => {
  let component: ChatbotLoadingScreenComponent;
  let fixture: ComponentFixture<ChatbotLoadingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotLoadingScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
