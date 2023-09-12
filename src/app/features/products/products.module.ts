import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { ToursComponent } from './pages/tours/tours.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ClothingComponent } from './pages/clothing/clothing/clothing.component';
import { ImportsComponent } from './pages/clothing/imports/imports.component';
import { HomeMadeComponent } from './pages/clothing/home-made/home-made.component';
import { BeveragesComponent } from './pages/beverages/beverages/beverages.component';
import { CoffeeComponent } from './pages/beverages/coffee/coffee.component';
import { TeaComponent } from './pages/beverages/tea/tea.component';
import { ProjectsComponent } from './pages/links/quick-links/projects.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductListComponent,
    ToursComponent,
    SingleProductComponent,
    ClothingComponent,
    ImportsComponent,
    HomeMadeComponent,
    BeveragesComponent,
    TeaComponent,
    CoffeeComponent,
    ProjectsComponent
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
    HomeMadeComponent,
    BeveragesComponent,
    TeaComponent,
    CoffeeComponent,
    ProjectsComponent
  ]
})
export class ProductsModule { }
