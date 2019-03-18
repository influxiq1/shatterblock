import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminmanagementComponent} from './adminmanagement/adminmanagement.component';
import {LoginComponent} from './login/login.component';
import {BrandmanagementComponent} from './brandmanagement/brandmanagement.component';
import {InfluencersmanagementComponent} from "./influencersmanagement/influencersmanagement.component";
import {InfluencersdashbordComponent} from "./influencersdashbord/influencersdashbord.component";
import {BranddashbordComponent} from "./branddashbord/branddashbord.component";
import {AdmindashbordComponent} from "./admindashbord/admindashbord.component";
import {Resolveservice} from "./resolveservice";

const routes: Routes = [
  { path: "admin", component: AdminmanagementComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "brand", component: BrandmanagementComponent },
  { path: "influencers", component: InfluencersmanagementComponent },
  { path: "influencersdashbord", component: InfluencersdashbordComponent },
  { path: "branddashbord", component: BranddashbordComponent,resolve: {results: Resolveservice},data: { object: 'users' }},
  { path: "admindashbord", component: AdmindashbordComponent,resolve: {results: Resolveservice},data: { source: 'users',condition:{} } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
