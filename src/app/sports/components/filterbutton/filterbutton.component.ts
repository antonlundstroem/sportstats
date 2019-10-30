import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterbuttonService } from "../../services/filterbutton.service";

@Component({
  selector: 'app-filterbutton',
  templateUrl: './filterbutton.component.html',
  styleUrls: ['./filterbutton.component.css']
})
export class FilterbuttonComponent implements OnInit {

	constructor(private fbs: FilterbuttonService) { }

	ngOnInit() {
	}

	toggle(){
		this.fbs.toggle(true);
	}

}
