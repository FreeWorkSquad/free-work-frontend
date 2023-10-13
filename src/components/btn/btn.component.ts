import {Component, Input} from '@angular/core';

@Component({
  selector: 'freework-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent {
  @Input()
  public text: string | undefined;
}
