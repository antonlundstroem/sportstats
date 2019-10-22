import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

	constructor(private http: HttpClient) { }

	doRequest(id:number){
		return this.http.get<League[]>('/league/sport_id/' + id);
	}
}
