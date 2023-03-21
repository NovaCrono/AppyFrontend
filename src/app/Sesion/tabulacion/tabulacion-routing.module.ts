import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabulacionPage } from './tabulacion.page';

const routes: Routes = [
  {
    path: '',
    component: TabulacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabulacionPageRoutingModule {}
