import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LeagueService } from "../../services/league.service";
import { SeasonService } from '../../services/season.service';
import { Observable } from 'rxjs';
import { League } from "../../models/league";
import { Season } from '../../models/season';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges {
	private urlExt: number;
	leagues$: Observable<League[]>;
	season$: Observable<Season[]>;
	currentLeague: League;


	// TODO
	// Make it so when the url changes, the stuff in the filters update automatically!
	//

  constructor(private router: Router, private route: ActivatedRoute, private ls: LeagueService, private ss: SeasonService) { }

	ngOnInit() {
		this.fillData();

	}

	ngOnChanges(){

	}


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

	getSeasonForLeague(league: League){
		this.currentLeague = league;
		this.season$ = this.ss.doRequest(league.id);
	}


}
