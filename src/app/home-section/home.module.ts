import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from 'src/app/features/products/products.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [MainPageComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    ProductsModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    MainPageComponent
  ]
})
export class HomeModule { }
