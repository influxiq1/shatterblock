/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormBuilder, FormControl } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { startWith, map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
import * as momentImported from 'moment';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
//import {ProgressBarMode} from '@angular/material/progress-bar';
//import  {BtnComponent} from './../../../../src/app/btn/btn.component'
/** @type {?} */
const moment = momentImported;
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.alldata;
}
export class ListingComponent {
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
        console.log('limitcondval', this.limitcondval);
    }
    /**
     * @param {?} date_search_source_countval
     * @return {?}
     */
    set date_search_source_count(date_search_source_countval) {
        this.date_search_source_countval = date_search_source_countval;
        if (this.date_search_source_countval == 0)
            this.limitcondval.pagecount = 1;
        console.log('date_search_source_count', this.date_search_source_countval);
    }
    /**
     * @param {?} grab_link
     * @return {?}
     */
    set grab_link(grab_link) {
        this.grab_linkval = grab_link;
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
        console.log(this.sortdataval, 'sortdataval');
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
        if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
            /** @type {?} */
            let source;
            /** @type {?} */
            let condition = {};
            source = {
                source: this.date_search_sourceval,
                condition: condition
            };
            /** @type {?} */
            let link = this.apiurlval + '' + this.date_search_endpointval;
            this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this.result = res;
                this.preresult = this.result.res;
            }));
        }
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
            var tt = { columnDef: `${coldef_list[i]}`, header: `${header_list[i].replace(/_/g, " ")}`, cell: (/**
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
        console.log('customcols', customcols, displayedcols);
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
        console.log("start date");
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
                this.dataSource = new MatTableDataSource(result.results.res);
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
                console.log('count', result);
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
            this.dataSource = new MatTableDataSource(this.result.results.res);
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
        console.log('v', val);
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
            ;
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
        //console.log('radat',rdata);
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
            if (val.datafields[v] != 'image' && val.datafields[v] != 'video')
                temparr.push(data[val.datafields[v]]);
            if (val.datafields[v] == 'image')
                temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>");
            if (val.datafields[v] == 'video') {
                /** @type {?} */
                let temphtml = ("<iframe width=560 height=315 src=https://www.youtube.com/embed/" + data[val.datafields[v]] + " frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>");
                temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
                temparr.push(temphtml);
            }
            //if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
            dataarr.push(temparr);
        }
        //console.log('dataarr',dataarr);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: 'custom-modalbox-apidata',
            data: { isconfirmation: false, data: dataarr }
        });
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    opencustombuttonactionapidata(val, data) {
        console.log('opencustombuttonactionapidata', val, data);
        this.loading = true;
        /** @type {?} */
        let link = this.apiurlval + val.endpoint;
        /** @type {?} */
        let source = {};
        source[val.param] = data._id;
        this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            console.log('res', result);
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
                if (v != 'image' && v != 'video')
                    temparr.push(resdata[v]);
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
        }));
        return;
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    openextlinkwithparam(val, data) {
        console.log('val', val, data);
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
            console.log("Hello from setTimeout");
            console.log('link', fulllink, data, qtext);
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
            /** @type {?} */
            let flagk = '';
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
                if (typeof (data[key]) == 'object') {
                }
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
                        this.allSearch();
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
                    console.log('Oooops!');
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
                        this.allSearch();
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
                    console.log('Oooops!');
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
                    console.log('Oooops!');
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
        //alert(5);
        //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
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
                    console.log('Oooops!');
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
        console.log("hit");
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
        console.log('con...', conditionobj, this.end_date);
        console.warn('cond', condition, this.dateSearch_condition, conditionobj, this.tsearch, textSearch);
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
            this.dataSource = new MatTableDataSource(result.results.res);
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
                template: "<div class=\"container\">\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\">\n            <span class=\"inputfilter\">\n                <!-- <mat-form-field class=\"searchdiv\">\n\n      <input  class=\"filterForFilter\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field> -->\n            </span>\n            <span class=\"inputfilterForloop\" *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\" >\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field)\" (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\" >\n                            search\n                        </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </span>\n\n            <span class=\"inputfilterForAuto\" *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                        <mat-chip\n                                *ngFor=\"let v of autosearch[item.field]; let i=index;\"\n                                [selectable]=\"true\"\n                                [removable]=\"true\"\n                                (removed)=\"remove(v,i,item.field)\">\n                            {{v.name}}\n                            <mat-icon matChipRemove >cancel</mat-icon>\n                        </mat-chip>\n                        <input\n                                placeholder=\"{{item.label}}\"\n                                #fruitInput\n                                [matAutocomplete]=\"auto\"\n                                [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\"\n                        >\n                    </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete  #auto=\"matAutocomplete\" >\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of item.values\" [value]=\"statusval.val\" (click)=\"autosearchfunction(item.field,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </span>\n\n\n\n<!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container  class=\"filterForTexticon\" *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <mat-form-field *ngFor=\"let status of this.search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" >\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval\" (click)=\"selectSearch(statusval.val, status)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\"date_search_endpointval !=null && date_search_sourceval != null && search_settingsval.datesearch != null \">\n                <span  class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"autocomplete=\"off\"  placeholder=\"{{status.startdatelabel}}\"  [(ngModel)]=\"start_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input  class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1 ></mat-datepicker>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                </span>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <ng-container class=\"refresh\">\n                <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                    autorenew\n                </i>\n            </ng-container>\n\n            <ng-container class=\"refresh\"  *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"allSearch()\">Search</button>\n            </ng-container>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\" [routerLink]=\"click_to_add_ananother_pageval\" >Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\"  class=\"example-section\">\n            <mat-progress-bar\n                    class=\"example-margin\"\n                    [color]=\"color\"\n                    [mode]=\"mode\"\n                    [value]=\"value\"\n                    [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n        </section>\n        <br/>\n        <br/>\n        <ng-container *ngIf=\"tableflag==0\" >\n            <section class=\"lib-pager-class\">\n                <mat-label>Showing\n                        {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of </mat-label>\n                <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n                <mat-form-field>\n                    <mat-label>Page Size</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>Page No</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n                </mat-form-field>\n\n\n                <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                    skip_previous\n                </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                    skip_next\n                </span>\n            </section>\n\n\n        </ng-container>\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\n\n                <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                      (change)=\"$event ? selection.toggle(row) : null\"\n                                      [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                       #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">\n                        <span>\n                            {{column.header}}\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\" class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                                arrow_downward\n                            </span>\n                            <span class=\"material-icons cursor float-right\" *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"  (click)=\"sorttable(column.columnDef,'desc')\" >arrow_upward\n                            </span>\n\n                            <span class=\"material-icons cursor\" *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\" (click)=\"sorttable(column.columnDef,'desc')\" >\n                                unfold_more\n                            </span>\n\n                        </span>\n\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"   class=\"td-cell-center\">\n          \n                        <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }} {{pdfFlag(row)}}</span>\n                        <span *ngIf=\"column.columnDef!='status' &&  column.columnDef!='image' && column.columnDef!='video'\">\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null\">\n                               <!-- {{ column.cell(row) }}-->\n                                <!--{{row[column.columnDef]}}-->\n                                <span [innerHTML]=\"row[column.columnDef]\"></span>\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]==null\">\n                               NA\n                            </ng-container>\n\n                        </span>\n                        <!-- for image view  -->\n                        <span *ngIf=\"column.columnDef=='image'\" (click)=\"img_modal_view(column.cell(row))\"> <span class=\"module_imgblock\"><img src=\"{{ column.cell(row) }}\" alt=\"{{ column.cell(row) }}\" ></span></span>\n                        <!-- for video view -->\n                        <span *ngIf=\"column.columnDef=='video' \"><span class=\"module_videoblock\" (click)=\"fetchvideo(row)\">\n                            <img src=\"https://img.youtube.com/vi/{{ column.cell(row) }}/sddefault.jpg\" alt=\"{{ column.cell(row) }}\"\n                                 (click)=\"fetchvideo(row)\"></span>\n                        </span>\n\n                        <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n                        <br>\n\n                        <!--          <span *ngIf=\"sh==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null\" class=\"cursor\">\n                            <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && aud==true  && urlval !=null\">\n                            <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n\n\n<!--// for grap url//-->\n\n\n\n                        <span *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name]\" class=\"cursor\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url)\">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <br>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef== [grab_linkval[0].col_name]\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url)\">{{grab_linkval[2].label}}</button>\n                        </span>\n\n                        <!--          //grap url end//-->\n\n\n<!--          </span>-->\n                        <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n\n\n\n                <ng-container matColumnDef=\"Actions\" *ngIf=\"libdataval.hideaction==null || libdataval.hideaction==false\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n                    <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\" data-label=\"Actions\"  class=\"td-cell-center\">\n                        <!--custom buttions block -->\n                        <ng-container *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length >0 \">\n                            <ng-container *ngFor=\"let custombutton of libdataval.custombuttons\">\n                                <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                    <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                       <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                           <button  mat-raised-button color=\"primary\">{{custombutton.label}}</button>\n                                       </a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button  mat-raised-button color=\"primary\" (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                    </ng-container>\n\n                                </ng-container>\n                                <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                    <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"openinternallink(custombutton)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button  mat-raised-button color=\"primary\" (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                    </ng-container>\n\n                                </ng-container>\n                                <ng-container *ngIf=\"custombutton.type=='action'\">\n                                    <ng-container *ngIf=\"custombutton.datatype=='local' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionlocaldata(custombutton,row)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionapidata(custombutton,row)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n\n                                </ng-container>\n\n                            </ng-container>\n                        </ng-container>\n                        <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                            <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\" class=\"cursor\" (click)=\"editdata(row)\" >\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\" class=\"cursor\" (click)=\"deletedata(row)\" >\n                                <i class=\"material-icons\">\n                                    delete_outline\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"  class=\"cursor\" (click)=\"viewdata(row)\" >\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"  (click)=\"managestatus(row)\" >\n                                <i class=\"material-icons\">\n                                    toggle_off\n                                </i>\n                            </span>\n                            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\" >\n                                <i class=\"material-icons treeclass\">\n                                    toggle_off\n                                </i>\n                            </span>\n\n                            <!-- artistxp preview start -->\n                            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                <i class=\"material-icons\">perm_media</i>\n                            </span>\n                            <!-- artistxp preview end -->\n\n                        </span>\n\n                    </td>\n                </ng-container>\n\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n\n        <mat-card *ngIf=\"tableflag!=0\">No Records Exists !!!</mat-card>\n        <ng-container *ngIf=\"tableflag==0\" >\n            <section class=\"lib-pager-class\">\n                <mat-label>Showing\n                    {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of </mat-label>\n                <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n                <mat-form-field>\n                    <mat-label>Page Size</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>Page No</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n                </mat-form-field>\n\n\n                <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                    skip_previous\n                </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                    skip_next\n                </span>\n            </section>\n\n\n        </ng-container>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>\n",
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
    jwttoken: [{ type: Input }],
    statusarr: [{ type: Input }],
    emailarray: [{ type: Input }],
    editroute: [{ type: Input }],
    preview_artistxp: [{ type: Input }],
    sort: [{ type: ViewChild, args: [MatSort,] }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }]
};
if (false) {
    /** @type {?} */
    ListingComponent.prototype.myControl;
    /** @type {?} */
    ListingComponent.prototype.datasourceval;
    /** @type {?} */
    ListingComponent.prototype.search_settingsval;
    /** @type {?} */
    ListingComponent.prototype.click_to_add_ananother_pageval;
    /** @type {?} */
    ListingComponent.prototype.grab_linkval;
    /** @type {?} */
    ListingComponent.prototype.date_search_sourceval;
    /** @type {?} */
    ListingComponent.prototype.date_search_endpointval;
    /** @type {?} */
    ListingComponent.prototype.urlval;
    /** @type {?} */
    ListingComponent.prototype.searchendpointval;
    /** @type {?} */
    ListingComponent.prototype.searchListval;
    /** @type {?} */
    ListingComponent.prototype.pdf_link_val;
    /** @type {?} */
    ListingComponent.prototype.statusarrval;
    /** @type {?} */
    ListingComponent.prototype.skipval;
    /** @type {?} */
    ListingComponent.prototype.errormg;
    /** @type {?} */
    ListingComponent.prototype.jwttokenval;
    /** @type {?} */
    ListingComponent.prototype.detail_datatypeval;
    /** @type {?} */
    ListingComponent.prototype.detail_skip_arrayval;
    /** @type {?} */
    ListingComponent.prototype.deleteendpointval;
    /** @type {?} */
    ListingComponent.prototype.editrouteval;
    /** @type {?} */
    ListingComponent.prototype.apiurlval;
    /** @type {?} */
    ListingComponent.prototype.updateendpointval;
    /** @type {?} */
    ListingComponent.prototype.modify_header_arrayval;
    /** @type {?} */
    ListingComponent.prototype.date_search_source_countval;
    /** @type {?} */
    ListingComponent.prototype.datacollectionval;
    /** @type {?} */
    ListingComponent.prototype.selection;
    /** @type {?} */
    ListingComponent.prototype.sourcedataval;
    /** @type {?} */
    ListingComponent.prototype.emailarrayval;
    /** @type {?} */
    ListingComponent.prototype.columns;
    /** @type {?} */
    ListingComponent.prototype.autosearchinput;
    /** @type {?} */
    ListingComponent.prototype.olddata;
    /** @type {?} */
    ListingComponent.prototype.tsearch;
    /** @type {?} */
    ListingComponent.prototype.tableflag;
    /** @type {?} */
    ListingComponent.prototype.autosearch;
    /** @type {?} */
    ListingComponent.prototype.x;
    /** @type {?} */
    ListingComponent.prototype.libdataval;
    /** @type {?} */
    ListingComponent.prototype.limitcondval;
    /** @type {?} */
    ListingComponent.prototype.custombuttonval;
    /** @type {?} */
    ListingComponent.prototype.result;
    /** @type {?} */
    ListingComponent.prototype.sortdataval;
    /** @type {?} */
    ListingComponent.prototype.sh;
    /** @type {?} */
    ListingComponent.prototype.art;
    /** @type {?} */
    ListingComponent.prototype.aud2;
    /** @type {?} */
    ListingComponent.prototype.aud;
    /** @type {?} */
    ListingComponent.prototype.color;
    /** @type {?} */
    ListingComponent.prototype.mode;
    /** @type {?} */
    ListingComponent.prototype.value;
    /** @type {?} */
    ListingComponent.prototype.bufferValue;
    /** @type {?} */
    ListingComponent.prototype.previewFlug;
    /** @type {?} */
    ListingComponent.prototype.selectsearch;
    /** @type {?} */
    ListingComponent.prototype.stateGroups;
    /** @type {?} */
    ListingComponent.prototype.stateGroup;
    /** @type {?} */
    ListingComponent.prototype.displayedColumns;
    /** @type {?} */
    ListingComponent.prototype.datacolumns;
    /** @type {?} */
    ListingComponent.prototype.displayedColumnsheader;
    /** @type {?} */
    ListingComponent.prototype.formarray;
    /** @type {?} */
    ListingComponent.prototype.start_date;
    /** @type {?} */
    ListingComponent.prototype.dateSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.selectSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.autoSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.textSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.end_date;
    /** @type {?} */
    ListingComponent.prototype.i;
    /** @type {?} */
    ListingComponent.prototype.loading;
    /** @type {?} */
    ListingComponent.prototype.preresult;
    /** @type {?} */
    ListingComponent.prototype.dataSource;
    /** @type {?} */
    ListingComponent.prototype.sort;
    /** @type {?} */
    ListingComponent.prototype.paginator;
    /** @type {?} */
    ListingComponent.prototype.myForm;
    /** @type {?} */
    ListingComponent.prototype._apiService;
    /** @type {?} */
    ListingComponent.prototype.dialog;
    /** @type {?} */
    ListingComponent.prototype.bottomSheet;
    /** @type {?} */
    ListingComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.container;
    /** @type {?} */
    ListingComponent.prototype._http;
    /** @type {?} */
    ListingComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype._snackBar;
}
export class Confirmdialog {
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
                template: "\n<div class=\"maindialog maindialognew\">\n\n<div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\" >Hey !</h1>\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n    <div mat-dialog-content>\n        <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n        <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n            <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                <mat-card-header id=\"dialogdata{{item[0]}}\">\n                    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                    <mat-card-title>{{item[0]}}</mat-card-title>\n                </mat-card-header>\n                <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                <mat-card-content id=\"dialogdata{{item[0]}}\">\n                    <p [innerHtml]=\"item[1]\">\n\n                    </p>\n                </mat-card-content>\n            </mat-card>\n\n        </div>\n\n        <!--for custom page in modal(mainly used for tree)-->\n        <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n            <iframe class=\"custom-datadiv\" height=\"auto\"  [src]=\"data.data[0].customdata\" ></iframe>\n\n        </div>\n\n    </div>\n</div>\n\n\n<div *ngIf=\"data.preview == true\">\n    <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n</div>\n\n\n\n\n\n<div mat-dialog-actions *ngIf=\"data.preview != true\">\n    <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n</div>\n\n</div>\n"
            }] }
];
/** @nocollapse */
Confirmdialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    Confirmdialog.prototype.dialogRef;
    /** @type {?} */
    Confirmdialog.prototype.data;
    /** @type {?} */
    Confirmdialog.prototype.sanitizer;
}
export class BottomSheet {
    /**
     * @param {?} bottomSheetRef
     * @param {?} data
     */
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        console.warn("bottom-sheet", data);
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
                template: "\n\n<mat-nav-list class=\"navlist\">\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
            }] }
];
/** @nocollapse */
BottomSheet.ctorParameters = () => [
    { type: MatBottomSheetRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheet.prototype.bottomSheetRef;
    /** @type {?} */
    BottomSheet.prototype.data;
}
/**
 * listing video player
 */
export class VideoPlayer {
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
if (false) {
    /** @type {?} */
    VideoPlayer.prototype.dialogRef;
    /** @type {?} */
    VideoPlayer.prototype.data;
}
/**
 * listing Image View
 */
export class ImageView {
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
if (false) {
    /** @type {?} */
    ImageView.prototype.dialogRef;
    /** @type {?} */
    ImageView.prototype.data;
}
export class SnackbarComponent {
    /**
     * @param {?} snackBarRef
     * @param {?} data
     */
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        console.log('snack', this.data);
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
if (false) {
    /** @type {?} */
    SnackbarComponent.prototype.snackBarRef;
    /** @type {?} */
    SnackbarComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUVuSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxRQUFRLENBQUM7QUFFekMsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FB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LCBJbnB1dCwgSW5qZWN0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmLCBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIsIEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcbmltcG9ydCAqIGFzIG1vbWVudEltcG9ydGVkIGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCB7TUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG4vL2ltcG9ydCB7UHJvZ3Jlc3NCYXJNb2RlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuLy9pbXBvcnQgIHtCdG5Db21wb25lbnR9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL2FwcC9idG4vYnRuLmNvbXBvbmVudCdcbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYWxsZGF0YTogYW55O1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy5tb2R1bGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmcubW9kdWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cbiAgZGF0YXNvdXJjZXZhbDogYW55O1xuICBzZWFyY2hfc2V0dGluZ3N2YWw6IGFueTtcbiAgY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsOiBhbnk7XG4gIGdyYWJfbGlua3ZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2V2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw6IGFueTtcbiAgdXJsdmFsOiBhbnk7XG4gIHNlYXJjaGVuZHBvaW50dmFsOiBhbnk7XG4gIHNlYXJjaExpc3R2YWw6IGFueTtcbiAgcGRmX2xpbmtfdmFsOiBhbnk7XG4gIHN0YXR1c2FycnZhbDogYW55O1xuICBza2lwdmFsOiBhbnk7XG4gIGVycm9ybWc6IGFueTtcbiAgand0dG9rZW52YWw6IGFueTtcbiAgZGV0YWlsX2RhdGF0eXBldmFsOiBhbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOiBhbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIGVkaXRyb3V0ZXZhbDogYW55O1xuICBhcGl1cmx2YWw6IGFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgbW9kaWZ5X2hlYWRlcl9hcnJheXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueTtcbiAgZGF0YWNvbGxlY3Rpb252YWw6IGFueTtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHNvdXJjZWRhdGF2YWw6IGFueTtcbiAgZW1haWxhcnJheXZhbDogYW55O1xuICBjb2x1bW5zOiBhbnkgPSBbXTtcbiAgYXV0b3NlYXJjaGlucHV0OiBhbnkgPSBbXTtcbiAgb2xkZGF0YTogYW55ID0gW107XG4gIHRzZWFyY2g6IGFueSA9IFtdO1xuICB0YWJsZWZsYWc6IGFueSA9IDA7XG4gIGF1dG9zZWFyY2g6IGFueSA9IFtdO1xuICBwdWJsaWMgeDogYW55O1xuICBwdWJsaWMgbGliZGF0YXZhbDphbnk9e307XG4gIHB1YmxpYyBsaW1pdGNvbmR2YWw6IGFueT17fTtcbiAgcHVibGljIGN1c3RvbWJ1dHRvbnZhbDogYW55O1xuICBwdWJsaWMgcmVzdWx0OiBhbnkgPSB7fTtcbiAgcHVibGljIHNvcnRkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIHNoOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGFydDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQyOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZDogYW55ID0gZmFsc2U7XG5cbiAgLypmb3IgcHJvZ3Jlc3MgYmFyKi9cblxuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBhbnkgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG4gIGJ1ZmZlclZhbHVlID0gNzU7XG5cbiAgLyogdGhpcyB2YXJpYWJsZSBmb3IgYXJ0aXN0IHhwIHByZXZpZXcgKi9cbiAgcHJldmlld0ZsdWc6IGFueSA9IGZhbHNlO1xuICBzZWxlY3RzZWFyY2g6YW55PVtdO1xuXG5cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaF9zZXR0aW5ncyhzZWFyY2hfc2V0dGluZ3M6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsID0gc2VhcmNoX3NldHRpbmdzO1xuICAgIC8qZm9yIChsZXQgaT0gMDsgaTw9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2ldLmxhYmVsKTtcbiAgICB9Ki9cblxuICAgIC8qICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLmxhYmVsKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS52YWx1ZXMpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7Ki9cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2UoY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlOiBhbnkpIHtcbiAgICB0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCA9IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbGltaXRjb25kKGxpbWl0Y29uZHZhbDogYW55KSB7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwgPSBsaW1pdGNvbmR2YWw7XG4gICAgY29uc29sZS5sb2coJ2xpbWl0Y29uZHZhbCcsdGhpcy5saW1pdGNvbmR2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQoZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDtcbiAgICBpZih0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbD09MCkgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50PTE7XG4gICAgY29uc29sZS5sb2coJ2RhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCcsdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGdyYWJfbGluayhncmFiX2xpbms6IGFueSkge1xuICAgIHRoaXMuZ3JhYl9saW5rdmFsID0gZ3JhYl9saW5rO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b24oY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWJ1dHRvbnZhbCA9IGN1c3RvbWJ1dHRvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2UoZGF0ZV9zZWFyY2hfc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc29ydGRhdGEoc29ydGRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMuc29ydGRhdGF2YWwgPSBzb3J0ZGF0YXZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNvcnRkYXRhdmFsLCdzb3J0ZGF0YXZhbCcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX2VuZHBvaW50KGRhdGVfc2VhcmNoX2VuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsID0gZGF0ZV9zZWFyY2hfZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVybCh1cmw6IGFueSkge1xuICAgIHRoaXMudXJsdmFsID0gdXJsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hlbmRwb2ludChzZWFyY2hlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hlbmRwb2ludHZhbCA9IHNlYXJjaGVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwZGZfbGluayhwZGZfbGluazogYW55KSB7XG4gICAgdGhpcy5wZGZfbGlua192YWwgPSBwZGZfbGluaztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoTGlzdChzZWFyY2hMaXN0OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaExpc3R2YWwgPSBzZWFyY2hMaXN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaWJkYXRhKGxpYmRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMubGliZGF0YXZhbCA9IGxpYmRhdGF2YWw7XG4gICAgLy9jb25zb2xlLmxvZygnbGliZGF0YXZhbCcsdGhpcy5saWJkYXRhdmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhc291cmNlKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IGRhdGFzb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGFjb2xsZWN0aW9uKGRhdGFjb2xsZWN0aW9udmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFjb2xsZWN0aW9udmFsID0gZGF0YWNvbGxlY3Rpb252YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2tpcChza2lwOiBhbnkpIHtcbiAgICB0aGlzLnNraXB2YWwgPSBza2lwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfZGF0YXR5cGUoZGV0YWlsX2RhdGF0eXBlOiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCA9IGRldGFpbF9kYXRhdHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX3NraXBfYXJyYXkoZGV0YWlsX3NraXBfYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwgPSBkZXRhaWxfc2tpcF9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzb3VyY2VkYXRhKHNvdXJjZWRhdGE6IGFueSkge1xuICAgIHRoaXMuc291cmNlZGF0YXZhbCA9IHNvdXJjZWRhdGE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kaWZ5X2hlYWRlcl9hcnJheShtb2RpZnlfaGVhZGVyX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwgPSBtb2RpZnlfaGVhZGVyX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdXBkYXRlZW5kcG9pbnQodXBkYXRlZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMudXBkYXRlZW5kcG9pbnR2YWwgPSB1cGRhdGVlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYXBpdXJsKGFwaXVybDogYW55KSB7XG4gICAgdGhpcy5hcGl1cmx2YWwgPSBhcGl1cmw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgand0dG9rZW4oand0dG9rZW46IGFueSkge1xuICAgIGlmKGp3dHRva2VuIT1udWxsKXRoaXMuand0dG9rZW52YWwgPSBqd3R0b2tlbjtcbiAgICBlbHNlIHRoaXMuand0dG9rZW52YWw9Jyc7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsLCd0b2tlbicpXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc3RhdHVzYXJyKHN0YXR1c2FycjogYW55KSB7XG4gICAgdGhpcy5zdGF0dXNhcnJ2YWwgPSBzdGF0dXNhcnI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZW1haWxhcnJheShlbWFpbGFycmF5OiBhbnkpIHtcbiAgICB0aGlzLmVtYWlsYXJyYXl2YWwgPSBlbWFpbGFycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVkaXRyb3V0ZShlZGl0cm91dGU6IGFueSkge1xuICAgIHRoaXMuZWRpdHJvdXRldmFsID0gZWRpdHJvdXRlO1xuICB9XG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IHN0YXJ0ICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmV2aWV3X2FydGlzdHhwKGZsdWc6IGFueSkge1xuICAgIHRoaXMucHJldmlld0ZsdWcgPSB0cnVlO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgZW5kICovXG5cblxuICBzdGF0ZUdyb3Vwczogc3RyaW5nW10gPSB0aGlzLnNlYXJjaExpc3R2YWw7XG4gIHN0YXRlR3JvdXA6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRhdGFjb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zaGVhZGVyOiBzdHJpbmdbXSA9IFtdO1xuICBmb3JtYXJyYXk6IGFueSA9IFtdO1xuICBzdGFydF9kYXRlOiBhbnk7XG4gIGRhdGVTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgc2VsZWN0U2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIGF1dG9TZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgdGV4dFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBlbmRfZGF0ZTogYW55O1xuICBwdWJsaWMgaTogYW55O1xuICBsb2FkaW5nOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIHByZXJlc3VsdDogYW55ID0ge307XG4gIC8vZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5kYXRhc291cmNldmFsKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIC8vIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgbXlGb3JtOiBhbnk7XG4gIC8vIG15Rm9ybTphbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHB1YmxpYyBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQsIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ6XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yOiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgLyogdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgfSk7Ki9cblxuXG5cbiAgfVxuICAvKkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW0xpc3RpbmddJ1xuICB9KSovXG5cblxuXG5cblxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9ICcnKSB7XG5cbiAgICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICAgIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgICAgc291cmNlID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvblxuICAgICAgfTtcbiAgICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMucHJlcmVzdWx0ID0gdGhpcy5yZXN1bHQucmVzO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgbGV0IHggPSB0aGlzLng7XG5cbiAgICBsZXQgdGVtcCA9IFtdXG4gICAgbGV0IGtleXMgPSB4WzBdXG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpICAgIC8qYnkgT2JqZWN0LmtleXMoKSB3ZSBjYW4gZmluZCB0aGUgZmllbGRuYW1lcyhvciBrZXlzKSBpbiBhbiBvYmplY3QsIGkuZSwgaW4gdGVtcCBvYmplY3QgZmllbGQgbmFtZXMgYXJlIHNhdmVkKi9cblxuICAgIGxldCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGxldCBoZWFkZXJfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29sZGVmX2xpc3QucHVzaCh0ZW1wW2ldLnJlcGxhY2UoL1xccy9nLCBcIl9cIikpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSlcbiAgICB9XG4gICAgLy9jb2xkZWZfbGlzdC5wdXNoKCdBY3Rpb25zJyk7XG4gICAgLy9oZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmZiA9IGByb3cuJHtjb2xkZWZfbGlzdFtpXX1gXG4gICAgICB2YXIgdHQgPSB7IGNvbHVtbkRlZjogYCR7Y29sZGVmX2xpc3RbaV19YCwgaGVhZGVyOiBgJHtoZWFkZXJfbGlzdFtpXS5yZXBsYWNlKC9fL2csIFwiIFwiKX1gLCBjZWxsOiAocm93KSA9PiBldmFsKGZmKSwgb2JqbGVuZ3RoOiBoZWFkZXJfbGlzdC5sZW5ndGggfTtcbiAgICAgLy8gY29uc29sZS5sb2coJ3R0Jyx0dCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuICAgICAgZm9yIChsZXQgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgaWYgKGIgPT0gdHQuaGVhZGVyKSB0dC5oZWFkZXIgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpID09IC0xKVxuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh0dCk7XG4gICAgfVxuICAgIGxldCBkaXNwbGF5ZWRjb2xzID0gdGhpcy5jb2x1bW5zLm1hcCh4ID0+IHguY29sdW1uRGVmKTtcbiAgICBsZXQgY3VzdG9tY29sczphbnk9W107XG4gICAgLy9jb25zb2xlLmxvZygnZGlzcGxheWVkY29scycsZGlzcGxheWVkY29scyk7XG4gICAgaWYodGhpcy5saWJkYXRhdmFsIT1udWxsICYmIHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnMgIT1udWxsKVxuICAgICAgY3VzdG9tY29scz10aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzO1xuICAgIGlmKGN1c3RvbWNvbHMhPW51bGwgJiYgY3VzdG9tY29scy5sZW5ndGg+MCl7XG4gICAgICBmb3IobGV0IHYgaW4gY3VzdG9tY29scyl7XG4gICAgICAgIGlmKGRpc3BsYXllZGNvbHMuaW5jbHVkZXMoY3VzdG9tY29sc1t2XSk9PWZhbHNlKXtcbiAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7Y29sdW1uRGVmOmN1c3RvbWNvbHNbdl0saGVhZGVyOmN1c3RvbWNvbHNbdl0sY2VsbDonTkEnfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpc3BsYXllZGNvbHM9Y3VzdG9tY29scztcbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKCdjdXN0b21jb2xzJyxjdXN0b21jb2xzLGRpc3BsYXllZGNvbHMpO1xuICAgIGlmKHRoaXMubGliZGF0YXZhbC5oaWRlYWN0aW9uPT1udWxsIHx8IHRoaXMubGliZGF0YXZhbC5oaWRlYWN0aW9uPT1mYWxzZSlcbiAgICBkaXNwbGF5ZWRjb2xzLnB1c2goJ0FjdGlvbnMnKTtcblxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRpc3BsYXllZGNvbHM7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJyMnKTsgICAgICAgIC8qYWRkcyBzZWxlY3QgY29sdW1uIGluIHRhYmxlIGJ5IHVuc2hpZnQgZnVuY3Rpb24qL1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdzZWxlY3QnKTsgICAgICAgIC8qYWRkcyBzZWxlY3QgY29sdW1uIGluIHRhYmxlIGJ5IHVuc2hpZnQgZnVuY3Rpb24qL1xuXG4gICAgbGV0IGRhdGFfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhX2xpc3QucHVzaCh0aGlzLmNyZWF0ZURhdGEoeFtpXSkpO1xuICAgIH1cbiAgICB0aGlzLm9sZGRhdGEgPSBkYXRhX2xpc3Q7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShkYXRhX2xpc3QpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAvL3RoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG4gIC8qKmltYWdlIHZpZXcgbW9kYWwgKi9cbiAgaW1nX21vZGFsX3ZpZXcoaW1nOmFueSl7XG4vL2NvbnNvbGUud2FybihcImltZ19tb2RhbF92aWV3XCIsaW1nKVxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oSW1hZ2VWaWV3LCB7XG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94LWltYWdlLXByZXZpZXcnLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IGFsbGRhdGE6IGltZyB9XG4gICAgfSk7XG4gIH1cbiAgb25TdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICB0aGlzLmVycm9ybWcgPSAnJztcbiAgICBsZXQgZGF0YSA9IHRoaXMubXlGb3JtLnZhbHVlO1xuICAgIGZvciAoeCBpbiB0aGlzLm15Rm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5teUZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuICBkYXRlU2VhcmNoKHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5lbmRfZGF0ZSk7XG4gICAgLy8gbGV0IHNkID0gbW9tZW50KHRoaXMuc3RhcnRfZGF0ZSkudW5peCgpO1xuICAgIC8vIGxldCBlZCA9IG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCk7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICBsZXQgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCsnLWNvdW50JztcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGxldCB0ZXh0U2VhcmNoOmFueT17fTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG5cblxuXG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXG4gICAgICBpZih0aGlzLmVuZF9kYXRlIT1udWxsICYmIHRoaXMuc3RhcnRfZGF0ZSE9bnVsbCkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IobGV0IGkgaW4gdGhpcy50c2VhcmNoKXtcbiAgICAgICAgdGV4dFNlYXJjaFtpXT17JHJlZ2V4OnRoaXMudHNlYXJjaFtpXS50b0xvd2VyQ2FzZSgpfTtcbiAgICAgIH1cblxuICAgICAgbGV0IGF1dG9zZWFyY2g6YW55PXt9O1xuICAgICAgLy90aGlzLmF1dG9zZWFyY2g7XG4gICAgICBmb3IobGV0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKXtcbiAgICAgICAgZm9yKGxldCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSl7XG4gICAgICAgICAgbGV0IHR2OmFueT17fTtcbiAgICAgICAgICB0dltiXT10aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYoYXV0b3NlYXJjaFsnJG9yJ109PW51bGwpIGF1dG9zZWFyY2hbJyRvciddPVtdO1xuICAgICAgICAgIGF1dG9zZWFyY2hbJyRvciddLnB1c2godHYpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgICAgc291cmNlID0ge1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgICBza2lwOjBcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDp7XG4gICAgICAgICAgZmllbGQ6dGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICB0eXBlOnRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgIH07XG5cbiAgICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgICAgLy9jb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAvL3JldHVybjtcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsPTA7XG4gICAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSlcblxuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZihyZXN1bHQuY291bnQ9PTApIHRoaXMudGFibGVmbGFnPTE7XG4gICAgICAgIGVsc2UgdGhpcy50YWJsZWZsYWc9MDsgXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSlcblxuICAgICAgLyp0aGlzLl9odHRwLnBvc3QobGluaywge3NvdXJjZTp0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgJ2NyZWF0ZWRfYXQnOiB7XG4gICAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICB9XG4gICAgICAgIH0sdG9rZW46IHRoaXMuand0dG9rZW52YWwsXG4gICAgICB9KS5zdWJzY3JpYmUoIHJlcyA9PntcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID17fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzKTtcbiAgICAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSkqL1xuICAgIH0gZWxzZVxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuXG5cblxuICBzZWxlY3RTZWFyY2godmFsdWU6IGFueSwgdHlwZTogYW55KSB7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIGNvbmRpdGlvblt0eXBlLmZpZWxkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuICBwYWdpbmcodmFsOmFueSl7XG4gICAgaWYodmFsPT0xKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPSh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpKnRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgfVxuICAgIGlmKHZhbD09LTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcD50aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcD0odGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LTEpKnRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgfVxuICAgIGlmKHZhbD4xKXtcbiAgICAgIGlmKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudD09MSkgdGhpcy5saW1pdGNvbmR2YWwuc2tpcD0wO1xuICAgICAgZWxzZSB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPSh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtMSkqdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICAvL3RoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuXG4gICAgfVxuICAgIGlmKHZhbD09LTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcDx0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkgcmV0dXJuO1xuICAgIC8vY29uc29sZS5sb2codmFsLCdzcycsdGhpcy5kYXRhY29sbGVjdGlvbnZhbCx0aGlzLmxpbWl0Y29uZHZhbCk7XG4gICAgbGV0IHRleHRTZWFyY2g6YW55PXt9O1xuXG5cbiAgICBmb3IobGV0IGkgaW4gdGhpcy50c2VhcmNoKXtcbiAgICAgIHRleHRTZWFyY2hbaV09eyRyZWdleDp0aGlzLnRzZWFyY2hbaV0udG9Mb3dlckNhc2UoKX07XG4gICAgfVxuXG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICBsZXQgc291cmNlID0ge1xuICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgIGxpbWl0OnRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOnRoaXMubGltaXRjb25kdmFsLnNraXBcbiAgICAgIH0sXG4gICAgICBzb3J0OntcbiAgICAgICAgZmllbGQ6dGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgdHlwZTp0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgIH0sXG4gICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICB9O1xuXG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICAvKmxldCBkYXRhOmFueT17XG4gICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6dGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfVxuXG4gICAgfSovXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlc3VsdCwncmVzJyk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIGFkZGF1dG9zZWFyY2hkYXRhKHZhbDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCd2Jyx2YWwpO1xuXG4gIH1cbiAgcmVtb3ZlKHZhbDphbnksaTphbnksZmllbGQ6YW55KXtcblxuICAgIGlmKHRoaXMuYXV0b3NlYXJjaFtmaWVsZF0gIT1udWxsKXRoaXMuYXV0b3NlYXJjaFtmaWVsZF0uc3BsaWNlKGksMSk7XG4gIH1cbiAgYXV0b3NlYXJjaGZ1bmN0aW9uKHZhbHVlOiBhbnksZGF0YTphbnkpIHtcbiAgICB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV09Jyc7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2hpbnB1dCwnYXNpJyk7XG4gICAgaWYodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXT09bnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXT1bXTtcbiAgICAgIDtcbiAgICB9XG4gICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5wdXNoKGRhdGEpO1xuICAgIC8vY29uc29sZS5sb2codmFsdWUsZGF0YSwnc3MnLHRoaXMuYXV0b3NlYXJjaCk7XG4gICAgLypsZXQgdmFsOiBhbnkgPSB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSAhPW51bGwgJiYgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAwICYmIHsgJG9yOiBbdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV1dIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9OyovXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXMpO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAvLyB9KTtcbiAgfVxuXG4gIHRleHRzZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55KSB7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgbGV0IHZhbD0nJztcbiAgICBpZih0aGlzLnRzZWFyY2ghPW51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXSE9bnVsbClcbiAgICB7XG4gICAgICB2YWw9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICBcbiAgICBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSE9bnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDEgJiYgeyAkb3I6IFt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsO1xuICAgIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIC8vY29uc29sZS53YXJuKHRoaXMudHNlYXJjaCk7XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvL2FkZCBsb2FkZXJcbiAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgLy9jbG9zZSBsb2FkZXJcbiAgICAvLyAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cbiAgcmVmcmVzaGRhdGEoKXtcbiAgICB0aGlzLmF1dG9zZWFyY2g9W107XG4gICAgdGhpcy50c2VhcmNoPVtdO1xuICAgIHRoaXMuc2VsZWN0c2VhcmNoPVtdO1xuICAgIHRoaXMuc3RhcnRfZGF0ZT1udWxsO1xuICAgIHRoaXMubGltaXRjb25kdmFsLnNraXA9MDtcbiAgICB0aGlzLmVuZF9kYXRlPW51bGw7XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uPXt9O1xuICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb249e307XG4gICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgfVxuICByZWZyZXNoYWxsZGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIGlmICh2YWwuZmlsdGVyZWREYXRhICE9bnVsbCAmJiB2YWwuZmlsdGVyZWREYXRhLmxlbmd0aCA8IHRoaXMub2xkZGF0YS5sZW5ndGgpIHtcbiAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlZnJlc2ggc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJyBVcGRhdGVkISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICBnZXRzdGF0dXModmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICBmb3IgKGxldCBiIGluIHRoaXMuc3RhdHVzYXJydmFsKSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXNhcnJ2YWxbYl0udmFsID09IHZhbClcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiTi9BXCI7XG4gIH1cbiAgcGRmRmxhZyh2YWw6IGFueSkge1xuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hhdHRlciBibG9rJyk7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdyYXB1cmwodmFsOiBhbnkpIHtcbiAgICAvLyAgZm9yIGFsbCByb3cgY2hlY2tpbmdcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpXG4gICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZDIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZDIgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zaCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdWQpO1xuICB9XG5cbiAgY29weVRleHQocm93OiBhbnksIHZhbDogc3RyaW5nKSB7XG5cbiAgICBsZXQgZnVsbHVybCA9IHZhbCArICcnICsgcm93O1xuICAgIGxldCBzZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHNlbEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgc2VsQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLnRvcCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBzZWxCb3gudmFsdWUgPSBmdWxsdXJsO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsQm94KTtcbiAgICBzZWxCb3guZm9jdXMoKTtcbiAgICBzZWxCb3guc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNlbEJveCk7XG4gIH1cblxuICBvcGVuaW50ZXJuYWxsaW5rKHZhbDphbnkpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt2YWwucm91dGVdKTtcbiAgfVxuICBvcGVuaW50ZXJuYWxsaW5rd2l0aHBhcmFtKHZhbDphbnksZGF0YTphbnkpe1xuICAgIGxldCByZGF0YTphbnk9W107XG4gICAgcmRhdGEucHVzaCh2YWwucm91dGUpO1xuICAgIGZvcihsZXQgdiBpbiB2YWwucGFyYW0pe1xuICAgICByZGF0YS5wdXNoKGRhdGFbdmFsLnBhcmFtW3ZdXSlcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygncmFkYXQnLHJkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShyZGF0YSk7XG4gIH1cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YSh2YWw6YW55LGRhdGE6YW55KXtcbiAgICAvL2NvbnNvbGUubG9nKCdvcGVuY3VzdG9tYnV0dG9uYWN0aW9ubG9jYWxkYXRhJyx2YWwsZGF0YSk7XG4gICAgbGV0IGRhdGFhcnI9W107XG4gICAgLy9kYXRhYXJyLnB1c2goWyduYW1lJywnZGViYXNpcyddKTtcbiAgICAvL2RhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgIGlmKHZhbC5yZWZyZXNoZGF0YSE9bnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBmb3IobGV0IHYgaW4gdmFsLmRhdGFmaWVsZHMpe1xuICAgICAgbGV0IHRlbXBhcnI9W107XG4gICAgICB0ZW1wYXJyLnB1c2godmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgaWYodmFsLmRhdGFmaWVsZHNbdl0hPSdpbWFnZScgJiYgdmFsLmRhdGFmaWVsZHNbdl0hPSd2aWRlbycpXG4gICAgICAgIHRlbXBhcnIucHVzaChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICBpZih2YWwuZGF0YWZpZWxkc1t2XT09J2ltYWdlJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArIFwiID4gPGJyLz5cIilcbiAgICAgIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB7XG4gICAgICAgIGxldCB0ZW1waHRtbCA6YW55PShcIjxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArXCIgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+XCIpO1xuICAgICAgICB0ZW1waHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRlbXBodG1sKTtcbiAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgIH1cbiAgICAgIC8vaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ2RhdGFhcnInLGRhdGFhcnIpO1xuICAgIGlmKHZhbC5yZWZyZXNoZGF0YSE9bnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC1hcGlkYXRhJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBkYXRhYXJyIH1cbiAgICB9KTtcbiAgfVxuICBvcGVuY3VzdG9tYnV0dG9uYWN0aW9uYXBpZGF0YSh2YWw6YW55LGRhdGE6YW55KXtcbiAgICBjb25zb2xlLmxvZygnb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmFwaWRhdGEnLHZhbCxkYXRhKTtcbiAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICBsZXQgbGluazphbnk9dGhpcy5hcGl1cmx2YWwgK3ZhbC5lbmRwb2ludDtcbiAgICBsZXQgc291cmNlOmFueT17fTtcbiAgICBzb3VyY2VbdmFsLnBhcmFtXT1kYXRhLl9pZDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICBjb25zb2xlLmxvZygncmVzJyxyZXN1bHQpO1xuICAgICBsZXQgcmVzZGF0YTphbnk9e307XG4gICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgaWYocmVzdWx0LnJlc1swXSE9bnVsbCl7XG4gICAgICAgcmVzZGF0YT1yZXN1bHQucmVzWzBdO1xuICAgICB9ZWxzZXtcbiAgICAgICByZXNkYXRhPXJlc3VsdC5yZXM7XG4gICAgIH1cblxuICAgICAgbGV0IGRhdGFhcnI9W107XG4gICAgICAvL2RhdGFhcnIucHVzaChbJ25hbWUnLCdkZWJhc2lzJ10pO1xuICAgICAgLy9kYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICAgIGZvcihsZXQgdiBpbiByZXNkYXRhKXtcbiAgICAgICAgbGV0IHRlbXBhcnI9W107XG4gICAgICAgIHRlbXBhcnIucHVzaCh2KTtcbiAgICAgICAgaWYodiE9J2ltYWdlJyAmJiB2IT0ndmlkZW8nKVxuICAgICAgICAgIHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTtcbiAgICAgICAgaWYodj09J2ltYWdlJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyByZXNkYXRhW3ZdICsgXCIgPiA8YnIvPlwiKVxuICAgICAgICBpZih2PT0ndmlkZW8nKSB7XG4gICAgICAgICAgbGV0IHRlbXBodG1sIDphbnk9KFwiPGlmcmFtZSB3aWR0aD01NjAgaGVpZ2h0PTMxNSBzcmM9aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrcmVzZGF0YVt2XSArXCIgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+XCIpO1xuICAgICAgICAgIHRlbXBodG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGVtcGh0bWwpO1xuICAgICAgICAgIHRlbXBhcnIucHVzaCh0ZW1waHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZih2YWwuZGF0YWZpZWxkc1t2XT09J3ZpZGVvJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArIFwiID4gPGJyLz5cIilcbiAgICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKCdkYXRhYXJyJyxkYXRhYXJyKTtcbiAgICAgIGlmKHZhbC5yZWZyZXNoZGF0YSE9bnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogZGF0YWFyciB9XG4gICAgICB9KTtcblxuICAgIH0pO1xuICAgIHJldHVybjtcblxuICB9XG4gIG9wZW5leHRsaW5rd2l0aHBhcmFtKHZhbDphbnksZGF0YTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCd2YWwnLHZhbCxkYXRhKTtcbiAgICBsZXQgcXRleHQ6YW55PScnO1xuICAgIGxldCBmdWxsbGluazphbnk9Jyc7XG4gICAgZnVsbGxpbms9dmFsLmxpbms7XG4gICAgaWYodmFsLnBhcmFtdHlwZT09bnVsbCkge1xuICAgICAgZm9yIChsZXQgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgcXRleHQgPSB2YWwucGFyYW1bdl0ucSArIFwiPVwiICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdxdGV4dCcscXRleHQpO1xuICAgICAgICBpZiAocGFyc2VJbnQodikgPT0gMCkgZnVsbGxpbmsgPSBmdWxsbGluayArICc/JyArIHF0ZXh0O1xuICAgICAgICBpZiAocGFyc2VJbnQodikgIT0gMCkgZnVsbGxpbmsgPSBmdWxsbGluayArICcmJyArIHF0ZXh0O1xuICAgICAgfVxuICAgICAgLy92YWwubGluaz1mdWxsbGluaztcbiAgICB9XG4gICAgaWYodmFsLnBhcmFtdHlwZSE9bnVsbCAmJiB2YWwucGFyYW10eXBlPT0nYW5ndWxhcicpe1xuICAgICAgZm9yIChsZXQgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgLy9xdGV4dCA9IHZhbC5wYXJhbVt2XS5xICsgXCI9XCIgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl0ua2V5XSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG5cbiAgICAgICAgICBmdWxsbGluayA9IGZ1bGxsaW5rICsgJy8nICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdXSk7XG4gICAgICB9XG4gICAgICAvL3ZhbC5saW5rPWZ1bGxsaW5rO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gc2V0VGltZW91dFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKCdsaW5rJyxmdWxsbGluayxkYXRhLHF0ZXh0KTtcbiAgICB9LCAxMCk7XG5cbiAgICB3aW5kb3cub3BlbihmdWxsbGluaywgXCJfYmxhbmtcIik7XG4gIH1cbiAgY2xpY2t1cmwodmFsOiBhbnksIHVybDogYW55KSB7XG4gICAgbGV0IGxpbmsgPSB1cmwgKyAnJyArIHZhbC5faWQgKyAnJyArIHRoaXMucGRmX2xpbmtfdmFsO1xuICAgIHdpbmRvdy5vcGVuKGxpbmssIFwiX2JsYW5rXCIpO1xuICB9XG5cblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0aW9uIT1udWxsICYmIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCkge1xuICAgICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDogYW55KSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgXCJfXCIpXSA9IHBvaW50W2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgLyphcHBseUZpbHRlcjEoZmlsdGVyVmFsdWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsLnZhbHVlKTtcbiAgICBsZXQgdmFsdWU9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodmFsLnZhbHVlKTtcblxuICAgIHZhbHVlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvISogdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IGZ1bmN0aW9uKGRhdGEsIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAvLyByZXR1cm4gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH0qIS9cbiAgfSovXG5cbiAgc3R5bGVDZWxsKGNvbF9uYW1lLCByb3cpIHtcblxuICAgIC8qXG4gICAgIGlmIChjb2xfbmFtZVsnY29sdW1uRGVmJ109PSdwcm9ncmVzcycgJiYgcm93Wydwcm9ncmVzcyddPT0nMTAwJyl7XG4gICAgIHJldHVybiB7J2NvbG9yJyA6ICdyZWQnfVxuICAgICB9IGVsc2Uge1xuICAgICByZXR1cm4ge31cbiAgICAgfVxuICAgICAqL1xuXG5cbiAgICByZXR1cm4ge31cbiAgfVxuICAvKipzaG93IHZpZGVvIG1vZGFsIG9uIGNsaWNrIG9mIHRoYW1uYWlsIGZ1bmN0aW9uIGJ5IHNvdXJhdiAqL1xuICBmZXRjaHZpZGVvKHZpZGVvZGF0YTphbnkpe1xuICAgIC8vY29uc29sZS53YXJuKCd2aWRlb2RhdGEnLHZpZGVvZGF0YSk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihWaWRlb1BsYXllciwge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC12aWRlb3BsYXllci1wcmV2aWV3JyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBwcmV2aWV3RGF0YTogdmlkZW9kYXRhIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZpZXdkYXRhKGRhdGExOiBhbnkpIHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSBkYXRhMTtcbiAgICBsZXQgZGF0YTI6IGFueSA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGxldCBmbGFnazogYW55ID0gJyc7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSB0cnVlKSBkYXRhW2tleV0gPSAnWWVzJztcbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IGZhbHNlKSBkYXRhW2tleV0gPSAnTm8nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT0gJ2ltYWdlJykge1xuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9IFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW2tleV0gKyBcIj48YnIvPlwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGxldCB0ZW1wZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgayBpbiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IHAgaW4gdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgPT0gJ2ltYWdlJykge1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGltZ3ZhbDphbnk9dGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0uZmlsZXVybCtkYXRhW2tleV1ba107XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWd2YWwpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVtrZXldW2tdLnJlcGxhY2UoLycvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW2tleV1ba10gKyBcIj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIrZGF0YVtrZXldW2tdK1wiPC9zcGFuPjxici8+XCIpXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlICE9ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAvL3RlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIgKyBkYXRhW2tleV1ba10gKyBcIjwvc3Bhbj48YnIvPlwiKTtcblxuXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgLy90ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldW2tdKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgb2JqayBpbiBkYXRhW2tleV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaChcIjxzcGFuPlwiICsgb2JqayArIFwiIDogXCIgKyBkYXRhW2tleV1ba11bb2Jqa10gKyBcIjwvc3Bhbj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSB0ZW1wZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IG4gaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFbbl0gIT0gbnVsbCAmJiBkYXRhW25dICE9ICcnKSB7XG4gICAgICAgIGRhdGEyW25dID0gZGF0YVtuXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpIHtcbiAgICAgIC8vZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV09Jyc7XG4gICAgICBkZWxldGUgZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV07XG4gICAgfVxuICAgIGxldCByZXMgPSBPYmplY3QuZW50cmllcyhkYXRhMik7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG5cbiAgfVxuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgbGV0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IHBhbmVsQ2xhc3M6ICdjdXN0b20tYm90dG9tc2hlZXQnLCBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXModGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnQsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy90aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKXtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6cmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOidTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIGZvciB0cmVlIHZpZXcgaW4gbW9kYWxcbiAgY3VzdG9tYnV0dG9uZnVuYyhkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpOyAgICAvLyByb3cgZGF0YVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tYnV0dG9udmFsKTsgICAgLy8gb2JqZWN0IGZyb20gd2hlcmUgdGhlIGxpYnJhcnkgaGFzIGJlZW4gdXNlZFxuICAgIGxldCB1bnNhZmV1cmw6IGFueSA9IHRoaXMuY3VzdG9tYnV0dG9udmFsLnVybDsgICAvL2lmcmFtZSB1cmxcbiAgICBmb3IgKGxldCBiIGluIHRoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkcykge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgZGF0YVt0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHNbYl1dO1xuICAgIH1cbiAgICB1bnNhZmV1cmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodW5zYWZldXJsKTsgICAvL2ZvciBzYW5pdGl6aW5nIHRoZSB1cmwgZm9yIHNlY3VyaXR5LCBvdGhlcndpc2UgaXQgd29uJ3QgYmUgYWJsZSB0byBzaG93IHRoZSBwYWdlIGluIGlmcmFtZSwgaGVuY2UgbW9kYWxcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywgeyAgICAgICAvLyBmb3Igb3BlbmluZyB0aGUgbW9kYWxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1kYXRhLW1vZGFsJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBbeyBkYXRhOiBkYXRhLCBjdXN0b21kYXRhOiB1bnNhZmV1cmwgfV0gfVxuICAgIH0pO1xuXG5cbiAgfVxuXG5cblxuICBtYW5hZ2VzdGF0dXNtdWx0aXBsZSgpIHtcblxuICAgIGxldCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwgeyBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIC8vZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICAvL2RhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgbGV0IG5ld3N0YXR1czogYW55ID0gcmVzdWx0LnZhbDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXNtYW55KHRoaXMuYXBpdXJsdmFsICsgJ3N0YXR1c3VwZGF0ZScsIGlkcywgcmVzdWx0LnZhbCwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvL3RoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YodGhpcy5vbGRkYXRhW2NdLl9pZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBuZXdzdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOidTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRlbGV0ZW11bHRpcGxlKCkge1xuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHNlbGVjdGVkIHJlY29yZHM/JyB9XG4gICAgfSk7XG4gICAgbGV0IGlkczogYW55ID0gW107XG4gICAgbGV0IGM6IGFueTtcbiAgICBmb3IgKGMgaW4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCA9PSAneWVzJykge1xuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlLmRldGVNYW55RGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwsIGlkcywgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIGluIGlkcykge1xuICAgICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkKHMpICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6J1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hISd9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICAvL3RoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZWRhdGEoZGF0YTogYW55KSB7XG4gICAgLy9hbGVydCg1KTtcbiAgICAvL3RoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwrdGhpcy5kZWxldGVlbmRwb2ludHZhbCxkYXRhLHRoaXMuand0dG9rZW52YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhIDg4OSAtLS0nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnand0dG9rZW52YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKTtcblxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIHJlY29yZCA/PycgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLCBkYXRhLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBkYXRhLl9pZClcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlY29yZCAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJyl7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOnJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTonU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJ31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCwgZGF0YS5faWRdKTtcbiAgfVxuXG5cbiAgc29ydHRhYmxlKGZpZWxkOmFueSx0eXBlOmFueSl7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbC5maWVsZD1maWVsZDtcbiAgICB0aGlzLnNvcnRkYXRhdmFsLnR5cGU9dHlwZTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICB9XG5cbiAgYWxsU2VhcmNoKCl7XG4gICAgY29uc29sZS5sb2coXCJoaXRcIik7XG5cbiAgICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIGxldCBsaW5rMSA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsKyctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgbGV0IHRleHRTZWFyY2g6YW55PXt9O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLnRzZWFyY2gpe1xuICAgICAgdGV4dFNlYXJjaFtpXT17JHJlZ2V4OnRoaXMudHNlYXJjaFtpXS50b0xvd2VyQ2FzZSgpfTtcbiAgICB9XG5cbiAgICBsZXQgYXV0b3NlYXJjaDphbnk9e307XG4gICAgLy90aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yKGxldCBiIGluIHRoaXMuYXV0b3NlYXJjaCl7XG4gICAgICBmb3IobGV0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKXtcbiAgICAgICAgbGV0IHR2OmFueT17fTtcbiAgICAgICAgdHZbYl09dGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZihhdXRvc2VhcmNoWyckb3InXT09bnVsbCkgYXV0b3NlYXJjaFsnJG9yJ109W107XG4gICAgICAgIGF1dG9zZWFyY2hbJyRvciddLnB1c2godHYpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdhdXRvcycsYXV0b3NlYXJjaCk7XG5cblxuXG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbix0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgIGxpbWl0OnRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOjBcbiAgICAgIH0sXG4gICAgICBzb3J0OntcbiAgICAgICAgZmllbGQ6dGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgdHlwZTp0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgIH0sXG4gICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAvL3JldHVybjtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbD0wO1xuICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICB0aGlzLmxvYWRpbmc9ZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIH0pXG5cbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gKHJlc3VsdC5jb3VudCk7XG4gICAgICBpZihyZXN1bHQuY291bnQ9PTApIHRoaXMudGFibGVmbGFnPTE7XG4gICAgICBlbHNlIHRoaXMudGFibGVmbGFnPTA7XG4gICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgfSlcblxuICB9XG5cblxuXG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBzdGFydCAqL1xuICBhcnRpc3R4cFByZXZpZXcoc2luZ2xlRGF0YTogYW55KSB7XG4gICAgbGV0IGxpbmsgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjMwOTAvJyArICdkYXRhbGlzdCc7XG4gICAgLyoqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKiovXG4gICAgbGV0IGRhdGE6IGFueSA9IHsgXCJzb3VyY2VcIjogXCJibG9ja2NoYWludXNlcl92aWV3XCIsIFwiY29uZGl0aW9uXCI6IHsgXCJwb3N0c19pZF9vYmplY3RcIjogc2luZ2xlRGF0YS5faWQgfSwgXCJ0b2tlblwiOiB0aGlzLmp3dHRva2VudmFsIH07XG4gICAgLyoqKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKiovXG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0RGF0YShsaW5rLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3RsdDogYW55ID0gcmVzcG9uc2U7XG4gICAgICAvKiBvcGVuIGRpYWxvZyAqL1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtYXJ0aXN0eHAtcHJldmlldycsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBkYXRhOiB7IHByZXZpZXc6IHRydWUsIHByZXZpZXdEYXRhOiByZXN0bHQgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gZW5kICovXG5cblxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1kaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1kaWFsb2c+LFxuICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGxldCBiIGluIGRhdGEpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIHJvd2RhdGFbZGF0YVtiXV07XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpO1xuICB9XG5cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIGNvbnNvbGUud2FybihcImJvdHRvbS1zaGVldFwiLGRhdGEpO1xuICB9XG5cbiAgb3BlbkxpbmsodmFsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmJvdHRvbVNoZWV0UmVmLmRpc21pc3ModmFsKTtcbiAgfVxufVxuXG4vKipsaXN0aW5nIHZpZGVvIHBsYXllciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmlkZW9wbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJ3ZpZGVvcGxheWVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBWaWRlb1BsYXllciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VmlkZW9QbGF5ZXI+LFxuICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUud2FybigndmlkZW9wbGF5ZXJNb2RhbCcsZGF0YS5wcmV2aWV3RGF0YS52aWRlbyk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG4vKipsaXN0aW5nIEltYWdlIFZpZXcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWdfbW9kYWxfdmlldy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZVZpZXc+LFxuICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUud2FybignSW1hZ2VWaWV3TW9kYWwnLGRhdGEuYWxsZGF0YSk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2snLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICAgIGNvbG9yOiBob3RwaW5rO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgc25hY2tCYXJSZWY6IE1hdFNuYWNrQmFyUmVmPFNuYWNrYmFyQ29tcG9uZW50PixcbiAgICAgIEBJbmplY3QoTUFUX1NOQUNLX0JBUl9EQVRBKSBwdWJsaWMgZGF0YTogYW55XG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdzbmFjaycsdGhpcy5kYXRhKTtcbiAgfVxufVxuIl19