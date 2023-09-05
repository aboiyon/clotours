import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ToursModule } from '../tours/tours.module';
import { ClothingModule } from '../clothing/clothing.module';
import { BeveragesModule } from '../beverages/beverages.module';
import { LinksModule } from '../links/links.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ToursModule,
    ClothingModule,
    BeveragesModule,
    LinksModule
  ]
})
export class ProductsModule { }
