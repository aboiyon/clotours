import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
