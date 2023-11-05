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
        (error) => alert("GPS 위치를 잡을 수 없어 출퇴근을 기록할 수 없습니다.")
    );
  }

  favorit(func: Number) {
    switch(func) {
      case 1: alert("출퇴근 메뉴로 이동합니다."); return;
      case 2: alert("휴가 메뉴로 이동합니다."); return;
      default: alert("앱에 오류가 발생하였습니다. 잠시 후 다시 시도해주세요"); return;
    }
  }
}
