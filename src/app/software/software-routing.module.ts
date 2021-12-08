import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwarePage } from './software.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwarePage
  },
  {
    path: 'software-modal',
    loadChildren: () => import('./software-modal/software-modal.module').then( m => m.SoftwareModalPageModule)
  },
  {
    path: 'crud-software',
    loadChildren: () => import('./crud-software/crud-software.module').then( m => m.CrudSoftwarePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwarePageRoutingModule {}
