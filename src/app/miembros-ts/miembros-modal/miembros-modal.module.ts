import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosModalPageRoutingModule } from './miembros-modal-routing.module';

import { MiembrosModalPage } from './miembros-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosModalPageRoutingModule
  ],
  declarations: [MiembrosModalPage]
})
export class MiembrosModalPageModule {}
