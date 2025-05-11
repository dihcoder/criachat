import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SplashScreenComponent, WelcomeScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CriaChat';

  showScreen: any = {
    splash: true,
    welcome: false,
    loading: false,
    settings: false,
    training: false,
    customization: false,
    finishing: false
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showScreen.splash = false;
      this.showScreen.welcome = true;
    }, 4000);
  }
}
