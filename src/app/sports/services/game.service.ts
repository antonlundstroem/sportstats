import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

	constructor(private http: HttpClient) { }

	getGameByTeamId(teamId: number){
		return this.http.get<Game[]>('/game/team_id/' + teamId);
	}

	getGameBySeasonId(seasonId: number) {
		return this.http.get<Game[]>('/game/season_id/' + seasonId);
	}


}
