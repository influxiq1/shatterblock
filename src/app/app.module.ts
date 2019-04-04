import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {ChangepasswordComponent, Dialogtest} from './changepassword/changepassword.component';

import { ListingComponent } from './listing/listing.component';

import { AdminlistComponent } from './adminlist/adminlist.component';

// import { AmingridlistComponent } from './amingridlist/amingridlist.component';

import { AdminleftpanelComponent } from './adminleftpanel/adminleftpanel.component';

//import { ResolvecomponentComponent } from './resolvecomponent/resolvecomponent.component';


//MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminformComponent } from './adminform/adminform.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminmodalformComponent } from './adminmodalform/adminmodalform.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ListingModule} from 'listing-angular7';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule, MatListModule } from '@angular/material';




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
    ListingComponent,
    AdminlistComponent,
    AdminleftpanelComponent,
    AdminformComponent,
    AdminmodalformComponent,
    ResetpasswordComponent,Dialogtest, MainNavComponent,




    //Resolveservice,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,


    //MATERIAL
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    ListingModule,
    LayoutModule,
    MatIconModule,
    MatListModule
  ],
  providers: [CookieService,Resolveservice,ApiService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    Dialogtest
  ],
})
export class AppModule { }
