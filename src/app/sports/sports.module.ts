import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SportsRoutingModule, sportsRoutingComponents } from './sports.routing';
import { StatsComponent } from './components/stats/stats.component';
import { FilterComponent } from './components/filter/filter.component';
import { LeagueFilterComponent } from './components/league-filter/league-filter.component';



@NgModule({
	declarations: [
		DrawerComponent,
		StatsComponent,
		sportsRoutingComponents,
		FilterComponent,
		LeagueFilterComponent 
	],
  imports: [
		CommonModule,
		SportsRoutingModule,
	],
	exports: [ 
		DrawerComponent,
		StatsComponent
	]
})
export class SportsModule { }
