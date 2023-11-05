export const GeoLocation_DEFAULT = {
  LONGITUDE: 37.566535,
  LATITUDE: 126.9779692
};

export class GeoLocation {
  longitude = 37.566535;
  latitude = 126.9779692;

  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  set(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  get() {
    return {
      longitude: this.longitude,
      latitude: this.latitude
    };
  }

  getLongitude() {
    return this.longitude;
  }

  getLatitude() {
    return this.latitude;
  }
}
