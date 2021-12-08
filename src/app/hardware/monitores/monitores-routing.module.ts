import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoresPage } from './monitores.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoresPage
  },
  {
    path: 'monitores-modal',
    loadChildren: () => import('./monitores-modal/monitores-modal.module').then( m => m.MonitoresModalPageModule)
  },
  {
    path: 'crud-monitores',
    loadChildren: () => import('./crud-monitores/crud-monitores.module').then( m => m.CrudMonitoresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoresPageRoutingModule {}
