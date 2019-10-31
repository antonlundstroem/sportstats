import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from "../models/team";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
	private teamName:string;

	constructor(private http: HttpClient) { }

	getTeamsForSeason(seasonId:number){
		return this.http.get<Team[]>('/team/season_id/' + seasonId);
	}

	getDataForTeam(teamId:number){
		return this.http.get<Team[]>('/team/stats/team_id/' + teamId);
	}

	getNameForTeam(teamList: Observable<Team[]>, teamId:number):string{
		teamList.forEach(param => param.forEach(team => {
			if (teamId === team.id){
				this.teamName = team.name;
			}
		}));
		return this.teamName;
	}
}
