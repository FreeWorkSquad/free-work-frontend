import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagePath: string = "../assets/image/lego.jpg";

  open: string = '출근';
  close: string = "퇴근";
}
