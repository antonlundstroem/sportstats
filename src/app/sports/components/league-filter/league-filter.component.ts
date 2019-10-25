import { Component, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sport } from "../../models/sport";
import { LeagueService } from "../../services/league.service";
import { Observable } from 'rxjs';
import { League } from "../../models/league";

@Component({
  selector: 'app-league-filter',
  templateUrl: './league-filter.component.html',
  styleUrls: ['./league-filter.component.css']
})
export class LeagueFilterComponent implements OnInit {

	@Input() sport: Sport;
	@Output() league: League;
	leagues$: Observable<League[]>;


  constructor(private ar: ActivatedRoute, private ls: LeagueService) { }

	ngOnInit() {
		this.getLeaguesForSport(this.sport.id);
	}

	getLeaguesForSport(sportId:number){
		this.leagues$ = this.ls.doRequest(sportId);
	}


}
