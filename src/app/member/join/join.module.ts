import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberJoinRoutingModule} from './join-routing.module';
import {MemberJoinComponent} from './join.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [MemberJoinComponent],
  imports: [
    CommonModule,
    MemberJoinRoutingModule,
    HttpClientModule
  ]
})
export class MemberJoinModule {
}
