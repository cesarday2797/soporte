import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudSalonesPage } from './crud-salones.page';

const routes: Routes = [
  {
    path: '',
    component: CrudSalonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudSalonesPageRoutingModule {}
