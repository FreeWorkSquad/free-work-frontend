import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'simple-join', loadChildren: () => import('./simple-join/simple-join-routing.module').then(m => m.SimpleJoinRoutingModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
/**
 * AppRoutingModule
 */
export class AppRoutingModule {}
