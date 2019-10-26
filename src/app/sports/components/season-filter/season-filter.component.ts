import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { Filter } from "../../models/filter";
import { SeasonService } from "../../services/season.service";
import { Observable } from 'rxjs';
import { Season } from "../../models/season";
import { League } from "../../models/league";
import { FilterService } from "../../services/filter.service";
import { Sport } from "../../models/sport";

@Component({
  selector: 'app-season-filter',
  templateUrl: './season-filter.component.html',
  styleUrls: ['./season-filter.component.css']
})
export class SeasonFilterComponent implements OnInit, OnChanges {
	@Input() league: League;
	@Input() sport: Sport;
	@Output() seasonUpdater = new EventEmitter<Season>();
	
	
	seasons$: Observable<Season[]>;
	selectedSeason: Season;
	
	constructor(private fs: FilterService, private seasonService: SeasonService) { }

	ngOnInit() {}

	ngOnChanges(){
		// Reset the season info on changes
		this.resetSeasonInfo();

		this.fs.currentFilter.subscribe(params => {
			if (params.leagueId === null){
				//do nothing
			} else {
				this.seasons$ = this.seasonService.doRequest(params.leagueId);
			}
		});
	}

	resetSeasonInfo(){
		this.fs.resetSeason();
		this.selectedSeason = undefined;
	}

	onSelect(season: Season){
		this.selectedSeason = season;
		this.seasonUpdater.emit(season);
		this.fs.setSeason(season.id);
	}
}
