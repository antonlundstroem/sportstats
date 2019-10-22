import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { SportsModule } from './sports/sports.module';
import { SportsRoutingModule } from './sports/sports.routing';


// This import and adding the stuff in 'providers' allows for refreshing without 404ing.
import {LocationStrategy, HashLocationStrategy} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		SportsModule,
		SportsRoutingModule
  ],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	// {provide: LocationStrategy, useClass: HashLocationStrategy}]
  bootstrap: [AppComponent]
})
export class AppModule { }
