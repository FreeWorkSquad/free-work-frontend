import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleJoinRoutingModule} from './simple-join-routing.module';
import {SimpleJoinComponent} from './simple-join.component';

@NgModule({
  declarations: [SimpleJoinComponent],
  imports: [
    CommonModule,
    SimpleJoinRoutingModule
  ]
})
export class SimpleJoinModule {
}
