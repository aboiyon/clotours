import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { ToursModule } from './services-section/tours/tours.module';
import { ClothingModule } from './services-section/clothing/clothing.module';
import { BeveragesModule } from './services-section/beverages/beverages.module';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToursModule,
    ClothingModule,
    BeveragesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
