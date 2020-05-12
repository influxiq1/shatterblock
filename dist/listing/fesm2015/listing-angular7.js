import { SelectionModel } from '@angular/cdk/collections';
import { humanizeBytes } from 'ngx-uploader';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, startWith } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as momentImported from 'moment';
import { throwError, Observable } from 'rxjs';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { Injectable, ElementRef, EventEmitter, ViewChild, Component, Input, Inject, ComponentFactoryResolver, ViewContainerRef, NgModule, CUSTOM_ELEMENTS_SCHEMA, Output, defineInjectable } from '@angular/core';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ng2-ckeditor';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListingService {
    constructor() { }
}
ListingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ListingService.ctorParameters = () => [];
/** @nocollapse */ ListingService.ngInjectableDef = defineInjectable({ factory: function ListingService_Factory() { return new ListingService(); }, token: ListingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiService {
    /*@Input()
      set uploadOutput(uploadOutput: any){
        this.uploadOutputval = uploadOutput;
        console.log('this.uploadOutput');
        console.log(this.uploadOutput);
      }*/
    /**
     * @param {?} _http
     * @param {?} _authHttp
     * @param {?} cookieService
     */
    constructor(_http, _authHttp, cookieService) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.domain_for_fileupload_val = 'http://developmentapi.audiodeadline.com:7031/uploads' + 'uploads';
        this.progress = [];
        this.uploaderror = '';
        this.secretkey = 'na';
        // public uploadOutputval:any;
        this.fileservername = [];
        this.options = { concurrency: 10, maxUploads: 10 };
        this.files = []; // local uploading files array
        this.uploadInput = new EventEmitter(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
        if (this.cookieService.check('secretkey'))
            this.secretkey = this.cookieService.get('secretkey');
        //console.log('this.domain');
        //console.log(this.domain);
    }
    /**
     * @param {?} uploadOutput
     * @param {?} arrayvalue
     * @param {?} uploadtypec
     * @param {?} uploadpath
     * @return {?}
     */
    onUploadOutput(uploadOutput, arrayvalue, uploadtypec, uploadpath) {
        // this.uploaderInput.nativeElement.value = '';
        if (uploadOutput.type === 'allAddedToQueue') {
            /** @type {?} */
            const event = {
                type: 'uploadAll',
                url: 'http://developmentapi.audiodeadline.com:7031/uploads',
                method: 'POST',
                data: { path: uploadpath }
            };
            this.uploadInput.emit(event);
        }
        else if (uploadOutput.type === 'addedToQueue' && typeof uploadOutput.file !== 'undefined') {
            if (uploadOutput.file.response != '') {
                this.files = [];
                this.files.push(uploadOutput.file);
                console.log('this.files*********');
                console.log(this.files);
                this.lengthis = this.files.length;
                this.percentageis = this.files[0].progress.data.percentage;
            }
        }
        else if (uploadOutput.type === 'uploading' && typeof uploadOutput.file !== 'undefined') {
            /** @type {?} */
            const index = this.files.findIndex((/**
             * @param {?} file
             * @return {?}
             */
            file => typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id));
            this.files[index] = uploadOutput.file;
            this.lengthis = this.files.length;
            if (this.files[0] != null && this.files[0].progress != null)
                this.percentageis = this.files[0].progress.data.percentage;
            console.log('this.files==================');
            console.log(this.files);
        }
        else if (uploadOutput.type === 'removed') {
            this.files = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            (file) => file !== uploadOutput.file));
        }
        else if (uploadOutput.type === 'dragOver') {
            this.dragOver = true;
        }
        else if (uploadOutput.type === 'dragOut') {
            this.dragOver = false;
        }
        else if (uploadOutput.type === 'drop') {
            this.dragOver = false;
        }
        console.log('files');
        console.log(this.files);
        if (this.files[0] != null && this.files[0].progress != null) {
            if (this.progress[arrayvalue] == null)
                this.progress[arrayvalue] = 0;
            this.inprogress = true;
            console.log('file upload progressing');
            console.log(this.files[0].progress.data.percentage);
            this.progress[arrayvalue] = (this.files[0].progress.data.percentage);
            if (this.progress[arrayvalue] == 100) {
                this.progress[arrayvalue] = null;
                this.inprogress = null;
            }
            console.log('this.uploadtype in api service');
            console.log(uploadtypec);
        }
        if (uploadtypec == 'single') {
            // this.fileservername = [];
            if (this.fileservername[arrayvalue] == null)
                this.fileservername[arrayvalue] = [];
            this.fileservername[arrayvalue] = [];
            if (this.files[0].response != null)
                this.fileservername[arrayvalue].push(this.files[0].response);
        }
        if (uploadtypec == 'multiple') {
            console.log('this.files[0].response');
            // console.log(this.files[0].response);
            console.log(this.files.length);
            console.log(this.files);
            if (this.fileservername[arrayvalue] == null)
                this.fileservername[arrayvalue] = [];
            // if(this.files[0].response!=null){
            if (this.files.length == 1) {
                if (this.files[0] && this.files[0].response != null && this.files[0].response.error_code == null) {
                    this.fileservername[arrayvalue].push(this.files[0].response);
                    this.files = [];
                    this.uploaderror = '';
                }
                if (this.files[0] != null && this.files[0].response != null && this.files[0].response.error_code != null) {
                    this.uploaderror = 'error occured on uploading !!!';
                }
            }
            if (this.files.length > 1) {
                console.log('sdfdsf==== in multiple length ');
                for (let b in this.files) {
                    if (this.files[b].response != null && this.files[b].response.error_code == null) {
                        this.fileservername[arrayvalue].push(this.files[b].response);
                    }
                }
                this.files = [];
            }
            //}
        }
        console.log('this.fileservername');
        console.log(this.fileservername);
        console.log(this.uploaderror);
        //this.uploaderservice.filenamevalc1=this.fileservername;
        //UploaderComponent.filenamevalc1=87;
        //console.log(classval);
    }
    /**
     * @return {?}
     */
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    /**
     * @return {?}
     */
    getclientip() {
        console.log('endpoint');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getEndpoint(endpoint) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': ''
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log('');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getData(endpoint) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': ''
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log('');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    // getData end
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postData(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': data.token
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postDatawithoutToken(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postlogin(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    } // postData end
    // postData end
    /**
     * @param {?} link
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    postSearch(link, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        /*console.log('------ ');
        console.log("link in postSearch");
        console.log(link);
        console.log(source);*/
        source.secretkey = this.secretkey;
        /** @type {?} */
        var result = this._http.post(link, source, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} link
     * @param {?} source
     * @return {?}
     */
    postSearch1(link, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': source.token
            })
        };
        console.log('------ ');
        console.log("link");
        console.log(link);
        /** @type {?} */
        var result = this._http.post(link, source).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} id
     * @return {?}
     */
    putData(endpoint, data, id) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': ''
            })
        };
        console.log('');
        console.log("endpoint");
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    deteOneData(endpoint, data, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        /* console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);
            console.log(token);*/
        /** @type {?} */
        let dataval;
        dataval = { source: source, id: data._id };
        dataval.secretkey = this.secretkey;
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    togglestatus(endpoint, data, token, source) {
        /*console.log(endpoint);
          console.log(data);
          console.log(token);
          console.log(source);*/
        /*console.log(endpoint);
              console.log(data);
              console.log(token);
              console.log(source);*/
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        /*console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);*/
        /** @type {?} */
        let dataval;
        dataval = { source: source, data: data };
        dataval.secretkey = this.secretkey;
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    deteManyData(endpoint, data, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        /*console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);*/
        /** @type {?} */
        let dataval;
        dataval = { source: source, ids: data };
        dataval.secretkey = this.secretkey;
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} val
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    togglestatusmany(endpoint, data, val, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        /*console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);*/
        /** @type {?} */
        let dataval;
        dataval = { source: source, data: { ids: data, val: val } };
        dataval.secretkey = this.secretkey;
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            //Handle the error here
            return throwError(err); //Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @private
     * @param {?} endpoint
     * @return {?}
     */
    getEndpointUrl(endpoint) {
        return '' + endpoint;
    }
}
ApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
ApiService.propDecorators = {
    uploaderInput: [{ type: ViewChild, args: ['fileInput1',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import {ProgressBarMode} from '@angular/material/progress-bar';
//import  {BtnComponent} from './../../../../src/app/btn/btn.component'
/** @type {?} */
const moment = momentImported;
class ListingComponent {
    // myForm:any;
    /**
     * @param {?} _apiService
     * @param {?} dialog
     * @param {?} bottomSheet
     * @param {?} fb
     * @param {?} router
     * @param {?} resolver
     * @param {?} container
     * @param {?} _http
     * @param {?} sanitizer
     * @param {?} _snackBar
     */
    constructor(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer, _snackBar) {
        this._apiService = _apiService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.fb = fb;
        this.router = router;
        this.resolver = resolver;
        this.container = container;
        this._http = _http;
        this.sanitizer = sanitizer;
        this._snackBar = _snackBar;
        this.myControl = new FormControl();
        this.columns = [];
        this.autosearchinput = [];
        this.olddata = [];
        this.tsearch = [];
        this.tableflag = 0;
        this.autosearch = [];
        this.libdataval = {};
        this.limitcondval = {};
        this.result = {};
        this.sortdataval = {};
        this.sh = false;
        this.art = false;
        this.aud2 = false;
        this.aud = false;
        this.updatetableval = false;
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        /* this variable for artist xp preview */
        this.previewFlug = false;
        this.selectsearch = [];
        /* artistxp preview end */
        this.stateGroups = this.searchListval;
        this.displayedColumns = [];
        this.datacolumns = [];
        this.displayedColumnsheader = [];
        this.formarray = [];
        this.dateSearch_condition = {};
        this.selectSearch_condition = {};
        this.autoSearch_condition = {};
        this.textSearch_condition = {};
        this.loading = false;
        this.preresult = {};
        //dataSource = new MatTableDataSource(this.datasourceval);
        this.dataSource = new MatTableDataSource;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
        /* this.myForm = this.fb.group({
           email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
           password: ['', Validators.required]
         });*/
    }
    /**
     * @param {?} search_settings
     * @return {?}
     */
    set search_settings(search_settings) {
        this.search_settingsval = search_settings;
        /*for (let i= 0; i<= this.search_settingsval.search.length; i++) {
          console.log(this.search_settingsval.search[i].label);
        }*/
        /*  console.log(this.search_settingsval.selectsearch);
          console.log(this.search_settingsval.selectsearch[0].label);
          console.log(this.search_settingsval.selectsearch[0].values);
          console.log(this.search_settingsval.datesearch);*/
    }
    /**
     * @param {?} click_to_add_ananother_page
     * @return {?}
     */
    set click_to_add_ananother_page(click_to_add_ananother_page) {
        this.click_to_add_ananother_pageval = click_to_add_ananother_page;
    }
    /**
     * @param {?} limitcondval
     * @return {?}
     */
    set limitcond(limitcondval) {
        this.limitcondval = limitcondval;
        //console.log('limitcondval',this.limitcondval);
    }
    /**
     * @param {?} date_search_source_countval
     * @return {?}
     */
    set date_search_source_count(date_search_source_countval) {
        this.date_search_source_countval = date_search_source_countval;
        if (this.date_search_source_countval == 0)
            this.limitcondval.pagecount = 1;
        //console.log('date_search_source_count',this.date_search_source_countval);
    }
    /**
     * @param {?} grab_link
     * @return {?}
     */
    set grab_link(grab_link) {
        this.grab_linkval = grab_link;
        console.log(this.grab_linkval);
    }
    /**
     * @param {?} custombutton
     * @return {?}
     */
    set custombutton(custombutton) {
        this.custombuttonval = custombutton;
    }
    /**
     * @param {?} date_search_source
     * @return {?}
     */
    set date_search_source(date_search_source) {
        this.date_search_sourceval = date_search_source;
    }
    /**
     * @param {?} sortdataval
     * @return {?}
     */
    set sortdata(sortdataval) {
        this.sortdataval = sortdataval;
        //console.log(this.sortdataval,'sortdataval');
    }
    /**
     * @param {?} date_search_endpoint
     * @return {?}
     */
    set date_search_endpoint(date_search_endpoint) {
        this.date_search_endpointval = date_search_endpoint;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set url(url) {
        this.urlval = url;
    }
    /**
     * @param {?} searchendpoint
     * @return {?}
     */
    set searchendpoint(searchendpoint) {
        this.searchendpointval = searchendpoint;
    }
    /**
     * @param {?} pdf_link
     * @return {?}
     */
    set pdf_link(pdf_link) {
        this.pdf_link_val = pdf_link;
    }
    /**
     * @param {?} searchList
     * @return {?}
     */
    set searchList(searchList) {
        this.searchListval = searchList;
    }
    /**
     * @param {?} libdataval
     * @return {?}
     */
    set libdata(libdataval) {
        this.libdataval = libdataval;
        //console.log('libdataval',this.libdataval);
    }
    /**
     * @param {?} datasource
     * @return {?}
     */
    set datasource(datasource) {
        this.datasourceval = datasource;
    }
    /**
     * @param {?} datacollectionval
     * @return {?}
     */
    set datacollection(datacollectionval) {
        this.datacollectionval = datacollectionval;
    }
    /**
     * @param {?} skip
     * @return {?}
     */
    set skip(skip) {
        this.skipval = skip;
    }
    /**
     * @param {?} detail_datatype
     * @return {?}
     */
    set detail_datatype(detail_datatype) {
        this.detail_datatypeval = detail_datatype;
    }
    /**
     * @param {?} detail_skip_array
     * @return {?}
     */
    set detail_skip_array(detail_skip_array) {
        this.detail_skip_arrayval = detail_skip_array;
    }
    /**
     * @param {?} sourcedata
     * @return {?}
     */
    set sourcedata(sourcedata) {
        this.sourcedataval = sourcedata;
    }
    /**
     * @param {?} modify_header_array
     * @return {?}
     */
    set modify_header_array(modify_header_array) {
        this.modify_header_arrayval = modify_header_array;
    }
    /**
     * @param {?} deleteendpointval
     * @return {?}
     */
    set deleteendpoint(deleteendpointval) {
        this.deleteendpointval = deleteendpointval;
    }
    /**
     * @param {?} updateendpoint
     * @return {?}
     */
    set updateendpoint(updateendpoint) {
        this.updateendpointval = updateendpoint;
    }
    /**
     * @param {?} apiurl
     * @return {?}
     */
    set apiurl(apiurl) {
        this.apiurlval = apiurl;
    }
    /**
     * @param {?} updatetable
     * @return {?}
     */
    set updatetable(updatetable) {
        this.updatetableval = updatetable;
    }
    /**
     * @param {?} jwttoken
     * @return {?}
     */
    set jwttoken(jwttoken) {
        if (jwttoken != null)
            this.jwttokenval = jwttoken;
        else
            this.jwttokenval = '';
        //console.log(this.jwttokenval,'token')
    }
    /**
     * @param {?} statusarr
     * @return {?}
     */
    set statusarr(statusarr) {
        this.statusarrval = statusarr;
    }
    /**
     * @param {?} emailarray
     * @return {?}
     */
    set emailarray(emailarray) {
        this.emailarrayval = emailarray;
    }
    /**
     * @param {?} editroute
     * @return {?}
     */
    set editroute(editroute) {
        this.editrouteval = editroute;
    }
    /* artistxp preview start */
    /**
     * @param {?} flug
     * @return {?}
     */
    set preview_artistxp(flug) {
        this.previewFlug = true;
    }
    /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        //console.log('ngonchange ..',changes);
        for (let v in changes) {
            //console.log(v,changes[v],'vv');
            if (v == 'updatetable') {
                // console.log('updatetable');
                if (changes[v].previousValue != null)
                    this.allSearch();
            }
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputblur(val) {
        //console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
        //   let source: any;
        //   let condition: any = {};
        //   source = {
        //     source: this.date_search_sourceval,
        //     condition: condition
        //   };
        //   let link = this.apiurlval + '' + this.date_search_endpointval;
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     this.result = res;
        //     this.preresult = this.result.res;
        //   });
        // }
        //not needed ,
        // this._service.success(this.columns[0].date,'dndnnd',this.options);
        /* this.stateGroupOptions = this.myControl.valueChanges
             .pipe(
                 startWith(''),
                 map(value => this._filterGroup(value))
             );*/
        this.stateGroup = this.myControl.valueChanges
            .pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
        /*const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    */
        this.x = this.datasourceval;
        /** @type {?} */
        let x = this.x;
        /** @type {?} */
        let temp = [];
        /** @type {?} */
        let keys = x[0];
        temp = Object.keys(keys); /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /** @type {?} */
        let coldef_list = [];
        /** @type {?} */
        let header_list = [];
        for (let i = 0; i < temp.length; i++) {
            coldef_list.push(temp[i].replace(/\s/g, "_")); /*to replace spaces in field name by "_", we use "replace(/\s/g, "_")"*/
            header_list.push(temp[i]);
        }
        //coldef_list.push('Actions');
        //header_list.push('Actions')
        // console.log('coldef_list',coldef_list);
        // console.log('header_list',header_list);
        for (let i = 0; i < coldef_list.length; i++) {
            /** @type {?} */
            let ff = `row.${coldef_list[i]}`;
            /** @type {?} */
            var tt = { columnDef: `${coldef_list[i]}`, header: `${header_list[i]}`, cell: (/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => eval(ff)), objlength: header_list.length };
            // console.log('tt',tt);
            // console.log('tt.columnDef');
            // console.log(tt.columnDef);
            for (let b in this.modify_header_arrayval) {
                if (b == tt.header)
                    tt.header = this.modify_header_arrayval[b];
            }
            if (this.skipval.indexOf(tt.columnDef) == -1)
                this.columns.push(tt);
        }
        /** @type {?} */
        let displayedcols = this.columns.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.columnDef));
        /** @type {?} */
        let customcols = [];
        //console.log('displayedcols',displayedcols);
        if (this.libdataval != null && this.libdataval.tableheaders != null)
            customcols = this.libdataval.tableheaders;
        if (customcols != null && customcols.length > 0) {
            for (let v in customcols) {
                if (displayedcols.includes(customcols[v]) == false) {
                    this.columns.push({ columnDef: customcols[v], header: customcols[v], cell: 'NA' });
                }
            }
            displayedcols = customcols;
        }
        //console.log('customcols',customcols,displayedcols,this.columns);
        if (this.libdataval.hideaction == null || this.libdataval.hideaction == false)
            displayedcols.push('Actions');
        this.displayedColumns = displayedcols;
        this.displayedColumns.unshift('#'); /*adds select column in table by unshift function*/
        this.displayedColumns.unshift('select'); /*adds select column in table by unshift function*/
        /*adds select column in table by unshift function*/
        /** @type {?} */
        let data_list = [];
        for (let i = 0; i < this.x.length; i++) {
            data_list.push(this.createData(x[i]));
        }
        this.olddata = data_list;
        this.dataSource = new MatTableDataSource(data_list);
        this.selection = new SelectionModel(true, []);
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
    }
    /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    img_modal_view(img) {
        //console.warn("img_modal_view",img)
        /** @type {?} */
        const dialogRef = this.dialog.open(ImageView, {
            panelClass: 'custom-modalbox-image-preview',
            height: 'auto',
            data: { alldata: img }
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        let x;
        this.errormg = '';
        /** @type {?} */
        let data = this.myForm.value;
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    dateSearch(val) {
        //console.log("start date");
        // console.log(this.start_date);
        // console.log(this.end_date);
        // let sd = moment(this.start_date).unix();
        // let ed = moment(this.end_date).unix();
        /** @type {?} */
        let link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        let link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        let source;
        /** @type {?} */
        let condition;
        /** @type {?} */
        let textSearch = {};
        condition = {};
        if (moment(this.end_date).unix() != null && moment(this.start_date).unix() != null) {
            this.dateSearch_condition = {};
            this.dateSearch_condition = condition;
            if (this.end_date != null && this.start_date != null) {
                condition[val] = {
                    $lte: new Date(this.end_date).getTime(),
                    $gte: new Date(this.start_date).getTime(),
                };
            }
            for (let i in this.tsearch) {
                textSearch[i] = { $regex: this.tsearch[i].toLowerCase() };
            }
            /** @type {?} */
            let autosearch = {};
            //this.autosearch;
            for (let b in this.autosearch) {
                for (let m in this.autosearch[b]) {
                    /** @type {?} */
                    let tv = {};
                    tv[b] = this.autosearch[b][m].val.toLowerCase();
                    if (autosearch['$or'] == null)
                        autosearch['$or'] = [];
                    autosearch['$or'].push(tv);
                }
            }
            /** @type {?} */
            let conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
            source = {
                "condition": {
                    limit: this.limitcondval.limit,
                    skip: 0
                },
                sort: {
                    field: this.sortdataval.field,
                    type: this.sortdataval.type
                },
                searchcondition: conditionobj,
            };
            // console.log('con...',conditionobj,this.end_date);
            //console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
            //return;
            this.date_search_source_countval = 0;
            this.loading = true;
            this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    this.dataSource = new MatTableDataSource(result.results.res);
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: "New Search of data loaded" }
                    });
                }
                else {
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: "No such search recod found !!" }
                    });
                }
                this.loading = false;
                // this.dataSource.paginator = this.paginator;
                //this.dataSource.sort = this.sort;
            }));
            this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                this.date_search_source_countval = (result.count);
                if (result.count == 0)
                    this.tableflag = 1;
                else
                    this.tableflag = 0;
                //console.log('count',result);
                // this.dataSource.paginator = this.paginator;
                //this.dataSource.sort = this.sort;
            }));
            /*this._http.post(link, {source:this.date_search_sourceval,
              condition: {
                'created_at': {
                  $lte: new Date(this.end_date).getTime(),
                  $gte: new Date(this.start_date).getTime(),
                }
              },token: this.jwttokenval,
            }).subscribe( res =>{
              let result: any ={};
              result = res;
              console.log("ok");
              console.log(res);
              console.log(result.res);
              let newdata = result.res;
              this.dataSource = new MatTableDataSource(result.res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })*/
        }
        else
            console.log("error");
    }
    /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    selectSearch(value, type) {
        /** @type {?} */
        let link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        let source;
        /** @type {?} */
        let condition;
        condition = {};
        condition[type.field] = value;
        this.selectSearch_condition = {};
        this.selectSearch_condition = condition;
        /** @type {?} */
        let conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        // if (value != null) {
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     let result: any = {};
        //     result = res;
        //     let newdata = result.res;
        //     this.dataSource = new MatTableDataSource(result.res);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // } else {
        //   console.log('oops');
        // }
        // console.log("error");
    }
    /**
     * @param {?} val
     * @return {?}
     */
    paging(val) {
        if (val == 1) {
            this.limitcondval.skip = (this.limitcondval.pagecount) * this.limitcondval.limit;
            this.limitcondval.pagecount++;
        }
        if (val == -1 && this.limitcondval.skip > this.limitcondval.limit) {
            this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
            this.limitcondval.pagecount--;
        }
        if (val > 1) {
            if (this.limitcondval.pagecount == 1)
                this.limitcondval.skip = 0;
            else
                this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
            //this.limitcondval.pagecount--;
        }
        if (val == -1 && this.limitcondval.skip < this.limitcondval.limit)
            return;
        //console.log(val,'ss',this.datacollectionval,this.limitcondval);
        /** @type {?} */
        let textSearch = {};
        for (let i in this.tsearch) {
            textSearch[i] = { $regex: this.tsearch[i].toLowerCase() };
        }
        /** @type {?} */
        let conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, this.autosearch, this.selectSearch_condition, this.libdataval.basecondition);
        /** @type {?} */
        let source = {
            "condition": {
                limit: this.limitcondval.limit,
                skip: this.limitcondval.skip
            },
            sort: {
                field: this.sortdataval.field,
                type: this.sortdataval.type
            },
            searchcondition: conditionobj,
        };
        /** @type {?} */
        let link = this.apiurlval + '' + this.datacollectionval;
        /*let data:any={
          "condition":{
            limit:this.limitcondval.limit,
            skip:this.limitcondval.skip
          }
    
        }*/
        this.loading = true;
        this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.result = res;
            //console.log(this.result,'res');
            if (this.result.results.res != null && this.result.results.res.length > 0) {
                this.dataSource = new MatTableDataSource(this.result.results.res);
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 2000,
                    data: { errormessage: "New range of data loaded" }
                });
            }
            else {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: "No Data Found in this range !!" }
                });
            }
            this.loading = false;
            //this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        }));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    addautosearchdata(val) {
        //console.log('v',val);
    }
    /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    remove(val, i, field) {
        if (this.autosearch[field] != null)
            this.autosearch[field].splice(i, 1);
    }
    /**
     * @param {?} value
     * @param {?} data
     * @return {?}
     */
    autosearchfunction(value, data) {
        this.autosearchinput[value] = '';
        //console.log(this.autosearchinput,'asi');
        if (this.autosearch[value] == null) {
            this.autosearch[value] = [];
        }
        this.autosearch[value].push(data);
        //console.log(value,data,'ss',this.autosearch);
        /*let val: any = this.autosearch[value];
        let source: any;
        let condition: any = {};
        if (this.autosearch[value] !=null && this.autosearch[value].length > 0 && { $or: [this.autosearch[value].toLowerCase(), this.autosearch[value].toUpperCase(), this.autosearch[value]] }) condition[value + '_regex'] = val;
        this.autoSearch_condition = {};
        this.autoSearch_condition = condition;
        let conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
          source: this.date_search_sourceval,
          condition: conditionobj
        };*/
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //   this.result = res;
        //   this.dataSource = new MatTableDataSource(this.result.res);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        // });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    textsearchfunction(value) {
        /** @type {?} */
        let link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        let source;
        /** @type {?} */
        let condition = {};
        /** @type {?} */
        let val = '';
        if (this.tsearch != null && this.tsearch[value] != null) {
            val = this.tsearch[value].toLowerCase();
        }
        if (this.tsearch[value] != null && this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toLowerCase(), this.tsearch[value].toUpperCase()] })
            condition[value + '_regex'] = val;
        this.textSearch_condition = {};
        this.textSearch_condition = condition;
        //console.warn(this.tsearch);
        /** @type {?} */
        let conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        //add loader
        // this.loading = true;
        // if (value != null) {
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     let result: any = {};
        //     result = res;
        //     //close loader
        //     this.loading = false;
        //     let newdata = result.res;
        //     this.dataSource = new MatTableDataSource(result.res);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // } else {
        //   console.log('oops');
        // }
        // console.log("error");
    }
    /**
     * @return {?}
     */
    refreshdata() {
        this.autosearch = [];
        this.tsearch = [];
        this.selectsearch = [];
        this.start_date = null;
        this.limitcondval.skip = 0;
        this.end_date = null;
        this.selectSearch_condition = {};
        this.dateSearch_condition = {};
        this.allSearch();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    refreshalldata(val) {
        this.dataSource = new MatTableDataSource(this.olddata);
        this.selection = new SelectionModel(true, []);
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
        if (val.filteredData != null && val.filteredData.length < this.olddata.length) {
            /** @type {?} */
            let dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: 'custom-modalbox',
                data: { message: 'Refresh successfully!!', isconfirmation: false }
            });
        }
        else {
            /** @type {?} */
            let dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: 'custom-modalbox',
                data: { message: ' Updated!!', isconfirmation: false }
            });
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.searchListval.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toLowerCase().includes(filterValue)));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    getstatus(val) {
        // console.log('val');
        // console.log(val);
        for (let b in this.statusarrval) {
            if (this.statusarrval[b].val == val)
                return this.statusarrval[b].name;
            // console.log(this.statusarrval[b].name);
        }
        return "N/A";
    }
    /**
     * @param {?} val
     * @return {?}
     */
    pdfFlag(val) {
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date == null) {
            // console.log('shatter blok');
            this.sh = true;
            this.aud = false;
        }
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date != null) {
            this.sh = true;
            this.aud = true;
        }
        if (val.shatterblok_agreement_date == null && val.audiodeadline_agreement_date == null) {
            this.sh = false;
            this.aud = false;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    grapurl(val) {
        //  for all row checking
        // console.log(val)
        if (val != null) {
            this.art = true;
            this.aud2 = true;
        }
        if (val == null) {
            this.art = false;
            this.aud2 = false;
        }
        // console.log(this.sh);
        // console.log(this.aud);
    }
    /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    copyText(row, val) {
        /** @type {?} */
        let fullurl = val + '' + row;
        /** @type {?} */
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = fullurl;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    openinternallink(val) {
        this.router.navigate([val.route]);
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    openinternallinkwithparam(val, data) {
        /** @type {?} */
        let rdata = [];
        rdata.push(val.route);
        for (let v in val.param) {
            rdata.push(data[val.param[v]]);
        }
        console.log('radat', rdata);
        this.router.navigate(rdata);
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    opencustombuttonactionlocaldata(val, data) {
        //console.log('opencustombuttonactionlocaldata',val,data);
        /** @type {?} */
        let dataarr = [];
        //dataarr.push(['name','debasis']);
        //dataarr.push(['desc','test']);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        for (let v in val.datafields) {
            /** @type {?} */
            let temparr = [];
            temparr.push(val.datafields[v]);
            if (val.datafields[v] != 'image' && val.datafields[v] != 'video') {
                //console.log('ss',val.datafields[v]);
                if (data[val.datafields[v]] != null && typeof (data[val.datafields[v]]) != 'object') {
                    // console.log('df', data[val.datafields[v]].toString());
                    if (data[val.datafields[v]] != null && data[val.datafields[v]].toString().includes('iframe')) {
                        console.log('in safe', data[val.datafields[v]]);
                        temparr.push(this.sanitizer.bypassSecurityTrustHtml(data[val.datafields[v]]));
                    }
                    else
                        temparr.push((data[val.datafields[v]]));
                }
                else {
                    //console.log('ss22',val.datafields[v]);
                    //else  
                    temparr.push(data[val.datafields[v]]);
                }
            }
            if (val.datafields[v] == 'image')
                temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>");
            if (val.datafields[v] == 'video') {
                if (data[val.datafields[v]] != null && data[val.datafields[v]] != '') {
                    /** @type {?} */
                    let temphtml = ("<iframe width=560 height=315 src=https://www.youtube.com/embed/" + data[val.datafields[v]] + " frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>");
                    temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
                    temparr.push(temphtml);
                    console.log('thtml', temphtml, data[val.datafields], data[val.datafields[v]]);
                }
                else {
                    temparr.push('N/A');
                }
            }
            //if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
            dataarr.push(temparr);
        }
        //console.log('local data m', dataarr);
        /** @type {?} */
        let res = dataarr;
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            let resdata = [];
            for (let b in res) {
                for (let c in this.libdataval.detailview_override) {
                    //console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        //console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
                    }
                }
                if (resdata[b] == null)
                    resdata[b] = res[b];
            }
            //console.log('c',res,resdata);
            res = resdata;
            //console.log('c',res,resdata);
        }
        //console.log('dataarr',dataarr);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: 'custom-modalbox-apidata',
            data: { isconfirmation: false, data: res }
        });
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    opencustombuttonactionapidata(val, data) {
        //console.log('opencustombuttonactionapidata',val,data);
        this.loading = true;
        /** @type {?} */
        let link = this.apiurlval + val.endpoint;
        /** @type {?} */
        let source = {};
        source[val.param] = data._id;
        if (val.otherparam != null) {
            for (let n in val.otherparam) {
                source[val.otherparam[n]] = data[val.otherparam[n]];
            }
        }
        this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == 'success') {
                //console.log('res',result);
                /** @type {?} */
                let resdata = {};
                this.loading = false;
                if (result.res[0] != null) {
                    resdata = result.res[0];
                }
                else {
                    resdata = result.res;
                }
                /** @type {?} */
                let dataarr = [];
                //dataarr.push(['name','debasis']);
                //dataarr.push(['desc','test']);
                for (let v in resdata) {
                    /** @type {?} */
                    let temparr = [];
                    temparr.push(v);
                    if (v != 'image' && v != 'video') {
                        if (typeof (resdata[v]) != 'object')
                            temparr.push(this.sanitizer.bypassSecurityTrustHtml(resdata[v]));
                        else
                            temparr.push(resdata[v]);
                    }
                    if (v == 'image')
                        temparr.push("<img mat-card-image src=" + resdata[v] + " > <br/>");
                    if (v == 'video') {
                        /** @type {?} */
                        let temphtml = ("<iframe width=560 height=315 src=https://www.youtube.com/embed/" + resdata[v] + " frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>");
                        temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
                        temparr.push(temphtml);
                    }
                    //if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
                    dataarr.push(temparr);
                }
                if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
                    /** @type {?} */
                    let resdata = [];
                    for (let b in dataarr) {
                        for (let c in this.libdataval.detailview_override) {
                            //console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                            if (this.libdataval.detailview_override[c].key == dataarr[b][0]) {
                                //console.log('h', c, this.libdataval.detailview_override[c]);
                                resdata[b] = [this.libdataval.detailview_override[c].val, dataarr[b][1], dataarr[b][0]];
                            }
                        }
                        if (resdata[b] == null)
                            resdata[b] = dataarr[b];
                    }
                    //console.log('c',res,resdata);
                    dataarr = resdata;
                    //console.log('c',res,resdata);
                }
                //console.log('dataarr',dataarr);
                if (val.refreshdata != null && val.refreshdata == true) {
                    this.allSearch();
                }
                /** @type {?} */
                const dialogRef = this.dialog.open(Confirmdialog, {
                    height: 'auto',
                    panelClass: 'custom-modalbox',
                    data: { isconfirmation: false, data: dataarr }
                });
            }
            if (result.status == 'error') {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            //console.log('Oooops!');
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            this.loading = false;
        }));
        return;
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    openextlinkwithparam(val, data) {
        //console.log('val',val,data);
        /** @type {?} */
        let qtext = '';
        /** @type {?} */
        let fulllink = '';
        fulllink = val.link;
        if (val.paramtype == null) {
            for (let v in val.param) {
                qtext = val.param[v].q + "=" + encodeURI(data[val.param[v].key]);
                //console.log('qtext',qtext);
                if (parseInt(v) == 0)
                    fulllink = fulllink + '?' + qtext;
                if (parseInt(v) != 0)
                    fulllink = fulllink + '&' + qtext;
            }
            //val.link=fulllink;
        }
        if (val.paramtype != null && val.paramtype == 'angular') {
            for (let v in val.param) {
                //qtext = val.param[v].q + "=" + encodeURI(data[val.param[v].key]);
                //console.log('qtext',qtext);
                fulllink = fulllink + '/' + encodeURI(data[val.param[v]]);
            }
            //val.link=fulllink;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            //console.log("Hello from setTimeout");
            //console.log('link',fulllink,data,qtext);
        }), 10);
        window.open(fulllink, "_blank");
    }
    /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    clickurl(val, url) {
        /** @type {?} */
        let link = url + '' + val._id + '' + this.pdf_link_val;
        window.open(link, "_blank");
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        if (this.selection != null && this.selection.select) {
            /** @type {?} */
            const numSelected = this.selection.selected.length;
            /** @type {?} */
            const numRows = this.dataSource.data.length;
            return numSelected === numRows;
        }
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.selection.select(row)));
    }
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    /**
     * @param {?} point
     * @return {?}
     */
    createData(point) {
        /** @type {?} */
        let data = {};
        Object.keys(point).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            data[key.replace(/\s/g, "_")] = point[key];
        }));
        return data;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    /*applyFilter1(filterValue: string, val: any) {
        console.log(filterValue);
        console.log(val.value);
        let value= new MatTableDataSource(val.value);
    
        value.filter = filterValue.trim().toLowerCase();
        console.log(value);
        /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
          // return data.name.toLowerCase().includes(filter);
        };
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }*!/
      }*/
    /**
     * @param {?} col_name
     * @param {?} row
     * @return {?}
     */
    styleCell(col_name, row) {
        /*
         if (col_name['columnDef']=='progress' && row['progress']=='100'){
         return {'color' : 'red'}
         } else {
         return {}
         }
         */
        return {};
    }
    /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    fetchvideo(videodata) {
        //console.warn('videodata',videodata);
        /** @type {?} */
        const dialogRef = this.dialog.open(VideoPlayer, {
            panelClass: 'custom-modalbox-videoplayer-preview',
            height: 'auto',
            data: { previewData: videodata }
        });
    }
    /**
     * @param {?} data1
     * @return {?}
     */
    viewdata(data1) {
        /** @type {?} */
        let data;
        data = data1;
        /** @type {?} */
        let data2 = [];
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (typeof (data[key]) == 'boolean') {
                    if (data[key] == true)
                        data[key] = 'Yes';
                    if (data[key] == false)
                        data[key] = 'No';
                }
                if (key == 'image') {
                    data[key + ':'] = "<img mat-card-image src=" + data[key] + "><br/>";
                }
                if (typeof (data[key]) == 'object') ;
                if (typeof (data[key]) == 'object') {
                    /** @type {?} */
                    let tempdata = [];
                    for (let k in data[key]) {
                        for (let p in this.detail_datatypeval) {
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value == 'image') {
                                // let imgval:any=this.detail_datatypeval[p].fileurl+data[key][k];
                                // console.log('imgval');
                                // console.log('imgval');
                                // console.log(imgval);
                                //console.log(data[key][k].replace(/'/g, ''));
                                tempdata.push("<img mat-card-image src=" + data[key][k] + "><br/>");
                                // tempdata.push("<span>"+data[key][k]+"</span><br/>")
                            }
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value != 'image') {
                                //tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                tempdata.push("<span>" + data[key][k] + "</span><br/>");
                            }
                            if (this.detail_datatypeval[p].key != key) {
                                //tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                if (typeof (data[key][k]) == 'object') {
                                    for (var objk in data[key][k]) {
                                        tempdata.push("<span>" + objk + " : " + data[key][k][objk] + "</span><br/>");
                                    }
                                }
                            }
                        }
                    }
                    data[key + ':'] = tempdata;
                }
            }
        }
        for (let n in data) {
            if (data[n] != null && data[n] != '') {
                data2[n] = data[n];
            }
        }
        for (let v in this.detail_skip_arrayval) {
            //data2[this.detail_skip_arrayval[v]]='';
            delete data2[this.detail_skip_arrayval[v]];
        }
        /** @type {?} */
        let res = Object.entries(data2);
        //console.log('view data',res);
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            let resdata = [];
            for (let b in res) {
                for (let c in this.libdataval.detailview_override) {
                    //console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        //console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
                    }
                }
                if (resdata[b] == null)
                    resdata[b] = res[b];
            }
            //console.log('c',res,resdata);
            res = resdata;
            //console.log('c',res,resdata);
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: 'custom-modalbox',
            data: { isconfirmation: false, data: res }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    managestatus(data) {
        /** @type {?} */
        let bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result != null) {
                data.status = result.val;
                data.id = data._id;
                this._apiService.togglestatus(this.apiurlval + this.libdataval.updateendpoint, data, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (let c in this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (this.olddata[c]._id == data._id) {
                                this.olddata[c].status = data.status;
                            }
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        //this.allSearch();
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    //console.log('Oooops!');
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    }
    // for tree view in modal
    /**
     * @param {?} data
     * @return {?}
     */
    custombuttonfunc(data) {
        // console.log('data');
        // console.log(data);    // row data
        // console.log(this.custombuttonval);    // object from where the library has been used
        /** @type {?} */
        let unsafeurl = this.custombuttonval.url;
        for (let b in this.custombuttonval.fields) {
            unsafeurl = unsafeurl + '/' + data[this.custombuttonval.fields[b]];
        }
        unsafeurl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl); //for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        //for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            // for opening the modal
            height: 'auto',
            panelClass: 'custom-data-modal',
            data: { isconfirmation: false, data: [{ data: data, customdata: unsafeurl }] }
        });
    }
    /**
     * @return {?}
     */
    managestatusmultiple() {
        /** @type {?} */
        let ids = [];
        /** @type {?} */
        let c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        //console.log('data');
        //console.log(data);
        /** @type {?} */
        let bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result != null) {
                //data.status = result.val;
                //data.id = data._id;
                /** @type {?} */
                let newstatus = result.val;
                this._apiService.togglestatusmany(this.apiurlval + 'statusupdate', ids, result.val, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (let c in this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (ids.indexOf(this.olddata[c]._id) > -1) {
                                this.olddata[c].status = newstatus;
                            }
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        //this.allSearch();
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    //console.log('Oooops!');
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    }
    /**
     * @return {?}
     */
    deletemultiple() {
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            data: { message: 'Are you sure you want to delete the selected records?' }
        });
        /** @type {?} */
        let ids = [];
        /** @type {?} */
        let c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result == 'yes') {
                this._apiService.deteManyData(this.apiurlval + this.deleteendpointval, ids, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (let c in ids) {
                            this.olddata = this.olddata.filter((/**
                             * @param {?} olddata
                             * @return {?}
                             */
                            olddata => olddata._id != ids[c]));
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.allSearch();
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    //console.log('Oooops!');
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    deletedata(data) {
        //console.log(data);
        //alert(5);
        //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        //console.log(data);
        //alert(5);
        //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            height: 'auto',
            data: { message: 'Are you sure to delete this record ??' }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result == 'yes') {
                this._apiService.deteOneData(this.apiurlval + this.deleteendpointval, data, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        this.olddata = this.olddata.filter((/**
                         * @param {?} olddata
                         * @return {?}
                         */
                        olddata => olddata._id != data._id));
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.allSearch();
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    //console.log('Oooops!');
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    editdata(data) {
        this.router.navigate([this.editrouteval, data._id]);
    }
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    sorttable(field, type) {
        this.sortdataval.field = field;
        this.sortdataval.type = type;
        this.allSearch();
    }
    /**
     * @return {?}
     */
    allSearch() {
        //console.log("hit");
        //console.log("hit");
        /** @type {?} */
        let link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        let link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        let source;
        /** @type {?} */
        let textSearch = {};
        for (let i in this.tsearch) {
            textSearch[i] = { $regex: this.tsearch[i].toLowerCase() };
        }
        /** @type {?} */
        let autosearch = {};
        //this.autosearch;
        for (let b in this.autosearch) {
            for (let m in this.autosearch[b]) {
                /** @type {?} */
                let tv = {};
                tv[b] = this.autosearch[b][m].val.toLowerCase();
                if (autosearch['$or'] == null)
                    autosearch['$or'] = [];
                autosearch['$or'].push(tv);
            }
        }
        //console.log('autos',autosearch);
        /** @type {?} */
        let conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
        source = {
            "condition": {
                limit: this.limitcondval.limit,
                skip: 0
            },
            sort: {
                field: this.sortdataval.field,
                type: this.sortdataval.type
            },
            searchcondition: conditionobj,
        };
        //console.log('con...',conditionobj,this.end_date);
        //console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
        //return;
        this.date_search_source_countval = 0;
        this.loading = true;
        this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.results.res != null && result.results.res.length > 0) {
                this.dataSource = new MatTableDataSource(result.results.res);
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 2000,
                    data: { errormessage: "New Search of data loaded" }
                });
            }
            else {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: "No such search recod found !!" }
                });
            }
            this.loading = false;
            // this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        }));
        this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            this.date_search_source_countval = (result.count);
            if (result.count == 0)
                this.tableflag = 1;
            else
                this.tableflag = 0;
            // console.log('count',result);
            // this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        }));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    gettypeof(val) {
        return typeof (val);
    }
    /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    artistxpPreview(singleData) {
        /** @type {?} */
        let link = 'http://developmentapi.audiodeadline.com:3090/' + 'datalist';
        /**
         * **** not completed *****
         * @type {?}
         */
        let data = { "source": "blockchainuser_view", "condition": { "posts_id_object": singleData._id }, "token": this.jwttokenval };
        /******** not completed *****/
        this._apiService.postData(link, data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let restlt = response;
            /* open dialog */
            /** @type {?} */
            const dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: 'custom-modalbox-artistxp-preview',
                height: 'auto',
                data: { preview: true, previewData: restlt }
            });
        }));
    }
}
ListingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing',
                template: "<div class=\"container\">\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\">\n            <ng-container class=\"inputfilterForloop\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field)\"\n                            (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]'\n                            placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                search\n                            </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </ng-container>\n\n            <ng-container class=\"inputfilterForAuto\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                        <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                            [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                            {{v.name}}\n                            <mat-icon matChipRemove>cancel</mat-icon>\n                        </mat-chip>\n                        <input placeholder=\"{{item.label}}\" #fruitInput [matAutocomplete]=\"auto\"\n                            [matChipInputFor]=\"chipList\" [(ngModel)]=\"autosearchinput[item.field]\">\n                    </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of item.values\" [value]=\"statusval.val\"\n                            (click)=\"autosearchfunction(item.field,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </ng-container>\n\n\n\n            <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container class=\"filterForTexticon\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <mat-form-field class=\"searchdiv\" *ngFor=\"let status of this.search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\">\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval\"\n                            (click)=\"selectSearch(statusval.val, status)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container\n                *ngIf=\"date_search_endpointval !=null && date_search_sourceval != null && search_settingsval.datesearch != null \">\n                <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\n                            placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\"\n                            placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                </ng-container>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <span class=\"search_class\">\n                <ng-container class=\"refresh\">\n                    <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                        autorenew\n                    </i>\n                </ng-container>\n\n                <ng-container class=\"refresh\"\n                    *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\">Search</button>\n                </ng-container>\n\n            </span>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"\n                    [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing\n                    {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                            (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                        <span>\n                            {{column.header}}\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                                arrow_downward\n                            </span>\n                            <span class=\"material-icons cursor float-right\"\n                                *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                            </span>\n\n                            <span class=\"material-icons cursor\"\n                                *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                (click)=\"sorttable(column.columnDef,'desc')\">\n                                unfold_more\n                            </span>\n\n                        </span>\n\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"\n                        class=\"td-cell-center\">\n\n                        <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                            {{pdfFlag(row)}}</span>\n                        <span\n                            *ngIf=\"column.columnDef!='status' &&  column.columnDef!='image' && column.columnDef!='video' \">\n                            <ng-container\n                                *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes('date') && !column.columnDef.includes('datetime')\">\n                                <span [innerHTML]=\"row[column.columnDef]\"></span>\n                            </ng-container>\n                            <ng-container\n                                *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes('date') && !column.columnDef.includes('datetime')\">\n                                {{row[column.columnDef] | date}}\n                            </ng-container>\n                            <ng-container\n                                *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes('date') && column.columnDef.includes('datetime')\">\n                                {{row[column.columnDef] | date:'medium'}}\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]==null\">\n                                NA\n                            </ng-container>\n\n                        </span>\n                        <!-- for image view  -->\n                        <span\n                            *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                            (click)=\"img_modal_view(row[column.columnDef])\"> <span class=\"module_imgblock\">\n                                <img src=\"{{row[column.columnDef]}}\" alt=\"{{row[column.columnDef]}}\">\n                            </span></span>\n                        <!-- for video view -->\n                        <span\n                            *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                class=\"module_videoblock\" (click)=\"fetchvideo(row)\">\n                                <img src=\"https://img.youtube.com/vi/row[column.columnDef]/sddefault.jpg\"\n                                    alt=\"{{row[column.columnDef]}}\" (click)=\"fetchvideo(row)\"></span>\n                        </span>\n\n                        <span\n                            *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                        <!--          <span *ngIf=\"sh==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null\" class=\"cursor\">\n                            <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\"\n                                class=\"material-icons\">cloud_download</i>\n                        </span>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && aud==true  && urlval !=null\">\n                            <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\"\n                                class=\"material-icons\">cloud_download</i>\n                        </span>\n\n\n                        <!--// for grap url//-->\n\n                        <span\n                        *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name]\"\n                        class=\"cursor\">\n                        <ng-container *ngFor=\"let item of grab_linkval.field\">\n                            <!-- <p>{{item | json}}</p> -->\n                        <button mat-button\n                            (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url)\">{{item.label}}</button>\n                        </ng-container>\n                    </span>\n\n                        <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name]\"\n                            class=\"cursor\">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url)\">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef== [grab_linkval[0].col_name]\">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url)\">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                        <!--          //grap url end//-->\n\n\n                        <!--          </span>-->\n                        <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n\n\n\n                <ng-container matColumnDef=\"Actions\"\n                    *ngIf=\"libdataval.hideaction==null || libdataval.hideaction==false\">\n                    <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">Actions</th>\n                    <td (click)=\"$event.stopPropagation()\" mat-cell *matCellDef=\"let row\" data-label=\"Actions\"\n                        class=\"td-cell-center\">\n                        <!--custom buttions block -->\n                        <ng-container\n                            *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length >0 \">\n                            <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                <section class=\"custombutton{{cb}}\">\n                                    <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                        <ng-container\n                                            *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                <button mat-raised-button\n                                                    color=\"primary\">{{custombutton.label}}</button>\n                                            </a>\n                                        </ng-container>\n\n                                        <ng-container\n                                            *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                        </ng-container>\n\n                                    </ng-container>\n                                    <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                        <ng-container\n                                            *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                        </ng-container>\n                                        <ng-container\n                                            *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                        <ng-container\n                                            *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                        </ng-container>\n\n                                    </ng-container>\n                                    <ng-container *ngIf=\"custombutton.type=='action'\">\n                                        <ng-container\n                                            *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                        </ng-container>\n                                        <ng-container\n                                            *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                    </ng-container>\n                                </section>\n\n                            </ng-container>\n                        </ng-container>\n                        <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                            <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                class=\"cursor\" (click)=\"editdata(row)\">\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                class=\"cursor\" (click)=\"deletedata(row)\">\n                                <i class=\"material-icons\">\n                                    delete_outline\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                class=\"cursor\" (click)=\"viewdata(row)\">\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\"\n                                *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                (click)=\"managestatus(row)\">\n                                <i class=\"material-icons\">\n                                    toggle_off\n                                </i>\n                            </span>\n                            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                (click)=\"custombuttonfunc(row)\">\n                                <i class=\"material-icons treeclass\">\n                                    toggle_off\n                                </i>\n                            </span>\n\n                            <!-- artistxp preview start -->\n                            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                <i class=\"material-icons\">perm_media</i>\n                            </span>\n                            <!-- artistxp preview end -->\n\n                        </span>\n\n                    </td>\n                </ng-container>\n\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n\n        <mat-card *ngIf=\"tableflag!=0\">No Records Exists !!!</mat-card>\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing\n                    {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
                styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}"]
            }] }
];
/** @nocollapse */
ListingComponent.ctorParameters = () => [
    { type: ApiService },
    { type: MatDialog },
    { type: MatBottomSheet },
    { type: FormBuilder },
    { type: Router },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: HttpClient },
    { type: DomSanitizer },
    { type: MatSnackBar }
];
ListingComponent.propDecorators = {
    search_settings: [{ type: Input }],
    click_to_add_ananother_page: [{ type: Input }],
    limitcond: [{ type: Input }],
    date_search_source_count: [{ type: Input }],
    grab_link: [{ type: Input }],
    custombutton: [{ type: Input }],
    date_search_source: [{ type: Input }],
    sortdata: [{ type: Input }],
    date_search_endpoint: [{ type: Input }],
    url: [{ type: Input }],
    searchendpoint: [{ type: Input }],
    pdf_link: [{ type: Input }],
    searchList: [{ type: Input }],
    libdata: [{ type: Input }],
    datasource: [{ type: Input }],
    datacollection: [{ type: Input }],
    skip: [{ type: Input }],
    detail_datatype: [{ type: Input }],
    detail_skip_array: [{ type: Input }],
    sourcedata: [{ type: Input }],
    modify_header_array: [{ type: Input }],
    deleteendpoint: [{ type: Input }],
    updateendpoint: [{ type: Input }],
    apiurl: [{ type: Input }],
    updatetable: [{ type: Input }],
    jwttoken: [{ type: Input }],
    statusarr: [{ type: Input }],
    emailarray: [{ type: Input }],
    editroute: [{ type: Input }],
    preview_artistxp: [{ type: Input }],
    sort: [{ type: ViewChild, args: [MatSort,] }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }]
};
class Confirmdialog {
    /**
     * @param {?} dialogRef
     * @param {?} data
     * @param {?} sanitizer
     */
    constructor(dialogRef, data, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    gettypeof(val) {
        return typeof (val);
    }
    /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    sanitizeUrl(unsafeurl, data, rowdata) {
        for (let b in data) {
            unsafeurl = unsafeurl + '/' + rowdata[data[b]];
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);
    }
}
Confirmdialog.decorators = [
    { type: Component, args: [{
                selector: 'confirmdialog',
                template: "<div class=\"maindialog maindialognew\">\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        {{gettypeof(item[1])}}\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\"\n                            [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p *ngIf=\" gettypeof(item[1]) == 'object' && item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. --> \n                            <ng-container *ngFor=\"let arr of item[1];\">\n                            <span *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\" [innerHtml]=\"arr\"></span>\n                            <span *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \" >\n                                <img [src]=\"arr\" [alt]=\"arr\" >    \n                            </span>\n                            <span *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\"  [innerHtml]=\"arr\" >\n                                \n                            </span>\n\n                        </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true\">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No\n            Thanks</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n    </div>\n\n</div>"
            }] }
];
/** @nocollapse */
Confirmdialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: DomSanitizer }
];
class BottomSheet {
    /**
     * @param {?} bottomSheetRef
     * @param {?} data
     */
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        //console.warn("bottom-sheet",data);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    openLink(val) {
        this.bottomSheetRef.dismiss(val);
    }
}
BottomSheet.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet',
                template: "\n\n<mat-nav-list class=\"navlist\">\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span class=\"bottom-sheet{{item.name}}\" mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
            }] }
];
/** @nocollapse */
BottomSheet.ctorParameters = () => [
    { type: MatBottomSheetRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
/**
 * listing video player
 */
class VideoPlayer {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //console.warn('videoplayerModal',data.previewData.video);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
VideoPlayer.decorators = [
    { type: Component, args: [{
                selector: 'videoplayer',
                template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
            }] }
];
/** @nocollapse */
VideoPlayer.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/**
 * listing Image View
 */
class ImageView {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //console.warn('ImageViewModal',data.alldata);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
ImageView.decorators = [
    { type: Component, args: [{
                selector: 'image',
                template: "<mat-card class=\"imgmodalcls\">\n    <mat-card-container>\n        <span>\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\n        </span>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \n    </mat-card-container>\n    </mat-card>"
            }] }
];
/** @nocollapse */
ImageView.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
class SnackbarComponent {
    /**
     * @param {?} snackBarRef
     * @param {?} data
     */
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        //console.log('snack',this.data);
    }
}
SnackbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"snack-bar-message\">\n  {{data.errormessage}}\n</span>\n",
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `]
            }] }
];
/** @nocollapse */
SnackbarComponent.ctorParameters = () => [
    { type: MatSnackBarRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import {MatSnackBar} from "@angular/material/snack-bar";
class ShowformComponent {
    /**
     * @param {?} formBuilder
     * @param {?} _apiService
     * @param {?} _snackBar
     * @param {?} router
     * @param {?} elementRef
     */
    constructor(formBuilder, _apiService, _snackBar, router, elementRef) {
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this._snackBar = _snackBar;
        this.router = router;
        this.elementRef = elementRef;
        this.titleAlert = 'This field is required';
        this.post = '';
        this.showform = false;
        this.loading = false;
        this.formfieldrefreshval = false;
        this.formdataval = {};
        this.formfieldrefreshdataval = {};
        this.filerfielddata = [];
        this.autocompletefiledvalue = [];
        this.filearray = [];
        this.filecount = [];
        this.currentautocomplete = '';
        this.fieldloading = '';
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        this.onFormFieldChange = new EventEmitter();
    }
    /**
     * @param {?} formdata
     * @return {?}
     */
    set formdata(formdata) {
        this.formdataval = formdata;
        console.log(this.formdataval);
    }
    /**
     * @param {?} formfieldrefreshdata
     * @return {?}
     */
    set formfieldrefreshdata(formfieldrefreshdata) {
        this.formfieldrefreshdataval = formfieldrefreshdata;
        console.log(this.formfieldrefreshdataval);
    }
    /**
     * @param {?} formfieldrefresh
     * @return {?}
     */
    set formfieldrefresh(formfieldrefresh) {
        this.formfieldrefreshval = formfieldrefresh;
        console.log(this.formfieldrefreshval);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createForm();
        //this.setChangeValidate()
    }
    /**
     * @return {?}
     */
    navtocancel() {
        if (this.formdataval.cancelroute != null) {
            this.router.navigate([this.formdataval.cancelroute]);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            console.log('in after view init trigger');
            for (let g in this.formdataval.fields) {
                if (this.formdataval.fields[g].type == 'file') {
                    this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('drop', this.handleDrop.bind(this));
                    this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('dragenter', this.cancel.bind(this));
                    this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('dragover', this.cancel.bind(this));
                }
            }
        }), 1000);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    triggerevents(val) {
        console.log('in triggerevents');
        setTimeout((/**
         * @return {?}
         */
        () => {
            console.log('val loadeed trigger', val);
            this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('drop', this.handleDrop.bind(this));
            this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragenter', this.cancel.bind(this));
            this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragdragover', this.cancel.bind(this));
        }), 1000);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    cancel(e) {
        //console.log('cancel',e);
        e.preventDefault();
        return false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDrop(e) {
        //let apiBaseURL=""
        /** @type {?} */
        var list = document.getElementById('list');
        e.preventDefault();
        //console.log('handleDrop',e);
        /** @type {?} */
        var dt = e.dataTransfer;
        /** @type {?} */
        var files = dt.files;
        for (var i = 0; i < files.length; i++) {
            /** @type {?} */
            var file = files[i];
            console.log(files, 'files', e.target.id);
            console.log('farr', this.filearray);
            for (let g in this.formdataval.fields) {
                if (this.formdataval.fields[g].type == 'file' && this.formdataval.fields[g].name == e.target.id.replace('drop', '')) {
                    console.log('file details', this.formdataval.fields[g]);
                    if (this.formdataval.fields[g].multiple == null) {
                        // this.deletefile(va)
                        if (this.filearray[e.target.id.replace('drop', '')] != null) {
                            for (let n in this.formdataval.fields) {
                                if (this.formdataval.fields[n].name == e.target.id.replace('drop', '')) {
                                    this.deletefile(this.formdataval.fields[n], 1);
                                    setTimeout((/**
                                     * @return {?}
                                     */
                                    () => {
                                        this.filearray[e.target.id.replace('drop', '')] = files[0];
                                    }), 300);
                                }
                            }
                        }
                        else {
                            this.filearray[e.target.id.replace('drop', '')] = files[0];
                        }
                    }
                    else {
                        if (this.filearray[e.target.id.replace('drop', '')] == null) {
                            this.filearray[e.target.id.replace('drop', '')] = [];
                        }
                        this.filearray[e.target.id.replace('drop', '')].push(files[0]);
                    }
                }
            }
            console.log('this.filearray', this.filearray);
            // var reader = new FileReader();
            // reader.addEventListener('loadend', function(e){
            //   fetch(apiBaseURL+"/requestUploadURL", {
            //     method: "POST",
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //       name: file.name,
            //       type: file.type
            //     })
            //   })
            //   .then(function(response){
            //     return response.json();
            //   })
            //   .then(function(json){
            //     return fetch(json.uploadURL, {
            //       method: "PUT",
            //       body: new Blob([reader.result], {type: file.type})
            //     })
            //   })
            //   .then(function(){
            //     var uploadedFileNode = document.createElement('div');
            //     uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
            //     list.appendChild(uploadedFileNode);
            //   });
            // });
            //reader.readAsArrayBuffer(file);
        }
        return false;
    }
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h);
    // }
    /**
     * @param {?} val
     * @return {?}
     */
    uploadfile(val) {
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        let file = this.filearray[val.name];
        console.log('file val', val);
        file.uploaded = 2; // show progressbar 
        // show progressbar 
        /** @type {?} */
        let temploader = this.fieldloading[val.name];
        temploader = val.name;
        //reader.addEventListener('loadend', function (e) {
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            fetch(val.apiurl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: val.prefix + file.name,
                    type: file.type,
                    path: val.path,
                    bucket: val.bucket
                })
            })
                .then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                console.log('buck', response);
                return response.json();
            }))
                .then((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                return fetch(json.uploadURL, {
                    method: "PUT",
                    body: new Blob([reader.result], { type: file.type })
                });
            }))
                .then((/**
             * @return {?}
             */
            function () {
                //return 'success';
                file.uploaded = 1;
                file.fileservername = val.prefix + file.name;
                // temploader = null;
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
            //});
        });
        reader.readAsArrayBuffer(file);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    uploadall(val) {
        // this.filearray[val.name].uploadall = 1;
        for (let y in this.filearray[val.name]) {
            this.uploadfilemultiple(val, this.filearray[val.name][y], y);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    deletefilemultipleall(val) {
        for (let y in this.filearray[val.name]) {
            this.deletefilemultiple(val, this.filearray[val.name][y], y);
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.filearray[val.name] = null;
        }), 2000);
    }
    /**
     * @param {?} val
     * @param {?} f
     * @param {?} indexf
     * @return {?}
     */
    uploadfilemultiple(val, f, indexf) {
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        let file = this.filearray[val.name][indexf];
        if (this.filecount[val.name] == null)
            this.filecount[val.name] = 0;
        this.filecount[val.name]++;
        // console.log('file val in m 2', val, f, indexf, 'if',file); 
        file.uploaded = 2; // show progressbar 
        // show progressbar 
        /** @type {?} */
        let temploader = this.fieldloading[val.name];
        temploader = val.name;
        //reader.addEventListener('loadend', function (e) {
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            fetch(val.apiurl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: val.prefix + file.name,
                    type: file.type,
                    path: val.path,
                    bucket: val.bucket
                })
            })
                .then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                console.log('buck', response);
                return response.json();
            }))
                .then((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                return fetch(json.uploadURL, {
                    method: "PUT",
                    body: new Blob([reader.result], { type: file.type })
                });
            }))
                .then((/**
             * @return {?}
             */
            function () {
                //return 'success';
                file.uploaded = 1;
                file.fileservername = val.prefix + file.name;
                // temploader = null;
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
            //});
        });
        reader.readAsArrayBuffer(file);
    }
    /**
     * @param {?} val
     * @param {?=} flag
     * @return {?}
     */
    deletefile(val, flag = '') {
        /** @type {?} */
        let source = {};
        /** @type {?} */
        let file = this.filearray[val.name];
        source['file'] = val.prefix + file.name;
        source['path'] = val.path;
        source['bucket'] = val.bucket;
        this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == 'success' && flag == '') {
                this.formGroup.reset();
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: "Deleted !!" }
                });
                this.filearray[val.name] = null;
            }
            if (result.status == 'error') {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            //console.log('Oooops!');
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            this.loading = false;
        }));
    }
    /**
     * @param {?} val
     * @param {?=} field
     * @param {?=} index
     * @return {?}
     */
    deletefilemultiple(val, field = '', index) {
        /** @type {?} */
        let source = {};
        /** @type {?} */
        let file = this.filearray[val.name][index];
        this.filecount[val.name]--;
        source['file'] = val.prefix + file.name;
        source['path'] = val.path;
        source['bucket'] = val.bucket;
        this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == 'success') {
                this.formGroup.reset();
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: "Deleted !!" }
                });
                this.filearray[val.name].splice(index, 1);
            }
            if (result.status == 'error') {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            //console.log('Oooops!');
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            this.loading = false;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        //console.log('ngonchange in form !!!', changes, 'frv', this.formfieldrefreshdataval);
        for (let v in changes) {
            //console.log(v,changes[v],'vv');
            if (v == 'formfieldrefreshdata') {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    //console.log('fff in set tt');
                    if (this.formfieldrefreshdataval != null) {
                        //console.log(this.formfieldrefreshdataval, 'm');
                        //console.log(this.formfieldrefreshdataval.field);
                        //console.log(this.formfieldrefreshdataval.value);
                        if (this.formGroup != null && this.formGroup.controls[this.formfieldrefreshdataval.field] != null)
                            this.formGroup.controls[this.formfieldrefreshdataval.field].patchValue(this.formfieldrefreshdataval.value);
                        if (this.formfieldrefreshdataval.field == 'showfieldloader') {
                            this.fieldloading = this.formfieldrefreshdataval.value;
                        }
                        if (this.formfieldrefreshdataval.field == 'addfromcontrol') {
                            this.managefromcontrol(this.formfieldrefreshdataval.value, 'add');
                        }
                        if (this.formfieldrefreshdataval.field == 'removefromcontrol') {
                            this.managefromcontrol(this.formfieldrefreshdataval.value, 'remove');
                        }
                    }
                }), 0);
            }
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputblur(val) {
        //console.log('on blur .....');
        this.formGroup.controls[val].markAsUntouched();
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    filterautocomplete(val, data) {
        this.inputblur(val);
        //console.log('cc', this.formGroup.controls[val].value, data.val);
        /** @type {?} */
        let fieldval = this.formGroup.controls[val].value;
        if (fieldval == '' || fieldval == null) {
            this.filerfielddata = [];
        }
        else {
            /** @type {?} */
            let filterval = data.val.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                //console.log('e', e, fieldval)
                return e.val.includes(fieldval);
            }));
            this.filerfielddata = [];
            this.filerfielddata = filterval;
            //console.log('fil', filterval);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    reloadautocomplete(val) {
        this.currentautocomplete = val.name;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    removechipsingle(val) {
        this.autocompletefiledvalue[val.name] = null;
    }
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    removechipmultiple(val, index) {
        this.autocompletefiledvalue[val.name].splice(index, 1);
        if (this.autocompletefiledvalue[val.name].length == 0)
            this.autocompletefiledvalue[val.name] = null;
    }
    /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    setautocompletevalue(val, field) {
        console.log('ff', val, field);
        if (field.multiple == null) {
            this.autocompletefiledvalue[field.name] = val.key;
        }
        else {
            if (this.autocompletefiledvalue[field.name] == null)
                this.autocompletefiledvalue[field.name] = [];
            this.autocompletefiledvalue[field.name].push(val.key);
        }
        this.formGroup.controls[field.name].patchValue(null);
        this.inputblur(field.name);
    }
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    managefromcontrol(field, type) {
        //console.log('manage control',field,type);
        if (type == 'remove') {
            for (let y in this.formdataval.fields) {
                if (this.formdataval.fields[y].name == field.name) {
                    this.formdataval.fields.splice(parseInt(y), 1);
                    this.formGroup.removeControl(field.name);
                    //console.log('removed',field['name'], 'c', y);
                }
            }
        }
        if (type == 'add') {
            //console.log('in add form');
            for (let y in this.formdataval.fields) {
                if (this.formdataval.fields[y].name == field.after) {
                    this.formdataval.fields.splice(parseInt(y) + 1, 0, field);
                    this.createForm(1);
                    console.log('added ..', field['name'], 'c', y);
                }
            }
        }
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    checkchange(field, index) {
        //console.log(field, 'change', this.formGroup.controls[field.name].value);
        this.onFormFieldChange.emit({ field: field, fieldval: this.formGroup.controls[field.name].value });
        if (field.dependent != null && field.dependent.length > 0) {
            /** @type {?} */
            let vc = 0;
            for (let n in field.dependent) {
                if (field.dependent[n].condval.toString() == this.formGroup.controls[field.name].value.toString()) {
                    // let temvalidationrulet: any = [];
                    vc++;
                    //this.formGroup.addControl(field.dependent[n].field.name, new FormControl(field.dependent[n].field.value, temvalidationrulet));
                    //console.log('nnnnn', '--', parseInt(index + 1 + parseInt(vc)), '--', vc + index + 1, index, vc, field.dependent[n].field['name']);
                    this.formdataval.fields.splice(parseInt(index + parseInt(vc)), 0, field.dependent[n].field);
                    this.createForm(1);
                }
                else {
                    for (let y in this.formdataval.fields) {
                        if (this.formdataval.fields[y].name == field.dependent[n].field.name) {
                            this.formdataval.fields.splice(parseInt(y), 1);
                            this.formGroup.removeControl(field.dependent[n].field.name);
                            //console.log('removed', field.dependent[n].field['name'], 'c', y);
                        }
                    }
                }
            }
        }
    }
    /**
     * @param {?=} initialize
     * @return {?}
     */
    createForm(initialize = 0) {
        /*this.formGroup = this.formBuilder.group({
          'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
          'fullname': [null, Validators.required],
         // 'password': [null, [Validators.required, this.checkPassword]],
          //'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          //'validate': ''
        });*/
        //let demoArray:any=[];
        if (initialize == 0)
            this.formGroup = this.formBuilder.group({});
        //console.log(this.formGroup, 'fg')
        for (let n in this.formdataval.fields) {
            if (this.formGroup.controls[this.formdataval.fields[n]] == null) {
                /** @type {?} */
                let temcontrolarr = [];
                /** @type {?} */
                let temvalidationrule = [];
                if (this.formdataval.fields[n].value != null)
                    temcontrolarr.push(this.formdataval.fields[n].value);
                else
                    temcontrolarr.push('');
                if (this.formdataval.fields[n].type == 'checkbox' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
                    if (this.formdataval.fields[n].value == null)
                        temcontrolarr.push([]);
                    else {
                        if (this.formdataval.fields[n].val != null) {
                            /** @type {?} */
                            let tcharr = [];
                            for (let b in this.formdataval.fields[n].val) {
                                //console.log('b', b, this.formdataval.fields[n].val[b]);
                                if (this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[b].key)) {
                                    tcharr.push(true);
                                }
                                else
                                    tcharr.push(false);
                            }
                            // push the val
                            temcontrolarr.push(tcharr);
                            //console.log('tch', tcharr);
                        }
                    }
                }
                if (this.formdataval.fields[n].validations != null && this.formdataval.fields[n].validations.length > 0) {
                    for (let v in this.formdataval.fields[n].validations) {
                        // setTimeout( ()=>{
                        if (this.formdataval.fields[n].validations[v].message == null)
                            this.formdataval.fields[n].validations[v].message = "Not Valid !!";
                        if (this.formdataval.fields[n].validations[v].rule == 'required')
                            temvalidationrule.push(Validators.required);
                        if (this.formdataval.fields[n].validations[v].rule == 'match') {
                            this.formGroup.setValidators(this.checkPasswords);
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'autorequired') {
                            this.formGroup.setValidators(this.autorequired);
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'pattern')
                            temvalidationrule.push(Validators.pattern(this.formdataval.fields[n].validations[v].value));
                        if (this.formdataval.fields[n].validations[v].rule == 'maxLength')
                            temvalidationrule.push(Validators.maxLength(this.formdataval.fields[n].validations[v].value));
                        if (this.formdataval.fields[n].validations[v].rule == 'min')
                            temvalidationrule.push(Validators.min(this.formdataval.fields[n].validations[v].value));
                        if (this.formdataval.fields[n].validations[v].rule == 'max')
                            temvalidationrule.push(Validators.max(this.formdataval.fields[n].validations[v].value));
                        if (this.formdataval.fields[n].validations[v].rule == 'minLength')
                            temvalidationrule.push(Validators.minLength(this.formdataval.fields[n].validations[v].value));
                        //},0);
                    }
                }
                // demoArray[this.formdataval.fields[n].name]=new FormControl('');
                if (this.formdataval.fields[n].type == 'checkbox' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
                    /** @type {?} */
                    let tchvar = false;
                    //let
                    //console.log('vv ??? ', this.formdataval.fields[n].value, this.formdataval.fields[n].name, this.formdataval.fields[n].multiple);
                    //this.formGroup.addControl(this.formdataval.fields[n].name, new FormArray([]));
                    for (let j in this.formdataval.fields[n].val) {
                        if (this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[j].key))
                            tchvar = true;
                        else
                            tchvar = false;
                        //console.log('n', n, j, tchvar);
                        this.formGroup.addControl(this.formdataval.fields[n].name + '__' + j, new FormControl(tchvar, temvalidationrule));
                        /*const control = new FormControl(tchvar); // if first item set to true, else false
                   (this.formGroup.controls[this.formdataval.fields[n].name] as FormArray).push(control);*/
                        //this.formGroup.addControl(this.formdataval.fields[n].name,this.formBuilder.array([
                        //this.formBuilder.control(tchvar)
                        //]));
                    }
                    /*this.formGroup.addControl(this.formdataval.fields[n].name,this.formBuilder.array([
                  this.formBuilder.control(false),
                  this.formBuilder.control(true),
                  this.formBuilder.control(true),
                  this.formBuilder.control(false),
                ]));*/
                    //this.formGroup.addControl(this.formdataval.fields[n].name, new FormControl(temcontrolarr[0], temvalidationrule));
                }
                else {
                    this.formGroup.addControl(this.formdataval.fields[n].name, new FormControl({ value: temcontrolarr[0], disabled: this.formdataval.fields[n].disabled }, temvalidationrule));
                }
                //'newControl', new FormControl('', Validators.required)
            }
        }
        //=this.checkPasswords(this.formGroup);
        //this.formGroup = this.formBuilder.group(demoArray);
        setTimeout((/**
         * @return {?}
         */
        () => {
            //console.log(this.formGroup,'fg',demoArray);
            this.showform = true;
            if (this.formdataval.submitactive == null)
                this.formdataval.submitactive = true;
            //console.log('grp', this.formGroup.controls);
        }), 10);
    }
    /**
     * @return {?}
     */
    setChangeValidate() {
        this.formGroup.get('validate').valueChanges.subscribe((/**
         * @param {?} validate
         * @return {?}
         */
        (validate) => {
            if (validate == '1') {
                this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                this.formGroup.get('name').setValidators(Validators.required);
            }
            this.formGroup.get('name').updateValueAndValidity();
        }));
    }
    /**
     * @return {?}
     */
    get name() {
        return (/** @type {?} */ (this.formGroup.get('name')));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    checkPasswords(group) {
        // here we have the 'passwords' group
        /** @type {?} */
        let pass = group.controls.password.value;
        /** @type {?} */
        let confirmPass = group.controls.confirmpassword.value;
        if (confirmPass == null || confirmPass == '') {
            group.controls.confirmpassword.setErrors({ required: true });
            return { required: true };
        }
        if (pass != confirmPass) {
            group.controls.confirmpassword.setErrors({ 'match': true });
            return { match: true };
        }
        //return pass === confirmPass ? null : { notSame: true }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    checkPassword(control) {
        /** @type {?} */
        let enteredPassword = control.value;
        /** @type {?} */
        let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    autorequired(group) {
        for (let b in group) {
            if (group[b].type == 'autocomplete' && group[b].validations != null && group[b].validations[0] != null && group[b].validations[0].rule == 'autorequired' && this.autocompletefiledvalue[group[b].name] == null) {
                this.formGroup.controls[group.name].setErrors({ 'autorequired': true });
                return { autorequired: true };
            }
        }
        // console.log('bgrrr',group,group.name);
        // if(this.formGroup.controls[group.name] !=null && group.validations!=null && group.validations[0]!=null && group.validations[0].rule=='autorequired' && this.autocompletefiledvalue[group.name]==null){
        // let pass = group.controls.password.value;
        // let confirmPass = group.controls.confirmpassword.value;
        // if(confirmPass==null || confirmPass==''){
        //   group.controls.confirmpassword.setErrors({required:true});
        //   return { required: true };
        // }
        // if(pass!=confirmPass){
        //   group.controls.confirmpassword.setErrors({'match':true});
        //   return {match:true};
        // }
        //return pass === confirmPass ? null : { notSame: true }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    checkInUseEmail(control) {
        // mimic http database access
        /** @type {?} */
        let db = ['tony@gmail.com'];
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
                observer.next(result);
                observer.complete();
            }), 4000);
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getError(data) {
        //console.log('getError', data);
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
            this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
                this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    }
    /**
     * @return {?}
     */
    getErrorPassword() {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
            this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
    }
    /**
     * @param {?} post
     * @return {?}
     */
    onSubmit(post) {
        this.post = post;
        /** @type {?} */
        let tempformval = {};
        for (let x in this.formGroup.controls) {
            this.formGroup.controls[x].markAsTouched();
            //console.log(this.formGroup.controls[x].errors, x, 'err');
            //if(this.formGroup.controls[x].valid){
            //console.log('x',x);
            /** @type {?} */
            let b = x.split('__');
            //console.log('b',b,b.length,b[0]);
            for (let m in this.formdataval.fields) {
                if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple == null && this.filearray[this.formdataval.fields[m].name] != null) {
                    if (this.filearray[this.formdataval.fields[m].name] != null && this.filearray[this.formdataval.fields[m].name].uploaded == 1) {
                        // fileservername: "Test-1589216992392My Saved Schema.json"
                        // lastModified: 1589174477504
                        // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
                        // name: "My Saved Schema.json"
                        // size: 135096
                        // type: "application/json"
                        // uploaded: 1
                        /** @type {?} */
                        let tfile = {};
                        tfile.fileservername = this.filearray[this.formdataval.fields[m].name].fileservername;
                        tfile.name = this.filearray[this.formdataval.fields[m].name].name;
                        tfile.size = this.filearray[this.formdataval.fields[m].name].size;
                        tfile.type = this.filearray[this.formdataval.fields[m].name].type;
                        tfile.path = this.formdataval.fields[m].path,
                            tfile.bucket = this.formdataval.fields[m].bucket,
                            this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);
                    }
                }
                if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple != null && this.formdataval.fields[m].multiple == true) {
                    /** @type {?} */
                    let tfilearr = [];
                    for (let g in this.filearray[this.formdataval.fields[m].name]) {
                        if (this.filearray[this.formdataval.fields[m].name][g] != null && this.filearray[this.formdataval.fields[m].name][g].uploaded == 1) {
                            // fileservername: "Test-1589216992392My Saved Schema.json"
                            // lastModified: 1589174477504
                            // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
                            // name: "My Saved Schema.json"
                            // size: 135096
                            // type: "application/json"
                            // uploaded: 1
                            /** @type {?} */
                            let tfile = {};
                            tfile.fileservername = this.filearray[this.formdataval.fields[m].name][g].fileservername;
                            tfile.name = this.filearray[this.formdataval.fields[m].name][g].name;
                            tfile.size = this.filearray[this.formdataval.fields[m].name][g].size;
                            tfile.type = this.filearray[this.formdataval.fields[m].name][g].type;
                            tfile.path = this.formdataval.fields[m].path;
                            tfile.bucket = this.formdataval.fields[m].bucket;
                            tfilearr.push(tfile);
                        }
                        this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfilearr);
                    }
                }
                if (this.formdataval.fields[m].type == 'autocomplete') {
                    if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null && this.formdataval.fields[m].validations != null) {
                        //console.log('autoerror', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: null });
                        //console.log('autoerror after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
                    else {
                        //console.log('autoerror set', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: true });
                        //console.log('autoerror set after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
                    if (x == this.formdataval.fields[m].name && tempformval[x] == null)
                        tempformval[x] = this.autocompletefiledvalue[this.formdataval.fields[m].name];
                }
                if (b.length > 1 && b[0] == this.formdataval.fields[m].name && this.formdataval.fields[m].name != x && this.formdataval.fields[m].type == 'checkbox' && this.formdataval.fields[m].multiple != null) {
                    //console.log('aaaaff...');
                    if (this.formGroup.controls[x].value == true) {
                        for (let k in this.formdataval.fields[m].val) {
                            if (this.formdataval.fields[m].val[k]['key'] == b[1]) {
                                if (tempformval[this.formdataval.fields[m].name] == null)
                                    tempformval[this.formdataval.fields[m].name] = [];
                                tempformval[this.formdataval.fields[m].name].push(b[1]);
                                //console.log('gv', b[1]);
                            }
                        }
                    }
                }
                // else{
                if (x == this.formdataval.fields[m].name && tempformval[x] == null)
                    tempformval[x] = this.formGroup.controls[x].value;
                //  }
            }
            //console.log(this.formGroup.controls[x].errors, x, 'err22');
            //}
        }
        console.log(post, 'post', this.formGroup.valid, this.formdataval, this.formdataval.apiUrl, 'ffff', tempformval);
        if (this.formGroup.valid) {
            this.loading = true;
            /** @type {?} */
            let link = this.formdataval.apiUrl + this.formdataval.endpoint;
            /** @type {?} */
            let source = {};
            source['data'] = this.formGroup.value;
            this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                if (result.status == 'success') {
                    this.formGroup.reset();
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: this.formdataval.successmessage }
                    });
                    //console.log(result, 'red', this.formdataval.redirectpath);
                    if (this.formdataval.redirectpath != null) {
                        this.router.navigate([this.formdataval.redirectpath]);
                    }
                }
                if (result.status == 'error') {
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: result
                    });
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                //console.log('Oooops!');
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                });
                this.loading = false;
            }));
        }
    }
}
ShowformComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-showform',
                template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n\n                <mat-card class=\"form_header_{{fields.name}}\"\n                    *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \" [innerHTML]=\"fields.heading\">\n                </mat-card>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- for select-->\n                    <!-- <div>ff</div> -->\n                    <mat-label> Select {{fields.label}} </mat-label>\n                    <mat-select (blur)=\"inputblur(fields.name)\" (selectionChange)=\"checkchange(fields,ival)\"\n                        [formControlName]=\"fields.name\" [multiple]=\"fields.multiple?true:false\">\n                        <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                    </mat-select>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\"></mat-label>\n                    <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                        (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                        [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                    </mat-checkbox>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n                </div>\n                <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\"></mat-label>\n\n                    <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                        <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                            <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                [value]=\"vals.key\">{{vals.val}}\n                            </mat-checkbox>\n\n                        </ng-container>\n                    </ng-container>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                        class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                        <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                            (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                            {{vals.val}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n\n                    <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <mat-form-field\n                    *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type=='password')\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\" [placeholder]=\"fields.label\"\n                        (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\">\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <textarea matInput placeholder=\"Comment\" [formControlName]=\"fields.name\"\n                        (change)=\"inputblur(fields.name)\">\n  </textarea>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                    <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <!-- {{fields.val.length}}\n -->\n\n\n\n                    <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                    <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                    <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                        (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                        placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                    <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                            <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                (click)=\"setautocompletevalue(vals,fields)\">\n                                <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                <span>{{vals.val}}</span>\n                                <!-- <small>Population: {{state.population}}</small> -->\n                            </mat-option>\n                        </ng-container>\n                    </mat-autocomplete>\n\n\n\n\n\n                    <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                        aria-label=\"{{fields.name}} data\">\n                        <ng-container *ngFor=\"let vals of fields.val \">\n                            <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                <mat-chip [removable]=true>{{vals.val}}\n                                    <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                </mat-chip>\n                            </ng-container>\n\n                        </ng-container>\n\n                    </mat-chip-list>\n\n\n                    <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                        aria-label=\"{{fields.name}} data\">\n                        <ng-container *ngFor=\"let vals of fields.val \">\n                            <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                <ng-container *ngIf=\"vals.key==avals\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                        </mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n                            </ng-container>\n\n                        </ng-container>\n\n                    </mat-chip-list>\n\n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n                <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n                    <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\">\n                    </ckeditor>\n                    <mat-error\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span\n                                *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n\n\n\n\n\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                        formControlName=\"{{fields.name}}\">\n                    <mat-error\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span\n                                *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                        <div class=\"drop\" [attr.fileid]=\"fields.name\" id=\"drop{{fields.name}}\">Drop files here.</div>\n                        <div class=\"filesid\" id=\"list{{fields.name}}\">\n                            <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                            <ng-container *ngIf=\"filearray[fields.name]!=null  && fields.multiple==null\">\n                                <span>{{filearray[fields.name].name}}</span>\n                                <br />\n                                <span>{{filearray[fields.name].type}}</span>\n                                <button *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                    (click)=\"uploadfile(fields)\" type=\"button\">Upload</button>\n                                <button *ngIf=\"filearray[fields.name].uploaded==1\" mat-raised-button\n                                    (click)=\"deletefile(fields)\" type=\"button\">Delete</button>\n\n                                <section *ngIf=\"filearray[fields.name].uploaded==2 \" class=\"example-section\">\n                                    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                        [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                    </mat-progress-bar>\n                                </section>\n                            </ng-container>\n                            <!-- for multiple file uploads  -->\n                            <ng-container\n                                *ngIf=\"filearray[fields.name]!=null && fields.multiple!=null  && fields.multiple==true\">\n                                <ng-container *ngFor=\"let files of filearray[fields.name]; let fi=index; \">\n                                    <span>{{files.name}} </span>\n                                    <br />\n                                    <span>{{files.type}}</span>\n                                    <button *ngIf=\"files.uploaded==null \" mat-raised-button\n                                        (click)=\"uploadfilemultiple(fields,files,fi)\" type=\"button\">Upload</button>\n                                    <button *ngIf=\"files.uploaded==1\" mat-raised-button\n                                        (click)=\"deletefilemultiple(fields,files,fi)\" type=\"button\">Delete</button>\n\n                                    <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                            [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                        </mat-progress-bar>\n                                    </section>\n                                    <br />\n                                </ng-container>\n                                <button\n                                    *ngIf=\"(filecount[fields.name]!=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                    mat-raised-button (click)=\"uploadall(fields)\" type=\"button\">Upload All</button>\n                                <button mat-raised-button (click)=\"deletefilemultipleall(fields)\" type=\"button\">Delete\n                                    All</button>\n                            </ng-container>\n\n\n                        </div>\n                    </div>\n\n                    <mat-error\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span\n                                *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n\n                <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                        [bufferValue]=\"bufferValue\">\n                    </mat-progress-bar>\n                </section>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                class=\"button\">{{formdataval.resettext}}</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}"]
            }] }
];
/** @nocollapse */
ShowformComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: MatSnackBar },
    { type: Router },
    { type: ElementRef }
];
ShowformComponent.propDecorators = {
    formdata: [{ type: Input }],
    formfieldrefreshdata: [{ type: Input }],
    formfieldrefresh: [{ type: Input }],
    onFormFieldChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoMaterialModule {
}
DemoMaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    A11yModule,
                    CdkStepperModule,
                    CdkTableModule,
                    CdkTreeModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatBadgeModule,
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatStepperModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatDividerModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                    MatTreeModule,
                    PortalModule,
                    ScrollingModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class YoutubeplayerComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set videoid(id) {
        this.id = (id) || '<no name set>';
        this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
        // console.warn(this.id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
YoutubeplayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-youtubeplayer',
                template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                styles: [""]
            }] }
];
/** @nocollapse */
YoutubeplayerComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
YoutubeplayerComponent.propDecorators = {
    videoid: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { MatFileUploadModule } from 'angular-material-fileupload';
class ListingModule {
}
ListingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent],
                imports: [
                    CommonModule,
                    BrowserModule, BrowserAnimationsModule,
                    DemoMaterialModule,
                    FormsModule, ReactiveFormsModule,
                    RouterModule,
                    MomentModule, CKEditorModule
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ListingComponent, ShowformComponent
                ],
                providers: [ApiService],
                entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ListingService, ListingComponent, Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, ListingModule, ApiService as ɵa, DemoMaterialModule as ɵc, YoutubeplayerComponent as ɵb };

//# sourceMappingURL=listing-angular7.js.map