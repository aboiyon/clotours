import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ToursModule } from '../tours/tours.module';
import { ClothingModule } from '../clothing/clothing.module';
import { BeveragesModule } from '../beverages/beverages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ToursModule,
    ClothingModule,
    BeveragesModule
  ]
})
export class ServicesModule { }
