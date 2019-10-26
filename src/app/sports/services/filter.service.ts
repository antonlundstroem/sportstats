import { Injectable } from '@angular/core';
import { Filter } from '../models/filter';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

	private filter = new BehaviorSubject(new Filter());
	currentFilter = this.filter.asObservable();
	
	constructor() { }

	setSport(sportId:number){
		this.currentFilter.subscribe(params => params.sportId = sportId);
	}

	resetSport(){
		this.currentFilter.subscribe(params => params.sportId = null);
	}

	setLeague(leagueId:number){
		this.currentFilter.subscribe(params => params.leagueId = leagueId);
	}

	resetLeague(){
		this.currentFilter.subscribe(params => params.leagueId = null);
	}

	setSeason(seasonId:number){
		this.currentFilter.subscribe(params => params.seasonId = seasonId);
	}

	resetSeason(){
		this.currentFilter.subscribe(params => params.seasonId = null);
	}

	setTeam(teamId:number) {
		this.currentFilter.subscribe(params => params.teamId = teamId);
	}

	resetTeam(){
		this.currentFilter.subscribe(params => params.teamId = null);
	}

	resetFilter(){
		//let newFilter = new BehaviorSubject(new Filter());
		this.currentFilter = new BehaviorSubject(new Filter()).asObservable();
	}

	printFilterInfo(){
		this.currentFilter.subscribe(params => console.log(params));
	}

	





}
