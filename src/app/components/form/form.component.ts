import { Component } from '@angular/core';
import { Step1Component} from './step1/step1.component';
import { Step2Component} from './step2/step2.component';
import { Step3Component} from './step3/step3.component';
import { Step4Component} from './step4/step4.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [Step1Component, Step2Component, Step3Component, Step4Component],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  step: number = 1;


  changeStep(step: number) {
    switch(step) {
      case 1:
        this.step = 1;
        break;
      case 2:
        this.step = 2;
        break;
      case 3:
        this.step = 3;
        break;
      case 4:
        this.step = 4;
        break;
    }
  }
}
