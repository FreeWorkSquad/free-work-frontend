import {Component, Input} from '@angular/core';

@Component({
  selector: 'freework-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input()
    text = '';
  @Input()
    state = '#afffaf';

  style = {
    borderRadius: '7px',
    border: '1px solid #ffffffff',
    backgroundColor: this.state
  };
}
