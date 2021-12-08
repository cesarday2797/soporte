import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudProfesoresPageRoutingModule } from './crud-profesores-routing.module';

import { CrudProfesoresPage } from './crud-profesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudProfesoresPageRoutingModule
  ],
  declarations: [CrudProfesoresPage]
})
export class CrudProfesoresPageModule {}
