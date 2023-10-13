import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';

import {BtnComponent} from '../components/btn/btn.component';
import {ImageComponent} from '../components/image/image.component';
import {FavoritesComponent} from '../components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent, BtnComponent, ImageComponent, FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    })
  ],
  bootstrap: [AppComponent],
  providers: [BtnComponent, ImageComponent, FavoritesComponent]
})
/**
 * AppModule
 */
export class AppModule {}
