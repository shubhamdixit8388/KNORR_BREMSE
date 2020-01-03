import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CwproductsPage } from './cwproducts.page';

const routes: Routes = [
  {
    path: '',
    component: CwproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CwproductsPageRoutingModule {}
