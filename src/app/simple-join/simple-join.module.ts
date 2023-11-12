import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleJoinRoutingModule} from './simple-join-routing.module';
import {SimpleJoinComponent} from './simple-join.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SimpleJoinComponent],
  imports: [
    CommonModule,
    SimpleJoinRoutingModule,
    HttpClientModule
  ]
})
export class SimpleJoinModule {
}
