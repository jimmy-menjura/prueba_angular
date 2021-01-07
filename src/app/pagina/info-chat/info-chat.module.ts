import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoChatPageRoutingModule } from './info-chat-routing.module';

import { InfoChatPage } from './info-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoChatPageRoutingModule
  ],
  declarations: [InfoChatPage]
})
export class InfoChatPageModule {}
