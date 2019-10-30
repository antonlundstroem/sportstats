import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { Season } from "../../models/season";
import { Sport } from "../../models/sport";
import { Team } from "../../models/team";
import { Observable } from 'rxjs';
import { FilterService } from "../../services/filter.service";
import { TeamService } from "../../services/team.service";
import { League } from "../../models/league";

@Component({
  selector: 'app-team-filter',
  templateUrl: './team-filter.component.html',
  styleUrls: ['./team-filter.component.css']
})
export class TeamFilterComponent implements OnInit, OnChanges {

	@Input() season: Season;
	@Input() sport: Sport;
	@Input() league: League;
	@Output() teamUpdater = new EventEmitter<Team>();

	teams$: Observable<Team[]>;
	selectedTeam: Team;
	
	constructor(private fs: FilterService, private ts: TeamService) { }

  ngOnInit() {
	}

	ngOnChanges(){
		// Reset the team info on changes
		this.resetTeamInfo();

		this.fs.currentFilter.subscribe(params => {
			if (params.seasonId === null){
				//do nothing
			} else {
				this.teams$ = this.ts.getTeamsForSeason(params.seasonId);
			}
		});
	}

	resetTeamInfo(){
		this.fs.resetTeam();
		this.selectedTeam = undefined;
	}

	onSelect(team: Team){
		this.selectedTeam = team;
		this.teamUpdater.emit(team);
		this.fs.setTeam(team.id);
	}

}
