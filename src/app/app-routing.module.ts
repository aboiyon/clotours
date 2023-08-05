import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './home-section/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
      { path: 'tours', loadChildren: () => import('./services-section/tours/tours.module').then(m => m.ToursModule) },
      { path: 'clothing', loadChildren: () => import('./services-section/clothing/clothing.module').then(m => m.ClothingModule) },
      { path: 'beverages', loadChildren: () => import('./services-section/beverages/beverages.module').then(m => m.BeveragesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
