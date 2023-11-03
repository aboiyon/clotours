import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { ToursComponent } from './pages/tours/tours.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ClothingComponent } from './pages/clothing/clothing/clothing.component';
import { ImportsComponent } from './pages/clothing/imports/imports.component';
import { HomeMadeComponent } from './pages/clothing/home-made/home-made.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ToursComponent,
    SingleProductComponent,
    ClothingComponent,
    ImportsComponent,
    HomeMadeComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule
  ],
  exports: [
    ProductComponent,
    ToursComponent,
    SingleProductComponent,
    ClothingComponent,
    ImportsComponent,
    HomeMadeComponent
  ]
})
export class ProductsModule { }
