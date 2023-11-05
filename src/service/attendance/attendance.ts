import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeoLocation} from '../gps/vo/geo-location';

class AttendanceVo {
	account_id!: String;
	coordinate!: GeoLocation;
	
	constructor(account_id: String, coordinate: GeoLocation) {}
}

@Injectable()
export class Attendance {
	constructor(private httpClient: HttpClient) {}

	// TODO: BASE URL 은 추후에 env 파일 형태로 외부에서 주입 가능하도록 변경 필요.
	BASE_URL: String = "http://192.168.75.29:8000";

	checkIn = (position: GeolocationPosition) => {
		this.httpClient
		.post(
			this.BASE_URL+ "/attendance/check-in",
			new AttendanceVo(
				"jskang", new GeoLocation(position.coords.longitude, position.coords.latitude)
			)
		)
		.subscribe(
			(e) => console.log(e)
		);
	}

	checkOut = (position: GeolocationPosition) => {
		this.httpClient
		.post(
			this.BASE_URL+ "/attendance/check-out",
			new AttendanceVo(
				"jskang", new GeoLocation(position.coords.longitude, position.coords.latitude)
			)
		)
		.subscribe(
			(e) => console.log(e)
		);
	}
}
