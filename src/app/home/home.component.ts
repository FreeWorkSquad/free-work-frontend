import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {GeoLocation, GeoLocationDefault} from '../../service/gps/vo/geo-location';
import {Attendance} from 'src/service/api/attendance';

@Component({
  selector: 'freework-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
}
