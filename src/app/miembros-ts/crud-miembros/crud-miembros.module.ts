import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudMiembrosPageRoutingModule } from './crud-miembros-routing.module';

import { CrudMiembrosPage } from './crud-miembros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudMiembrosPageRoutingModule
  ],
  declarations: [CrudMiembrosPage]
})
export class CrudMiembrosPageModule {}
