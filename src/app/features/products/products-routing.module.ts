import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ToursComponent } from './pages/tours/tours.component';

const routes: Routes = [

  {
    path: 'tours', component: ToursComponent 
  },

 {
   path: 'tours/:id', component: SingleProductComponent
 },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
