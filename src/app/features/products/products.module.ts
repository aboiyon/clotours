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
import { SharedModule } from 'src/app/shared/shared.module';
import { DesignerComponent } from './pages/clothes/designer/designer.component';
import { DesignerDetailComponent } from './pages/clothes/designer-detail/designer-detail.component';
import { FormsModule } from '@angular/forms';

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
    DesignerComponent,
    DesignerDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProductComponent,
    KidsComponent,
    MenComponent,
    WomenComponent,
    DesignerComponent
  ]
})
export class ProductsModule { }
