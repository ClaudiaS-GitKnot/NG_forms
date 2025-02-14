import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reactive1Component } from './components/reactive1/reactive1.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Reactive2Component } from './components/reactive2/reactive2.component';
import { Reactive3Component } from './components/reactive3/reactive3.component';
import { Reactive4Component } from './components/reactive4/reactive4.component';

@NgModule({
  declarations: [AppComponent, TemplateDrivenComponent, Reactive1Component, HomeComponent, NavbarComponent, Reactive2Component, Reactive3Component, Reactive4Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
