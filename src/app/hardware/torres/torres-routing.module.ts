import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorresPage } from './torres.page';

const routes: Routes = [
  {
    path: '',
    component: TorresPage
  },
  {
    path: 'crud-torres',
    loadChildren: () => import('./crud-torres/crud-torres.module').then( m => m.CrudTorresPageModule)
  },
  {
    path: 'torres-modal',
    loadChildren: () => import('./torres-modal/torres-modal.module').then( m => m.TorresModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorresPageRoutingModule {}
