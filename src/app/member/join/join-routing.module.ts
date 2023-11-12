import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MemberJoinComponent} from './join.component';

const routes: Routes = [
  {path: '', component: MemberJoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberJoinRoutingModule { }
