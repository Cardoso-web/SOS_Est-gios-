import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoPage } from './who.page';

const routes: Routes = [
  {
    path: '',
    component: WhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoPageRoutingModule {}
