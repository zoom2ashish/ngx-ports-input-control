import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputType } from './components/ports-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Ports Input Control using Custom Form Validator';

  readonly InputType = InputType;

  portValue = []; // [ 80 ];
  multiPortValue = []; // [90,8080,"443-445"];
  singleFormControl = new FormControl([90]);
  multiFormControl = new FormControl([80, 4434]);
}
