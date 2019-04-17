import {NgModule, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListingComponent, Confirmdialog,BottomSheet} from './listing.component';
import {DemoMaterialModule} from './materialmodules';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldConfig } from './listing.component';


@NgModule({
  declarations: [ListingComponent,Confirmdialog,BottomSheet],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,ReactiveFormsModule
  ],
  exports: [ListingComponent],
  providers: [ApiService],
  entryComponents:[Confirmdialog,BottomSheet],
})
export class ListingModule {
  field: FieldConfig;
  // group: FormGroup;

}
