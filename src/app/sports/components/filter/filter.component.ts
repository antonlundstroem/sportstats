import { Component, OnInit, OnChanges, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SportService } from "../../services/sport.service";
import { Observable } from 'rxjs';
import { League } from "../../models/league";
import { Season } from '../../models/season';
import { Sport } from "../../models/sport";
import { Filter } from "../../models/filter";
import { FilterService } from "../../services/filter.service";
import { Team } from "../../models/team";

@Component({
  selector: 'app-filter',
	templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
	private sportId: number;
	private filter: Filter;
	private currentLeague: League;
	private currentSeason: Season;
	private currentTeam: Team;
	private isGameRows: boolean;

	sport$: Observable<Sport>;

	constructor(private fs: FilterService, private route: ActivatedRoute, private sportService: SportService) { 
		this.filter = new Filter();
	}

	ngOnInit() {
		const routeParams = this.route.params.subscribe(params => {
			this.sportId = params['sportId'];

			// Reset filter when sport changes and add new data
			this.fs.resetFilter();

			// + operator parses the string to a number
			this.fs.setSport(+this.sportId);

			this.loadSportDetails(this.sportId);
		});
	}

	loadSportDetails(sportId: number){
		this.sport$ = this.sportService.getSportById(sportId);
	};
		
	handleLeagueFilter(league: League){
		this.currentLeague = league;
	}

	handleSeasonFilter(season: Season){
		this.currentSeason = season;
	}

	handleTeamFilter(team: Team){
		this.currentTeam = team;
	}

	tmpFun(){
		this.fs.printFilterInfo();
	};

}
