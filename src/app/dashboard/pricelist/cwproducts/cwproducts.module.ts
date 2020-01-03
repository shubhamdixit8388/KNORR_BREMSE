import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CwproductsPageRoutingModule } from './cwproducts-routing.module';

import { CwproductsPage } from './cwproducts.page';

import { SharedComponentModule } from '../../../component/shared-component/shared-component.module';

import { AccordionComponent } from '../../../component/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CwproductsPageRoutingModule
  ],
  declarations: [CwproductsPage, AccordionComponent]
})
export class CwproductsPageModule {}
