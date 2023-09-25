import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './home.component';
import { ProductsModule } from 'src/app/features/products/products.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    ProductsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
