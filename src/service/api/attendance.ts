import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {BaseUrl, X_TOKEN} from '../common';
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

  checkIn = (position: GeolocationPosition) => {
    this.httpClient
        .post(
            BaseUrl+ '/attendance/check-in',
            new AttendanceVo(
                'jskang', new GeoLocation(position.coords.longitude, position.coords.latitude)
            ),
            {
              headers: new HttpHeaders({'x-token': X_TOKEN})
            }
        )
        .subscribe(
            (e) => console.log(e)
        );
  };

  checkOut = (position: GeolocationPosition) => {
    this.httpClient
        .post(
            BaseUrl+ '/attendance/check-out',
            new AttendanceVo(
                'jskang', new GeoLocation(position.coords.longitude, position.coords.latitude)
            ),
            {
              headers: new HttpHeaders({'x-token': X_TOKEN})
            }
        )
        .subscribe(
            (e) => console.log(e)
        );
  };
}
