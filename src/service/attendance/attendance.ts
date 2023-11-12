import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeoLocation} from '../gps/vo/geo-location';

class AttendanceVo {
  accountId!: string;
  coordinate!: GeoLocation;

  constructor(accountId: string, coordinate: GeoLocation) {
    this.accountId = accountId;
    this.coordinate = coordinate;
  }
}

@Injectable()
export class Attendance {
  constructor(private httpClient: HttpClient) {}

  // TODO: BASE URL 은 추후에 env 파일 형태로 외부에서 주입 가능하도록 변경 필요.
  baseUrl = 'http://146.56.98.103:8000';

  checkIn = (position: GeolocationPosition) => {
    this.httpClient
        .post(
            this.baseUrl+ '/attendance/check-in',
            new AttendanceVo(
                'jskang', new GeoLocation(position.coords.longitude, position.coords.latitude)
            )
        )
        .subscribe(
            (e) => console.log(e)
        );
  };

  checkOut = (position: GeolocationPosition) => {
    this.httpClient
        .post(
            this.baseUrl+ '/attendance/check-out',
            new AttendanceVo(
                'jskang', new GeoLocation(position.coords.longitude, position.coords.latitude)
            )
        )
        .subscribe(
            (e) => console.log(e)
        );
  };
}
