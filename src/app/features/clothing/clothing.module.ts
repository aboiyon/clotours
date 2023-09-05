import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothingRoutingModule } from './clothing-routing.module';
import { ClothingComponent } from './clothing/clothing.component';
import { HomeMadeComponent } from './home-made/home-made.component';
import { ImportsComponent } from './imports/imports.component';


@NgModule({
  declarations: [
    ClothingComponent,
    HomeMadeComponent,
    ImportsComponent
  ],
  imports: [
    CommonModule,
    ClothingRoutingModule
  ],
  exports: [
    ClothingComponent,
    HomeMadeComponent,
    ImportsComponent
  ]
})
export class ClothingModule { }
