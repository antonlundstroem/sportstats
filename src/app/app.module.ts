import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { SportsModule } from './sports/sports.module';
import { SportsRoutingModule } from './sports/sports.routing';

import { HeaderComponent } from './components/header/header.component';

// This import and adding the stuff in 'providers' allows for refreshing without 404ing.
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin.routing';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		SportsModule,
		SportsRoutingModule,
		AdminModule,
		AdminRoutingModule
  ],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	// {provide: LocationStrategy, useClass: HashLocationStrategy}]
  bootstrap: [AppComponent]
})
export class AppModule { }
