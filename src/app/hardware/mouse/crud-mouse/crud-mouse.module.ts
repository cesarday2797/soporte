import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudMousePageRoutingModule } from './crud-mouse-routing.module';

import { CrudMousePage } from './crud-mouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudMousePageRoutingModule
  ],
  declarations: [CrudMousePage]
})
export class CrudMousePageModule {}
