import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services-section/services/services.component';
import { HomeComponent } from './home-section/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'services', component: ServicesComponent,
      children: [
      { path: 'tours', loadChildren: () => import('./services-section/tours/tours.module').then(m => m.ToursModule) },
      { path: 'clothing', loadChildren: () => import('./services-section/clothing/clothing.module').then(m => m.ClothingModule) },
      { path: 'beverages', loadChildren: () => import('./services-section/beverages/beverages.module').then(m => m.BeveragesModule) },
      { path: 'projects', loadChildren: () => import('./services-section/projects/projects.module').then(m => m.ProjectsModule) },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
