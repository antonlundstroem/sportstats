import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, adminRoutingComponents } from './admin.routing';
import { AdminComponent } from './components/admin/admin.component';
import { AdminbuttonComponent } from './components/adminbutton/adminbutton.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		adminRoutingComponents,
		AdminComponent,
		AdminbuttonComponent,
		AddteamComponent
	],
  imports: [
		CommonModule,
		AdminRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [ 
		AdminbuttonComponent
	]
})
export class AdminModule { }
