import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardwarePage } from './hardware.page';

const routes: Routes = [
  {
    path: '',
    component: HardwarePage
  },
  {
    path: 'monitores',
    loadChildren: () => import('./monitores/monitores.module').then( m => m.MonitoresPageModule)
  },
  {
    path: 'mouse',
    loadChildren: () => import('./mouse/mouse.module').then( m => m.MousePageModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./teclados/teclados.module').then( m => m.TecladosPageModule)
  },
  {
    path: 'torres',
    loadChildren: () => import('./torres/torres.module').then( m => m.TorresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwarePageRoutingModule {}
