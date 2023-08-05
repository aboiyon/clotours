import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { ToursModule } from './services-section/tours/tours.module';
import { ToursRoutingModule } from './services-section/tours/tours-routing.module';
import { ClothingModule } from './services-section/clothing/clothing.module';
import { ClothingRoutingModule } from './services-section/clothing/clothing-routing.module';
import { BeveragesModule } from './services-section/beverages/beverages.module';
import { BeveragesRoutingModule } from './services-section/beverages/beverages-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home-section/home/home.component';
import { HomeRoutingModule } from './home-section/home/home-routing.module'; 
import { HomeModule } from './home-section/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    BeveragesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
