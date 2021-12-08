import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoresPage } from './profesores.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesoresPage
  },
  {
    path: 'crud-profesores',
    loadChildren: () => import('./crud-profesores/crud-profesores.module').then( m => m.CrudProfesoresPageModule)
  },
  {
    path: 'profesores-modal',
    loadChildren: () => import('./profesores-modal/profesores-modal.module').then( m => m.ProfesoresModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesoresPageRoutingModule {}
