import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SportService } from "../../services/sport.service";
import { LeagueService } from "../../services/league.service";
import { SeasonService } from '../../services/season.service';
import { Observable } from 'rxjs';
import { League } from "../../models/league";
import { Season } from '../../models/season';
import { Sport } from "../../models/sport";
import { Filter } from "../../models/filter";

@Component({
  selector: 'app-filter',
	templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
	private urlExt: number;
	private sportId: number;

  // TODO
	// This filter is the object that should be passed into the "GameRows" component
	// Figure out how to make changes to this object in child components via @Input() and @Output()
	private filterSettings: Filter;

	leagues$: Observable<League[]>;
	season$: Observable<Season[]>;
	sport$: Observable<Sport>;
	currentLeague: League;

	// TODO
	// Make it so when the url changes, the stuff in the filters update automatically!
	// This is done by subscribing to the current activatedroute object!!!
	//

  constructor(private router: Router, private route: ActivatedRoute, private sportService: SportService, private ls: LeagueService, private ss: SeasonService) { }

	ngOnInit() {

		//	this.fillData();

		const routeParams = this.route.params.subscribe(params => {
			this.sportId = params['sportId'];
			this.loadSportDetails(this.sportId);
		});

	}

	getSeasonForLeague(league: League){
		this.currentLeague = league;
		this.season$ = this.ss.doRequest(league.id);
	}

	loadSportDetails(sportId: number){
		this.sport$ = this.sportService.getSportById(sportId);
	};
	
	loadLeagueDetails(seasonId:number){
		this.season$ = this.ss.doRequest(seasonId);
	};
	
	loadSeasonDetails(leagueId:number){
		this.season$ = this.ss.doRequest(leagueId);
	};

	fillData(){
		this.route.params.subscribe(params => {
			this.urlExt = params['sportId'];
			if (this.urlExt === undefined){
				// add some error handling, doing this via promises or smth is better?
			} else {
				this.leagues$ = this.ls.doRequest(this.urlExt);
				this.leagues$.subscribe(league => {
				});
			}
		});
	}
}
