import {Component} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import {MemberApi} from 'src/service/api/member';

@Component({
  selector: 'freework-simple-join',
  templateUrl: './simple-join.component.html',
  styleUrls: ['./simple-join.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class SimpleJoinComponent {
  constructor(httpClient: HttpClient) {
    this.memberApi = new MemberApi(httpClient);
  }

  memberApi: MemberApi;
  name: string = "";
  id: string = "";
  password: string = "";
  email: string = "";

  join(): void {
    const temp = this.memberApi.join(this.name, this.id, this.password, this.email);
    temp.subscribe( (res) => console.log(res) )
  }
}
