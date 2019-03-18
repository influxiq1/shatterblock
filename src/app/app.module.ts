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

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    BrandmanagementComponent,
    AdminmanagementComponent,
    InfluencersmanagementComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
