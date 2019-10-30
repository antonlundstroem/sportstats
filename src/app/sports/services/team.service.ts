import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

	constructor(private http: HttpClient) { }

	getTeamsForSeason(seasonId:number){
		return this.http.get<Team[]>('/team/season_id/' + seasonId);
	}

	getDataForTeam(teamId:number){
		return this.http.get<Team[]>('/team/stats/team_id/' + teamId);
	}
}
