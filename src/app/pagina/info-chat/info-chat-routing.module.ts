import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoChatPage } from './info-chat.page';

const routes: Routes = [
  {
    path: '',
    component: InfoChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoChatPageRoutingModule {}
