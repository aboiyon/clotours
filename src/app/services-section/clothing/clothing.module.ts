import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothingRoutingModule } from './clothing-routing.module';
import { ClothingComponent } from './clothing/clothing.component';


@NgModule({
  declarations: [
    ClothingComponent
  ],
  imports: [
    CommonModule,
    ClothingRoutingModule
  ],
  exports: [
    ClothingComponent
  ]
})
export class ClothingModule { }
