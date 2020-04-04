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
//import {ProgressBarMode} from '@angular/material/progress-bar';
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
     */
    constructor(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer) {
        this._apiService = _apiService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.fb = fb;
        this.router = router;
        this.resolver = resolver;
        this.container = container;
        this._http = _http;
        this.sanitizer = sanitizer;
        this.myControl = new FormControl();
        this.columns = [];
        this.autosearchinput = [];
        this.olddata = [];
        this.tsearch = [];
        this.tableflag = 0;
        this.autosearch = [];
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
        this.jwttokenval = jwttoken;
        //console.log(this.jwttokenval)
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
        displayedcols.push('Actions');
        this.displayedColumns = displayedcols;
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
            let conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition);
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
        let conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, this.autosearch, this.selectSearch_condition);
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
                this._apiService.togglestatus(this.apiurlval + 'statusupdate', data, this.jwttokenval, this.sourcedataval).subscribe((/**
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
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.log('Oooops!');
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
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.log('Oooops!');
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
        let conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition);
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
            console.log('count', result);
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
                template: "<div class=\"container\">\n\n\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\">\n            <span class=\"inputfilter\">\n                <!-- <mat-form-field class=\"searchdiv\">\n\n      <input  class=\"filterForFilter\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field> -->\n            </span>\n            <span class=\"inputfilterForloop\" *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\" >\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field)\" (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\" >\n                            search\n                        </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </span>\n\n            <span class=\"inputfilterForAuto\" *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip\n            *ngFor=\"let v of autosearch[item.field]; let i=index;\"\n            [selectable]=\"true\"\n            [removable]=\"true\"\n            (removed)=\"remove(v,i,item.field)\">\n      {{v.name}}\n        <mat-icon matChipRemove >cancel</mat-icon>\n    </mat-chip>\n    <input\n            placeholder=\"{{item.label}}\"\n            #fruitInput\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"chipList\"\n            [(ngModel)]=\"autosearchinput[item.field]\"\n            >\n  </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete  #auto=\"matAutocomplete\" >\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of item.values\" [value]=\"statusval.val\" (click)=\"autosearchfunction(item.field,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </span>\n\n\n\n<!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container  class=\"filterForTexticon\" *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <mat-form-field *ngFor=\"let status of this.search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" >\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval\" (click)=\"selectSearch(statusval.val, status)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\"date_search_endpointval !=null && date_search_sourceval != null && search_settingsval.datesearch != null \">\n                <span  class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"autocomplete=\"off\"  placeholder=\"{{status.startdatelabel}}\"  [(ngModel)]=\"start_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input  class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1 ></mat-datepicker>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                </span>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <ng-container class=\"refresh\">\n                <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                    autorenew\n                </i>\n            </ng-container>\n\n            <ng-container class=\"refresh\"  *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"allSearch()\">Search</button>\n            </ng-container>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\" [routerLink]=\"click_to_add_ananother_pageval\" >Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\"  class=\"example-section\">\n            <mat-progress-bar\n                    class=\"example-margin\"\n                    [color]=\"color\"\n                    [mode]=\"mode\"\n                    [value]=\"value\"\n                    [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n        </section>\n        <br/>\n        <br/>\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\n\n                <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                      (change)=\"$event ? selection.toggle(row) : null\"\n                                      [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">\n                        <span>\n                            {{column.header}}\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\" class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                            arrow_downward\n                        </span>\n                        <span class=\"material-icons cursor float-right\" *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"  (click)=\"sorttable(column.columnDef,'desc')\" >arrow_upward\n                        </span>\n\n                            <span class=\"material-icons cursor\" *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\" (click)=\"sorttable(column.columnDef,'desc')\" >\n                                unfold_more\n                            </span>\n\n                        </span>\n\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"   class=\"td-cell-center\">\n          \n                        <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }} {{pdfFlag(row)}}</span>\n                        <span *ngIf=\"column.columnDef!='status' &&  column.columnDef!='image' && column.columnDef!='video'\">{{ column.cell(row) }}</span>\n                        <!-- for image view  -->\n                        <span *ngIf=\"column.columnDef=='image'\" (click)=\"img_modal_view(column.cell(row))\"> <span class=\"module_imgblock\"><img src=\"{{ column.cell(row) }}\" alt=\"{{ column.cell(row) }}\" ></span></span>\n                        <!-- for video view -->\n                        <span *ngIf=\"column.columnDef=='video' \"><span class=\"module_videoblock\" (click)=\"fetchvideo(row)\">\n                            <img src=\"https://img.youtube.com/vi/{{ column.cell(row) }}/sddefault.jpg\" alt=\"{{ column.cell(row) }}\"\n                                 (click)=\"fetchvideo(row)\"></span>\n                        </span>\n\n                        <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n                        <br>\n\n                        <!--          <span *ngIf=\"sh==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null\" class=\"cursor\">\n                            <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && aud==true  && urlval !=null\">\n                            <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n\n\n<!--// for grap url//-->\n\n\n\n                        <span *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name]\" class=\"cursor\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url)\">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <br>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef== [grab_linkval[0].col_name]\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url)\">{{grab_linkval[2].label}}</button>\n                        </span>\n\n                        <!--          //grap url end//-->\n\n\n<!--          </span>-->\n                        <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n\n\n\n                <ng-container matColumnDef=\"Actions\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n                    <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\" data-label=\"Actions\"  class=\"td-cell-center\">\n                        <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                            <span class=\"cursor\" (click)=\"editdata(row)\" >\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" (click)=\"deletedata(row)\" >\n                                <i class=\"material-icons\">\n                                    delete_outline\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" (click)=\"viewdata(row)\" >\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" (click)=\"managestatus(row)\" >\n                                <i class=\"material-icons\">\n                                    toggle_off\n                                </i>\n                            </span>\n                            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\" >\n                                <i class=\"material-icons treeclass\">\n                                    toggle_off\n                                </i>\n                            </span>\n\n                            <!-- artistxp preview start -->\n                            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                <i class=\"material-icons\">perm_media</i>\n                            </span>\n                            <!-- artistxp preview end -->\n\n                        </span>\n\n                    </td>\n                </ng-container>\n\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n\n        <mat-card *ngIf=\"tableflag!=0\">No Records Exists !!!</mat-card>\n        <ng-container *ngIf=\"tableflag==0\">\n\n            <mat-label>Showing {{(limitcondval.pagecount-1)*limitcondval.limit}} To  {{(limitcondval.pagecount)*limitcondval.limit}} of </mat-label>\n            <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n            <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n            <mat-form-field>\n                <mat-label>Page Size</mat-label>\n                <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-label>Page No</mat-label>\n                <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n            </mat-form-field>\n\n\n            <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                skip_previous\n            </span>\n\n            <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                skip_next\n            </span>\n\n        </ng-container>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>\n",
                styles: [".container{background:#fff}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}"]
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
    { type: DomSanitizer }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUVuSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxRQUFRLENBQUM7OztNQUduQyxNQUFNLEdBQUcsY0FBYzs7OztBQUM3QixnQ0FFQzs7O0lBREMsNkJBQWE7O0FBT2YsTUFBTSxP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ZTs7OztJQUR2Qiw4QkFBeUM7O0lBQ3pDLHlCQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBJbmplY3QsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYsIE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciwgRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuaW1wb3J0ICogYXMgbW9tZW50SW1wb3J0ZWQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuLy9pbXBvcnQge1Byb2dyZXNzQmFyTW9kZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYWxsZGF0YTogYW55O1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy5tb2R1bGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmcubW9kdWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cbiAgZGF0YXNvdXJjZXZhbDogYW55O1xuICBzZWFyY2hfc2V0dGluZ3N2YWw6IGFueTtcbiAgY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsOiBhbnk7XG4gIGdyYWJfbGlua3ZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2V2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw6IGFueTtcbiAgdXJsdmFsOiBhbnk7XG4gIHNlYXJjaGVuZHBvaW50dmFsOiBhbnk7XG4gIHNlYXJjaExpc3R2YWw6IGFueTtcbiAgcGRmX2xpbmtfdmFsOiBhbnk7XG4gIHN0YXR1c2FycnZhbDogYW55O1xuICBza2lwdmFsOiBhbnk7XG4gIGVycm9ybWc6IGFueTtcbiAgand0dG9rZW52YWw6IGFueTtcbiAgZGV0YWlsX2RhdGF0eXBldmFsOiBhbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOiBhbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIGVkaXRyb3V0ZXZhbDogYW55O1xuICBhcGl1cmx2YWw6IGFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgbW9kaWZ5X2hlYWRlcl9hcnJheXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueTtcbiAgZGF0YWNvbGxlY3Rpb252YWw6IGFueTtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHNvdXJjZWRhdGF2YWw6IGFueTtcbiAgZW1haWxhcnJheXZhbDogYW55O1xuICBjb2x1bW5zOiBhbnkgPSBbXTtcbiAgYXV0b3NlYXJjaGlucHV0OiBhbnkgPSBbXTtcbiAgb2xkZGF0YTogYW55ID0gW107XG4gIHRzZWFyY2g6IGFueSA9IFtdO1xuICB0YWJsZWZsYWc6IGFueSA9IDA7XG4gIGF1dG9zZWFyY2g6IGFueSA9IFtdO1xuICBwdWJsaWMgeDogYW55O1xuICBwdWJsaWMgbGltaXRjb25kdmFsOiBhbnk9e307XG4gIHB1YmxpYyBjdXN0b21idXR0b252YWw6IGFueTtcbiAgcHVibGljIHJlc3VsdDogYW55ID0ge307XG4gIHB1YmxpYyBzb3J0ZGF0YXZhbDogYW55ID0ge307XG4gIHB1YmxpYyBzaDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhcnQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkMjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQ6IGFueSA9IGZhbHNlO1xuXG4gIC8qZm9yIHByb2dyZXNzIGJhciovXG5cbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcbiAgbW9kZTogYW55ID0gJ2luZGV0ZXJtaW5hdGUnO1xuICB2YWx1ZSA9IDUwO1xuICBidWZmZXJWYWx1ZSA9IDc1O1xuXG4gIC8qIHRoaXMgdmFyaWFibGUgZm9yIGFydGlzdCB4cCBwcmV2aWV3ICovXG4gIHByZXZpZXdGbHVnOiBhbnkgPSBmYWxzZTtcbiAgc2VsZWN0c2VhcmNoOmFueT1bXTtcblxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hfc2V0dGluZ3Moc2VhcmNoX3NldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCA9IHNlYXJjaF9zZXR0aW5ncztcbiAgICAvKmZvciAobGV0IGk9IDA7IGk8PSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFtpXS5sYWJlbCk7XG4gICAgfSovXG5cbiAgICAvKiAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS5sYWJlbCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0udmFsdWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2gpOyovXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlKGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTogYW55KSB7XG4gICAgdGhpcy5jbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2V2YWwgPSBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxpbWl0Y29uZChsaW1pdGNvbmR2YWw6IGFueSkge1xuICAgIHRoaXMubGltaXRjb25kdmFsID0gbGltaXRjb25kdmFsO1xuICAgIGNvbnNvbGUubG9nKCdsaW1pdGNvbmR2YWwnLHRoaXMubGltaXRjb25kdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50KGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw7XG4gICAgaWYodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw9PTApIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudD0xO1xuICAgIGNvbnNvbGUubG9nKCdkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQnLHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBncmFiX2xpbmsoZ3JhYl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLmdyYWJfbGlua3ZhbCA9IGdyYWJfbGluaztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tYnV0dG9uKGN1c3RvbWJ1dHRvbjogYW55KSB7XG4gICAgdGhpcy5jdXN0b21idXR0b252YWwgPSBjdXN0b21idXR0b247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlKGRhdGVfc2VhcmNoX3NvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNvcnRkYXRhKHNvcnRkYXRhdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNvcnRkYXRhdmFsID0gc29ydGRhdGF2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5zb3J0ZGF0YXZhbCwnc29ydGRhdGF2YWwnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9lbmRwb2ludChkYXRlX3NlYXJjaF9lbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbCA9IGRhdGVfc2VhcmNoX2VuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB1cmwodXJsOiBhbnkpIHtcbiAgICB0aGlzLnVybHZhbCA9IHVybDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoZW5kcG9pbnQoc2VhcmNoZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoZW5kcG9pbnR2YWwgPSBzZWFyY2hlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGRmX2xpbmsocGRmX2xpbms6IGFueSkge1xuICAgIHRoaXMucGRmX2xpbmtfdmFsID0gcGRmX2xpbms7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaExpc3Qoc2VhcmNoTGlzdDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hMaXN0dmFsID0gc2VhcmNoTGlzdDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0YXNvdXJjZShkYXRhc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2V2YWwgPSBkYXRhc291cmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhY29sbGVjdGlvbihkYXRhY29sbGVjdGlvbnZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCA9IGRhdGFjb2xsZWN0aW9udmFsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNraXAoc2tpcDogYW55KSB7XG4gICAgdGhpcy5za2lwdmFsID0gc2tpcDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX2RhdGF0eXBlKGRldGFpbF9kYXRhdHlwZTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwgPSBkZXRhaWxfZGF0YXR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9za2lwX2FycmF5KGRldGFpbF9za2lwX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsID0gZGV0YWlsX3NraXBfYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc291cmNlZGF0YShzb3VyY2VkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNvdXJjZWRhdGF2YWwgPSBzb3VyY2VkYXRhO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGlmeV9oZWFkZXJfYXJyYXkobW9kaWZ5X2hlYWRlcl9hcnJheTogYW55KSB7XG4gICAgdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsID0gbW9kaWZ5X2hlYWRlcl9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWxldGVlbmRwb2ludChkZWxldGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWxldGVlbmRwb2ludHZhbCA9IGRlbGV0ZWVuZHBvaW50dmFsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHVwZGF0ZWVuZHBvaW50KHVwZGF0ZWVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZWVuZHBvaW50dmFsID0gdXBkYXRlZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFwaXVybChhcGl1cmw6IGFueSkge1xuICAgIHRoaXMuYXBpdXJsdmFsID0gYXBpdXJsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGp3dHRva2VuKGp3dHRva2VuOiBhbnkpIHtcbiAgICB0aGlzLmp3dHRva2VudmFsID0gand0dG9rZW47XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHN0YXR1c2FycihzdGF0dXNhcnI6IGFueSkge1xuICAgIHRoaXMuc3RhdHVzYXJydmFsID0gc3RhdHVzYXJyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVtYWlsYXJyYXkoZW1haWxhcnJheTogYW55KSB7XG4gICAgdGhpcy5lbWFpbGFycmF5dmFsID0gZW1haWxhcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0cm91dGUoZWRpdHJvdXRlOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRyb3V0ZXZhbCA9IGVkaXRyb3V0ZTtcbiAgfVxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBzdGFydCAqL1xuICBASW5wdXQoKVxuICBzZXQgcHJldmlld19hcnRpc3R4cChmbHVnOiBhbnkpIHtcbiAgICB0aGlzLnByZXZpZXdGbHVnID0gdHJ1ZTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGVuZCAqL1xuXG5cbiAgc3RhdGVHcm91cHM6IHN0cmluZ1tdID0gdGhpcy5zZWFyY2hMaXN0dmFsO1xuICBzdGF0ZUdyb3VwOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkYXRhY29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc2hlYWRlcjogc3RyaW5nW10gPSBbXTtcbiAgZm9ybWFycmF5OiBhbnkgPSBbXTtcbiAgc3RhcnRfZGF0ZTogYW55O1xuICBkYXRlU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHNlbGVjdFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBhdXRvU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHRleHRTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgZW5kX2RhdGU6IGFueTtcbiAgcHVibGljIGk6IGFueTtcbiAgbG9hZGluZzogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBwcmVyZXN1bHQ6IGFueSA9IHt9O1xuICAvL2RhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMuZGF0YXNvdXJjZXZhbCk7XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICAvLyBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIG15Rm9ybTogYW55O1xuICAvLyBteUZvcm06YW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwdWJsaWMgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LCBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgX2h0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ6XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yOiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgLyogdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgfSk7Ki9cblxuXG5cbiAgfVxuICAvKkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW0xpc3RpbmddJ1xuICB9KSovXG5cblxuXG5cblxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9ICcnKSB7XG5cbiAgICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICAgIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgICAgc291cmNlID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvblxuICAgICAgfTtcbiAgICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMucHJlcmVzdWx0ID0gdGhpcy5yZXN1bHQucmVzO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgbGV0IHggPSB0aGlzLng7XG5cbiAgICBsZXQgdGVtcCA9IFtdXG4gICAgbGV0IGtleXMgPSB4WzBdXG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpICAgIC8qYnkgT2JqZWN0LmtleXMoKSB3ZSBjYW4gZmluZCB0aGUgZmllbGRuYW1lcyhvciBrZXlzKSBpbiBhbiBvYmplY3QsIGkuZSwgaW4gdGVtcCBvYmplY3QgZmllbGQgbmFtZXMgYXJlIHNhdmVkKi9cblxuICAgIGxldCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGxldCBoZWFkZXJfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29sZGVmX2xpc3QucHVzaCh0ZW1wW2ldLnJlcGxhY2UoL1xccy9nLCBcIl9cIikpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSlcbiAgICB9XG4gICAgLy9jb2xkZWZfbGlzdC5wdXNoKCdBY3Rpb25zJyk7XG4gICAgLy9oZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmZiA9IGByb3cuJHtjb2xkZWZfbGlzdFtpXX1gXG4gICAgICB2YXIgdHQgPSB7IGNvbHVtbkRlZjogYCR7Y29sZGVmX2xpc3RbaV19YCwgaGVhZGVyOiBgJHtoZWFkZXJfbGlzdFtpXS5yZXBsYWNlKC9fL2csIFwiIFwiKX1gLCBjZWxsOiAocm93KSA9PiBldmFsKGZmKSwgb2JqbGVuZ3RoOiBoZWFkZXJfbGlzdC5sZW5ndGggfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0dC5jb2x1bW5EZWYnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHR0LmNvbHVtbkRlZik7XG4gICAgICBmb3IgKGxldCBiIGluIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCkge1xuICAgICAgICBpZiAoYiA9PSB0dC5oZWFkZXIpIHR0LmhlYWRlciA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2tpcHZhbC5pbmRleE9mKHR0LmNvbHVtbkRlZikgPT0gLTEpXG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KTtcbiAgICB9XG4gICAgbGV0IGRpc3BsYXllZGNvbHMgPSB0aGlzLmNvbHVtbnMubWFwKHggPT4geC5jb2x1bW5EZWYpO1xuICAgIGRpc3BsYXllZGNvbHMucHVzaCgnQWN0aW9ucycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGlzcGxheWVkY29scztcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnc2VsZWN0Jyk7ICAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cblxuICAgIGxldCBkYXRhX2xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueC5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YV9saXN0LnB1c2godGhpcy5jcmVhdGVEYXRhKHhbaV0pKTtcbiAgICB9XG4gICAgdGhpcy5vbGRkYXRhID0gZGF0YV9saXN0O1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoZGF0YV9saXN0KTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzphbnkpe1xuLy9jb25zb2xlLndhcm4oXCJpbWdfbW9kYWxfdmlld1wiLGltZylcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEltYWdlVmlldywge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC1pbWFnZS1wcmV2aWV3JyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBhbGxkYXRhOiBpbWcgfVxuICAgIH0pO1xuICB9XG4gIG9uU3VibWl0KCkge1xuICAgIGxldCB4OiBhbnk7XG4gICAgdGhpcy5lcnJvcm1nID0gJyc7XG4gICAgbGV0IGRhdGEgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICBmb3IgKHggaW4gdGhpcy5teUZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cbiAgZGF0ZVNlYXJjaCh2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnQgZGF0ZVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXJ0X2RhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZW5kX2RhdGUpO1xuICAgIC8vIGxldCBzZCA9IG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKTtcbiAgICAvLyBsZXQgZWQgPSBtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpO1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgbGV0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwrJy1jb3VudCc7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBsZXQgdGV4dFNlYXJjaDphbnk9e307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgaWYgKG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCkgIT0gbnVsbCAmJiBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCkgIT0gbnVsbCkge1xuXG5cblxuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblxuICAgICAgaWYodGhpcy5lbmRfZGF0ZSE9bnVsbCAmJiB0aGlzLnN0YXJ0X2RhdGUhPW51bGwpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZm9yKGxldCBpIGluIHRoaXMudHNlYXJjaCl7XG4gICAgICAgIHRleHRTZWFyY2hbaV09eyRyZWdleDp0aGlzLnRzZWFyY2hbaV0udG9Mb3dlckNhc2UoKX07XG4gICAgICB9XG5cbiAgICAgIGxldCBhdXRvc2VhcmNoOmFueT17fTtcbiAgICAgIC8vdGhpcy5hdXRvc2VhcmNoO1xuICAgICAgZm9yKGxldCBiIGluIHRoaXMuYXV0b3NlYXJjaCl7XG4gICAgICAgIGZvcihsZXQgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pe1xuICAgICAgICAgIGxldCB0djphbnk9e307XG4gICAgICAgICAgdHZbYl09dGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmKGF1dG9zZWFyY2hbJyRvciddPT1udWxsKSBhdXRvc2VhcmNoWyckb3InXT1bXTtcbiAgICAgICAgICBhdXRvc2VhcmNoWyckb3InXS5wdXNoKHR2KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgICAgc2tpcDowXG4gICAgICAgIH0sXG4gICAgICAgIHNvcnQ6e1xuICAgICAgICAgIGZpZWxkOnRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgICAgdHlwZTp0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICB9O1xuXG4gICAgIC8vIGNvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAgIC8vY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgLy9yZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbD0wO1xuICAgICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICB0aGlzLmxvYWRpbmc9ZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rMSwgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAocmVzdWx0LmNvdW50KTtcbiAgICAgICAgaWYocmVzdWx0LmNvdW50PT0wKSB0aGlzLnRhYmxlZmxhZz0xO1xuICAgICAgICBlbHNlIHRoaXMudGFibGVmbGFnPTA7IFxuICAgICAgICBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pXG5cbiAgICAgIC8qdGhpcy5faHR0cC5wb3N0KGxpbmssIHtzb3VyY2U6dGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICdjcmVhdGVkX2F0Jzoge1xuICAgICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgfVxuICAgICAgICB9LHRva2VuOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgfSkuc3Vic2NyaWJlKCByZXMgPT57XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9e307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pKi9cbiAgICB9IGVsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuXG5cbiAgc2VsZWN0U2VhcmNoKHZhbHVlOiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBjb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cbiAgcGFnaW5nKHZhbDphbnkpe1xuICAgIGlmKHZhbD09MSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcD0odGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KSp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCsrO1xuICAgIH1cbiAgICBpZih2YWw9PS0xICYmIHRoaXMubGltaXRjb25kdmFsLnNraXA+dGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXA9KHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0xKSp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZih2YWw+MSl7XG4gICAgICBpZih0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ9PTEpIHRoaXMubGltaXRjb25kdmFsLnNraXA9MDtcbiAgICAgIGVsc2UgdGhpcy5saW1pdGNvbmR2YWwuc2tpcD0odGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LTEpKnRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgLy90aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcblxuICAgIH1cbiAgICBpZih2YWw9PS0xICYmIHRoaXMubGltaXRjb25kdmFsLnNraXA8dGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHJldHVybjtcbiAgICAvL2NvbnNvbGUubG9nKHZhbCwnc3MnLHRoaXMuZGF0YWNvbGxlY3Rpb252YWwsdGhpcy5saW1pdGNvbmR2YWwpO1xuICAgIGxldCB0ZXh0U2VhcmNoOmFueT17fTtcblxuXG4gICAgZm9yKGxldCBpIGluIHRoaXMudHNlYXJjaCl7XG4gICAgICB0ZXh0U2VhcmNoW2ldPXskcmVnZXg6dGhpcy50c2VhcmNoW2ldLnRvTG93ZXJDYXNlKCl9O1xuICAgIH1cblxuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgbGV0IHNvdXJjZSA9IHtcbiAgICAgIFwiY29uZGl0aW9uXCI6e1xuICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDp0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9LFxuICAgICAgc29ydDp7XG4gICAgICAgIGZpZWxkOnRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6dGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICB9LFxuICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgfTtcblxuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgLypsZXQgZGF0YTphbnk9e1xuICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgIGxpbWl0OnRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOnRoaXMubGltaXRjb25kdmFsLnNraXBcbiAgICAgIH1cblxuICAgIH0qL1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5yZXN1bHQsJ3JlcycpO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIH0pO1xuXG4gIH1cblxuICBhZGRhdXRvc2VhcmNoZGF0YSh2YWw6YW55KXtcbiAgICBjb25zb2xlLmxvZygndicsdmFsKTtcblxuICB9XG4gIHJlbW92ZSh2YWw6YW55LGk6YW55LGZpZWxkOmFueSl7XG5cbiAgICBpZih0aGlzLmF1dG9zZWFyY2hbZmllbGRdICE9bnVsbCl0aGlzLmF1dG9zZWFyY2hbZmllbGRdLnNwbGljZShpLDEpO1xuICB9XG4gIGF1dG9zZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55LGRhdGE6YW55KSB7XG4gICAgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdPScnO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5hdXRvc2VhcmNoaW5wdXQsJ2FzaScpO1xuICAgIGlmKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV09PW51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV09W107XG4gICAgICA7XG4gICAgfVxuICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ucHVzaChkYXRhKTtcbiAgICAvL2NvbnNvbGUubG9nKHZhbHVlLGRhdGEsJ3NzJyx0aGlzLmF1dG9zZWFyY2gpO1xuICAgIC8qbGV0IHZhbDogYW55ID0gdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXTtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gIT1udWxsICYmIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMCAmJiB7ICRvcjogW3RoaXMuYXV0b3NlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSwgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdXSB9KSBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTsqL1xuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5yZXN1bHQucmVzKTtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgLy8gfSk7XG4gIH1cblxuICB0ZXh0c2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSkge1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIGxldCB2YWw9Jyc7XG4gICAgaWYodGhpcy50c2VhcmNoIT1udWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0hPW51bGwpXG4gICAge1xuICAgICAgdmFsPSB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgXG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0hPW51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvL2NvbnNvbGUud2Fybih0aGlzLnRzZWFyY2gpO1xuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy9hZGQgbG9hZGVyXG4gICAgLy8gdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIC8vY2xvc2UgbG9hZGVyXG4gICAgLy8gICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuXG4gIHJlZnJlc2hkYXRhKCl7XG4gICAgdGhpcy5hdXRvc2VhcmNoPVtdO1xuICAgIHRoaXMudHNlYXJjaD1bXTtcbiAgICB0aGlzLnNlbGVjdHNlYXJjaD1bXTtcbiAgICB0aGlzLnN0YXJ0X2RhdGU9bnVsbDtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPTA7XG4gICAgdGhpcy5lbmRfZGF0ZT1udWxsO1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbj17fTtcbiAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uPXt9O1xuICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gIH1cbiAgcmVmcmVzaGFsbGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICBpZiAodmFsLmZpbHRlcmVkRGF0YSAhPW51bGwgJiYgdmFsLmZpbHRlcmVkRGF0YS5sZW5ndGggPCB0aGlzLm9sZGRhdGEubGVuZ3RoKSB7XG4gICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWZyZXNoIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICcgVXBkYXRlZCEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaExpc3R2YWwuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgZ2V0c3RhdHVzKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgZm9yIChsZXQgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzYXJydmFsW2JdLnZhbCA9PSB2YWwpXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0dXNhcnJ2YWxbYl0ubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBcIk4vQVwiO1xuICB9XG4gIHBkZkZsYWcodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NoYXR0ZXIgYmxvaycpO1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBncmFwdXJsKHZhbDogYW55KSB7XG4gICAgLy8gIGZvciBhbGwgcm93IGNoZWNraW5nXG4gICAgLy8gY29uc29sZS5sb2codmFsKVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQyID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXVkKTtcbiAgfVxuXG4gIGNvcHlUZXh0KHJvdzogYW55LCB2YWw6IHN0cmluZykge1xuXG4gICAgbGV0IGZ1bGx1cmwgPSB2YWwgKyAnJyArIHJvdztcbiAgICBsZXQgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBzZWxCb3guc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgc2VsQm94LnZhbHVlID0gZnVsbHVybDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbEJveCk7XG4gICAgc2VsQm94LmZvY3VzKCk7XG4gICAgc2VsQm94LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xuICB9XG5cbiAgY2xpY2t1cmwodmFsOiBhbnksIHVybDogYW55KSB7XG4gICAgbGV0IGxpbmsgPSB1cmwgKyAnJyArIHZhbC5faWQgKyAnJyArIHRoaXMucGRmX2xpbmtfdmFsO1xuICAgIHdpbmRvdy5vcGVuKGxpbmssIFwiX2JsYW5rXCIpO1xuICB9XG5cblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0aW9uIT1udWxsICYmIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCkge1xuICAgICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDogYW55KSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgXCJfXCIpXSA9IHBvaW50W2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgLyphcHBseUZpbHRlcjEoZmlsdGVyVmFsdWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsLnZhbHVlKTtcbiAgICBsZXQgdmFsdWU9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodmFsLnZhbHVlKTtcblxuICAgIHZhbHVlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvISogdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IGZ1bmN0aW9uKGRhdGEsIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAvLyByZXR1cm4gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH0qIS9cbiAgfSovXG5cbiAgc3R5bGVDZWxsKGNvbF9uYW1lLCByb3cpIHtcblxuICAgIC8qXG4gICAgIGlmIChjb2xfbmFtZVsnY29sdW1uRGVmJ109PSdwcm9ncmVzcycgJiYgcm93Wydwcm9ncmVzcyddPT0nMTAwJyl7XG4gICAgIHJldHVybiB7J2NvbG9yJyA6ICdyZWQnfVxuICAgICB9IGVsc2Uge1xuICAgICByZXR1cm4ge31cbiAgICAgfVxuICAgICAqL1xuXG5cbiAgICByZXR1cm4ge31cbiAgfVxuICAvKipzaG93IHZpZGVvIG1vZGFsIG9uIGNsaWNrIG9mIHRoYW1uYWlsIGZ1bmN0aW9uIGJ5IHNvdXJhdiAqL1xuICBmZXRjaHZpZGVvKHZpZGVvZGF0YTphbnkpe1xuICAgIC8vY29uc29sZS53YXJuKCd2aWRlb2RhdGEnLHZpZGVvZGF0YSk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihWaWRlb1BsYXllciwge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC12aWRlb3BsYXllci1wcmV2aWV3JyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBwcmV2aWV3RGF0YTogdmlkZW9kYXRhIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZpZXdkYXRhKGRhdGExOiBhbnkpIHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSBkYXRhMTtcbiAgICBsZXQgZGF0YTI6IGFueSA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGxldCBmbGFnazogYW55ID0gJyc7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSB0cnVlKSBkYXRhW2tleV0gPSAnWWVzJztcbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IGZhbHNlKSBkYXRhW2tleV0gPSAnTm8nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT0gJ2ltYWdlJykge1xuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9IFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW2tleV0gKyBcIj48YnIvPlwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGxldCB0ZW1wZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgayBpbiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IHAgaW4gdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgPT0gJ2ltYWdlJykge1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGltZ3ZhbDphbnk9dGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0uZmlsZXVybCtkYXRhW2tleV1ba107XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWd2YWwpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVtrZXldW2tdLnJlcGxhY2UoLycvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW2tleV1ba10gKyBcIj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIrZGF0YVtrZXldW2tdK1wiPC9zcGFuPjxici8+XCIpXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlICE9ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAvL3RlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIgKyBkYXRhW2tleV1ba10gKyBcIjwvc3Bhbj48YnIvPlwiKTtcblxuXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgLy90ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldW2tdKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgb2JqayBpbiBkYXRhW2tleV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaChcIjxzcGFuPlwiICsgb2JqayArIFwiIDogXCIgKyBkYXRhW2tleV1ba11bb2Jqa10gKyBcIjwvc3Bhbj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSB0ZW1wZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IG4gaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFbbl0gIT0gbnVsbCAmJiBkYXRhW25dICE9ICcnKSB7XG4gICAgICAgIGRhdGEyW25dID0gZGF0YVtuXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpIHtcbiAgICAgIC8vZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV09Jyc7XG4gICAgICBkZWxldGUgZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV07XG4gICAgfVxuICAgIGxldCByZXMgPSBPYmplY3QuZW50cmllcyhkYXRhMik7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG5cbiAgfVxuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgbGV0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IHBhbmVsQ2xhc3M6ICdjdXN0b20tYm90dG9tc2hlZXQnLCBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXModGhpcy5hcGl1cmx2YWwgKyAnc3RhdHVzdXBkYXRlJywgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvL3RoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5vbGRkYXRhW2NdLl9pZCA9PSBkYXRhLl9pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgICAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIGZvciB0cmVlIHZpZXcgaW4gbW9kYWxcbiAgY3VzdG9tYnV0dG9uZnVuYyhkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpOyAgICAvLyByb3cgZGF0YVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tYnV0dG9udmFsKTsgICAgLy8gb2JqZWN0IGZyb20gd2hlcmUgdGhlIGxpYnJhcnkgaGFzIGJlZW4gdXNlZFxuICAgIGxldCB1bnNhZmV1cmw6IGFueSA9IHRoaXMuY3VzdG9tYnV0dG9udmFsLnVybDsgICAvL2lmcmFtZSB1cmxcbiAgICBmb3IgKGxldCBiIGluIHRoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkcykge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgZGF0YVt0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHNbYl1dO1xuICAgIH1cbiAgICB1bnNhZmV1cmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodW5zYWZldXJsKTsgICAvL2ZvciBzYW5pdGl6aW5nIHRoZSB1cmwgZm9yIHNlY3VyaXR5LCBvdGhlcndpc2UgaXQgd29uJ3QgYmUgYWJsZSB0byBzaG93IHRoZSBwYWdlIGluIGlmcmFtZSwgaGVuY2UgbW9kYWxcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywgeyAgICAgICAvLyBmb3Igb3BlbmluZyB0aGUgbW9kYWxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1kYXRhLW1vZGFsJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBbeyBkYXRhOiBkYXRhLCBjdXN0b21kYXRhOiB1bnNhZmV1cmwgfV0gfVxuICAgIH0pO1xuXG5cbiAgfVxuXG5cblxuICBtYW5hZ2VzdGF0dXNtdWx0aXBsZSgpIHtcblxuICAgIGxldCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwgeyBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIC8vZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICAvL2RhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgbGV0IG5ld3N0YXR1czogYW55ID0gcmVzdWx0LnZhbDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXNtYW55KHRoaXMuYXBpdXJsdmFsICsgJ3N0YXR1c3VwZGF0ZScsIGlkcywgcmVzdWx0LnZhbCwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvL3RoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YodGhpcy5vbGRkYXRhW2NdLl9pZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBuZXdzdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvL3RoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICBkZWxldGVtdWx0aXBsZSgpIHtcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBzZWxlY3RlZCByZWNvcmRzPycgfVxuICAgIH0pO1xuICAgIGxldCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5kZXRlTWFueURhdGEodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLCBpZHMsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyBpbiBpZHMpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkKHMpICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlZGF0YShkYXRhOiBhbnkpIHtcbiAgICAvL2FsZXJ0KDUpO1xuICAgIC8vdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCt0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLGRhdGEsdGhpcy5qd3R0b2tlbnZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEgODg5IC0tLScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdqd3R0b2tlbnZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwpO1xuXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgdG8gZGVsZXRlIHRoaXMgcmVjb3JkID8/JyB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGRhdGEuX2lkKVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCwgZGF0YS5faWRdKTtcbiAgfVxuXG5cbiAgc29ydHRhYmxlKGZpZWxkOmFueSx0eXBlOmFueSl7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbC5maWVsZD1maWVsZDtcbiAgICB0aGlzLnNvcnRkYXRhdmFsLnR5cGU9dHlwZTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICB9XG5cbiAgYWxsU2VhcmNoKCl7XG4gICAgY29uc29sZS5sb2coXCJoaXRcIik7XG5cbiAgICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIGxldCBsaW5rMSA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsKyctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgbGV0IHRleHRTZWFyY2g6YW55PXt9O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLnRzZWFyY2gpe1xuICAgICAgdGV4dFNlYXJjaFtpXT17JHJlZ2V4OnRoaXMudHNlYXJjaFtpXS50b0xvd2VyQ2FzZSgpfTtcbiAgICB9XG5cbiAgICBsZXQgYXV0b3NlYXJjaDphbnk9e307XG4gICAgLy90aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yKGxldCBiIGluIHRoaXMuYXV0b3NlYXJjaCl7XG4gICAgICBmb3IobGV0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKXtcbiAgICAgICAgbGV0IHR2OmFueT17fTtcbiAgICAgICAgdHZbYl09dGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZihhdXRvc2VhcmNoWyckb3InXT09bnVsbCkgYXV0b3NlYXJjaFsnJG9yJ109W107XG4gICAgICAgIGF1dG9zZWFyY2hbJyRvciddLnB1c2godHYpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdhdXRvcycsYXV0b3NlYXJjaCk7XG5cblxuXG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgIGxpbWl0OnRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOjBcbiAgICAgIH0sXG4gICAgICBzb3J0OntcbiAgICAgICAgZmllbGQ6dGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgdHlwZTp0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgIH0sXG4gICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAvL3JldHVybjtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbD0wO1xuICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICB0aGlzLmxvYWRpbmc9ZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIH0pXG5cbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gKHJlc3VsdC5jb3VudCk7XG4gICAgICBpZihyZXN1bHQuY291bnQ9PTApIHRoaXMudGFibGVmbGFnPTE7XG4gICAgICBlbHNlIHRoaXMudGFibGVmbGFnPTA7XG4gICAgICBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIH0pXG5cbiAgfVxuXG5cblxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gc3RhcnQgKi9cbiAgYXJ0aXN0eHBQcmV2aWV3KHNpbmdsZURhdGE6IGFueSkge1xuICAgIGxldCBsaW5rID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTozMDkwLycgKyAnZGF0YWxpc3QnO1xuICAgIC8qKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKioqL1xuICAgIGxldCBkYXRhOiBhbnkgPSB7IFwic291cmNlXCI6IFwiYmxvY2tjaGFpbnVzZXJfdmlld1wiLCBcImNvbmRpdGlvblwiOiB7IFwicG9zdHNfaWRfb2JqZWN0XCI6IHNpbmdsZURhdGEuX2lkIH0sIFwidG9rZW5cIjogdGhpcy5qd3R0b2tlbnZhbCB9O1xuICAgIC8qKioqKioqKiBub3QgY29tcGxldGVkICoqKioqL1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdERhdGEobGluaywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN0bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgLyogb3BlbiBkaWFsb2cgKi9cbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94LWFydGlzdHhwLXByZXZpZXcnLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgZGF0YTogeyBwcmV2aWV3OiB0cnVlLCBwcmV2aWV3RGF0YTogcmVzdGx0IH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIGVuZCAqL1xuXG5cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbmZpcm1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbmZpcm0tZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtZGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtZGlhbG9nPixcbiAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LCBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgc2FuaXRpemVVcmwodW5zYWZldXJsOiBhbnksIGRhdGE6IGFueSwgcm93ZGF0YTogYW55KSB7XG4gICAgZm9yIChsZXQgYiBpbiBkYXRhKSB7XG4gICAgICB1bnNhZmV1cmwgPSB1bnNhZmV1cmwgKyAnLycgKyByb3dkYXRhW2RhdGFbYl1dO1xuXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodW5zYWZldXJsKTtcbiAgfVxuXG59XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYm90dG9tU2hlZXRSZWY6IE1hdEJvdHRvbVNoZWV0UmVmPEJvdHRvbVNoZWV0PiwgQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJib3R0b20tc2hlZXRcIixkYXRhKTtcbiAgfVxuXG4gIG9wZW5MaW5rKHZhbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5ib3R0b21TaGVldFJlZi5kaXNtaXNzKHZhbCk7XG4gIH1cbn1cblxuLyoqbGlzdGluZyB2aWRlbyBwbGF5ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZpZGVvcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICd2aWRlb3BsYXllci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFZpZGVvUGxheWVyPixcbiAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLndhcm4oJ3ZpZGVvcGxheWVyTW9kYWwnLGRhdGEucHJldmlld0RhdGEudmlkZW8pO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqbGlzdGluZyBJbWFnZSBWaWV3ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnaW1nX21vZGFsX3ZpZXcuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VWaWV3PixcbiAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLndhcm4oJ0ltYWdlVmlld01vZGFsJyxkYXRhLmFsbGRhdGEpO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==