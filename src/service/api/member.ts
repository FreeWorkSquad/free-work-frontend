import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {BaseUrl, X_TOKEN} from '../common';

class MemberSimpleVo {
  name!: string;
  id!: string;
  password!: string;
  email!: string;

  constructor(name: string, id: string, password: string, email: string) {
    this.name = name;
    this.id = id;
    this.password = password;
    this.email = email;
  }
}

@Injectable()
export class MemberApi {
  constructor(private httpClient: HttpClient) {}

  join = (name: string, id: string, password: string, email: string) => {
    return this.httpClient
      .post(
        BaseUrl+ '/member?x-token=' +X_TOKEN,
        new MemberSimpleVo(name, id, password, email),
        {
          headers: new HttpHeaders({"x-token": X_TOKEN})
        }
      );
  };
}
