import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudMousePage } from './crud-mouse.page';

const routes: Routes = [
  {
    path: '',
    component: CrudMousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudMousePageRoutingModule {}
