import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SimpleJoinComponent} from './simple-join.component';

const routes: Routes = [
  {path: '', component: SimpleJoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleJoinRoutingModule { }
