import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent }         from './app.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { UsersComponent }      from './users/users.component';
 
import { AppRoutingModule }     from './app-routing.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	// import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    UsersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }