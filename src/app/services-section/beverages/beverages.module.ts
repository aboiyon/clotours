import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeveragesRoutingModule } from './beverages-routing.module';
import { BeveragesComponent } from './beverages/beverages.component';


@NgModule({
  declarations: [
    BeveragesComponent
  ],
  imports: [
    CommonModule,
    BeveragesRoutingModule
  ],
  exports: [
    BeveragesComponent
  ]
})
export class BeveragesModule { }
