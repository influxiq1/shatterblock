import {NgModule, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListingComponent, Confirmdialog,BottomSheet} from './listing.component';
import {DemoMaterialModule} from './materialmodules';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { MyfromComponent } from './myfrom/myfrom.component';
import {DynamicFieldDirective} from "./myfrom/dynamic-field.directive";
import { MatFileUploadModule } from 'angular-material-fileupload';
import {NgxUploaderModule} from "ngx-uploader";
// import { FieldConfig } from './myfrom/field.interface';
// import { DynamicFieldDirective } from './myfrom/dynamic-field.directive';
// import { DynamicFormBuilderComponent } from '../lib/dynamic-form-builder/dynamic-form-builder.component';
/*
import { FieldBuilderComponent } from '../lib/dynamic-form-builder/field-builder/field-builder.component';
import { TextBoxComponent } from '../lib/dynamic-form-builder/atoms/textbox';
import { DropDownComponent } from '../lib/dynamic-form-builder/atoms/dropdown';
import { FileComponent } from '../lib/dynamic-form-builder/atoms/file';
import { CheckBoxComponent } from '../lib/dynamic-form-builder/atoms/checkbox';
import { RadioComponent } from '../lib/dynamic-form-builder/atoms/radio';
*/



@NgModule({
  declarations: [ListingComponent,Confirmdialog,BottomSheet, FooterComponent, MyfromComponent,
  /*  FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    FileComponent,
    RadioComponent*/],
    imports: [
        CommonModule,
        BrowserModule, BrowserAnimationsModule,
        DemoMaterialModule,
        FormsModule, ReactiveFormsModule,
        MatFileUploadModule, NgxUploaderModule,
        // DynamicFieldDirective,

    ],
  exports: [ListingComponent, MyfromComponent, FooterComponent, NgxUploaderModule],
  providers: [ApiService, DynamicFieldDirective],
  entryComponents:[Confirmdialog,BottomSheet],
})
export class ListingModule {
  // field: FieldConfig;
  // group: FormGroup;

}
