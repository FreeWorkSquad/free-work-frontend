import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeoLocation, GeoLocationDefault} from '../service/gps/vo/geo-location';
import {Attendance} from '../service/attendance/attendance';

@Component({
  selector: 'freework-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
/**
 * AppComponent
 */
export class AppComponent implements OnInit {
  constructor(httpClient: HttpClient) {
    this.geoLocation = new GeoLocation(GeoLocationDefault.LONGITUDE, GeoLocationDefault.LATITUDE);
    this.attendance = new Attendance(httpClient);
  }

  ngOnInit(): void {
    if (!this.onWorkState) {
      this.imagePath = this.workEndImage;
    } else {
      this.imagePath = this.workingImage;
    }
  }

  attendance: Attendance;
  geoLocation: GeoLocation;

  showSideMenu = false;
  onWorkState = false;
  imagePath = '';
  workingImage = './assets/image/working.png';
  workEndImage = './assets/image/workend.png';

  open = '출근';
  close = '퇴근';

  workInOutEvent(position: GeolocationPosition) {
    // TODO: Cross origin 에러가 발생, 확인필요.
    // GPS 위경도 저장
    this.geoLocation?.set(position.coords.longitude, position.coords.latitude);
    console.log(this.geoLocation?.get());
    if (!this.onWorkState) {
      // 출근하지 않았을 때, 출근 상태로 변경 (출근하기)
      this.attendance.checkIn(position);
      this.imagePath = this.workingImage;
    } else {
      // 출근했을 때, 퇴근 상태로 변경 (퇴근하기)
      this.attendance.checkOut(position);
      this.imagePath = this.workEndImage;
    }
    this.onWorkState = !this.onWorkState;
  }

  workInOut() {
    navigator.geolocation.getCurrentPosition(
        (position) => this.workInOutEvent(position),
        () => alert('GPS 위치를 잡을 수 없어 출퇴근을 기록할 수 없습니다.')
    );
  }

  favorit(func: number) {
    switch (func) {
      case 1: alert('출퇴근 메뉴로 이동합니다.'); return;
      case 2: alert('휴가 메뉴로 이동합니다.'); return;
      default: alert('앱에 오류가 발생하였습니다. 잠시 후 다시 시도해주세요'); return;
    }
  }
}
