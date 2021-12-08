import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwareModalPageRoutingModule } from './software-modal-routing.module';

import { SoftwareModalPage } from './software-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftwareModalPageRoutingModule
  ],
  declarations: [SoftwareModalPage]
})
export class SoftwareModalPageModule {}
