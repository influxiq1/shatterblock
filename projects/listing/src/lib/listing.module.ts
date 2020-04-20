import {NgModule, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListingComponent, Confirmdialog,BottomSheet,VideoPlayer,ImageView,SnackbarComponent} from './listing.component';
import {DemoMaterialModule} from './materialmodules';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { MomentModule } from 'ngx-moment';
import {RouterModule} from "@angular/router";
import {YoutubeplayerComponent} from './youtubeplayer/youtubeplayer.component';
//import { ShowformComponent } from './showform/showform.component';


@NgModule({
    declarations: [ListingComponent,Confirmdialog,BottomSheet,YoutubeplayerComponent,VideoPlayer,ImageView,SnackbarComponent],
    imports: [
        CommonModule,
        BrowserModule, BrowserAnimationsModule,
        DemoMaterialModule,
        FormsModule, ReactiveFormsModule,
        RouterModule,
        MomentModule
        

    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports: [ListingComponent,
    ],
    providers: [ApiService],
    entryComponents:[Confirmdialog,BottomSheet,VideoPlayer,ImageView,SnackbarComponent],
})
export class ListingModule {
}
