import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { MenComponent } from './pages/clothes/men/men.component';
import { WomenComponent } from './pages/clothes/women/women.component';
import { KidsComponent } from './pages/clothes/kids/kids.component';
import { KidDetailComponent } from './pages/clothes/kid-detail/kid-detail.component';
import { WomanDetailComponent } from './pages/clothes/woman-detail/woman-detail.component';
import { ManDetailComponent } from './pages/clothes/man-detail/man-detail.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    KidDetailComponent,
    WomanDetailComponent,
    ManDetailComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule
  ],
  exports: [
    ProductComponent,
    KidsComponent,
    MenComponent,
    WomenComponent
  ]
})
export class ProductsModule { }
