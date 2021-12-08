import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MouseModalPage } from './mouse-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MouseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MouseModalPageRoutingModule {}
