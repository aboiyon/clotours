import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ClothingModule } from '../clothing/clothing.module';
import { BeveragesModule } from '../beverages/beverages.module';
import { LinksModule } from '../links/links.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { ToursComponent } from './pages/tours/tours.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductListComponent,
    ToursComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ClothingModule,
    BeveragesModule,
    LinksModule
  ],
  exports: [
    ProductComponent,
    ToursComponent
  ]
})
export class ProductsModule { }
