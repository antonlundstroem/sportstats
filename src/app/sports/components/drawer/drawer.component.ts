import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { Sport } from "../../models/sport";
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterbuttonService } from "../../services/filterbutton.service";


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

	sports$: Observable<Sport[]>;
	sportPaths = [];

  constructor(private ss: SportService, private router: Router, private route: ActivatedRoute, private fbs: FilterbuttonService) { }

	ngOnInit() {
		this.sports$ = this.ss.doRequest();
	}

	onSelect(sport){
		console.log('clicked sport in drawer');
		this.fbs.toggle(false);
	}
}
