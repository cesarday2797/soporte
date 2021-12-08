import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoresModalPage } from './monitores-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoresModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoresModalPageRoutingModule {}
