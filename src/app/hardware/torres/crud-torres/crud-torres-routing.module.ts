import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudTorresPage } from './crud-torres.page';

const routes: Routes = [
  {
    path: '',
    component: CrudTorresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudTorresPageRoutingModule {}
