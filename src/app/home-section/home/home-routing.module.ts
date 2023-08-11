import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,  pathMatch: 'full'},
  
  {
    path: 'tours',
    loadChildren: () => import('../../services-section/tours/tours.module').then(m => m.ToursModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
