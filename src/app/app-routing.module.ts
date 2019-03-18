import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminmanagementComponent} from './adminmanagement/adminmanagement.component';
import {LoginComponent} from './login/login.component';
import {BrandmanagementComponent} from './brandmanagement/brandmanagement.component';
import {InfluencersmanagementComponent} from "./influencersmanagement/influencersmanagement.component";

const routes: Routes = [
  { path: "admin", component: AdminmanagementComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "brand", component: BrandmanagementComponent },
  { path: "influencers", component: InfluencersmanagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
