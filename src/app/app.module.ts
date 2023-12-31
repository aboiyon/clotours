import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './features/products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { HomeRoutingModule } from './core/components/home/home-routing.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './features/cart/cart.module';
import { DataModule } from './data/data.module';
import { CheckoutModule } from './features/checkout/checkout.module';
import { AuthModule } from './features/auth/auth.module';
import { CurrencyPipe } from '@angular/common';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HomeRoutingModule,
    SharedModule,
    CartModule,
    DataModule,
    CheckoutModule,
    AuthModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
