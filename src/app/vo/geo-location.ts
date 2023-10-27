export class GeoLocation {
  longitude: Number = 37.566535;
  latitude: Number = 126.9779692;

  set(longitude: Number, latitude: Number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  get() {
    return {
      longitude: this.longitude,
      latitude: this.latitude
    }
  }

  getLongitude() {
    return this.longitude;
  }

  getLatitude() {
    return this.latitude;
  }
}