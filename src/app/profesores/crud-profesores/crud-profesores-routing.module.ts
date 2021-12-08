import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudProfesoresPage } from './crud-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: CrudProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudProfesoresPageRoutingModule {}
