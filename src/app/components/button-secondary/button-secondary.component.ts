import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  imports: [],
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.scss'
})
export class ButtonSecondaryComponent {
  label = input('');

  handleBtnClick() {
    console.log('Secondary btn clicked!');
  }
}
