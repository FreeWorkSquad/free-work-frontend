import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

import {HttpClientModule} from '@angular/common/http';

import {ImageComponent} from '../../components/image/image.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    HomeComponent, ImageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ]
})
export class HomeModule { }
