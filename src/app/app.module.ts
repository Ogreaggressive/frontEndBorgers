import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BurgerListComponent } from './components/burger-list/burger-list.component';
import { BurgerFormComponent } from './components/burger-form/burger-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BurgerListComponent,
    BurgerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
