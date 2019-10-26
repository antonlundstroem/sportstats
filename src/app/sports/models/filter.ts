import { FilterSettings } from './filtersettings';

export class Filter implements FilterSettings {
	sportId:number;
	leagueId:number;
	seasonId:number;
	teamId:number;

	constructor(){
		this.sportId = null;
		this.leagueId = null;
		this.seasonId = null;
		this.teamId = null;
	}

	setSportId(sportId:number) {
		this.sportId = sportId;
	}

	getSportId():number {
		return this.sportId;
	}

	setLeagueId(leagueId:number) {
		this.leagueId = leagueId;
	}

	getLeagueId():number {
		return this.leagueId;
	}

	setSeasonId(seasonId:number) {
		this.seasonId = seasonId;
	}

	getSeasonId():number {
		return this.seasonId;
	}

	setTeamId(teamId:number) {
		this.teamId = teamId;
	}

	getTeamId():number {
		return this.seasonId;
	}

	printFilterInfo(){
		console.log("SportId: " + this.sportId + "\nLeagueId: " + this.leagueId + "\nSeasonId: " + this.seasonId + "\nTeamId: " + this.teamId);
	}
}

