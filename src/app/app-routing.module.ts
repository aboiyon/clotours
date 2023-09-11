import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './features/products/pages/products/products.component';
import { HomeComponent } from './home-section/home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToursComponent } from './features/products/pages/tours/tours.component';
import { SingleProductComponent } from './features/products/pages/single-product/single-product.component';

const routes: Routes = [
  
  {
    path: 'nav', component: NavBarComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'services', component: ProductsComponent,
      children: [
      { path: 'tours', loadChildren: () => import('./features/tours/tours.module').then(m => m.ToursModule) },
      { path: 'clothing', loadChildren: () => import('./features/clothing/clothing.module').then(m => m.ClothingModule) },
      { path: 'beverages', loadChildren: () => import('./features/beverages/beverages.module').then(m => m.BeveragesModule) },
      { path: 'projects', loadChildren: () => import('./features/links/links.module').then(m => m.LinksModule) },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
