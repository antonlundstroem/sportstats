import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
export class FilterComponent implements OnInit {
	private urlExt: number;
	leagues$: Observable<League[]>;
	season$: Observable<Season[]>;

  constructor(private route: ActivatedRoute, private ls: LeagueService, private ss: SeasonService) { }

	ngOnInit() {
		this.fillData();

	}

	fillData(){
		this.route.params.subscribe(params => {
			this.urlExt = params['sportId'];
			if (this.urlExt === undefined){
				// add some error handling, doing this via promises or smth is better?
			} else {
				this.leagues$ = this.ls.doRequest(this.urlExt);

				this.getSeasonForLeague(this.urlExt);
				// This should be the id of the LEAGUE, currently it is the ID of the SPORT
			}
		});
	}

	getSeasonForLeague(seasonId:number){
		this.season$ = this.ss.doRequest(seasonId);
	}
}
