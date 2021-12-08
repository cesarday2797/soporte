import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorresModalPage } from './torres-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TorresModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorresModalPageRoutingModule {}
