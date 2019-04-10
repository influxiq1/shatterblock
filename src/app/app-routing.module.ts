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
import {ManagedashboardComponent} from "./managedashboard/managedashboard.component";
import {Resolveservice} from "./resolveservice";
import {ContractComponent} from "./contract/contract.component";
import {AgreementComponent} from "./agreement/agreement.component";
import {ModalComponent} from "./modal/modal.component";
import {AudiodeadlinesgreementComponent} from "./audiodeadlinesgreement/audiodeadlinesgreement.component";
import {ModalaudiodeadlineComponent} from "./modalaudiodeadline/modalaudiodeadline.component";
import {ModeldashboardComponent} from "./modeldashboard/modeldashboard.component";
import {AffilitemarketingComponent} from "./affilitemarketing/affilitemarketing.component";

const routes: Routes = [
  { path: "admin", component: AdminmanagementComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent},
  { path: "", component: LoginComponent},
  { path: "brand", component: BrandmanagementComponent, canActivate: [AuthGuard] },
  { path: "influencers", component: InfluencersmanagementComponent, canActivate:[AuthGuard] },
  { path: "influencersdashboard", component: InfluencersdashbordComponent, canActivate: [AuthGuard]},

    { path: "contract", component: ContractComponent, canActivate: [AuthGuard]},
  // { path: "adminlist", component: AdminlistComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'users', condition: {} }},
  { path: "branddashboard", component: BranddashbordComponent, canActivate: [AuthGuard], resolve: { results: Resolveservice}, data: {source: 'admindashboard'}},
  { path: "admindashboard", component: AdmindashbordComponent, canActivate:[AuthGuard], resolve: {results: Resolveservice}, data: {source: 'admindashboard'}},  // resolve is use for this page PRE LOAD DATA PRIOR
  { path: 'forgetpassword', component: ForgatepasswordComponent},
  { path: 'modal', component: ModalComponent},

  { path: 'resetpassword/:token', component: ChangepasswordComponent},
  {path: 'adminlist', component: AdminlistComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source:'admindashboard', condition:{}}},
   {path: 'adminform', component:AdminformComponent, canActivate: [AuthGuard] },
  {path: 'adminmodalform', component: AdminmodalformComponent, canActivate: [AuthGuard]},

  {path: 'managedashboard', component: ManagedashboardComponent, canActivate: [AuthGuard]},

  {path: 'agreement', component: AgreementComponent, canActivate: [AuthGuard]},
  {path: 'affilitemarketing', component: AffilitemarketingComponent, canActivate: [AuthGuard]},


  {path: 'audioseadlineagreement', component: AudiodeadlinesgreementComponent},
  {path: 'audiodeadlinemodal', component: ModalaudiodeadlineComponent},
  {path: 'modeldashboard', component: ModeldashboardComponent,canActivate:[AuthGuard], resolve: {results: Resolveservice}, data: {source: 'modeldashboard'}},


  // { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: {source: 'users', condition:{}} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
