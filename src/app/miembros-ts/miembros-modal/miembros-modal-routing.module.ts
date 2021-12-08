import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosModalPage } from './miembros-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosModalPageRoutingModule {}
