import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";
import { GameService } from "../../services/game.service";
import { Observable, concat } from 'rxjs';
import { Game } from "../../models/game";
import { TeamService } from "../../services/team.service";
import { Team } from "../../models/team";
import { FilterbuttonService } from "../../services/filterbutton.service";
import { map, filter, catchError, mergeMap, zip } from 'rxjs/operators';

interface GameRowItem {
	homeOrAway?: string;
	myTeamName?: any;
	vsTeamName?: any;
	round?: number;
	date?: Date;
}

interface TeamListItem {
	id: number;
	teamName: string;
}

export interface GameRow extends Array<GameRowItem>{}

@Component({
  selector: 'app-gamerowsdetail',
  templateUrl: './gamerowsdetail.component.html',
  styleUrls: ['./gamerowsdetail.component.css']
})
export class GamerowsdetailComponent implements OnInit {
	games$: Observable<Game[]>;
	teams$: Observable<Team[]>;
	private sportId: number;
	private leagueId: number;
	private seasonId: number;
	private teamId: number;

	private teamFilterSet: boolean = false;
	
	teamList: TeamListItem[];
	tlt: TeamListItem;
	gameRows: GameRowItem[];
	tmpRow: GameRowItem = {};
	
	private vsTeamName: string;

  constructor(private fs: FilterService, private gs: GameService, private ts: TeamService, private fbs: FilterbuttonService) { }

	ngOnInit() {
		this.fbs.toggle$.subscribe(param => {
			this.init();
		});
	}

	init(){

		this.fs.currentFilter.subscribe(param => {
			// Setup the variables
			this.sportId = param.getSportId();
			this.leagueId = param.getLeagueId();
			this.seasonId = param.getSeasonId();
			this.teamId = param.getTeamId();

			this.initObservables();

			// Check if teamFilter should be used
			if (param.getTeamId() === null){
				this.teamFilterSet = false;
			} else if (param.getTeamId() !== null){
				this.teamFilterSet = true;
			}

			if (param.getSeasonId() === null) {
				// do some error handling
			} else if (param.getTeamId() === null) {
				//do some erro handling
			}
		});

		this.initGameRows();
	}

	initObservables(){
		this.teams$ = this.ts.getTeamsForSeason(this.seasonId);
		this.games$ = this.gs.getGameBySeasonId(this.seasonId);
	}

	initGameRows(){
		if (this.teamFilterSet) {
			this.games$ = this.gs.getGameByTeamId(this.teamId);
		} else {
			this.games$ = this.gs.getGameBySeasonId(this.seasonId);
		}


		/*	
		this.gameRows = [];

		this.games$.forEach(gameArray => gameArray.forEach(game => {
			this.tmpRow = {}
			if (game.homeTeamId === this.teamId){
				this.tmpRow.homeOrAway = "H";
				this.tmpRow.myTeamName = game.homeTeamId;
				//this.tmpRow.vsTeamName = game.awayTeamId;
			} else if (game.homeTeamId !== this.teamId) {
				this.tmpRow.homeOrAway = "A"
				this.tmpRow.vsTeamName = game.homeTeamId;
				//this.tmpRow.myTeamName = game.awayTeamId;
			}

			this.tmpRow.date = game.date;
			this.tmpRow.round = game.roundId;

			//			this.teams$.forEach(param => param.forEach(team => {
			//				if (team.id === this.teamId) {
			//					this.tmpRow.myTeamName = team.name;
			//				} else if (team.id !== this.teamId) {
			//					this.tmpRow.vsTeamName = team.name;
			//				}
			//			}));
			
			this.tmpRow.date = game.date;
			this.tmpRow.round = game.roundId;
			this.gameRows.push(this.tmpRow);
		}
		));
		 */
	}


	initTeamList(){
		this.teamList = [];
		this.teams$ = this.ts.getTeamsForSeason(this.seasonId);

		this.teams$.forEach(param => param.forEach(team => {
			this.teamList.push({id: team.id, teamName: team.name});
		}));
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

}
