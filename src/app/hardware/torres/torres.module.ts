import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorresPageRoutingModule } from './torres-routing.module';

import { TorresPage } from './torres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorresPageRoutingModule
  ],
  declarations: [TorresPage]
})
export class TorresPageModule {}
