import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-section/home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

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
    path: 'errors', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
