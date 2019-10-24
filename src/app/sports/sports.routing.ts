import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { FilterComponent } from './components/filter/filter.component';

const routes: Routes = [
	{path: ':sportId', component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
export const sportsRoutingComponents = [StatsComponent];
