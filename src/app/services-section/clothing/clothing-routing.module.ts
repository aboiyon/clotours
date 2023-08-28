import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './clothing/clothing.component';
import { HomeMadeComponent } from './home-made/home-made.component';
import { ImportsComponent } from './imports/imports.component';

const routes: Routes = [
  {
    path: 'clothing',
    component: ClothingComponent,
  },
  {
    path: 'home-made',
    component:  HomeMadeComponent,
  },
  {
    path: 'imports',
    component:  ImportsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothingRoutingModule { }
