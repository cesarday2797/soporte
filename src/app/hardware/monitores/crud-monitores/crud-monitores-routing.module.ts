import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudMonitoresPage } from './crud-monitores.page';

const routes: Routes = [
  {
    path: '',
    component: CrudMonitoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudMonitoresPageRoutingModule {}
