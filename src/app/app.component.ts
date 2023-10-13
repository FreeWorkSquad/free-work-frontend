import {Component} from '@angular/core';

@Component({
  selector: 'freework-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * AppComponent
 */
export class AppComponent {
  imagePath = '../assets/image/lego.jpg';

  open = '출근';
  close = '퇴근';
}
