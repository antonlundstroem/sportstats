import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LeagueService } from "../../services/league.service";
import { Observable } from 'rxjs';
import { League } from "../../models/league";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
	private urlExt: number;
	leagues$: Observable<League[]>

  constructor(private route: ActivatedRoute, private ls: LeagueService ) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.urlExt = params['sportId'];
			if (this.urlExt === undefined){
				// add some error handling, doing this via promises or smth is better?
			} else {
				this.leagues$ = this.ls.doRequest(this.urlExt);
			}
		});
	}
}
