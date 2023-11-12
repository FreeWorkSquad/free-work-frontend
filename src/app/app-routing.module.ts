import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  {path: 'simple-join', loadChildren: () => import('./member/join/join-routing.module').then((m) => m.MemberJoinRoutingModule)},
  {path: 'update-join', loadChildren: () => import('./member/update/update-routing.module').then((m) => m.MemberUpdateRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
/**
 * AppRoutingModule
 */
export class AppRoutingModule {}
