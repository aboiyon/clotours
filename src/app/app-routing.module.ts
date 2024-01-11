import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './home-section/main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('/home/cheruiyot/clotours/src/app/home-section/home.module').then (m => m.HomeModule)
    component: MainPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
