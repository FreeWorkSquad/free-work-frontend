import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'freework-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * AppComponent
 */
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (!this.onWorkState) {
      this.imagePath = '../assets/image/workend.png';
    } else {
      this.imagePath = '../assets/image/working.png';
    }
  }

  onWorkState = false;
  imagePath = '';
  workingImage = '../assets/image/working.png';
  workEndImage = '../assets/image/workend.png';

  open = '출근';
  close = '퇴근';

  workStart() {
    this.imagePath = this.workingImage;
  }

  workEnd() {
    this.imagePath = this.workEndImage;
  }
}
