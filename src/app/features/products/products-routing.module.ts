import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsComponent } from './pages/clothes/kids/kids.component';
import { KidDetailComponent } from './pages/clothes/kid-detail/kid-detail.component';
import { MenComponent } from './pages/clothes/men/men.component';
import { ManDetailComponent } from './pages/clothes/man-detail/man-detail.component';
import { WomenComponent } from './pages/clothes/women/women.component';
import { WomanDetailComponent } from './pages/clothes/woman-detail/woman-detail.component';
import { DesignerComponent } from './pages/clothes/designer/designer.component';
import { DesignerDetailComponent } from './pages/clothes/designer-detail/designer-detail.component';

const routes: Routes = [
  
  {
    path: 'kids', component: KidsComponent
  },
  {
    path: 'kids/:id', component: KidDetailComponent
  },

  {
    path: 'men', component: MenComponent
  },

  {
    path: 'men/:id', component: ManDetailComponent
  },

  {
    path: 'women', component: WomenComponent
  },

  {
    path: 'women/:id', component: WomanDetailComponent
  },

  {
    path: 'designers', component: DesignerComponent
  },

  {
    path: 'designers/:id', component: DesignerDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
