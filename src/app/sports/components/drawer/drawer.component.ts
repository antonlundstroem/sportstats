import { Component, OnInit } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { Sport } from "../../models/sport";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

	sports$: Observable<Sport[]>;
	sportPaths = [];

  constructor(private ss: SportService, private router: Router) { }

	ngOnInit() {
		this.sports$ = this.ss.doRequest();

		//this.setRoutingPaths();

	}

	setRoutingPaths(){
		this.sports$.subscribe((items: Sport[]) => 
			items.forEach(sport => 
				this.sportPaths.push( {"id": sport.id, "name": sport.name} )
			)
		);
	}

	onSelect(sport){
		this.router.navigate(['', sport.id]);
	}
}
