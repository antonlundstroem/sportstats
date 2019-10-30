import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from "rxjs/internal/Subject";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class FilterbuttonService {
	private _toggle = new BehaviorSubject<boolean>(false);
	toggle$ = this._toggle.asObservable();

	constructor() { }
	
	toggle(toggle:boolean){
		this._toggle.next(toggle);
	}

}
