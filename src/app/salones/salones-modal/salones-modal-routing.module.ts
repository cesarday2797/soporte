import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalonesModalPage } from './salones-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SalonesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalonesModalPageRoutingModule {}
