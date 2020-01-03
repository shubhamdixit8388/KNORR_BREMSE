import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllproductsPageRoutingModule } from './allproducts-routing.module';

import { AllproductsPage } from './allproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllproductsPageRoutingModule
  ],
  declarations: [AllproductsPage]
})
export class AllproductsPageModule {}
