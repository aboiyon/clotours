import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ToursComponent } from './pages/tours/tours.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClothingComponent } from './pages/clothing/clothing/clothing.component';
import { HomeMadeComponent } from './pages/clothing/home-made/home-made.component';
import { ImportsComponent } from './pages/clothing/imports/imports.component';
import { BeveragesComponent } from './pages/beverages/beverages/beverages.component';
import { ProjectsComponent } from './pages/links/quick-links/projects.component';

const routes: Routes = [

  {
    path: 'products', component: ProductsComponent,
  },

  {
    path: 'tours', component: ToursComponent 
  },
  {
    path: 'tours/:id', component: SingleProductComponent
  },

  {
    path: 'clothing',
    component: ClothingComponent,
  },
  {
    path: 'home-made',
    component:  HomeMadeComponent,
  },
  {
    path: 'home-made/:id', component: SingleProductComponent
  },
  {
    path: 'imports',
    component:  ImportsComponent,
  },
  {
    path: 'imports/:id', component: SingleProductComponent
  },
  
  {
    path: 'beverages',
    component: BeveragesComponent,
  },
  {
    path: 'tea',
    component: BeveragesComponent,
  },
  {
    path: 'tea$/:id', component: SingleProductComponent
  },
  {
    path: 'coffee',
    component: BeveragesComponent,
  },

  {
    path: 'coffee$/:id', component: SingleProductComponent
  },

  {
    path: 'links',
    component: ProjectsComponent,
  },

  {
    path: 'link$/:id', component: SingleProductComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
