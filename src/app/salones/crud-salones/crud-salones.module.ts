import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudSalonesPageRoutingModule } from './crud-salones-routing.module';

import { CrudSalonesPage } from './crud-salones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudSalonesPageRoutingModule
  ],
  declarations: [CrudSalonesPage]
})
export class CrudSalonesPageModule {}
