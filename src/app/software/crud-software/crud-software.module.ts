import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudSoftwarePageRoutingModule } from './crud-software-routing.module';

import { CrudSoftwarePage } from './crud-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudSoftwarePageRoutingModule
  ],
  declarations: [CrudSoftwarePage]
})
export class CrudSoftwarePageModule {}
