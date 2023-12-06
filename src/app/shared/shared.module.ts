import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { TitleComponent } from './components/title/title.component';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';
import { CartComponent } from '../features/cart/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RighBannerImageComponent } from './images/righ-banner-image/righ-banner-image.component';
import { LeftBannerImageComponent } from './images/left-banner-image/left-banner-image.component';
import { CartImageComponent } from './images/cart-image/cart-image.component';


@NgModule({
  declarations: [NavBarComponent, FooterComponent, ItemQuantityComponent, TitleComponent, SimplePageComponent, WordWrapPipe, CartComponent, ShippingComponent, RighBannerImageComponent, LeftBannerImageComponent, CartImageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatIconModule, 
    //  MatTooltipModule,
    MatMenuModule, 
    RouterModule,

    RouterModule.forChild([
      { path: 'cart', component: CartComponent },
    ]),
    ReactiveFormsModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    MatIconModule,
    MatIconModule,
    ItemQuantityComponent,
    SimplePageComponent
    // MatSnackBarModule,
    // MatTooltipModule, 
  ]
})
export class SharedModule { }
