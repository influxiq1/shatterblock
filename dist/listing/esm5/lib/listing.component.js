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
var moment = momentImported;
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.alldata;
}
var ListingComponent = /** @class */ (function () {
    // myForm:any;
    function ListingComponent(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer, _snackBar) {
        var _this = this;
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
        function (event) {
            switch (true) {
                case event instanceof NavigationStart: {
                    _this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    _this.loading = false;
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
    Object.defineProperty(ListingComponent.prototype, "search_settings", {
        set: /**
         * @param {?} search_settings
         * @return {?}
         */
        function (search_settings) {
            this.search_settingsval = search_settings;
            /*for (let i= 0; i<= this.search_settingsval.search.length; i++) {
              console.log(this.search_settingsval.search[i].label);
            }*/
            /*  console.log(this.search_settingsval.selectsearch);
              console.log(this.search_settingsval.selectsearch[0].label);
              console.log(this.search_settingsval.selectsearch[0].values);
              console.log(this.search_settingsval.datesearch);*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "click_to_add_ananother_page", {
        set: /**
         * @param {?} click_to_add_ananother_page
         * @return {?}
         */
        function (click_to_add_ananother_page) {
            this.click_to_add_ananother_pageval = click_to_add_ananother_page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "limitcond", {
        set: /**
         * @param {?} limitcondval
         * @return {?}
         */
        function (limitcondval) {
            this.limitcondval = limitcondval;
            //console.log('limitcondval',this.limitcondval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_source_count", {
        set: /**
         * @param {?} date_search_source_countval
         * @return {?}
         */
        function (date_search_source_countval) {
            this.date_search_source_countval = date_search_source_countval;
            if (this.date_search_source_countval == 0)
                this.limitcondval.pagecount = 1;
            //console.log('date_search_source_count',this.date_search_source_countval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "grab_link", {
        set: /**
         * @param {?} grab_link
         * @return {?}
         */
        function (grab_link) {
            this.grab_linkval = grab_link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "custombutton", {
        set: /**
         * @param {?} custombutton
         * @return {?}
         */
        function (custombutton) {
            this.custombuttonval = custombutton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_source", {
        set: /**
         * @param {?} date_search_source
         * @return {?}
         */
        function (date_search_source) {
            this.date_search_sourceval = date_search_source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "sortdata", {
        set: /**
         * @param {?} sortdataval
         * @return {?}
         */
        function (sortdataval) {
            this.sortdataval = sortdataval;
            //console.log(this.sortdataval,'sortdataval');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_endpoint", {
        set: /**
         * @param {?} date_search_endpoint
         * @return {?}
         */
        function (date_search_endpoint) {
            this.date_search_endpointval = date_search_endpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "url", {
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.urlval = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchendpoint", {
        set: /**
         * @param {?} searchendpoint
         * @return {?}
         */
        function (searchendpoint) {
            this.searchendpointval = searchendpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "pdf_link", {
        set: /**
         * @param {?} pdf_link
         * @return {?}
         */
        function (pdf_link) {
            this.pdf_link_val = pdf_link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchList", {
        set: /**
         * @param {?} searchList
         * @return {?}
         */
        function (searchList) {
            this.searchListval = searchList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "libdata", {
        set: /**
         * @param {?} libdataval
         * @return {?}
         */
        function (libdataval) {
            this.libdataval = libdataval;
            //console.log('libdataval',this.libdataval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "datasource", {
        set: /**
         * @param {?} datasource
         * @return {?}
         */
        function (datasource) {
            this.datasourceval = datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "datacollection", {
        set: /**
         * @param {?} datacollectionval
         * @return {?}
         */
        function (datacollectionval) {
            this.datacollectionval = datacollectionval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "skip", {
        set: /**
         * @param {?} skip
         * @return {?}
         */
        function (skip) {
            this.skipval = skip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_datatype", {
        set: /**
         * @param {?} detail_datatype
         * @return {?}
         */
        function (detail_datatype) {
            this.detail_datatypeval = detail_datatype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_skip_array", {
        set: /**
         * @param {?} detail_skip_array
         * @return {?}
         */
        function (detail_skip_array) {
            this.detail_skip_arrayval = detail_skip_array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "sourcedata", {
        set: /**
         * @param {?} sourcedata
         * @return {?}
         */
        function (sourcedata) {
            this.sourcedataval = sourcedata;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "modify_header_array", {
        set: /**
         * @param {?} modify_header_array
         * @return {?}
         */
        function (modify_header_array) {
            this.modify_header_arrayval = modify_header_array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "deleteendpoint", {
        set: /**
         * @param {?} deleteendpointval
         * @return {?}
         */
        function (deleteendpointval) {
            this.deleteendpointval = deleteendpointval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "updateendpoint", {
        set: /**
         * @param {?} updateendpoint
         * @return {?}
         */
        function (updateendpoint) {
            this.updateendpointval = updateendpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "apiurl", {
        set: /**
         * @param {?} apiurl
         * @return {?}
         */
        function (apiurl) {
            this.apiurlval = apiurl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "updatetable", {
        set: /**
         * @param {?} updatetable
         * @return {?}
         */
        function (updatetable) {
            this.updatetableval = updatetable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "jwttoken", {
        set: /**
         * @param {?} jwttoken
         * @return {?}
         */
        function (jwttoken) {
            if (jwttoken != null)
                this.jwttokenval = jwttoken;
            else
                this.jwttokenval = '';
            //console.log(this.jwttokenval,'token')
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "statusarr", {
        set: /**
         * @param {?} statusarr
         * @return {?}
         */
        function (statusarr) {
            this.statusarrval = statusarr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "emailarray", {
        set: /**
         * @param {?} emailarray
         * @return {?}
         */
        function (emailarray) {
            this.emailarrayval = emailarray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "editroute", {
        set: /**
         * @param {?} editroute
         * @return {?}
         */
        function (editroute) {
            this.editrouteval = editroute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "preview_artistxp", {
        /* artistxp preview start */
        set: /* artistxp preview start */
        /**
         * @param {?} flug
         * @return {?}
         */
        function (flug) {
            this.previewFlug = true;
        },
        enumerable: true,
        configurable: true
    });
    /*@Directive({
      selector: '[Listing]'
    })*/
    /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} changes
     * @return {?}
     */
    ListingComponent.prototype.ngOnChanges = /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        //console.log('ngonchange ..',changes);
        for (var v in changes) {
            //console.log(v,changes[v],'vv');
            if (v == 'updatetable') {
                // console.log('updatetable');
                if (changes[v].previousValue != null)
                    this.allSearch();
            }
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.inputblur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        //console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
            /** @type {?} */
            var source = void 0;
            /** @type {?} */
            var condition = {};
            source = {
                source: this.date_search_sourceval,
                condition: condition
            };
            /** @type {?} */
            var link = this.apiurlval + '' + this.date_search_endpointval;
            this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.result = res;
                _this.preresult = _this.result.res;
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
        function (value) { return _this._filter(value); })));
        /*const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    */
        this.x = this.datasourceval;
        /** @type {?} */
        var x = this.x;
        /** @type {?} */
        var temp = [];
        /** @type {?} */
        var keys = x[0];
        temp = Object.keys(keys); /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /** @type {?} */
        var coldef_list = [];
        /** @type {?} */
        var header_list = [];
        for (var i = 0; i < temp.length; i++) {
            coldef_list.push(temp[i].replace(/\s/g, "_")); /*to replace spaces in field name by "_", we use "replace(/\s/g, "_")"*/
            header_list.push(temp[i]);
        }
        var _loop_1 = function (i) {
            /** @type {?} */
            var ff = "row." + coldef_list[i];
            tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i].replace(/_/g, " "), cell: (/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) { return eval(ff); }), objlength: header_list.length };
            // console.log('tt',tt);
            // console.log('tt.columnDef');
            // console.log(tt.columnDef);
            for (var b in this_1.modify_header_arrayval) {
                if (b == tt.header)
                    tt.header = this_1.modify_header_arrayval[b];
            }
            if (this_1.skipval.indexOf(tt.columnDef) == -1)
                this_1.columns.push(tt);
        };
        var this_1 = this, tt;
        //coldef_list.push('Actions');
        //header_list.push('Actions')
        // console.log('coldef_list',coldef_list);
        // console.log('header_list',header_list);
        for (var i = 0; i < coldef_list.length; i++) {
            _loop_1(i);
        }
        /** @type {?} */
        var displayedcols = this.columns.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.columnDef; }));
        /** @type {?} */
        var customcols = [];
        //console.log('displayedcols',displayedcols);
        if (this.libdataval != null && this.libdataval.tableheaders != null)
            customcols = this.libdataval.tableheaders;
        if (customcols != null && customcols.length > 0) {
            for (var v in customcols) {
                if (displayedcols.includes(customcols[v]) == false) {
                    this.columns.push({ columnDef: customcols[v], header: customcols[v], cell: 'NA' });
                }
            }
            displayedcols = customcols;
        }
        //console.log('customcols',customcols,displayedcols);
        if (this.libdataval.hideaction == null || this.libdataval.hideaction == false)
            displayedcols.push('Actions');
        this.displayedColumns = displayedcols;
        this.displayedColumns.unshift('#'); /*adds select column in table by unshift function*/
        this.displayedColumns.unshift('select'); /*adds select column in table by unshift function*/
        /*adds select column in table by unshift function*/
        /** @type {?} */
        var data_list = [];
        for (var i = 0; i < this.x.length; i++) {
            data_list.push(this.createData(x[i]));
        }
        this.olddata = data_list;
        this.dataSource = new MatTableDataSource(data_list);
        this.selection = new SelectionModel(true, []);
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
    };
    /**image view modal */
    /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    ListingComponent.prototype.img_modal_view = /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    function (img) {
        //console.warn("img_modal_view",img)
        /** @type {?} */
        var dialogRef = this.dialog.open(ImageView, {
            panelClass: 'custom-modalbox-image-preview',
            height: 'auto',
            data: { alldata: img }
        });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x;
        this.errormg = '';
        /** @type {?} */
        var data = this.myForm.value;
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.dateSearch = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        //console.log("start date");
        // console.log(this.start_date);
        // console.log(this.end_date);
        // let sd = moment(this.start_date).unix();
        // let ed = moment(this.end_date).unix();
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        var link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        /** @type {?} */
        var textSearch = {};
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
            for (var i in this.tsearch) {
                textSearch[i] = { $regex: this.tsearch[i].toLowerCase() };
            }
            /** @type {?} */
            var autosearch = {};
            //this.autosearch;
            for (var b in this.autosearch) {
                for (var m in this.autosearch[b]) {
                    /** @type {?} */
                    var tv = {};
                    tv[b] = this.autosearch[b][m].val.toLowerCase();
                    if (autosearch['$or'] == null)
                        autosearch['$or'] = [];
                    autosearch['$or'].push(tv);
                }
            }
            /** @type {?} */
            var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    _this.dataSource = new MatTableDataSource(result.results.res);
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: "New Search of data loaded" }
                    });
                }
                else {
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: "No such search recod found !!" }
                    });
                }
                _this.loading = false;
                // this.dataSource.paginator = this.paginator;
                //this.dataSource.sort = this.sort;
            }));
            this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                _this.date_search_source_countval = (result.count);
                if (result.count == 0)
                    _this.tableflag = 1;
                else
                    _this.tableflag = 0;
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
    };
    /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    ListingComponent.prototype.selectSearch = /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    function (value, type) {
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        condition = {};
        condition[type.field] = value;
        this.selectSearch_condition = {};
        this.selectSearch_condition = condition;
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.paging = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
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
        var textSearch = {};
        for (var i in this.tsearch) {
            textSearch[i] = { $regex: this.tsearch[i].toLowerCase() };
        }
        /** @type {?} */
        var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, this.autosearch, this.selectSearch_condition, this.libdataval.basecondition);
        /** @type {?} */
        var source = {
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
        var link = this.apiurlval + '' + this.datacollectionval;
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
        function (res) {
            _this.result = res;
            //console.log(this.result,'res');
            if (_this.result.results.res != null && _this.result.results.res.length > 0) {
                _this.dataSource = new MatTableDataSource(_this.result.results.res);
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 2000,
                    data: { errormessage: "New range of data loaded" }
                });
            }
            else {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: "No Data Found in this range !!" }
                });
            }
            _this.loading = false;
            //this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.addautosearchdata = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        //console.log('v',val);
    };
    /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    ListingComponent.prototype.remove = /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    function (val, i, field) {
        if (this.autosearch[field] != null)
            this.autosearch[field].splice(i, 1);
    };
    /**
     * @param {?} value
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.autosearchfunction = /**
     * @param {?} value
     * @param {?} data
     * @return {?}
     */
    function (value, data) {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ListingComponent.prototype.textsearchfunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition = {};
        /** @type {?} */
        var val = '';
        if (this.tsearch != null && this.tsearch[value] != null) {
            val = this.tsearch[value].toLowerCase();
        }
        if (this.tsearch[value] != null && this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toLowerCase(), this.tsearch[value].toUpperCase()] })
            condition[value + '_regex'] = val;
        this.textSearch_condition = {};
        this.textSearch_condition = condition;
        //console.warn(this.tsearch);
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
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
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.refreshdata = /**
     * @return {?}
     */
    function () {
        this.autosearch = [];
        this.tsearch = [];
        this.selectsearch = [];
        this.start_date = null;
        this.limitcondval.skip = 0;
        this.end_date = null;
        this.selectSearch_condition = {};
        this.dateSearch_condition = {};
        this.allSearch();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.refreshalldata = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.dataSource = new MatTableDataSource(this.olddata);
        this.selection = new SelectionModel(true, []);
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
        if (val.filteredData != null && val.filteredData.length < this.olddata.length) {
            /** @type {?} */
            var dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: 'custom-modalbox',
                data: { message: 'Refresh successfully!!', isconfirmation: false }
            });
        }
        else {
            /** @type {?} */
            var dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: 'custom-modalbox',
                data: { message: ' Updated!!', isconfirmation: false }
            });
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ListingComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.searchListval.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.toLowerCase().includes(filterValue); }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.getstatus = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('val');
        // console.log(val);
        for (var b in this.statusarrval) {
            if (this.statusarrval[b].val == val)
                return this.statusarrval[b].name;
            // console.log(this.statusarrval[b].name);
        }
        return "N/A";
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.pdfFlag = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.grapurl = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
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
    };
    /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.copyText = /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    function (row, val) {
        /** @type {?} */
        var fullurl = val + '' + row;
        /** @type {?} */
        var selBox = document.createElement('textarea');
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.openinternallink = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.router.navigate([val.route]);
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.openinternallinkwithparam = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        /** @type {?} */
        var rdata = [];
        rdata.push(val.route);
        for (var v in val.param) {
            rdata.push(data[val.param[v]]);
        }
        //console.log('radat',rdata);
        this.router.navigate(rdata);
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.opencustombuttonactionlocaldata = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        //console.log('opencustombuttonactionlocaldata',val,data);
        /** @type {?} */
        var dataarr = [];
        //dataarr.push(['name','debasis']);
        //dataarr.push(['desc','test']);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        for (var v in val.datafields) {
            /** @type {?} */
            var temparr = [];
            temparr.push(val.datafields[v]);
            if (val.datafields[v] != 'image' && val.datafields[v] != 'video')
                temparr.push(data[val.datafields[v]]);
            if (val.datafields[v] == 'image')
                temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>");
            if (val.datafields[v] == 'video') {
                /** @type {?} */
                var temphtml = ("<iframe width=560 height=315 src=https://www.youtube.com/embed/" + data[val.datafields[v]] + " frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>");
                temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
                temparr.push(temphtml);
            }
            //if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
            dataarr.push(temparr);
        }
        /** @type {?} */
        var res = dataarr;
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            var resdata = [];
            for (var b in res) {
                for (var c in this.libdataval.detailview_override) {
                    //console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1]];
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
        var dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: 'custom-modalbox-apidata',
            data: { isconfirmation: false, data: res }
        });
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.opencustombuttonactionapidata = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        var _this = this;
        //console.log('opencustombuttonactionapidata',val,data);
        this.loading = true;
        /** @type {?} */
        var link = this.apiurlval + val.endpoint;
        /** @type {?} */
        var source = {};
        source[val.param] = data._id;
        this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            if (result.status == 'success') {
                //console.log('res',result);
                /** @type {?} */
                var resdata = {};
                _this.loading = false;
                if (result.res[0] != null) {
                    resdata = result.res[0];
                }
                else {
                    resdata = result.res;
                }
                /** @type {?} */
                var dataarr = [];
                //dataarr.push(['name','debasis']);
                //dataarr.push(['desc','test']);
                for (var v in resdata) {
                    /** @type {?} */
                    var temparr = [];
                    temparr.push(v);
                    if (v != 'image' && v != 'video')
                        temparr.push(resdata[v]);
                    if (v == 'image')
                        temparr.push("<img mat-card-image src=" + resdata[v] + " > <br/>");
                    if (v == 'video') {
                        /** @type {?} */
                        var temphtml = ("<iframe width=560 height=315 src=https://www.youtube.com/embed/" + resdata[v] + " frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>");
                        temphtml = _this.sanitizer.bypassSecurityTrustHtml(temphtml);
                        temparr.push(temphtml);
                    }
                    //if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
                    dataarr.push(temparr);
                }
                if (_this.libdataval.detailview_override != null && _this.libdataval.detailview_override.length > 0) {
                    /** @type {?} */
                    var resdata_1 = [];
                    for (var b in dataarr) {
                        for (var c in _this.libdataval.detailview_override) {
                            //console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                            if (_this.libdataval.detailview_override[c].key == dataarr[b][0]) {
                                console.log('h', c, _this.libdataval.detailview_override[c]);
                                resdata_1[b] = [_this.libdataval.detailview_override[c].val, dataarr[b][1]];
                            }
                        }
                        if (resdata_1[b] == null)
                            resdata_1[b] = dataarr[b];
                    }
                    //console.log('c',res,resdata);
                    dataarr = resdata_1;
                    //console.log('c',res,resdata);
                }
                //console.log('dataarr',dataarr);
                if (val.refreshdata != null && val.refreshdata == true) {
                    _this.allSearch();
                }
                /** @type {?} */
                var dialogRef = _this.dialog.open(Confirmdialog, {
                    height: 'auto',
                    panelClass: 'custom-modalbox',
                    data: { isconfirmation: false, data: dataarr }
                });
            }
            if (result.status == 'error') {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            //console.log('Oooops!');
            _this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            _this.loading = false;
        }));
        return;
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.openextlinkwithparam = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        //console.log('val',val,data);
        /** @type {?} */
        var qtext = '';
        /** @type {?} */
        var fulllink = '';
        fulllink = val.link;
        if (val.paramtype == null) {
            for (var v in val.param) {
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
            for (var v in val.param) {
                //qtext = val.param[v].q + "=" + encodeURI(data[val.param[v].key]);
                //console.log('qtext',qtext);
                fulllink = fulllink + '/' + encodeURI(data[val.param[v]]);
            }
            //val.link=fulllink;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            //console.log("Hello from setTimeout");
            //console.log('link',fulllink,data,qtext);
        }), 10);
        window.open(fulllink, "_blank");
    };
    /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    ListingComponent.prototype.clickurl = /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    function (val, url) {
        /** @type {?} */
        var link = url + '' + val._id + '' + this.pdf_link_val;
        window.open(link, "_blank");
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    ListingComponent.prototype.isAllSelected = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        if (this.selection != null && this.selection.select) {
            /** @type {?} */
            var numSelected = this.selection.selected.length;
            /** @type {?} */
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
        }
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    ListingComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.selection.select(row); }));
    };
    /** The label for the checkbox on the passed row */
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    ListingComponent.prototype.checkboxLabel = /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    /**
     * @param {?} point
     * @return {?}
     */
    ListingComponent.prototype.createData = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        /** @type {?} */
        var data = {};
        Object.keys(point).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            data[key.replace(/\s/g, "_")] = point[key];
        }));
        return data;
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    ListingComponent.prototype.applyFilter = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
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
    ListingComponent.prototype.styleCell = /*applyFilter1(filterValue: string, val: any) {
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
    function (col_name, row) {
        /*
         if (col_name['columnDef']=='progress' && row['progress']=='100'){
         return {'color' : 'red'}
         } else {
         return {}
         }
         */
        return {};
    };
    /**show video modal on click of thamnail function by sourav */
    /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    ListingComponent.prototype.fetchvideo = /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    function (videodata) {
        //console.warn('videodata',videodata);
        /** @type {?} */
        var dialogRef = this.dialog.open(VideoPlayer, {
            panelClass: 'custom-modalbox-videoplayer-preview',
            height: 'auto',
            data: { previewData: videodata }
        });
    };
    /**
     * @param {?} data1
     * @return {?}
     */
    ListingComponent.prototype.viewdata = /**
     * @param {?} data1
     * @return {?}
     */
    function (data1) {
        /** @type {?} */
        var data;
        data = data1;
        /** @type {?} */
        var data2 = [];
        for (var key in data) {
            /** @type {?} */
            var flagk = '';
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
                    var tempdata = [];
                    for (var k in data[key]) {
                        for (var p in this.detail_datatypeval) {
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
        for (var n in data) {
            if (data[n] != null && data[n] != '') {
                data2[n] = data[n];
            }
        }
        for (var v in this.detail_skip_arrayval) {
            //data2[this.detail_skip_arrayval[v]]='';
            delete data2[this.detail_skip_arrayval[v]];
        }
        /** @type {?} */
        var res = Object.entries(data2);
        //console.log('view data',res);
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            var resdata = [];
            for (var b in res) {
                for (var c in this.libdataval.detailview_override) {
                    //console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1]];
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
        var dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: 'custom-modalbox',
            data: { isconfirmation: false, data: res }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.managestatus = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result != null) {
                data.status = result.val;
                data.id = data._id;
                _this._apiService.togglestatus(_this.apiurlval + _this.libdataval.updateendpoint, data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c in _this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (_this.olddata[c]._id == data._id) {
                                _this.olddata[c].status = data.status;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        //this.allSearch();
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    //console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    };
    // for tree view in modal
    // for tree view in modal
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.custombuttonfunc = 
    // for tree view in modal
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('data');
        // console.log(data);    // row data
        // console.log(this.custombuttonval);    // object from where the library has been used
        /** @type {?} */
        var unsafeurl = this.custombuttonval.url;
        for (var b in this.custombuttonval.fields) {
            unsafeurl = unsafeurl + '/' + data[this.custombuttonval.fields[b]];
        }
        unsafeurl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl); //for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        //for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            // for opening the modal
            height: 'auto',
            panelClass: 'custom-data-modal',
            data: { isconfirmation: false, data: [{ data: data, customdata: unsafeurl }] }
        });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.managestatusmultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        //console.log('data');
        //console.log(data);
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result != null) {
                //data.status = result.val;
                //data.id = data._id;
                /** @type {?} */
                var newstatus_1 = result.val;
                _this._apiService.togglestatusmany(_this.apiurlval + 'statusupdate', ids, result.val, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c_1 in _this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (ids.indexOf(_this.olddata[c_1]._id) > -1) {
                                _this.olddata[c_1].status = newstatus_1;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        //this.allSearch();
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    //console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.deletemultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            data: { message: 'Are you sure you want to delete the selected records?' }
        });
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result == 'yes') {
                _this._apiService.deteManyData(_this.apiurlval + _this.deleteendpointval, ids, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        var _loop_2 = function (c_2) {
                            _this.olddata = _this.olddata.filter((/**
                             * @param {?} olddata
                             * @return {?}
                             */
                            function (olddata) { return olddata._id != ids[c_2]; }));
                        };
                        for (var c_2 in ids) {
                            _loop_2(c_2);
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        _this.allSearch();
                        /** @type {?} */
                        var dialogRef_1 = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    //console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.deletedata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        //alert(5);
        //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        var _this = this;
        //alert(5);
        //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            height: 'auto',
            data: { message: 'Are you sure to delete this record ??' }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result == 'yes') {
                _this._apiService.deteOneData(_this.apiurlval + _this.deleteendpointval, data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        _this.olddata = _this.olddata.filter((/**
                         * @param {?} olddata
                         * @return {?}
                         */
                        function (olddata) { return olddata._id != data._id; }));
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        _this.allSearch();
                        /** @type {?} */
                        var dialogRef_2 = _this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    //console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            //this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.editdata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.router.navigate([this.editrouteval, data._id]);
    };
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    ListingComponent.prototype.sorttable = /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (field, type) {
        this.sortdataval.field = field;
        this.sortdataval.type = type;
        this.allSearch();
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.allSearch = /**
     * @return {?}
     */
    function () {
        //console.log("hit");
        var _this = this;
        //console.log("hit");
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        var link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        /** @type {?} */
        var textSearch = {};
        condition = {};
        for (var i in this.tsearch) {
            textSearch[i] = { $regex: this.tsearch[i].toLowerCase() };
        }
        /** @type {?} */
        var autosearch = {};
        //this.autosearch;
        for (var b in this.autosearch) {
            for (var m in this.autosearch[b]) {
                /** @type {?} */
                var tv = {};
                tv[b] = this.autosearch[b][m].val.toLowerCase();
                if (autosearch['$or'] == null)
                    autosearch['$or'] = [];
                autosearch['$or'].push(tv);
            }
        }
        //console.log('autos',autosearch);
        /** @type {?} */
        var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            if (result.results.res != null && result.results.res.length > 0) {
                _this.dataSource = new MatTableDataSource(result.results.res);
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 2000,
                    data: { errormessage: "New Search of data loaded" }
                });
            }
            else {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: "No such search recod found !!" }
                });
            }
            _this.loading = false;
            // this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        }));
        this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            _this.date_search_source_countval = (result.count);
            if (result.count == 0)
                _this.tableflag = 1;
            else
                _this.tableflag = 0;
            // console.log('count',result);
            // this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        }));
    };
    /* artistxp preview button click function start */
    /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    ListingComponent.prototype.artistxpPreview = /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    function (singleData) {
        var _this = this;
        /** @type {?} */
        var link = 'http://developmentapi.audiodeadline.com:3090/' + 'datalist';
        /**
         * **** not completed *****
         * @type {?}
         */
        var data = { "source": "blockchainuser_view", "condition": { "posts_id_object": singleData._id }, "token": this.jwttokenval };
        /******** not completed *****/
        this._apiService.postData(link, data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var restlt = response;
            /* open dialog */
            /** @type {?} */
            var dialogRef = _this.dialog.open(Confirmdialog, {
                panelClass: 'custom-modalbox-artistxp-preview',
                height: 'auto',
                data: { preview: true, previewData: restlt }
            });
        }));
    };
    ListingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing',
                    template: "<div class=\"container\">\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\">\n            <span class=\"inputfilter\">\n                <!-- <mat-form-field class=\"searchdiv\">\n\n      <input  class=\"filterForFilter\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field> -->\n            </span>\n            <span class=\"inputfilterForloop\" *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\" >\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field)\" (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\" >\n                            search\n                        </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </span>\n\n            <span class=\"inputfilterForAuto\" *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                        <mat-chip\n                                *ngFor=\"let v of autosearch[item.field]; let i=index;\"\n                                [selectable]=\"true\"\n                                [removable]=\"true\"\n                                (removed)=\"remove(v,i,item.field)\">\n                            {{v.name}}\n                            <mat-icon matChipRemove >cancel</mat-icon>\n                        </mat-chip>\n                        <input\n                                placeholder=\"{{item.label}}\"\n                                #fruitInput\n                                [matAutocomplete]=\"auto\"\n                                [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\"\n                        >\n                    </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete  #auto=\"matAutocomplete\" >\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of item.values\" [value]=\"statusval.val\" (click)=\"autosearchfunction(item.field,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </span>\n\n\n\n<!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container  class=\"filterForTexticon\" *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <mat-form-field *ngFor=\"let status of this.search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" >\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval\" (click)=\"selectSearch(statusval.val, status)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\"date_search_endpointval !=null && date_search_sourceval != null && search_settingsval.datesearch != null \">\n                <span  class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"autocomplete=\"off\"  placeholder=\"{{status.startdatelabel}}\"  [(ngModel)]=\"start_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input  class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1 ></mat-datepicker>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                </span>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <ng-container class=\"refresh\">\n                <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                    autorenew\n                </i>\n            </ng-container>\n\n            <ng-container class=\"refresh\"  *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"allSearch()\">Search</button>\n            </ng-container>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\" [routerLink]=\"click_to_add_ananother_pageval\" >Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\"  class=\"example-section\">\n            <mat-progress-bar\n                    class=\"example-margin\"\n                    [color]=\"color\"\n                    [mode]=\"mode\"\n                    [value]=\"value\"\n                    [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n        </section>\n        <br/>\n        <br/>\n        <ng-container *ngIf=\"tableflag==0\" >\n            <section class=\"lib-pager-class\">\n                <mat-label>Showing\n                        {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of </mat-label>\n                <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n                <mat-form-field>\n                    <mat-label>Page Size</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>Page No</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n                </mat-form-field>\n\n\n                <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                    skip_previous\n                </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                    skip_next\n                </span>\n            </section>\n\n\n        </ng-container>\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\n\n                <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                      (change)=\"$event ? selection.toggle(row) : null\"\n                                      [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                       #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">\n                        <span>\n                            {{column.header}}\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\" class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                                arrow_downward\n                            </span>\n                            <span class=\"material-icons cursor float-right\" *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"  (click)=\"sorttable(column.columnDef,'desc')\" >arrow_upward\n                            </span>\n\n                            <span class=\"material-icons cursor\" *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\" (click)=\"sorttable(column.columnDef,'desc')\" >\n                                unfold_more\n                            </span>\n\n                        </span>\n\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"   class=\"td-cell-center\">\n          \n                        <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }} {{pdfFlag(row)}}</span>\n                        <span *ngIf=\"column.columnDef!='status' &&  column.columnDef!='image' && column.columnDef!='video' \">\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes('date') && !column.columnDef.includes('datetime')\">\n                                <span [innerHTML]=\"row[column.columnDef]\"></span>\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes('date') && !column.columnDef.includes('datetime')\">\n                                {{row[column.columnDef] | date}}\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes('date') && column.columnDef.includes('datetime')\">\n                                {{row[column.columnDef] | date:'medium'}}\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]==null\">\n                               NA\n                            </ng-container>\n\n                        </span>\n                        <!-- for image view  -->\n                        <span *ngIf=\"column.columnDef=='image'\" (click)=\"img_modal_view(column.cell(row))\"> <span class=\"module_imgblock\"><img src=\"{{ column.cell(row) }}\" alt=\"{{ column.cell(row) }}\" ></span></span>\n                        <!-- for video view -->\n                        <span *ngIf=\"column.columnDef=='video' \"><span class=\"module_videoblock\" (click)=\"fetchvideo(row)\">\n                            <img src=\"https://img.youtube.com/vi/{{ column.cell(row) }}/sddefault.jpg\" alt=\"{{ column.cell(row) }}\"\n                                 (click)=\"fetchvideo(row)\"></span>\n                        </span>\n\n                        <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n                        <br>\n\n                        <!--          <span *ngIf=\"sh==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null\" class=\"cursor\">\n                            <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && aud==true  && urlval !=null\">\n                            <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n\n\n<!--// for grap url//-->\n\n\n\n                        <span *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name]\" class=\"cursor\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url)\">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <br>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef== [grab_linkval[0].col_name]\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url)\">{{grab_linkval[2].label}}</button>\n                        </span>\n\n                        <!--          //grap url end//-->\n\n\n<!--          </span>-->\n                        <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n\n\n\n                <ng-container matColumnDef=\"Actions\" *ngIf=\"libdataval.hideaction==null || libdataval.hideaction==false\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n                    <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\" data-label=\"Actions\"  class=\"td-cell-center\">\n                        <!--custom buttions block -->\n                        <ng-container *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length >0 \">\n                            <ng-container *ngFor=\"let custombutton of libdataval.custombuttons\">\n                                <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                    <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                       <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                           <button  mat-raised-button color=\"primary\">{{custombutton.label}}</button>\n                                       </a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button  mat-raised-button color=\"primary\" (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                    </ng-container>\n\n                                </ng-container>\n                                <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                    <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"openinternallink(custombutton)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button  mat-raised-button color=\"primary\" (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                    </ng-container>\n\n                                </ng-container>\n                                <ng-container *ngIf=\"custombutton.type=='action'\">\n                                    <ng-container *ngIf=\"custombutton.datatype=='local' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionlocaldata(custombutton,row)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionapidata(custombutton,row)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n\n                                </ng-container>\n\n                            </ng-container>\n                        </ng-container>\n                        <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                            <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\" class=\"cursor\" (click)=\"editdata(row)\" >\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\" class=\"cursor\" (click)=\"deletedata(row)\" >\n                                <i class=\"material-icons\">\n                                    delete_outline\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"  class=\"cursor\" (click)=\"viewdata(row)\" >\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"  (click)=\"managestatus(row)\" >\n                                <i class=\"material-icons\">\n                                    toggle_off\n                                </i>\n                            </span>\n                            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\" >\n                                <i class=\"material-icons treeclass\">\n                                    toggle_off\n                                </i>\n                            </span>\n\n                            <!-- artistxp preview start -->\n                            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                <i class=\"material-icons\">perm_media</i>\n                            </span>\n                            <!-- artistxp preview end -->\n\n                        </span>\n\n                    </td>\n                </ng-container>\n\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n\n        <mat-card *ngIf=\"tableflag!=0\">No Records Exists !!!</mat-card>\n        <ng-container *ngIf=\"tableflag==0\" >\n            <section class=\"lib-pager-class\">\n                <mat-label>Showing\n                    {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of </mat-label>\n                <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n                <mat-form-field>\n                    <mat-label>Page Size</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>Page No</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n                </mat-form-field>\n\n\n                <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                    skip_previous\n                </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                    skip_next\n                </span>\n            </section>\n\n\n        </ng-container>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>\n",
                    styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}"]
                }] }
    ];
    /** @nocollapse */
    ListingComponent.ctorParameters = function () { return [
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
    ]; };
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
    return ListingComponent;
}());
export { ListingComponent };
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
    ListingComponent.prototype.updatetableval;
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
var Confirmdialog = /** @class */ (function () {
    function Confirmdialog(dialogRef, data, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    Confirmdialog.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    Confirmdialog.prototype.sanitizeUrl = /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    function (unsafeurl, data, rowdata) {
        for (var b in data) {
            unsafeurl = unsafeurl + '/' + rowdata[data[b]];
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);
    };
    Confirmdialog.decorators = [
        { type: Component, args: [{
                    selector: 'confirmdialog',
                    template: "\n<div class=\"maindialog maindialognew\">\n\n<div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\" >Hey !</h1>\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n    <div mat-dialog-content>\n        <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n        <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n            <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                <mat-card-header id=\"dialogdata{{item[0]}}\">\n                    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                    <mat-card-title>{{item[0]}}</mat-card-title>\n                </mat-card-header>\n                <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                <mat-card-content id=\"dialogdata{{item[0]}}\">\n                    <p [innerHtml]=\"item[1]\">\n\n                    </p>\n                </mat-card-content>\n            </mat-card>\n\n        </div>\n\n        <!--for custom page in modal(mainly used for tree)-->\n        <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n            <iframe class=\"custom-datadiv\" height=\"auto\"  [src]=\"data.data[0].customdata\" ></iframe>\n\n        </div>\n\n    </div>\n</div>\n\n\n<div *ngIf=\"data.preview == true\">\n    <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n</div>\n\n\n\n\n\n<div mat-dialog-actions *ngIf=\"data.preview != true\">\n    <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n</div>\n\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    Confirmdialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: DomSanitizer }
    ]; };
    return Confirmdialog;
}());
export { Confirmdialog };
if (false) {
    /** @type {?} */
    Confirmdialog.prototype.dialogRef;
    /** @type {?} */
    Confirmdialog.prototype.data;
    /** @type {?} */
    Confirmdialog.prototype.sanitizer;
}
var BottomSheet = /** @class */ (function () {
    function BottomSheet(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        //console.warn("bottom-sheet",data);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    BottomSheet.prototype.openLink = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.bottomSheetRef.dismiss(val);
    };
    BottomSheet.decorators = [
        { type: Component, args: [{
                    selector: 'bottom-sheet',
                    template: "\n\n<mat-nav-list class=\"navlist\">\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
                }] }
    ];
    /** @nocollapse */
    BottomSheet.ctorParameters = function () { return [
        { type: MatBottomSheetRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    return BottomSheet;
}());
export { BottomSheet };
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
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //console.warn('videoplayerModal',data.previewData.video);
    }
    /**
     * @return {?}
     */
    VideoPlayer.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    VideoPlayer.decorators = [
        { type: Component, args: [{
                    selector: 'videoplayer',
                    template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
                }] }
    ];
    /** @nocollapse */
    VideoPlayer.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return VideoPlayer;
}());
export { VideoPlayer };
if (false) {
    /** @type {?} */
    VideoPlayer.prototype.dialogRef;
    /** @type {?} */
    VideoPlayer.prototype.data;
}
/**
 * listing Image View
 */
var ImageView = /** @class */ (function () {
    function ImageView(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //console.warn('ImageViewModal',data.alldata);
    }
    /**
     * @return {?}
     */
    ImageView.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    ImageView.decorators = [
        { type: Component, args: [{
                    selector: 'image',
                    template: "<mat-card class=\"imgmodalcls\">\n    <mat-card-container>\n        <span>\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\n        </span>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \n    </mat-card-container>\n    </mat-card>"
                }] }
    ];
    /** @nocollapse */
    ImageView.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ImageView;
}());
export { ImageView };
if (false) {
    /** @type {?} */
    ImageView.prototype.dialogRef;
    /** @type {?} */
    ImageView.prototype.data;
}
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        //console.log('snack',this.data);
    }
    SnackbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-component-example-snack',
                    template: "<span class=\"snack-bar-message\">\n  {{data.errormessage}}\n</span>\n",
                    styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    SnackbarComponent.ctorParameters = function () { return [
        { type: MatSnackBarRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return SnackbarComponent;
}());
export { SnackbarComponent };
if (false) {
    /** @type {?} */
    SnackbarComponent.prototype.snackBarRef;
    /** @type {?} */
    SnackbarComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUVuSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxRQUFRLENBQUM7QUFFekMsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FB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OztJQUNyRCxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLCBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYsIE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciwgRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuaW1wb3J0ICogYXMgbW9tZW50SW1wb3J0ZWQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0IHtNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbi8vaW1wb3J0IHtQcm9ncmVzc0Jhck1vZGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG4vL2ltcG9ydCAge0J0bkNvbXBvbmVudH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2J0bi9idG4uY29tcG9uZW50J1xuY29uc3QgbW9tZW50ID0gbW9tZW50SW1wb3J0ZWQ7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbGxkYXRhOiBhbnk7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cblxuICBkYXRhc291cmNldmFsOiBhbnk7XG4gIHNlYXJjaF9zZXR0aW5nc3ZhbDogYW55O1xuICBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2V2YWw6IGFueTtcbiAgZ3JhYl9saW5rdmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX3NvdXJjZXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9lbmRwb2ludHZhbDogYW55O1xuICB1cmx2YWw6IGFueTtcbiAgc2VhcmNoZW5kcG9pbnR2YWw6IGFueTtcbiAgc2VhcmNoTGlzdHZhbDogYW55O1xuICBwZGZfbGlua192YWw6IGFueTtcbiAgc3RhdHVzYXJydmFsOiBhbnk7XG4gIHNraXB2YWw6IGFueTtcbiAgZXJyb3JtZzogYW55O1xuICBqd3R0b2tlbnZhbDogYW55O1xuICBkZXRhaWxfZGF0YXR5cGV2YWw6IGFueTtcbiAgZGV0YWlsX3NraXBfYXJyYXl2YWw6IGFueTtcbiAgZGVsZXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgZWRpdHJvdXRldmFsOiBhbnk7XG4gIGFwaXVybHZhbDogYW55O1xuICB1cGRhdGVlbmRwb2ludHZhbDogYW55O1xuICBtb2RpZnlfaGVhZGVyX2FycmF5dmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55O1xuICBkYXRhY29sbGVjdGlvbnZhbDogYW55O1xuICBzZWxlY3Rpb246IGFueTtcbiAgc291cmNlZGF0YXZhbDogYW55O1xuICBlbWFpbGFycmF5dmFsOiBhbnk7XG4gIGNvbHVtbnM6IGFueSA9IFtdO1xuICBhdXRvc2VhcmNoaW5wdXQ6IGFueSA9IFtdO1xuICBvbGRkYXRhOiBhbnkgPSBbXTtcbiAgdHNlYXJjaDogYW55ID0gW107XG4gIHRhYmxlZmxhZzogYW55ID0gMDtcbiAgYXV0b3NlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyB4OiBhbnk7XG4gIHB1YmxpYyBsaWJkYXRhdmFsOmFueT17fTtcbiAgcHVibGljIGxpbWl0Y29uZHZhbDogYW55PXt9O1xuICBwdWJsaWMgY3VzdG9tYnV0dG9udmFsOiBhbnk7XG4gIHB1YmxpYyByZXN1bHQ6IGFueSA9IHt9O1xuICBwdWJsaWMgc29ydGRhdGF2YWw6IGFueSA9IHt9O1xuICBwdWJsaWMgc2g6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXJ0OiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZDI6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIHVwZGF0ZXRhYmxldmFsOiBhbnkgPSBmYWxzZTtcblxuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDphbnk9W107XG5cblxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoX3NldHRpbmdzKHNlYXJjaF9zZXR0aW5nczogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwgPSBzZWFyY2hfc2V0dGluZ3M7XG4gICAgLypmb3IgKGxldCBpPSAwOyBpPD0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbaV0ubGFiZWwpO1xuICAgIH0qL1xuXG4gICAgLyogIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0ubGFiZWwpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLnZhbHVlcyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKTsqL1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZShjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U6IGFueSkge1xuICAgIHRoaXMuY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsID0gY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaW1pdGNvbmQobGltaXRjb25kdmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbCA9IGxpbWl0Y29uZHZhbDtcbiAgICAvL2NvbnNvbGUubG9nKCdsaW1pdGNvbmR2YWwnLHRoaXMubGltaXRjb25kdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50KGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw7XG4gICAgaWYodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw9PTApIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudD0xO1xuICAgIC8vY29uc29sZS5sb2coJ2RhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCcsdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGdyYWJfbGluayhncmFiX2xpbms6IGFueSkge1xuICAgIHRoaXMuZ3JhYl9saW5rdmFsID0gZ3JhYl9saW5rO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b24oY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWJ1dHRvbnZhbCA9IGN1c3RvbWJ1dHRvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2UoZGF0ZV9zZWFyY2hfc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc29ydGRhdGEoc29ydGRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMuc29ydGRhdGF2YWwgPSBzb3J0ZGF0YXZhbDtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuc29ydGRhdGF2YWwsJ3NvcnRkYXRhdmFsJyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfZW5kcG9pbnQoZGF0ZV9zZWFyY2hfZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWwgPSBkYXRlX3NlYXJjaF9lbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXJsKHVybDogYW55KSB7XG4gICAgdGhpcy51cmx2YWwgPSB1cmw7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaGVuZHBvaW50KHNlYXJjaGVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaGVuZHBvaW50dmFsID0gc2VhcmNoZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBkZl9saW5rKHBkZl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLnBkZl9saW5rX3ZhbCA9IHBkZl9saW5rO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hMaXN0KHNlYXJjaExpc3Q6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoTGlzdHZhbCA9IHNlYXJjaExpc3Q7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxpYmRhdGEobGliZGF0YXZhbDogYW55KSB7XG4gICAgdGhpcy5saWJkYXRhdmFsID0gbGliZGF0YXZhbDtcbiAgICAvL2NvbnNvbGUubG9nKCdsaWJkYXRhdmFsJyx0aGlzLmxpYmRhdGF2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFzb3VyY2UoZGF0YXNvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gZGF0YXNvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0YWNvbGxlY3Rpb24oZGF0YWNvbGxlY3Rpb252YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgPSBkYXRhY29sbGVjdGlvbnZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBza2lwKHNraXA6IGFueSkge1xuICAgIHRoaXMuc2tpcHZhbCA9IHNraXA7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9kYXRhdHlwZShkZXRhaWxfZGF0YXR5cGU6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsID0gZGV0YWlsX2RhdGF0eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfc2tpcF9hcnJheShkZXRhaWxfc2tpcF9hcnJheTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCA9IGRldGFpbF9za2lwX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNvdXJjZWRhdGEoc291cmNlZGF0YTogYW55KSB7XG4gICAgdGhpcy5zb3VyY2VkYXRhdmFsID0gc291cmNlZGF0YTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RpZnlfaGVhZGVyX2FycmF5KG1vZGlmeV9oZWFkZXJfYXJyYXk6IGFueSkge1xuICAgIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCA9IG1vZGlmeV9oZWFkZXJfYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVsZXRlZW5kcG9pbnQoZGVsZXRlZW5kcG9pbnR2YWw6IGFueSkge1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwgPSBkZWxldGVlbmRwb2ludHZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB1cGRhdGVlbmRwb2ludCh1cGRhdGVlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVlbmRwb2ludHZhbCA9IHVwZGF0ZWVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhcGl1cmwoYXBpdXJsOiBhbnkpIHtcbiAgICB0aGlzLmFwaXVybHZhbCA9IGFwaXVybDtcbiAgfSBASW5wdXQoKVxuICBzZXQgdXBkYXRldGFibGUodXBkYXRldGFibGU6IGFueSkge1xuICAgIHRoaXMudXBkYXRldGFibGV2YWwgPSB1cGRhdGV0YWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBqd3R0b2tlbihqd3R0b2tlbjogYW55KSB7XG4gICAgaWYoand0dG9rZW4hPW51bGwpdGhpcy5qd3R0b2tlbnZhbCA9IGp3dHRva2VuO1xuICAgIGVsc2UgdGhpcy5qd3R0b2tlbnZhbD0nJztcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwsJ3Rva2VuJylcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzdGF0dXNhcnIoc3RhdHVzYXJyOiBhbnkpIHtcbiAgICB0aGlzLnN0YXR1c2FycnZhbCA9IHN0YXR1c2FycjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlbWFpbGFycmF5KGVtYWlsYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZW1haWxhcnJheXZhbCA9IGVtYWlsYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZWRpdHJvdXRlKGVkaXRyb3V0ZTogYW55KSB7XG4gICAgdGhpcy5lZGl0cm91dGV2YWwgPSBlZGl0cm91dGU7XG4gIH1cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgc3RhcnQgKi9cbiAgQElucHV0KClcbiAgc2V0IHByZXZpZXdfYXJ0aXN0eHAoZmx1ZzogYW55KSB7XG4gICAgdGhpcy5wcmV2aWV3Rmx1ZyA9IHRydWU7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBlbmQgKi9cblxuXG4gIHN0YXRlR3JvdXBzOiBzdHJpbmdbXSA9IHRoaXMuc2VhcmNoTGlzdHZhbDtcbiAgc3RhdGVHcm91cDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGF0YWNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNoZWFkZXI6IHN0cmluZ1tdID0gW107XG4gIGZvcm1hcnJheTogYW55ID0gW107XG4gIHN0YXJ0X2RhdGU6IGFueTtcbiAgZGF0ZVNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBzZWxlY3RTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgYXV0b1NlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICB0ZXh0U2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIGVuZF9kYXRlOiBhbnk7XG4gIHB1YmxpYyBpOiBhbnk7XG4gIGxvYWRpbmc6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgcHJlcmVzdWx0OiBhbnkgPSB7fTtcbiAgLy9kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmRhdGFzb3VyY2V2YWwpO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgLy8gb3B0aW9uczogRm9ybUdyb3VwO1xuICBteUZvcm06IGFueTtcbiAgLy8gbXlGb3JtOmFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHVibGljIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCwgcHVibGljIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIscHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0OiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZDpcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWw6XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3I6IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuXG5cbiAgICAvKiB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXSxcbiAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICB9KTsqL1xuXG5cblxuICB9XG4gIC8qQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbTGlzdGluZ10nXG4gIH0pKi9cblxuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG5cbiAgICAgLy9jb25zb2xlLmxvZygnbmdvbmNoYW5nZSAuLicsY2hhbmdlcyk7XG4gICAgZm9yKGxldCB2IGluIGNoYW5nZXMpe1xuICAgICAgLy9jb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZih2PT0ndXBkYXRldGFibGUnKXtcbiAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRldGFibGUnKTtcbiAgICAgICAgaWYoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlIT1udWxsKVxuICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9ICcnKSB7XG5cbiAgICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICAgIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgICAgc291cmNlID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvblxuICAgICAgfTtcbiAgICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMucHJlcmVzdWx0ID0gdGhpcy5yZXN1bHQucmVzO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgbGV0IHggPSB0aGlzLng7XG5cbiAgICBsZXQgdGVtcCA9IFtdXG4gICAgbGV0IGtleXMgPSB4WzBdXG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpICAgIC8qYnkgT2JqZWN0LmtleXMoKSB3ZSBjYW4gZmluZCB0aGUgZmllbGRuYW1lcyhvciBrZXlzKSBpbiBhbiBvYmplY3QsIGkuZSwgaW4gdGVtcCBvYmplY3QgZmllbGQgbmFtZXMgYXJlIHNhdmVkKi9cblxuICAgIGxldCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGxldCBoZWFkZXJfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29sZGVmX2xpc3QucHVzaCh0ZW1wW2ldLnJlcGxhY2UoL1xccy9nLCBcIl9cIikpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSlcbiAgICB9XG4gICAgLy9jb2xkZWZfbGlzdC5wdXNoKCdBY3Rpb25zJyk7XG4gICAgLy9oZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmZiA9IGByb3cuJHtjb2xkZWZfbGlzdFtpXX1gXG4gICAgICB2YXIgdHQgPSB7IGNvbHVtbkRlZjogYCR7Y29sZGVmX2xpc3RbaV19YCwgaGVhZGVyOiBgJHtoZWFkZXJfbGlzdFtpXS5yZXBsYWNlKC9fL2csIFwiIFwiKX1gLCBjZWxsOiAocm93KSA9PiBldmFsKGZmKSwgb2JqbGVuZ3RoOiBoZWFkZXJfbGlzdC5sZW5ndGggfTtcbiAgICAgLy8gY29uc29sZS5sb2coJ3R0Jyx0dCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuICAgICAgZm9yIChsZXQgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgaWYgKGIgPT0gdHQuaGVhZGVyKSB0dC5oZWFkZXIgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpID09IC0xKVxuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh0dCk7XG4gICAgfVxuICAgIGxldCBkaXNwbGF5ZWRjb2xzID0gdGhpcy5jb2x1bW5zLm1hcCh4ID0+IHguY29sdW1uRGVmKTtcbiAgICBsZXQgY3VzdG9tY29sczphbnk9W107XG4gICAgLy9jb25zb2xlLmxvZygnZGlzcGxheWVkY29scycsZGlzcGxheWVkY29scyk7XG4gICAgaWYodGhpcy5saWJkYXRhdmFsIT1udWxsICYmIHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnMgIT1udWxsKVxuICAgICAgY3VzdG9tY29scz10aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzO1xuICAgIGlmKGN1c3RvbWNvbHMhPW51bGwgJiYgY3VzdG9tY29scy5sZW5ndGg+MCl7XG4gICAgICBmb3IobGV0IHYgaW4gY3VzdG9tY29scyl7XG4gICAgICAgIGlmKGRpc3BsYXllZGNvbHMuaW5jbHVkZXMoY3VzdG9tY29sc1t2XSk9PWZhbHNlKXtcbiAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7Y29sdW1uRGVmOmN1c3RvbWNvbHNbdl0saGVhZGVyOmN1c3RvbWNvbHNbdl0sY2VsbDonTkEnfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpc3BsYXllZGNvbHM9Y3VzdG9tY29scztcbiAgICB9XG5cblxuICAgIC8vY29uc29sZS5sb2coJ2N1c3RvbWNvbHMnLGN1c3RvbWNvbHMsZGlzcGxheWVkY29scyk7XG4gICAgaWYodGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb249PW51bGwgfHwgdGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb249PWZhbHNlKVxuICAgIGRpc3BsYXllZGNvbHMucHVzaCgnQWN0aW9ucycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGlzcGxheWVkY29scztcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnIycpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ3NlbGVjdCcpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG5cbiAgICBsZXQgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YSA9IGRhdGFfbGlzdDtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cbiAgLyoqaW1hZ2UgdmlldyBtb2RhbCAqL1xuICBpbWdfbW9kYWxfdmlldyhpbWc6YW55KXtcbi8vY29uc29sZS53YXJuKFwiaW1nX21vZGFsX3ZpZXdcIixpbWcpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXcsIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldycsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgYWxsZGF0YTogaW1nIH1cbiAgICB9KTtcbiAgfVxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIHRoaXMuZXJyb3JtZyA9ICcnO1xuICAgIGxldCBkYXRhID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgZm9yICh4IGluIHRoaXMubXlGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG4gIGRhdGVTZWFyY2godmFsOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwic3RhcnQgZGF0ZVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXJ0X2RhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZW5kX2RhdGUpO1xuICAgIC8vIGxldCBzZCA9IG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKTtcbiAgICAvLyBsZXQgZWQgPSBtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpO1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgbGV0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwrJy1jb3VudCc7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBsZXQgdGV4dFNlYXJjaDphbnk9e307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgaWYgKG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCkgIT0gbnVsbCAmJiBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCkgIT0gbnVsbCkge1xuXG5cblxuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblxuICAgICAgaWYodGhpcy5lbmRfZGF0ZSE9bnVsbCAmJiB0aGlzLnN0YXJ0X2RhdGUhPW51bGwpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZm9yKGxldCBpIGluIHRoaXMudHNlYXJjaCl7XG4gICAgICAgIHRleHRTZWFyY2hbaV09eyRyZWdleDp0aGlzLnRzZWFyY2hbaV0udG9Mb3dlckNhc2UoKX07XG4gICAgICB9XG5cbiAgICAgIGxldCBhdXRvc2VhcmNoOmFueT17fTtcbiAgICAgIC8vdGhpcy5hdXRvc2VhcmNoO1xuICAgICAgZm9yKGxldCBiIGluIHRoaXMuYXV0b3NlYXJjaCl7XG4gICAgICAgIGZvcihsZXQgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pe1xuICAgICAgICAgIGxldCB0djphbnk9e307XG4gICAgICAgICAgdHZbYl09dGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmKGF1dG9zZWFyY2hbJyRvciddPT1udWxsKSBhdXRvc2VhcmNoWyckb3InXT1bXTtcbiAgICAgICAgICBhdXRvc2VhcmNoWyckb3InXS5wdXNoKHR2KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgICAgc2tpcDowXG4gICAgICAgIH0sXG4gICAgICAgIHNvcnQ6e1xuICAgICAgICAgIGZpZWxkOnRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgICAgdHlwZTp0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICB9O1xuXG4gICAgIC8vIGNvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAgIC8vY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgLy9yZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbD0wO1xuICAgICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYocmVzdWx0LnJlc3VsdHMucmVzICE9bnVsbCAmJiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoPjApe1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246ICAgMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkXCJ9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOlwiTm8gc3VjaCBzZWFyY2ggcmVjb2QgZm91bmQgISFcIn1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSlcblxuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZihyZXN1bHQuY291bnQ9PTApIHRoaXMudGFibGVmbGFnPTE7XG4gICAgICAgIGVsc2UgdGhpcy50YWJsZWZsYWc9MDsgXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KVxuXG4gICAgICAvKnRoaXMuX2h0dHAucG9zdChsaW5rLCB7c291cmNlOnRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAnY3JlYXRlZF9hdCc6IHtcbiAgICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx0b2tlbjogdGhpcy5qd3R0b2tlbnZhbCxcbiAgICAgIH0pLnN1YnNjcmliZSggcmVzID0+e1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPXt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXMpO1xuICAgICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KSovXG4gICAgfSBlbHNlXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cblxuXG4gIHNlbGVjdFNlYXJjaCh2YWx1ZTogYW55LCB0eXBlOiBhbnkpIHtcbiAgICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgY29uZGl0aW9uW3R5cGUuZmllbGRdID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuXG4gIHBhZ2luZyh2YWw6YW55KXtcbiAgICBpZih2YWw9PTEpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXA9KHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCkqdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQrKztcbiAgICB9XG4gICAgaWYodmFsPT0tMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPnRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPSh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtMSkqdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcbiAgICB9XG4gICAgaWYodmFsPjEpe1xuICAgICAgaWYodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50PT0xKSB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPTA7XG4gICAgICBlbHNlIHRoaXMubGltaXRjb25kdmFsLnNraXA9KHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0xKSp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIC8vdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG5cbiAgICB9XG4gICAgaWYodmFsPT0tMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSByZXR1cm47XG4gICAgLy9jb25zb2xlLmxvZyh2YWwsJ3NzJyx0aGlzLmRhdGFjb2xsZWN0aW9udmFsLHRoaXMubGltaXRjb25kdmFsKTtcbiAgICBsZXQgdGV4dFNlYXJjaDphbnk9e307XG5cblxuICAgIGZvcihsZXQgaSBpbiB0aGlzLnRzZWFyY2gpe1xuICAgICAgdGV4dFNlYXJjaFtpXT17JHJlZ2V4OnRoaXMudHNlYXJjaFtpXS50b0xvd2VyQ2FzZSgpfTtcbiAgICB9XG5cbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgIGxldCBzb3VyY2UgPSB7XG4gICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6dGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfSxcbiAgICAgIHNvcnQ6e1xuICAgICAgICBmaWVsZDp0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICB0eXBlOnRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG5cbiAgICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIC8qbGV0IGRhdGE6YW55PXtcbiAgICAgIFwiY29uZGl0aW9uXCI6e1xuICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDp0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9XG5cbiAgICB9Ki9cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMucmVzdWx0LCdyZXMnKTtcbiAgICAgIGlmKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzICE9bnVsbCAmJiB0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPjApIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246ICAgMjAwMCxcbiAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOlwiTmV3IHJhbmdlIG9mIGRhdGEgbG9hZGVkXCJ9XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOlwiTm8gRGF0YSBGb3VuZCBpbiB0aGlzIHJhbmdlICEhXCJ9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAvL3RoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgYWRkYXV0b3NlYXJjaGRhdGEodmFsOmFueSl7XG4gICAgLy9jb25zb2xlLmxvZygndicsdmFsKTtcblxuICB9XG4gIHJlbW92ZSh2YWw6YW55LGk6YW55LGZpZWxkOmFueSl7XG5cbiAgICBpZih0aGlzLmF1dG9zZWFyY2hbZmllbGRdICE9bnVsbCl0aGlzLmF1dG9zZWFyY2hbZmllbGRdLnNwbGljZShpLDEpO1xuICB9XG4gIGF1dG9zZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55LGRhdGE6YW55KSB7XG4gICAgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdPScnO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5hdXRvc2VhcmNoaW5wdXQsJ2FzaScpO1xuICAgIGlmKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV09PW51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV09W107XG4gICAgICA7XG4gICAgfVxuICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ucHVzaChkYXRhKTtcbiAgICAvL2NvbnNvbGUubG9nKHZhbHVlLGRhdGEsJ3NzJyx0aGlzLmF1dG9zZWFyY2gpO1xuICAgIC8qbGV0IHZhbDogYW55ID0gdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXTtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gIT1udWxsICYmIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMCAmJiB7ICRvcjogW3RoaXMuYXV0b3NlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSwgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdXSB9KSBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTsqL1xuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5yZXN1bHQucmVzKTtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgLy8gfSk7XG4gIH1cblxuICB0ZXh0c2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSkge1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIGxldCB2YWw9Jyc7XG4gICAgaWYodGhpcy50c2VhcmNoIT1udWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0hPW51bGwpXG4gICAge1xuICAgICAgdmFsPSB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgXG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0hPW51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvL2NvbnNvbGUud2Fybih0aGlzLnRzZWFyY2gpO1xuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy9hZGQgbG9hZGVyXG4gICAgLy8gdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIC8vY2xvc2UgbG9hZGVyXG4gICAgLy8gICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuXG4gIHJlZnJlc2hkYXRhKCl7XG4gICAgdGhpcy5hdXRvc2VhcmNoPVtdO1xuICAgIHRoaXMudHNlYXJjaD1bXTtcbiAgICB0aGlzLnNlbGVjdHNlYXJjaD1bXTtcbiAgICB0aGlzLnN0YXJ0X2RhdGU9bnVsbDtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwPTA7XG4gICAgdGhpcy5lbmRfZGF0ZT1udWxsO1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbj17fTtcbiAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uPXt9O1xuICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gIH1cbiAgcmVmcmVzaGFsbGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICBpZiAodmFsLmZpbHRlcmVkRGF0YSAhPW51bGwgJiYgdmFsLmZpbHRlcmVkRGF0YS5sZW5ndGggPCB0aGlzLm9sZGRhdGEubGVuZ3RoKSB7XG4gICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWZyZXNoIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICcgVXBkYXRlZCEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaExpc3R2YWwuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgZ2V0c3RhdHVzKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgZm9yIChsZXQgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzYXJydmFsW2JdLnZhbCA9PSB2YWwpXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0dXNhcnJ2YWxbYl0ubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBcIk4vQVwiO1xuICB9XG4gIHBkZkZsYWcodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NoYXR0ZXIgYmxvaycpO1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBncmFwdXJsKHZhbDogYW55KSB7XG4gICAgLy8gIGZvciBhbGwgcm93IGNoZWNraW5nXG4gICAgLy8gY29uc29sZS5sb2codmFsKVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQyID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXVkKTtcbiAgfVxuXG4gIGNvcHlUZXh0KHJvdzogYW55LCB2YWw6IHN0cmluZykge1xuXG4gICAgbGV0IGZ1bGx1cmwgPSB2YWwgKyAnJyArIHJvdztcbiAgICBsZXQgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBzZWxCb3guc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgc2VsQm94LnZhbHVlID0gZnVsbHVybDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbEJveCk7XG4gICAgc2VsQm94LmZvY3VzKCk7XG4gICAgc2VsQm94LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xuICB9XG5cbiAgb3BlbmludGVybmFsbGluayh2YWw6YW55KXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdmFsLnJvdXRlXSk7XG4gIH1cbiAgb3BlbmludGVybmFsbGlua3dpdGhwYXJhbSh2YWw6YW55LGRhdGE6YW55KXtcbiAgICBsZXQgcmRhdGE6YW55PVtdO1xuICAgIHJkYXRhLnB1c2godmFsLnJvdXRlKTtcbiAgICBmb3IobGV0IHYgaW4gdmFsLnBhcmFtKXtcbiAgICAgcmRhdGEucHVzaChkYXRhW3ZhbC5wYXJhbVt2XV0pXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ3JhZGF0JyxyZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocmRhdGEpO1xuICB9XG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25sb2NhbGRhdGEodmFsOmFueSxkYXRhOmFueSl7XG4gICAgLy9jb25zb2xlLmxvZygnb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YScsdmFsLGRhdGEpO1xuICAgIGxldCBkYXRhYXJyPVtdO1xuICAgIC8vZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgLy9kYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICBpZih2YWwucmVmcmVzaGRhdGEhPW51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpe1xuICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICB9XG4gICAgZm9yKGxldCB2IGluIHZhbC5kYXRhZmllbGRzKXtcbiAgICAgIGxldCB0ZW1wYXJyPVtdO1xuICAgICAgdGVtcGFyci5wdXNoKHZhbC5kYXRhZmllbGRzW3ZdKTtcbiAgICAgIGlmKHZhbC5kYXRhZmllbGRzW3ZdIT0naW1hZ2UnICYmIHZhbC5kYXRhZmllbGRzW3ZdIT0ndmlkZW8nKVxuICAgICAgICB0ZW1wYXJyLnB1c2goZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pO1xuICAgICAgaWYodmFsLmRhdGFmaWVsZHNbdl09PSdpbWFnZScpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICBpZih2YWwuZGF0YWZpZWxkc1t2XT09J3ZpZGVvJykge1xuICAgICAgICBsZXQgdGVtcGh0bWwgOmFueT0oXCI8aWZyYW1lIHdpZHRoPTU2MCBoZWlnaHQ9MzE1IHNyYz1odHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIisgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gK1wiIGZyYW1lYm9yZGVyPTAgYWxsb3c9YWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPiA8YnIvPlwiKTtcbiAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgIHRlbXBhcnIucHVzaCh0ZW1waHRtbCk7XG4gICAgICB9XG4gICAgICAvL2lmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuICAgIH1cbiAgICBsZXQgcmVzOmFueT1kYXRhYXJyO1xuXG4gICAgaWYodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUhPW51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoPjApIHtcbiAgICAgIGxldCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgIGZvciAobGV0IGIgaW4gcmVzKSB7XG4gICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IHJlc1tiXVswXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2gnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwscmVzW2JdWzFdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocmVzZGF0YVtiXT09bnVsbCkgcmVzZGF0YVtiXT1yZXNbYl07XG5cbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcz1yZXNkYXRhO1xuICAgICAgLy9jb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coJ2RhdGFhcnInLGRhdGFhcnIpO1xuICAgIGlmKHZhbC5yZWZyZXNoZGF0YSE9bnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC1hcGlkYXRhJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiByZXMgfVxuICAgIH0pO1xuICB9XG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhKHZhbDphbnksZGF0YTphbnkpe1xuICAgIC8vY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhJyx2YWwsZGF0YSk7XG4gICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgbGV0IGxpbms6YW55PXRoaXMuYXBpdXJsdmFsICt2YWwuZW5kcG9pbnQ7XG4gICAgbGV0IHNvdXJjZTphbnk9e307XG4gICAgc291cmNlW3ZhbC5wYXJhbV09ZGF0YS5faWQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcblxuICAgICAgLy9jb25zb2xlLmxvZygncmVzJyxyZXN1bHQpO1xuICAgICAgbGV0IHJlc2RhdGE6IGFueSA9IHt9O1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBpZiAocmVzdWx0LnJlc1swXSAhPSBudWxsKSB7XG4gICAgICAgIHJlc2RhdGEgPSByZXN1bHQucmVzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhYXJyID0gW107XG4gICAgICAvL2RhdGFhcnIucHVzaChbJ25hbWUnLCdkZWJhc2lzJ10pO1xuICAgICAgLy9kYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICAgIGZvciAobGV0IHYgaW4gcmVzZGF0YSkge1xuICAgICAgICBsZXQgdGVtcGFyciA9IFtdO1xuICAgICAgICB0ZW1wYXJyLnB1c2godik7XG4gICAgICAgIGlmICh2ICE9ICdpbWFnZScgJiYgdiAhPSAndmlkZW8nKVxuICAgICAgICAgIHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTtcbiAgICAgICAgaWYgKHYgPT0gJ2ltYWdlJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyByZXNkYXRhW3ZdICsgXCIgPiA8YnIvPlwiKVxuICAgICAgICBpZiAodiA9PSAndmlkZW8nKSB7XG4gICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoXCI8aWZyYW1lIHdpZHRoPTU2MCBoZWlnaHQ9MzE1IHNyYz1odHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIiArIHJlc2RhdGFbdl0gKyBcIiBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz5cIik7XG4gICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG5cbiAgICAgIH1cbiAgICAgICAgaWYodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUhPW51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoPjApIHtcbiAgICAgICAgICBsZXQgcmVzZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgYiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IGRhdGFhcnJbYl1bMF0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaCcsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsZGF0YWFycltiXVsxXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHJlc2RhdGFbYl09PW51bGwpIHJlc2RhdGFbYl09ZGF0YWFycltiXTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICAgICAgZGF0YWFycj1yZXNkYXRhO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZygnZGF0YWFycicsZGF0YWFycik7XG4gICAgICBpZiAodmFsLnJlZnJlc2hkYXRhICE9IG51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgIGRhdGE6IHtpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IGRhdGFhcnJ9XG4gICAgICB9KTtcbiAgICB9XG4gICAgICBpZihyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgZGF0YTpyZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTonU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJ31cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmc9ZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIHJldHVybjtcblxuICB9XG4gIG9wZW5leHRsaW5rd2l0aHBhcmFtKHZhbDphbnksZGF0YTphbnkpe1xuICAgIC8vY29uc29sZS5sb2coJ3ZhbCcsdmFsLGRhdGEpO1xuICAgIGxldCBxdGV4dDphbnk9Jyc7XG4gICAgbGV0IGZ1bGxsaW5rOmFueT0nJztcbiAgICBmdWxsbGluaz12YWwubGluaztcbiAgICBpZih2YWwucGFyYW10eXBlPT1udWxsKSB7XG4gICAgICBmb3IgKGxldCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgICBxdGV4dCA9IHZhbC5wYXJhbVt2XS5xICsgXCI9XCIgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl0ua2V5XSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG4gICAgICAgIGlmIChwYXJzZUludCh2KSA9PSAwKSBmdWxsbGluayA9IGZ1bGxsaW5rICsgJz8nICsgcXRleHQ7XG4gICAgICAgIGlmIChwYXJzZUludCh2KSAhPSAwKSBmdWxsbGluayA9IGZ1bGxsaW5rICsgJyYnICsgcXRleHQ7XG4gICAgICB9XG4gICAgICAvL3ZhbC5saW5rPWZ1bGxsaW5rO1xuICAgIH1cbiAgICBpZih2YWwucGFyYW10eXBlIT1udWxsICYmIHZhbC5wYXJhbXR5cGU9PSdhbmd1bGFyJyl7XG4gICAgICBmb3IgKGxldCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgICAvL3F0ZXh0ID0gdmFsLnBhcmFtW3ZdLnEgKyBcIj1cIiArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcblxuICAgICAgICAgIGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnLycgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl1dKTtcbiAgICAgIH1cbiAgICAgIC8vdmFsLmxpbms9ZnVsbGxpbms7XG4gICAgfVxuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIHNldFRpbWVvdXRcIik7XG4gICAgICAvL2NvbnNvbGUubG9nKCdsaW5rJyxmdWxsbGluayxkYXRhLHF0ZXh0KTtcbiAgICB9LCAxMCk7XG5cbiAgICB3aW5kb3cub3BlbihmdWxsbGluaywgXCJfYmxhbmtcIik7XG4gIH1cbiAgY2xpY2t1cmwodmFsOiBhbnksIHVybDogYW55KSB7XG4gICAgbGV0IGxpbmsgPSB1cmwgKyAnJyArIHZhbC5faWQgKyAnJyArIHRoaXMucGRmX2xpbmtfdmFsO1xuICAgIHdpbmRvdy5vcGVuKGxpbmssIFwiX2JsYW5rXCIpO1xuICB9XG5cblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0aW9uIT1udWxsICYmIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCkge1xuICAgICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDogYW55KSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgXCJfXCIpXSA9IHBvaW50W2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgLyphcHBseUZpbHRlcjEoZmlsdGVyVmFsdWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsLnZhbHVlKTtcbiAgICBsZXQgdmFsdWU9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodmFsLnZhbHVlKTtcblxuICAgIHZhbHVlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvISogdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IGZ1bmN0aW9uKGRhdGEsIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAvLyByZXR1cm4gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH0qIS9cbiAgfSovXG5cbiAgc3R5bGVDZWxsKGNvbF9uYW1lLCByb3cpIHtcblxuICAgIC8qXG4gICAgIGlmIChjb2xfbmFtZVsnY29sdW1uRGVmJ109PSdwcm9ncmVzcycgJiYgcm93Wydwcm9ncmVzcyddPT0nMTAwJyl7XG4gICAgIHJldHVybiB7J2NvbG9yJyA6ICdyZWQnfVxuICAgICB9IGVsc2Uge1xuICAgICByZXR1cm4ge31cbiAgICAgfVxuICAgICAqL1xuXG5cbiAgICByZXR1cm4ge31cbiAgfVxuICAvKipzaG93IHZpZGVvIG1vZGFsIG9uIGNsaWNrIG9mIHRoYW1uYWlsIGZ1bmN0aW9uIGJ5IHNvdXJhdiAqL1xuICBmZXRjaHZpZGVvKHZpZGVvZGF0YTphbnkpe1xuICAgIC8vY29uc29sZS53YXJuKCd2aWRlb2RhdGEnLHZpZGVvZGF0YSk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihWaWRlb1BsYXllciwge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC12aWRlb3BsYXllci1wcmV2aWV3JyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBwcmV2aWV3RGF0YTogdmlkZW9kYXRhIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZpZXdkYXRhKGRhdGExOiBhbnkpIHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSBkYXRhMTtcbiAgICBsZXQgZGF0YTI6IGFueSA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGxldCBmbGFnazogYW55ID0gJyc7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSB0cnVlKSBkYXRhW2tleV0gPSAnWWVzJztcbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IGZhbHNlKSBkYXRhW2tleV0gPSAnTm8nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT0gJ2ltYWdlJykge1xuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9IFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW2tleV0gKyBcIj48YnIvPlwiO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGxldCB0ZW1wZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgayBpbiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IHAgaW4gdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgPT0gJ2ltYWdlJykge1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGltZ3ZhbDphbnk9dGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0uZmlsZXVybCtkYXRhW2tleV1ba107XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWd2YWwpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVtrZXldW2tdLnJlcGxhY2UoLycvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW2tleV1ba10gKyBcIj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIrZGF0YVtrZXldW2tdK1wiPC9zcGFuPjxici8+XCIpXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlICE9ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAvL3RlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIgKyBkYXRhW2tleV1ba10gKyBcIjwvc3Bhbj48YnIvPlwiKTtcblxuXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgLy90ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldW2tdKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgb2JqayBpbiBkYXRhW2tleV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaChcIjxzcGFuPlwiICsgb2JqayArIFwiIDogXCIgKyBkYXRhW2tleV1ba11bb2Jqa10gKyBcIjwvc3Bhbj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSB0ZW1wZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IG4gaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFbbl0gIT0gbnVsbCAmJiBkYXRhW25dICE9ICcnKSB7XG4gICAgICAgIGRhdGEyW25dID0gZGF0YVtuXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpIHtcbiAgICAgIC8vZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV09Jyc7XG4gICAgICBkZWxldGUgZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV07XG4gICAgfVxuICAgIGxldCByZXMgPSBPYmplY3QuZW50cmllcyhkYXRhMik7XG4gICAgLy9jb25zb2xlLmxvZygndmlldyBkYXRhJyxyZXMpO1xuICAgIGlmKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlIT1udWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aD4wKSB7XG4gICAgICBsZXQgcmVzZGF0YTogYW55ID0gW107XG4gICAgICBmb3IgKGxldCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoJyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgIHJlc2RhdGFbYl0gPSBbdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10udmFsLHJlc1tiXVsxXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHJlc2RhdGFbYl09PW51bGwpIHJlc2RhdGFbYl09cmVzW2JdO1xuXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXM9cmVzZGF0YTtcbiAgICAgIC8vY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG5cbiAgfVxuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgbGV0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IHBhbmVsQ2xhc3M6ICdjdXN0b20tYm90dG9tc2hlZXQnLCBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXModGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnQsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy90aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy90aGlzLmFsbFNlYXJjaCgpO1xuXG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTonU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJ31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvL3RoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBmb3IgdHJlZSB2aWV3IGluIG1vZGFsXG4gIGN1c3RvbWJ1dHRvbmZ1bmMoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTsgICAgLy8gcm93IGRhdGFcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWJ1dHRvbnZhbCk7ICAgIC8vIG9iamVjdCBmcm9tIHdoZXJlIHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHVzZWRcbiAgICBsZXQgdW5zYWZldXJsOiBhbnkgPSB0aGlzLmN1c3RvbWJ1dHRvbnZhbC51cmw7ICAgLy9pZnJhbWUgdXJsXG4gICAgZm9yIChsZXQgYiBpbiB0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHMpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIGRhdGFbdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzW2JdXTtcbiAgICB9XG4gICAgdW5zYWZldXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7ICAgLy9mb3Igc2FuaXRpemluZyB0aGUgdXJsIGZvciBzZWN1cml0eSwgb3RoZXJ3aXNlIGl0IHdvbid0IGJlIGFibGUgdG8gc2hvdyB0aGUgcGFnZSBpbiBpZnJhbWUsIGhlbmNlIG1vZGFsXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHsgICAgICAgLy8gZm9yIG9wZW5pbmcgdGhlIG1vZGFsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tZGF0YS1tb2RhbCcsXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogW3sgZGF0YTogZGF0YSwgY3VzdG9tZGF0YTogdW5zYWZldXJsIH1dIH1cbiAgICB9KTtcblxuXG4gIH1cblxuXG5cbiAgbWFuYWdlc3RhdHVzbXVsdGlwbGUoKSB7XG5cbiAgICBsZXQgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgZGF0YTogeyBpdGVtczogdGhpcy5zdGF0dXNhcnJ2YWwgfSB9KTtcblxuICAgIGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAvL2RhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgLy9kYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIGxldCBuZXdzdGF0dXM6IGFueSA9IHJlc3VsdC52YWw7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzbWFueSh0aGlzLmFwaXVybHZhbCArICdzdGF0dXN1cGRhdGUnLCBpZHMsIHJlc3VsdC52YWwsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy90aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKHRoaXMub2xkZGF0YVtjXS5faWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gbmV3c3RhdHVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIC8vdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6J1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hISd9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZGVsZXRlbXVsdGlwbGUoKSB7XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YTogeyBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgcmVjb3Jkcz8nIH1cbiAgICB9KTtcbiAgICBsZXQgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU1hbnlEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5kZWxldGVlbmRwb2ludHZhbCwgaWRzLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgaW4gaWRzKSB7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuXG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQocykgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJyl7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOnJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOidTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuICBkZWxldGVkYXRhKGRhdGE6IGFueSkge1xuICAgIC8vYWxlcnQoNSk7XG4gICAgLy90aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsZGF0YSx0aGlzLmp3dHRva2VudmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YSA4ODkgLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2p3dHRva2VudmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCk7XG5cblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyByZWNvcmQgPz8nIH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PSAneWVzJykge1xuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5kZWxldGVlbmRwb2ludHZhbCwgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gZGF0YS5faWQpXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTonU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJ31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCwgZGF0YS5faWRdKTtcbiAgfVxuXG5cbiAgc29ydHRhYmxlKGZpZWxkOmFueSx0eXBlOmFueSl7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbC5maWVsZD1maWVsZDtcbiAgICB0aGlzLnNvcnRkYXRhdmFsLnR5cGU9dHlwZTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICB9XG5cbiAgYWxsU2VhcmNoKCl7XG4gICAgLy9jb25zb2xlLmxvZyhcImhpdFwiKTtcblxuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgbGV0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwrJy1jb3VudCc7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBsZXQgdGV4dFNlYXJjaDphbnk9e307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgZm9yKGxldCBpIGluIHRoaXMudHNlYXJjaCl7XG4gICAgICB0ZXh0U2VhcmNoW2ldPXskcmVnZXg6dGhpcy50c2VhcmNoW2ldLnRvTG93ZXJDYXNlKCl9O1xuICAgIH1cblxuICAgIGxldCBhdXRvc2VhcmNoOmFueT17fTtcbiAgICAvL3RoaXMuYXV0b3NlYXJjaDtcbiAgICBmb3IobGV0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKXtcbiAgICAgIGZvcihsZXQgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pe1xuICAgICAgICBsZXQgdHY6YW55PXt9O1xuICAgICAgICB0dltiXT10aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKGF1dG9zZWFyY2hbJyRvciddPT1udWxsKSBhdXRvc2VhcmNoWyckb3InXT1bXTtcbiAgICAgICAgYXV0b3NlYXJjaFsnJG9yJ10ucHVzaCh0dik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ2F1dG9zJyxhdXRvc2VhcmNoKTtcblxuXG5cbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6MFxuICAgICAgfSxcbiAgICAgIHNvcnQ6e1xuICAgICAgICBmaWVsZDp0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICB0eXBlOnRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG5cbiAgICAvL2NvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAvL2NvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAvL3JldHVybjtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbD0wO1xuICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZihyZXN1bHQucmVzdWx0cy5yZXMgIT1udWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGg+MCl7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogICAyMDAwLFxuICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkXCJ9XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG5cbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJObyBzdWNoIHNlYXJjaCByZWNvZCBmb3VuZCAhIVwifVxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxvYWRpbmc9ZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIH0pXG5cbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gKHJlc3VsdC5jb3VudCk7XG4gICAgICBpZihyZXN1bHQuY291bnQ9PTApIHRoaXMudGFibGVmbGFnPTE7XG4gICAgICBlbHNlIHRoaXMudGFibGVmbGFnPTA7XG4gICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgfSlcblxuICB9XG5cblxuXG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBzdGFydCAqL1xuICBhcnRpc3R4cFByZXZpZXcoc2luZ2xlRGF0YTogYW55KSB7XG4gICAgbGV0IGxpbmsgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjMwOTAvJyArICdkYXRhbGlzdCc7XG4gICAgLyoqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKiovXG4gICAgbGV0IGRhdGE6IGFueSA9IHsgXCJzb3VyY2VcIjogXCJibG9ja2NoYWludXNlcl92aWV3XCIsIFwiY29uZGl0aW9uXCI6IHsgXCJwb3N0c19pZF9vYmplY3RcIjogc2luZ2xlRGF0YS5faWQgfSwgXCJ0b2tlblwiOiB0aGlzLmp3dHRva2VudmFsIH07XG4gICAgLyoqKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKiovXG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0RGF0YShsaW5rLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3RsdDogYW55ID0gcmVzcG9uc2U7XG4gICAgICAvKiBvcGVuIGRpYWxvZyAqL1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtYXJ0aXN0eHAtcHJldmlldycsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBkYXRhOiB7IHByZXZpZXc6IHRydWUsIHByZXZpZXdEYXRhOiByZXN0bHQgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gZW5kICovXG5cblxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1kaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1kaWFsb2c+LFxuICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGxldCBiIGluIGRhdGEpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIHJvd2RhdGFbZGF0YVtiXV07XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpO1xuICB9XG5cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS53YXJuKFwiYm90dG9tLXNoZWV0XCIsZGF0YSk7XG4gIH1cblxuICBvcGVuTGluayh2YWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYm90dG9tU2hlZXRSZWYuZGlzbWlzcyh2YWwpO1xuICB9XG59XG5cbi8qKmxpc3RpbmcgdmlkZW8gcGxheWVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aWRlb3BsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAndmlkZW9wbGF5ZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFZpZGVvUGxheWVyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxWaWRlb1BsYXllcj4sXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS53YXJuKCd2aWRlb3BsYXllck1vZGFsJyxkYXRhLnByZXZpZXdEYXRhLnZpZGVvKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKmxpc3RpbmcgSW1hZ2UgVmlldyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ2ltZ19tb2RhbF92aWV3Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlVmlldz4sXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS53YXJuKCdJbWFnZVZpZXdNb2RhbCcsZGF0YS5hbGxkYXRhKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBzbmFja0JhclJlZjogTWF0U25hY2tCYXJSZWY8U25hY2tiYXJDb21wb25lbnQ+LFxuICAgICAgQEluamVjdChNQVRfU05BQ0tfQkFSX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnlcbiAgKSB7XG4gICAgLy9jb25zb2xlLmxvZygnc25hY2snLHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==