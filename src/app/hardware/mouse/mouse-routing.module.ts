import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MousePage } from './mouse.page';

const routes: Routes = [
  {
    path: '',
    component: MousePage
  },
  {
    path: 'crud-mouse',
    loadChildren: () => import('./crud-mouse/crud-mouse.module').then( m => m.CrudMousePageModule)
  },
  {
    path: 'mouse-modal',
    loadChildren: () => import('./mouse-modal/mouse-modal.module').then( m => m.MouseModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MousePageRoutingModule {}
