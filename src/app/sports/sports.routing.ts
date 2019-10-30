import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { FilterComponent } from './components/filter/filter.component';
import { GamerowsComponent } from "./components/gamerows/gamerows.component";

const routes: Routes = [
	// :sportId
	{path: 'stats/:sportId', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
export const sportsRoutingComponents = [StatsComponent];
