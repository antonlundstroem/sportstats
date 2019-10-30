import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SportsRoutingModule, sportsRoutingComponents } from './sports.routing';
import { StatsComponent } from './components/stats/stats.component';
import { FilterComponent } from './components/filter/filter.component';
import { LeagueFilterComponent } from './components/league-filter/league-filter.component';
import { SeasonFilterComponent } from './components/season-filter/season-filter.component';
import { TeamFilterComponent } from './components/team-filter/team-filter.component';
import { GamerowsComponent } from './components/gamerows/gamerows.component';
import { GamerowsdetailComponent } from './components/gamerowsdetail/gamerowsdetail.component';
import { FilterbuttonComponent } from './components/filterbutton/filterbutton.component';



@NgModule({
	declarations: [
		DrawerComponent,
		StatsComponent,
		sportsRoutingComponents,
		FilterComponent,
		LeagueFilterComponent,
		SeasonFilterComponent,
		TeamFilterComponent,
		GamerowsComponent,
		GamerowsdetailComponent,
		FilterbuttonComponent
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
