import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";
import { GameService } from "../../services/game.service";
import { Observable } from 'rxjs';
import { Game } from "../../models/game";
import { TeamService } from "../../services/team.service";
import { Team } from "../../models/team";
import { FilterbuttonService } from "../../services/filterbutton.service";


export interface GameRow {
	homeOrAway: string;
	vsTeam: string;
	round: number;
	date: Date;
}

@Component({
  selector: 'app-gamerowsdetail',
  templateUrl: './gamerowsdetail.component.html',
  styleUrls: ['./gamerowsdetail.component.css']
})
export class GamerowsdetailComponent implements OnInit {
	games$: Observable<Game[]>;
	teams$: Observable<Team[]>;
	fs$: Observable<any>;
	private sportId: number;
	private leagueId: number;
	private seasonId: number;
	private teamId: number;

	private vsTeamName: string;

  constructor(private fs: FilterService, private gs: GameService, private ts: TeamService, private fbs: FilterbuttonService) { }

	ngOnInit() {
		this.fbs.toggle$.subscribe(param => {
			this.init();
		}
		);

	}

	init(){
		this.fs.currentFilter.subscribe(param => {
			this.sportId = param.getSportId();
			this.leagueId = param.getLeagueId();
			this.seasonId = param.getSeasonId();
			this.teamId = param.getTeamId();

			if (param.getSeasonId() === null) {
				// do some error handling
			} else if (param.getTeamId() === null) {
				//do some error handling
			} else if (param.getSeasonId() !== null){
				this.seasonId = param.getSeasonId();
				this.initGamesBySeason()
				this.initTeamsBySeason();

				//this.getGameRows();
			} else {

				// do some more error stuff
				// " Could not find any matching games"
			}

		});


	}
	initGamesBySeason(){
		this.games$ = this.gs.getGameBySeasonId(this.seasonId);
	}

	initGamesByTeam(){
		this.games$ = this.gs.getGameByTeamId(this.teamId);
	}

	initTeamsBySeason(){
		this.teams$ = this.ts.getTeamsForSeason(this.seasonId);
	}

	getGameRows(){
		this.games$.forEach(game => game.forEach(g => {
			var homeOrAway;
			var vsTeamName;
			if (g.homeTeamId === this.teamId){
				// Is Home Game
				homeOrAway = "H"
			}
			else if (g.awayTeamId == this.teamId){
				// Its away game
				homeOrAway = "A"
			}
			else {
				// do nuthing so far
			}
			vsTeamName = this.getVsTeamName();
			console.log(homeOrAway);
			console.log(vsTeamName);
		}));
	}

	getVsTeamName(){
		var vsTeamName = undefined;
		this.teams$.forEach(team => team.forEach(t => {
			if (t.id !== this.teamId) {
				vsTeamName = t.name;
			}
		}));
		return vsTeamName;

	}

}
