import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudMonitoresPageRoutingModule } from './crud-monitores-routing.module';

import { CrudMonitoresPage } from './crud-monitores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudMonitoresPageRoutingModule
  ],
  declarations: [CrudMonitoresPage]
})
export class CrudMonitoresPageModule {}
