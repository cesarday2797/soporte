import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosTSPageRoutingModule } from './miembros-ts-routing.module';

import { MiembrosTSPage } from './miembros-ts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosTSPageRoutingModule
  ],
  declarations: [MiembrosTSPage]
})
export class MiembrosTSPageModule {}
