import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MouseModalPageRoutingModule } from './mouse-modal-routing.module';

import { MouseModalPage } from './mouse-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MouseModalPageRoutingModule
  ],
  declarations: [MouseModalPage]
})
export class MouseModalPageModule {}
