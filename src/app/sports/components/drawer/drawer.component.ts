import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { Sport } from "../../models/sport";
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

	sports$: Observable<Sport[]>;
	sportPaths = [];

  constructor(private ss: SportService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {

		this.route.queryParams.subscribe(x => {
			console.log('in drawercomponent qp');
			console.log(x)
		});
		this.route.params.subscribe(x => {
			console.log('in drawercomponent p');
			console.log(x)
		});

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
