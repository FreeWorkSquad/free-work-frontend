import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component'

import {HttpClientModule} from '@angular/common/http';

import {ImageComponent} from '../../components/image/image.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    HomeComponent, ImageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    CdkMenu, CdkMenuItem,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
  ]
})
export class HomeModule { }
