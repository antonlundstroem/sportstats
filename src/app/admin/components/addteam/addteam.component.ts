import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from "../../../sports/models/team";
import { AddteamService } from "../../services/addteam.service";

class TeamC implements Team {
	name:string;
	seasonId:string;
}

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css'] })

export class AddteamComponent implements OnInit {

	nameValidator = [
		Validators.required,
		Validators.minLength(2),
		Validators.maxLength(30)
	];

	addTeamForm = new FormGroup({
			name: new FormControl('', {validators: this.nameValidator, updateOn: 'blur'}),
			seasonId: new FormControl('', {validators: [Validators.required], updateOn: 'blur'})
	});

  constructor(private ats: AddteamService) { }

	ngOnInit() {
	
	}

	name(){
		return this.addTeamForm.get("name");
	}

	season(){
		return this.addTeamForm.get("seasonId");
	}

	onSubmit(){
		var team: TeamC = new TeamC();
		team.name = this.addTeamForm.controls.name.value;
		team.seasonId = this.addTeamForm.controls.seasonId.value;
		this.ats.addTeam(team, team.seasonId);
	}
}
