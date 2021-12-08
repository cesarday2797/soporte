import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosTSPage } from './miembros-ts.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosTSPage
  },
  {
    path: 'crud-miembros',
    loadChildren: () => import('./crud-miembros/crud-miembros.module').then( m => m.CrudMiembrosPageModule)
  },
  {
    path: 'miembros-modal',
    loadChildren: () => import('./miembros-modal/miembros-modal.module').then( m => m.MiembrosModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosTSPageRoutingModule {}
