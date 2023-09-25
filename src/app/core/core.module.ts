import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UsComponent } from './components/us/us.component';

@NgModule({
  declarations: [NotFoundComponent, ErrorComponent, UsComponent],
  imports: [
    RouterModule.forChild([
      { path: '404', component: NotFoundComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    SharedModule
  ],
  exports: [
    UsComponent
  ]
})
export class CoreModule { }
