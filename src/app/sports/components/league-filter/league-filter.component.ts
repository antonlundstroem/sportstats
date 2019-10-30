import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sport } from "../../models/sport";
import { LeagueService } from "../../services/league.service";
import { Observable } from 'rxjs';
import { League } from "../../models/league";
import { Filter } from "../../models/filter";
import { SeasonFilterComponent } from "../season-filter/season-filter.component";
import { FilterService } from "../../services/filter.service";


@Component({
  selector: 'app-league-filter',
  templateUrl: './league-filter.component.html',
	styleUrls: ['./league-filter.component.css']
})
export class LeagueFilterComponent implements OnInit, OnChanges {

	@Input() sport: Sport;
	@Output() leagueUpdater = new EventEmitter<League>();
	leagues$: Observable<League[]>;
	selectedLeague: League;


  constructor(private fs: FilterService, private ar: ActivatedRoute, private ls: LeagueService) { }

	ngOnInit() {
	}

	ngOnChanges(){
		// Reset the league info on changes
		this.resetLeagueInfo();

		this.fs.currentFilter.subscribe(params => {
			if (params.sportId === null){
			} else {
				this.leagues$ = this.ls.doRequest(params.sportId);
			}
		});
	}

	resetLeagueInfo(){
		this.fs.resetLeague();
		this.selectedLeague = undefined;
	}

	onSelect(league: League) {
		this.selectedLeague = league;
		this.leagueUpdater.emit(league);
		this.fs.setLeague(league.id);
	}
}
