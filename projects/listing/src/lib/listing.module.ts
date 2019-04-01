import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent } from './listing.component';
import {DemoMaterialModule} from './materialmodules';
import { ApiService } from './api.service';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    BrowserModule,
    DemoMaterialModule
  ],
  exports: [ListingComponent],
  providers: [ApiService],
})
export class ListingModule { }
