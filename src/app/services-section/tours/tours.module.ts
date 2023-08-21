import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours/tours.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ToursComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class ToursModule { }
