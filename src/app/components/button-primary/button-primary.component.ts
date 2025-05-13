import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  label = input('');

  handleBtnClick() {
    console.log('Primary btn clicked!');
  }
}
