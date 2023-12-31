import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UsComponent } from './components/us/us.component';
import { ProductsModule } from '../features/products/products.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [NotFoundComponent, ErrorComponent, UsComponent, HomeComponent],
  imports: [
    RouterModule.forChild([
      { path: '404', component: NotFoundComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    SharedModule,
    ProductsModule
  ],
  exports: [
    UsComponent, 
    HomeComponent
  ]
})
export class CoreModule { }
