import {NgModule, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListingComponent, Confirmdialog,BottomSheet} from './listing.component';
import {DemoMaterialModule} from './materialmodules';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { MyfromComponent } from './myfrom/myfrom.component';

// import { FieldConfig } from './myfrom/field.interface';
// import { DynamicFieldDirective } from './myfrom/dynamic-field.directive';




@NgModule({
  declarations: [ListingComponent,Confirmdialog,BottomSheet, FooterComponent, MyfromComponent],
  imports: [
    CommonModule,
    BrowserModule,BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
     // DynamicFieldDirective,

  ],
  exports: [ListingComponent,MyfromComponent],
  providers: [ApiService],
  entryComponents:[Confirmdialog,BottomSheet],
})
export class ListingModule {
  // field: FieldConfig;
  // group: FormGroup;

}
