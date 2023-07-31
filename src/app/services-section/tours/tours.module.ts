import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours/tours.component';


@NgModule({
  declarations: [
    ToursComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule
  ]
})
export class ToursModule { }
