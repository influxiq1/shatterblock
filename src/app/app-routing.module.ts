import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminmanagementComponent} from './adminmanagement/adminmanagement.component';
import {LoginComponent} from './login/login.component';
import {BrandmanagementComponent} from './brandmanagement/brandmanagement.component';
import {InfluencersmanagementComponent} from "./influencersmanagement/influencersmanagement.component";
import {InfluencersdashbordComponent} from "./influencersdashbord/influencersdashbord.component";
import {BranddashbordComponent} from "./branddashbord/branddashbord.component";
import {AdmindashbordComponent} from "./admindashbord/admindashbord.component";
import { AuthGuard } from './auth.guard';
import {ForgatepasswordComponent} from './forgatepassword/forgatepassword.component';
import {ChangepasswordComponent} from './changepassword/changepassword.component';
import {AdminlistComponent} from "./adminlist/adminlist.component";
import {AdminformComponent} from "./adminform/adminform.component";
import {AdminmodalformComponent} from "./adminmodalform/adminmodalform.component";
import {Resolveservice} from "./resolveservice";


const routes: Routes = [
  { path: "admin", component: AdminmanagementComponent },
  { path: "login", component: LoginComponent},
  { path: "", component: LoginComponent},
  { path: "brand", component: BrandmanagementComponent },
  { path: "influencers", component: InfluencersmanagementComponent },
  { path: "influencersdashbord", component: InfluencersdashbordComponent},
  // { path: "adminlist", component: AdminlistComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'users', condition: {} }},
  { path: "branddashbord", component: BranddashbordComponent},
  { path: "admindashboard", component: AdmindashbordComponent, canActivate:[AuthGuard], resolve: {results: Resolveservice}, data: {source: 'admindashboard'}},  // resolve is use for this page PRE LOAD DATA PRIOR
  { path: 'forgetpassword', component: ForgatepasswordComponent},

  { path: 'resetpassword/:token', component: ChangepasswordComponent},
  {path: 'adminlist', component: AdminlistComponent, canActivate: [AuthGuard]},
   {path: 'adminform', component:AdminformComponent },
  {path: 'adminmodalform', component: AdminmodalformComponent},

  // { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: {source: 'users', condition:{}} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
