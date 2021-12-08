import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoresModalPageRoutingModule } from './monitores-modal-routing.module';

import { MonitoresModalPage } from './monitores-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoresModalPageRoutingModule
  ],
  declarations: [MonitoresModalPage]
})
export class MonitoresModalPageModule {}
