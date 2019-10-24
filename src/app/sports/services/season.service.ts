import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Season } from '../models/season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

	constructor(private http: HttpClient) { }

	doRequest(leagueId:number){
		return this.http.get<Season[]>('/season/league_id/' + leagueId);
	}

	getData(seasonId:number){
		return this.http.get('/season/data/season_id/' + seasonId);
	}
}
