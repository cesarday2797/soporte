import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorresModalPageRoutingModule } from './torres-modal-routing.module';

import { TorresModalPage } from './torres-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorresModalPageRoutingModule
  ],
  declarations: [TorresModalPage]
})
export class TorresModalPageModule {}
