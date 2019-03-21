import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';
import { LoginComponent } from './login/login.component';
import { BrandmanagementComponent } from './brandmanagement/brandmanagement.component';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { InfluencersmanagementComponent } from './influencersmanagement/influencersmanagement.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { BranddashbordComponent } from './branddashbord/branddashbord.component';
import { InfluencersdashbordComponent } from './influencersdashbord/influencersdashbord.component';
import { Resolveservice } from '../app/resolveservice';
import { ApiService } from '../app/api.service';
import { AuthGuard } from './auth.guard';
import { ForgatepasswordComponent } from './forgatepassword/forgatepassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
//import { ResolvecomponentComponent } from './resolvecomponent/resolvecomponent.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    BrandmanagementComponent,
    AdminmanagementComponent,
    InfluencersmanagementComponent,
    AdmindashbordComponent,
    BranddashbordComponent,
    InfluencersdashbordComponent,
    ForgatepasswordComponent,
    ChangepasswordComponent,
    //Resolveservice,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [CookieService,Resolveservice,ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
