import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  pipeValue = "";
  value = 0;
  currencyVal = 0;
  purePipeValue !: number;
  impurePipeValue = "";
}
