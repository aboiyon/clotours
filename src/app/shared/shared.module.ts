import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { TitleComponent } from './components/title/title.component';
import { SimplePageComponent } from './components/simple-page/simple-page.component';


@NgModule({
  declarations: [NavBarComponent, FooterComponent, ItemQuantityComponent, TitleComponent, SimplePageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatIconModule, 
    //  MatTooltipModule,
    MatMenuModule, 
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    MatIconModule,
    MatIconModule,
    ItemQuantityComponent
    // MatSnackBarModule,
    // MatTooltipModule, 
  ]
})
export class SharedModule { }
