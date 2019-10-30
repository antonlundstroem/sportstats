import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterbuttonService } from "../../services/filterbutton.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

// Base component to gather everything else in the group into
export class StatsComponent implements OnInit {
	private $isGameRow: Observable<boolean>;

	constructor(private fbs: FilterbuttonService) {
	}

	// TODO 
	//
	// Fix so that every time you select a new sport, the toggle gets put to false.
	// Bootleg way is to do it in the drawer... ew

	ngOnInit() {
		console.log('reloaded in stats');
		this.fbs.toggle(false);
		this.$isGameRow = this.fbs.toggle$;
		//this.fbs.toggle$.subscribe(param => this.grt = param);
	}


}
