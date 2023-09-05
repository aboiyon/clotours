import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './beverages/beverages.component';

const routes: Routes = [
  {
    path: 'beverages',
    component: BeveragesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeveragesRoutingModule { }
