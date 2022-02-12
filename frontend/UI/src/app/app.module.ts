import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng-lts/button';
import {MenubarModule} from 'primeng-lts/menubar';
import {MenuItem} from 'primeng-lts/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
