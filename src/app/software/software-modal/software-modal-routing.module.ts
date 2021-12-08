import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareModalPage } from './software-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwareModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareModalPageRoutingModule {}
