import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

import { HomeComponent } from './home-section/home/home.component';
import { HomeModule } from './home-section/home/home.module';

import { ProductsModule } from './features/products/products.module';
import { ToursModule } from './features/tours/tours.module';
import { ToursRoutingModule } from './features/tours/tours-routing.module';
import { ClothingModule } from './features/clothing/clothing.module';
import { ClothingRoutingModule } from './features/clothing/clothing-routing.module';
import { BeveragesModule } from './features/beverages/beverages.module';
import { BeveragesRoutingModule } from './features/beverages/beverages-routing.module';
import { LinksModule } from './features/links/links.module';
import { ProductsComponent } from './features/products/pages/product/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { HomeRoutingModule } from './home-section/home/home-routing.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { NavBarModule } from './shared/components/nav-bar/nav-bar.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ToursModule,
    ClothingModule,
    BeveragesModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HomeModule,
    HomeRoutingModule,
    ToursRoutingModule,
    ClothingRoutingModule,
    BeveragesRoutingModule,
    LinksModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
