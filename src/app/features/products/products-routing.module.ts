import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ToursComponent } from './pages/tours/tours.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClothingComponent } from './pages/clothing/clothing/clothing.component';
import { HomeMadeComponent } from './pages/clothing/home-made/home-made.component';
import { ImportsComponent } from './pages/clothing/imports/imports.component';
import { KidsComponent } from './pages/clothes/kids/kids.component';
import { KidDetailComponent } from './pages/clothes/kid-detail/kid-detail.component';

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
    path: 'kids', component: KidsComponent
  },
  {
    path: 'kids/:id', component: KidDetailComponent
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
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
