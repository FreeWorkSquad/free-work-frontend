export class GeoLocation {
  longitude = 37.566535;
  latitude = 126.9779692;

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
