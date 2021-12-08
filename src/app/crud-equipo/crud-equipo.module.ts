import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudEquipoPageRoutingModule } from './crud-equipo-routing.module';

import { CrudEquipoPage } from './crud-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudEquipoPageRoutingModule
  ],
  declarations: [CrudEquipoPage]
})
export class CrudEquipoPageModule {}
