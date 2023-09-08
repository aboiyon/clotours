import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursComponent } from '../products/pages/tours/tours.component';

const routes: Routes = [
  {
    path: 'tours',
    component: ToursComponent,
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours.module').then(m => m.ToursModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours.module').then(m => m.ToursModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule { }
