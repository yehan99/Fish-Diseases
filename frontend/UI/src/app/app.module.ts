import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng-lts/button';
import {MenubarModule} from 'primeng-lts/menubar';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CardModule} from 'primeng-lts/card';
import {InputTextModule} from 'primeng-lts/inputtext';
import {InputMaskModule} from 'primeng-lts/inputmask';
import {PasswordModule} from 'primeng-lts/password';
import { ChipModule } from 'primeng-lts/chip';
import {CarouselModule} from 'primeng-lts/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    ChipModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
