import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';

import {MatToolbarModule} from '@angular/material/toolbar';

import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ImageComponent} from '../components/image/image.component';
import {AlertComponent} from '../components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent, ImageComponent, AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    CdkMenu, CdkMenuItem,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    ImageComponent, AlertComponent
  ]
})
/**
 * AppModule
 */
export class AppModule {}
