import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from "../components/button-primary/button-primary.component";
import { ButtonSecondaryComponent } from "../components/button-secondary/button-secondary.component";

@Component({
  selector: 'app-welcome-screen',
  imports: [ButtonPrimaryComponent, ButtonSecondaryComponent],
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.scss'
})
export class WelcomeScreenComponent {

}
