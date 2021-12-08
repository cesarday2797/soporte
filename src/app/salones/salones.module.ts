import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalonesPageRoutingModule } from './salones-routing.module';

import { SalonesPage } from './salones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalonesPageRoutingModule
  ],
  declarations: [SalonesPage]
})
export class SalonesPageModule {}
