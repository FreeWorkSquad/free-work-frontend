import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'freework-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
/**
 * AppComponent
 */
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (!this.onWorkState) {
      this.imagePath = this.workEndImage;
    } else {
      this.imagePath = this.workingImage;
    }
  }

  showSideMenu = false;
  onWorkState = false;
  imagePath = '';
  workingImage = './assets/image/working.png';
  workEndImage = './assets/image/workend.png';

  open = '출근';
  close = '퇴근';

  workInOut() {
    if (!this.onWorkState) {
      // 출근하지 않았을 때, 출근 상태로 변경
      this.imagePath = this.workingImage;
    } else {
      // 출근했을 때, 퇴근 상태로 변경
      this.imagePath = this.workEndImage;
    }
    this.onWorkState = !this.onWorkState;
  }
}
