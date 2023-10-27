import {Component, OnInit} from '@angular/core';
import {GeoLocation} from './vo/geo-location';

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
  geoLocation: GeoLocation = new GeoLocation;

  showSideMenu = false;
  onWorkState = false;
  imagePath = '';
  workingImage = './assets/image/working.png';
  workEndImage = './assets/image/workend.png';

  open = '출근';
  close = '퇴근';

  workInOutEvent(position: GeolocationPosition) {
    // GPS 위경도 저장
    this.geoLocation?.set(position.coords.longitude, position.coords.latitude);
    console.log(this.geoLocation?.get());
    if (!this.onWorkState) {
      // 출근하지 않았을 때, 출근 상태로 변경
      this.imagePath = this.workingImage;
    } else {
      // 출근했을 때, 퇴근 상태로 변경
      this.imagePath = this.workEndImage;
    }
    this.onWorkState = !this.onWorkState;
  }

  workInOut() {
    navigator.geolocation.getCurrentPosition(
        (position) => this.workInOutEvent(position),
        (error) => alert("GPS 위치를 잡을 수 없습니다.")
    );
  }
}
