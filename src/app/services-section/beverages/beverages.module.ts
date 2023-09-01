import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeveragesRoutingModule } from './beverages-routing.module';
import { BeveragesComponent } from './beverages/beverages.component';
import { TeaComponent } from './tea/tea.component';
import { CoffeeComponent } from './coffee/coffee.component';


@NgModule({
  declarations: [
    BeveragesComponent,
    TeaComponent,
    CoffeeComponent
  ],
  imports: [
    CommonModule,
    BeveragesRoutingModule
  ],
  exports: [
    BeveragesComponent,
    TeaComponent,
    CoffeeComponent
  ]
})
export class BeveragesModule { }
