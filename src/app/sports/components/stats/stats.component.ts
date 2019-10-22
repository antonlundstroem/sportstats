import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

// Base component to gather everything else in the group into
export class StatsComponent implements OnInit {

  constructor() { }

	ngOnInit() {
  }

}
