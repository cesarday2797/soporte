import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudMiembrosPage } from './crud-miembros.page';

const routes: Routes = [
  {
    path: '',
    component: CrudMiembrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudMiembrosPageRoutingModule {}
