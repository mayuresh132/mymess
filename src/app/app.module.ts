import { MyRouterModule } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MessResultComponent } from './mess-result/mess-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    MessResultComponent
  ],
  imports: [
    BrowserModule,
    MyRouterModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
