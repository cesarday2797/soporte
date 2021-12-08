import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalonesPage } from './salones.page';

const routes: Routes = [
  {
    path: '',
    component: SalonesPage
  },
  {
    path: 'crud-salones',
    loadChildren: () => import('./crud-salones/crud-salones.module').then( m => m.CrudSalonesPageModule)
  },
  {
    path: 'salones-modal',
    loadChildren: () => import('./salones-modal/salones-modal.module').then( m => m.SalonesModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalonesPageRoutingModule {}
