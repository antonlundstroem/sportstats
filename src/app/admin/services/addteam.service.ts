import { Injectable } from '@angular/core';
import { Team } from "../../sports/models/team";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddteamService {

	constructor(private http: HttpClient) { }


	addTeam(team: Team, seasonId){
		var url = `/team/add/name/${team.name}/season_id/${seasonId}`
		console.log(url);

		this.http.post<Team>(url, JSON.stringify(team)).subscribe(
			res => {console.log('SUCC: ' + res)},
			err => {console.log('ERR: ' + err.toString)}
			);	
	};
}
