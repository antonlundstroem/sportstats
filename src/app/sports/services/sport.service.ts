import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Sport} from '../models/sport';


@Injectable({
  providedIn: 'root'
})
export class SportService {

	constructor(private http: HttpClient) { }

	doRequest(){
		return this.http.get<Sport[]>('/sport/all');
	}



}
