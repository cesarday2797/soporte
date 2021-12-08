import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalonesModalPageRoutingModule } from './salones-modal-routing.module';

import { SalonesModalPage } from './salones-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalonesModalPageRoutingModule
  ],
  declarations: [SalonesModalPage]
})
export class SalonesModalPageModule {}
