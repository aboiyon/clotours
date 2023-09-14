import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



// @NgModule({
//   declarations: [
//     HeaderComponent,
//     ErrorComponent,
//     NotFoundComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild([
//       { path: '404', component: NotFoundComponent },
//       { path: 'error', component: ErrorComponent },
//       { path: '**', redirectTo: '/404' }
//     ]
//   }),

// export class CoreModule { }

@NgModule({
  declarations: [NotFoundComponent, ErrorComponent],
  imports: [
    RouterModule.forChild([
      { path: '404', component: NotFoundComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    SharedModule
  ],
  exports: [
  ]
})
export class CoreModule { }
