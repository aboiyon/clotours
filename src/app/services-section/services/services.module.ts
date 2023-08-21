import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ToursModule } from '../tours/tours.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ToursModule
  ]
})
export class ServicesModule { }
