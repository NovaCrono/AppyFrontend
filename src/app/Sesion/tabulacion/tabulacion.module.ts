import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabulacionPageRoutingModule } from './tabulacion-routing.module';

import { TabulacionPage } from './tabulacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabulacionPageRoutingModule
  ],
  declarations: [TabulacionPage]
})
export class TabulacionPageModule {}
