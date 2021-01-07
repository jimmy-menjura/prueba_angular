import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoImagenesPage } from './info-imagenes.page';

const routes: Routes = [
  {
    path: '',
    component: InfoImagenesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoImagenesPageRoutingModule {}
