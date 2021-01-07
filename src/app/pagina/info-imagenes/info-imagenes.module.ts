import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoImagenesPageRoutingModule } from './info-imagenes-routing.module';

import { InfoImagenesPage } from './info-imagenes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoImagenesPageRoutingModule
  ],
  declarations: [InfoImagenesPage]
})
export class InfoImagenesPageModule {}
