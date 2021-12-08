import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudTorresPageRoutingModule } from './crud-torres-routing.module';

import { CrudTorresPage } from './crud-torres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudTorresPageRoutingModule
  ],
  declarations: [CrudTorresPage]
})
export class CrudTorresPageModule {}
