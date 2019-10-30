import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { AddteamComponent } from "./components/addteam/addteam.component";

const routes: Routes = [
	// admin
	{path: 'admin', component: AdminComponent},
	{path: 'admin/addteam', component: AddteamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const adminRoutingComponents = [AdminComponent];
