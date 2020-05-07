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
            tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i], cell: (/**
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
        //console.log('customcols',customcols,displayedcols,this.columns);
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
                                resdata_1[b] = [_this.libdataval.detailview_override[c].val, dataarr[b][1], dataarr[b][0]];
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
                    template: "<div class=\"container\">\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\">\n            <ng-container class=\"inputfilterForloop\" *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\" >\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field)\" (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\" >\n                            search\n                        </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </ng-container>\n\n            <ng-container class=\"inputfilterForAuto\" *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                        <mat-chip\n                                *ngFor=\"let v of autosearch[item.field]; let i=index;\"\n                                [selectable]=\"true\"\n                                [removable]=\"true\"\n                                (removed)=\"remove(v,i,item.field)\">\n                            {{v.name}}\n                            <mat-icon matChipRemove >cancel</mat-icon>\n                        </mat-chip>\n                        <input\n                                placeholder=\"{{item.label}}\"\n                                #fruitInput\n                                [matAutocomplete]=\"auto\"\n                                [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\"\n                        >\n                    </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete  #auto=\"matAutocomplete\" >\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of item.values\" [value]=\"statusval.val\" (click)=\"autosearchfunction(item.field,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </ng-container>\n\n\n\n<!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container  class=\"filterForTexticon\" *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <mat-form-field *ngFor=\"let status of this.search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" >\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval\" (click)=\"selectSearch(statusval.val, status)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\"date_search_endpointval !=null && date_search_sourceval != null && search_settingsval.datesearch != null \">\n                <ng-container  class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"autocomplete=\"off\"  placeholder=\"{{status.startdatelabel}}\"  [(ngModel)]=\"start_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input  class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1 ></mat-datepicker>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                </ng-container>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <ng-container class=\"refresh\">\n                <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                    autorenew\n                </i>\n            </ng-container>\n\n            <ng-container class=\"refresh\"  *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"allSearch()\">Search</button>\n            </ng-container>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\" [routerLink]=\"click_to_add_ananother_pageval\" >Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\"  class=\"example-section\">\n            <mat-progress-bar\n                    class=\"example-margin\"\n                    [color]=\"color\"\n                    [mode]=\"mode\"\n                    [value]=\"value\"\n                    [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br/>\n        <br/>\n        </section>\n        \n        <ng-container *ngIf=\"tableflag==0\" >\n            <section class=\"lib-pager-class\">\n                <mat-label>Showing\n                        {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of </mat-label>\n                <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n                <mat-form-field>\n                    <mat-label>Page Size</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>Page No</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n                </mat-form-field>\n\n\n                <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                    skip_previous\n                </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                    skip_next\n                </span>\n            </section>\n\n\n        </ng-container>\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\n\n                <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                      (change)=\"$event ? selection.toggle(row) : null\"\n                                      [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                       #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">\n                        <span>\n                            {{column.header}}\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\" class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                                arrow_downward\n                            </span>\n                            <span class=\"material-icons cursor float-right\" *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"  (click)=\"sorttable(column.columnDef,'desc')\" >arrow_upward\n                            </span>\n\n                            <span class=\"material-icons cursor\" *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\" (click)=\"sorttable(column.columnDef,'desc')\" >\n                                unfold_more\n                            </span>\n\n                        </span>\n\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"   class=\"td-cell-center\">\n          \n                        <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }} {{pdfFlag(row)}}</span>\n                        <span *ngIf=\"column.columnDef!='status' &&  column.columnDef!='image' && column.columnDef!='video' \">\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes('date') && !column.columnDef.includes('datetime')\">\n                                <span [innerHTML]=\"row[column.columnDef]\"></span>\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes('date') && !column.columnDef.includes('datetime')\">\n                                {{row[column.columnDef] | date}}\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes('date') && column.columnDef.includes('datetime')\">\n                                {{row[column.columnDef] | date:'medium'}}\n                            </ng-container>\n                            <ng-container *ngIf=\"column!=null && row[column.columnDef]==null\">\n                               NA\n                            </ng-container>\n\n                        </span>\n                        <!-- for image view  -->\n                        <span *ngIf=\"column.columnDef=='image'\" (click)=\"img_modal_view(column.cell(row))\"> <span class=\"module_imgblock\"><img src=\"{{ column.cell(row) }}\" alt=\"{{ column.cell(row) }}\" ></span></span>\n                        <!-- for video view -->\n                        <span *ngIf=\"column.columnDef=='video' \"><span class=\"module_videoblock\" (click)=\"fetchvideo(row)\">\n                            <img src=\"https://img.youtube.com/vi/{{ column.cell(row) }}/sddefault.jpg\" alt=\"{{ column.cell(row) }}\"\n                                 (click)=\"fetchvideo(row)\"></span>\n                        </span>\n\n                        <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n                \n\n                        <!--          <span *ngIf=\"sh==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null\" class=\"cursor\">\n                            <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && aud==true  && urlval !=null\">\n                            <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n\n\n<!--// for grap url//-->\n\n\n\n                        <span *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name]\" class=\"cursor\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url)\">{{grab_linkval[1].label}}</button>\n                        </span>\n                    \n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef== [grab_linkval[0].col_name]\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url)\">{{grab_linkval[2].label}}</button>\n                        </span>\n\n                        <!--          //grap url end//-->\n\n\n<!--          </span>-->\n                        <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n\n\n\n                <ng-container matColumnDef=\"Actions\" *ngIf=\"libdataval.hideaction==null || libdataval.hideaction==false\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n                    <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\" data-label=\"Actions\"  class=\"td-cell-center\">\n                        <!--custom buttions block -->\n                        <ng-container *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length >0 \">\n                            <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                <section class=\"custombutton{{cb}}\">\n                                <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                    <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                       <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                           <button  mat-raised-button color=\"primary\">{{custombutton.label}}</button>\n                                       </a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button  mat-raised-button color=\"primary\" (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                    </ng-container>\n\n                                </ng-container>\n                                <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                    <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"openinternallink(custombutton)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button  mat-raised-button color=\"primary\" (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                    </ng-container>\n\n                                </ng-container>\n                                <ng-container *ngIf=\"custombutton.type=='action'\">\n                                    <ng-container *ngIf=\"custombutton.datatype=='local' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionlocaldata(custombutton,row)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                           <button  mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionapidata(custombutton,row)\" >{{custombutton.label}}</button>\n                                    </ng-container>\n\n                                </ng-container>\n                            </section>\n\n                            </ng-container>\n                        </ng-container>\n                        <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                            <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\" class=\"cursor\" (click)=\"editdata(row)\" >\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\" class=\"cursor\" (click)=\"deletedata(row)\" >\n                                <i class=\"material-icons\">\n                                    delete_outline\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"  class=\"cursor\" (click)=\"viewdata(row)\" >\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"  (click)=\"managestatus(row)\" >\n                                <i class=\"material-icons\">\n                                    toggle_off\n                                </i>\n                            </span>\n                            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\" >\n                                <i class=\"material-icons treeclass\">\n                                    toggle_off\n                                </i>\n                            </span>\n\n                            <!-- artistxp preview start -->\n                            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                <i class=\"material-icons\">perm_media</i>\n                            </span>\n                            <!-- artistxp preview end -->\n\n                        </span>\n\n                    </td>\n                </ng-container>\n\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n\n        <mat-card *ngIf=\"tableflag!=0\">No Records Exists !!!</mat-card>\n        <ng-container *ngIf=\"tableflag==0\" >\n            <section class=\"lib-pager-class\">\n                <mat-label>Showing\n                    {{(limitcondval.pagecount-1)*limitcondval.limit}}\n                    To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of </mat-label>\n                <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n                <mat-form-field>\n                    <mat-label>Page Size</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>Page No</mat-label>\n                    <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n                </mat-form-field>\n\n\n                <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                    skip_previous\n                </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                    skip_next\n                </span>\n            </section>\n\n\n        </ng-container>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>\n",
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
                    template: "\n<div class=\"maindialog maindialognew\">\n\n<div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\" >Hey !</h1>\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n    <div mat-dialog-content>\n        <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n        <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n            <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                <mat-card-header id=\"dialogdata{{item[0]}}\">\n                    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                    <mat-card-title>{{item[0]}}</mat-card-title>\n                </mat-card-header>\n                <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                <mat-card-content  id=\"dialogdata{{item[0]}}\">\n                    <p *ngIf=\"item[2]==null || ( !item[2].includes('date') && !item[2].includes('datetime') )\" [innerHtml]=\"item[1]\">\n\n                    </p>\n                     <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                        {{item[1] | date}}\n                    </p>\n                    <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                        {{item[1] | date:'medium' }} \n                    </p>\n                </mat-card-content>\n            </mat-card>\n\n        </div>\n\n        <!--for custom page in modal(mainly used for tree)-->\n        <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n            <iframe class=\"custom-datadiv\" height=\"auto\"  [src]=\"data.data[0].customdata\" ></iframe>\n\n        </div>\n\n    </div>\n</div>\n\n\n<div *ngIf=\"data.preview == true\">\n    <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n</div>\n\n\n\n\n\n<div mat-dialog-actions *ngIf=\"data.preview != true\">\n    <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n</div>\n\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUVuSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxRQUFRLENBQUM7QUFFekMsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FB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QWM7Z0RBaWxEaEQsTUFBTSxTQUFDLGtCQUFrQjs7SUFJaEMsd0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVBZLGlCQUFpQjs7O0lBRXhCLHdDQUFxRDs7SUFDckQsaUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgVmlld0NvbnRhaW5lclJlZiwgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmLCBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIsIEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcbmltcG9ydCAqIGFzIG1vbWVudEltcG9ydGVkIGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCB7TUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG4vL2ltcG9ydCB7UHJvZ3Jlc3NCYXJNb2RlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuLy9pbXBvcnQgIHtCdG5Db21wb25lbnR9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL2FwcC9idG4vYnRuLmNvbXBvbmVudCdcbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYWxsZGF0YTogYW55O1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy5tb2R1bGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmcubW9kdWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cbiAgZGF0YXNvdXJjZXZhbDogYW55O1xuICBzZWFyY2hfc2V0dGluZ3N2YWw6IGFueTtcbiAgY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsOiBhbnk7XG4gIGdyYWJfbGlua3ZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2V2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw6IGFueTtcbiAgdXJsdmFsOiBhbnk7XG4gIHNlYXJjaGVuZHBvaW50dmFsOiBhbnk7XG4gIHNlYXJjaExpc3R2YWw6IGFueTtcbiAgcGRmX2xpbmtfdmFsOiBhbnk7XG4gIHN0YXR1c2FycnZhbDogYW55O1xuICBza2lwdmFsOiBhbnk7XG4gIGVycm9ybWc6IGFueTtcbiAgand0dG9rZW52YWw6IGFueTtcbiAgZGV0YWlsX2RhdGF0eXBldmFsOiBhbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOiBhbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIGVkaXRyb3V0ZXZhbDogYW55O1xuICBhcGl1cmx2YWw6IGFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgbW9kaWZ5X2hlYWRlcl9hcnJheXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueTtcbiAgZGF0YWNvbGxlY3Rpb252YWw6IGFueTtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHNvdXJjZWRhdGF2YWw6IGFueTtcbiAgZW1haWxhcnJheXZhbDogYW55O1xuICBjb2x1bW5zOiBhbnkgPSBbXTtcbiAgYXV0b3NlYXJjaGlucHV0OiBhbnkgPSBbXTtcbiAgb2xkZGF0YTogYW55ID0gW107XG4gIHRzZWFyY2g6IGFueSA9IFtdO1xuICB0YWJsZWZsYWc6IGFueSA9IDA7XG4gIGF1dG9zZWFyY2g6IGFueSA9IFtdO1xuICBwdWJsaWMgeDogYW55O1xuICBwdWJsaWMgbGliZGF0YXZhbDphbnk9e307XG4gIHB1YmxpYyBsaW1pdGNvbmR2YWw6IGFueT17fTtcbiAgcHVibGljIGN1c3RvbWJ1dHRvbnZhbDogYW55O1xuICBwdWJsaWMgcmVzdWx0OiBhbnkgPSB7fTtcbiAgcHVibGljIHNvcnRkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIHNoOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGFydDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQyOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyB1cGRhdGV0YWJsZXZhbDogYW55ID0gZmFsc2U7XG5cbiAgLypmb3IgcHJvZ3Jlc3MgYmFyKi9cblxuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBhbnkgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG4gIGJ1ZmZlclZhbHVlID0gNzU7XG5cbiAgLyogdGhpcyB2YXJpYWJsZSBmb3IgYXJ0aXN0IHhwIHByZXZpZXcgKi9cbiAgcHJldmlld0ZsdWc6IGFueSA9IGZhbHNlO1xuICBzZWxlY3RzZWFyY2g6YW55PVtdO1xuXG5cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaF9zZXR0aW5ncyhzZWFyY2hfc2V0dGluZ3M6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsID0gc2VhcmNoX3NldHRpbmdzO1xuICAgIC8qZm9yIChsZXQgaT0gMDsgaTw9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2ldLmxhYmVsKTtcbiAgICB9Ki9cblxuICAgIC8qICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLmxhYmVsKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS52YWx1ZXMpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7Ki9cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2UoY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlOiBhbnkpIHtcbiAgICB0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCA9IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbGltaXRjb25kKGxpbWl0Y29uZHZhbDogYW55KSB7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwgPSBsaW1pdGNvbmR2YWw7XG4gICAgLy9jb25zb2xlLmxvZygnbGltaXRjb25kdmFsJyx0aGlzLmxpbWl0Y29uZHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudChkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsO1xuICAgIGlmKHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsPT0wKSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ9MTtcbiAgICAvL2NvbnNvbGUubG9nKCdkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQnLHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBncmFiX2xpbmsoZ3JhYl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLmdyYWJfbGlua3ZhbCA9IGdyYWJfbGluaztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tYnV0dG9uKGN1c3RvbWJ1dHRvbjogYW55KSB7XG4gICAgdGhpcy5jdXN0b21idXR0b252YWwgPSBjdXN0b21idXR0b247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlKGRhdGVfc2VhcmNoX3NvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNvcnRkYXRhKHNvcnRkYXRhdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNvcnRkYXRhdmFsID0gc29ydGRhdGF2YWw7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnNvcnRkYXRhdmFsLCdzb3J0ZGF0YXZhbCcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX2VuZHBvaW50KGRhdGVfc2VhcmNoX2VuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsID0gZGF0ZV9zZWFyY2hfZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVybCh1cmw6IGFueSkge1xuICAgIHRoaXMudXJsdmFsID0gdXJsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hlbmRwb2ludChzZWFyY2hlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hlbmRwb2ludHZhbCA9IHNlYXJjaGVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwZGZfbGluayhwZGZfbGluazogYW55KSB7XG4gICAgdGhpcy5wZGZfbGlua192YWwgPSBwZGZfbGluaztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoTGlzdChzZWFyY2hMaXN0OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaExpc3R2YWwgPSBzZWFyY2hMaXN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaWJkYXRhKGxpYmRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMubGliZGF0YXZhbCA9IGxpYmRhdGF2YWw7XG4gICAgLy9jb25zb2xlLmxvZygnbGliZGF0YXZhbCcsdGhpcy5saWJkYXRhdmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhc291cmNlKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IGRhdGFzb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGFjb2xsZWN0aW9uKGRhdGFjb2xsZWN0aW9udmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFjb2xsZWN0aW9udmFsID0gZGF0YWNvbGxlY3Rpb252YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2tpcChza2lwOiBhbnkpIHtcbiAgICB0aGlzLnNraXB2YWwgPSBza2lwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfZGF0YXR5cGUoZGV0YWlsX2RhdGF0eXBlOiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCA9IGRldGFpbF9kYXRhdHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX3NraXBfYXJyYXkoZGV0YWlsX3NraXBfYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwgPSBkZXRhaWxfc2tpcF9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzb3VyY2VkYXRhKHNvdXJjZWRhdGE6IGFueSkge1xuICAgIHRoaXMuc291cmNlZGF0YXZhbCA9IHNvdXJjZWRhdGE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kaWZ5X2hlYWRlcl9hcnJheShtb2RpZnlfaGVhZGVyX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwgPSBtb2RpZnlfaGVhZGVyX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdXBkYXRlZW5kcG9pbnQodXBkYXRlZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMudXBkYXRlZW5kcG9pbnR2YWwgPSB1cGRhdGVlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYXBpdXJsKGFwaXVybDogYW55KSB7XG4gICAgdGhpcy5hcGl1cmx2YWwgPSBhcGl1cmw7XG4gIH0gQElucHV0KClcbiAgc2V0IHVwZGF0ZXRhYmxlKHVwZGF0ZXRhYmxlOiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZXRhYmxldmFsID0gdXBkYXRldGFibGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgand0dG9rZW4oand0dG9rZW46IGFueSkge1xuICAgIGlmKGp3dHRva2VuIT1udWxsKXRoaXMuand0dG9rZW52YWwgPSBqd3R0b2tlbjtcbiAgICBlbHNlIHRoaXMuand0dG9rZW52YWw9Jyc7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsLCd0b2tlbicpXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc3RhdHVzYXJyKHN0YXR1c2FycjogYW55KSB7XG4gICAgdGhpcy5zdGF0dXNhcnJ2YWwgPSBzdGF0dXNhcnI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZW1haWxhcnJheShlbWFpbGFycmF5OiBhbnkpIHtcbiAgICB0aGlzLmVtYWlsYXJyYXl2YWwgPSBlbWFpbGFycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVkaXRyb3V0ZShlZGl0cm91dGU6IGFueSkge1xuICAgIHRoaXMuZWRpdHJvdXRldmFsID0gZWRpdHJvdXRlO1xuICB9XG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IHN0YXJ0ICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmV2aWV3X2FydGlzdHhwKGZsdWc6IGFueSkge1xuICAgIHRoaXMucHJldmlld0ZsdWcgPSB0cnVlO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgZW5kICovXG5cblxuICBzdGF0ZUdyb3Vwczogc3RyaW5nW10gPSB0aGlzLnNlYXJjaExpc3R2YWw7XG4gIHN0YXRlR3JvdXA6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRhdGFjb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zaGVhZGVyOiBzdHJpbmdbXSA9IFtdO1xuICBmb3JtYXJyYXk6IGFueSA9IFtdO1xuICBzdGFydF9kYXRlOiBhbnk7XG4gIGRhdGVTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgc2VsZWN0U2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIGF1dG9TZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgdGV4dFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBlbmRfZGF0ZTogYW55O1xuICBwdWJsaWMgaTogYW55O1xuICBsb2FkaW5nOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIHByZXJlc3VsdDogYW55ID0ge307XG4gIC8vZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5kYXRhc291cmNldmFsKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIC8vIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgbXlGb3JtOiBhbnk7XG4gIC8vIG15Rm9ybTphbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHB1YmxpYyBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQsIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ6XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yOiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgLyogdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgfSk7Ki9cblxuXG5cbiAgfVxuICAvKkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW0xpc3RpbmddJ1xuICB9KSovXG5cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbcHJvcEtleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuXG4gICAgIC8vY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvcihsZXQgdiBpbiBjaGFuZ2VzKXtcbiAgICAgIC8vY29uc29sZS5sb2codixjaGFuZ2VzW3ZdLCd2dicpO1xuICAgICAgaWYodj09J3VwZGF0ZXRhYmxlJyl7XG4gICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZXRhYmxlJyk7XG4gICAgICAgIGlmKGNoYW5nZXNbdl0ucHJldmlvdXNWYWx1ZSE9bnVsbClcbiAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBpbnB1dGJsdXIodmFsOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5teUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSAnJykge1xuXG4gICAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAgIH07XG4gICAgICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLnByZXJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcztcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gdGhpcy5fc2VydmljZS5zdWNjZXNzKHRoaXMuY29sdW1uc1swXS5kYXRlLCdkbmRubmQnLHRoaXMub3B0aW9ucyk7XG4gICAgLyogdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgICAgKTsqL1xuXG4gICAgdGhpcy5zdGF0ZUdyb3VwID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICAgICApO1xuXG4gICAgLypjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29tcG9uZW50TWFwcGVyW3RoaXMuZmllbGQudHlwZV1cbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpZWxkID0gdGhpcy5maWVsZDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4qL1xuXG4gICAgdGhpcy54ID0gdGhpcy5kYXRhc291cmNldmFsO1xuICAgIGxldCB4ID0gdGhpcy54O1xuXG4gICAgbGV0IHRlbXAgPSBbXVxuICAgIGxldCBrZXlzID0geFswXVxuICAgIHRlbXAgPSBPYmplY3Qua2V5cyhrZXlzKSAgICAvKmJ5IE9iamVjdC5rZXlzKCkgd2UgY2FuIGZpbmQgdGhlIGZpZWxkbmFtZXMob3Iga2V5cykgaW4gYW4gb2JqZWN0LCBpLmUsIGluIHRlbXAgb2JqZWN0IGZpZWxkIG5hbWVzIGFyZSBzYXZlZCovXG5cbiAgICBsZXQgY29sZGVmX2xpc3QgPSBbXTtcbiAgICBsZXQgaGVhZGVyX2xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbGRlZl9saXN0LnB1c2godGVtcFtpXS5yZXBsYWNlKC9cXHMvZywgXCJfXCIpKTsgICAgICAvKnRvIHJlcGxhY2Ugc3BhY2VzIGluIGZpZWxkIG5hbWUgYnkgXCJfXCIsIHdlIHVzZSBcInJlcGxhY2UoL1xccy9nLCBcIl9cIilcIiovXG4gICAgICBoZWFkZXJfbGlzdC5wdXNoKHRlbXBbaV0pXG4gICAgfVxuICAgIC8vY29sZGVmX2xpc3QucHVzaCgnQWN0aW9ucycpO1xuICAgIC8vaGVhZGVyX2xpc3QucHVzaCgnQWN0aW9ucycpXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbGRlZl9saXN0Jyxjb2xkZWZfbGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlYWRlcl9saXN0JyxoZWFkZXJfbGlzdCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGRlZl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZmYgPSBgcm93LiR7Y29sZGVmX2xpc3RbaV19YFxuICAgICAgdmFyIHR0ID0geyBjb2x1bW5EZWY6IGAke2NvbGRlZl9saXN0W2ldfWAsIGhlYWRlcjogYCR7aGVhZGVyX2xpc3RbaV19YCwgY2VsbDogKHJvdykgPT4gZXZhbChmZiksIG9iamxlbmd0aDogaGVhZGVyX2xpc3QubGVuZ3RoIH07XG4gICAgIC8vIGNvbnNvbGUubG9nKCd0dCcsdHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0LmNvbHVtbkRlZicpO1xuICAgICAgLy8gY29uc29sZS5sb2codHQuY29sdW1uRGVmKTtcbiAgICAgIGZvciAobGV0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKSB7XG4gICAgICAgIGlmIChiID09IHR0LmhlYWRlcikgdHQuaGVhZGVyID0gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsW2JdO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5za2lwdmFsLmluZGV4T2YodHQuY29sdW1uRGVmKSA9PSAtMSlcbiAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2godHQpO1xuICAgIH1cbiAgICBsZXQgZGlzcGxheWVkY29scyA9IHRoaXMuY29sdW1ucy5tYXAoeCA9PiB4LmNvbHVtbkRlZik7XG4gICAgbGV0IGN1c3RvbWNvbHM6YW55PVtdO1xuICAgIC8vY29uc29sZS5sb2coJ2Rpc3BsYXllZGNvbHMnLGRpc3BsYXllZGNvbHMpO1xuICAgIGlmKHRoaXMubGliZGF0YXZhbCE9bnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzICE9bnVsbClcbiAgICAgIGN1c3RvbWNvbHM9dGhpcy5saWJkYXRhdmFsLnRhYmxlaGVhZGVycztcbiAgICBpZihjdXN0b21jb2xzIT1udWxsICYmIGN1c3RvbWNvbHMubGVuZ3RoPjApe1xuICAgICAgZm9yKGxldCB2IGluIGN1c3RvbWNvbHMpe1xuICAgICAgICBpZihkaXNwbGF5ZWRjb2xzLmluY2x1ZGVzKGN1c3RvbWNvbHNbdl0pPT1mYWxzZSl7XG4gICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe2NvbHVtbkRlZjpjdXN0b21jb2xzW3ZdLGhlYWRlcjpjdXN0b21jb2xzW3ZdLGNlbGw6J05BJ30pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwbGF5ZWRjb2xzPWN1c3RvbWNvbHM7XG4gICAgfVxuXG5cbiAgICAvL2NvbnNvbGUubG9nKCdjdXN0b21jb2xzJyxjdXN0b21jb2xzLGRpc3BsYXllZGNvbHMsdGhpcy5jb2x1bW5zKTtcbiAgICBpZih0aGlzLmxpYmRhdGF2YWwuaGlkZWFjdGlvbj09bnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWFjdGlvbj09ZmFsc2UpXG4gICAgZGlzcGxheWVkY29scy5wdXNoKCdBY3Rpb25zJyk7XG5cbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBkaXNwbGF5ZWRjb2xzO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCcjJyk7ICAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnc2VsZWN0Jyk7ICAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cblxuICAgIGxldCBkYXRhX2xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueC5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YV9saXN0LnB1c2godGhpcy5jcmVhdGVEYXRhKHhbaV0pKTtcbiAgICB9XG4gICAgdGhpcy5vbGRkYXRhID0gZGF0YV9saXN0O1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoZGF0YV9saXN0KTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzphbnkpe1xuLy9jb25zb2xlLndhcm4oXCJpbWdfbW9kYWxfdmlld1wiLGltZylcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEltYWdlVmlldywge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC1pbWFnZS1wcmV2aWV3JyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBhbGxkYXRhOiBpbWcgfVxuICAgIH0pO1xuICB9XG4gIG9uU3VibWl0KCkge1xuICAgIGxldCB4OiBhbnk7XG4gICAgdGhpcy5lcnJvcm1nID0gJyc7XG4gICAgbGV0IGRhdGEgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICBmb3IgKHggaW4gdGhpcy5teUZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cbiAgZGF0ZVNlYXJjaCh2YWw6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5lbmRfZGF0ZSk7XG4gICAgLy8gbGV0IHNkID0gbW9tZW50KHRoaXMuc3RhcnRfZGF0ZSkudW5peCgpO1xuICAgIC8vIGxldCBlZCA9IG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCk7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICBsZXQgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCsnLWNvdW50JztcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGxldCB0ZXh0U2VhcmNoOmFueT17fTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG5cblxuXG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXG4gICAgICBpZih0aGlzLmVuZF9kYXRlIT1udWxsICYmIHRoaXMuc3RhcnRfZGF0ZSE9bnVsbCkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IobGV0IGkgaW4gdGhpcy50c2VhcmNoKXtcbiAgICAgICAgdGV4dFNlYXJjaFtpXT17JHJlZ2V4OnRoaXMudHNlYXJjaFtpXS50b0xvd2VyQ2FzZSgpfTtcbiAgICAgIH1cblxuICAgICAgbGV0IGF1dG9zZWFyY2g6YW55PXt9O1xuICAgICAgLy90aGlzLmF1dG9zZWFyY2g7XG4gICAgICBmb3IobGV0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKXtcbiAgICAgICAgZm9yKGxldCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSl7XG4gICAgICAgICAgbGV0IHR2OmFueT17fTtcbiAgICAgICAgICB0dltiXT10aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYoYXV0b3NlYXJjaFsnJG9yJ109PW51bGwpIGF1dG9zZWFyY2hbJyRvciddPVtdO1xuICAgICAgICAgIGF1dG9zZWFyY2hbJyRvciddLnB1c2godHYpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgICAgc291cmNlID0ge1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgICBza2lwOjBcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDp7XG4gICAgICAgICAgZmllbGQ6dGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICB0eXBlOnRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgIH07XG5cbiAgICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgICAgLy9jb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAvL3JldHVybjtcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsPTA7XG4gICAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBpZihyZXN1bHQucmVzdWx0cy5yZXMgIT1udWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGg+MCl7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICAyMDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTpcIk5ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWRcIn1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJObyBzdWNoIHNlYXJjaCByZWNvZCBmb3VuZCAhIVwifVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KVxuXG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gKHJlc3VsdC5jb3VudCk7XG4gICAgICAgIGlmKHJlc3VsdC5jb3VudD09MCkgdGhpcy50YWJsZWZsYWc9MTtcbiAgICAgICAgZWxzZSB0aGlzLnRhYmxlZmxhZz0wOyBcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pXG5cbiAgICAgIC8qdGhpcy5faHR0cC5wb3N0KGxpbmssIHtzb3VyY2U6dGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICdjcmVhdGVkX2F0Jzoge1xuICAgICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgfVxuICAgICAgICB9LHRva2VuOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgfSkuc3Vic2NyaWJlKCByZXMgPT57XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9e307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pKi9cbiAgICB9IGVsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuXG5cbiAgc2VsZWN0U2VhcmNoKHZhbHVlOiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBjb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cbiAgcGFnaW5nKHZhbDphbnkpe1xuICAgIGlmKHZhbD09MSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcD0odGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KSp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCsrO1xuICAgIH1cbiAgICBpZih2YWw9PS0xICYmIHRoaXMubGltaXRjb25kdmFsLnNraXA+dGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXA9KHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0xKSp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZih2YWw+MSl7XG4gICAgICBpZih0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ9PTEpIHRoaXMubGltaXRjb25kdmFsLnNraXA9MDtcbiAgICAgIGVsc2UgdGhpcy5saW1pdGNvbmR2YWwuc2tpcD0odGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LTEpKnRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgLy90aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcblxuICAgIH1cbiAgICBpZih2YWw9PS0xICYmIHRoaXMubGltaXRjb25kdmFsLnNraXA8dGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHJldHVybjtcbiAgICAvL2NvbnNvbGUubG9nKHZhbCwnc3MnLHRoaXMuZGF0YWNvbGxlY3Rpb252YWwsdGhpcy5saW1pdGNvbmR2YWwpO1xuICAgIGxldCB0ZXh0U2VhcmNoOmFueT17fTtcblxuXG4gICAgZm9yKGxldCBpIGluIHRoaXMudHNlYXJjaCl7XG4gICAgICB0ZXh0U2VhcmNoW2ldPXskcmVnZXg6dGhpcy50c2VhcmNoW2ldLnRvTG93ZXJDYXNlKCl9O1xuICAgIH1cblxuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbix0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgbGV0IHNvdXJjZSA9IHtcbiAgICAgIFwiY29uZGl0aW9uXCI6e1xuICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDp0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9LFxuICAgICAgc29ydDp7XG4gICAgICAgIGZpZWxkOnRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6dGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICB9LFxuICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgfTtcblxuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgLypsZXQgZGF0YTphbnk9e1xuICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgIGxpbWl0OnRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOnRoaXMubGltaXRjb25kdmFsLnNraXBcbiAgICAgIH1cblxuICAgIH0qL1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5yZXN1bHQsJ3JlcycpO1xuICAgICAgaWYodGhpcy5yZXN1bHQucmVzdWx0cy5yZXMgIT1udWxsICYmIHRoaXMucmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCA+MCkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogICAyMDAwLFxuICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJOZXcgcmFuZ2Ugb2YgZGF0YSBsb2FkZWRcIn1cbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJObyBEYXRhIEZvdW5kIGluIHRoaXMgcmFuZ2UgISFcIn1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIH0pO1xuXG4gIH1cblxuICBhZGRhdXRvc2VhcmNoZGF0YSh2YWw6YW55KXtcbiAgICAvL2NvbnNvbGUubG9nKCd2Jyx2YWwpO1xuXG4gIH1cbiAgcmVtb3ZlKHZhbDphbnksaTphbnksZmllbGQ6YW55KXtcblxuICAgIGlmKHRoaXMuYXV0b3NlYXJjaFtmaWVsZF0gIT1udWxsKXRoaXMuYXV0b3NlYXJjaFtmaWVsZF0uc3BsaWNlKGksMSk7XG4gIH1cbiAgYXV0b3NlYXJjaGZ1bmN0aW9uKHZhbHVlOiBhbnksZGF0YTphbnkpIHtcbiAgICB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV09Jyc7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2hpbnB1dCwnYXNpJyk7XG4gICAgaWYodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXT09bnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXT1bXTtcbiAgICAgIDtcbiAgICB9XG4gICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5wdXNoKGRhdGEpO1xuICAgIC8vY29uc29sZS5sb2codmFsdWUsZGF0YSwnc3MnLHRoaXMuYXV0b3NlYXJjaCk7XG4gICAgLypsZXQgdmFsOiBhbnkgPSB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSAhPW51bGwgJiYgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAwICYmIHsgJG9yOiBbdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV1dIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9OyovXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXMpO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAvLyB9KTtcbiAgfVxuXG4gIHRleHRzZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55KSB7XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgbGV0IHZhbD0nJztcbiAgICBpZih0aGlzLnRzZWFyY2ghPW51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXSE9bnVsbClcbiAgICB7XG4gICAgICB2YWw9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICBcbiAgICBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSE9bnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDEgJiYgeyAkb3I6IFt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsO1xuICAgIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIC8vY29uc29sZS53YXJuKHRoaXMudHNlYXJjaCk7XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvL2FkZCBsb2FkZXJcbiAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgLy9jbG9zZSBsb2FkZXJcbiAgICAvLyAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cbiAgcmVmcmVzaGRhdGEoKXtcbiAgICB0aGlzLmF1dG9zZWFyY2g9W107XG4gICAgdGhpcy50c2VhcmNoPVtdO1xuICAgIHRoaXMuc2VsZWN0c2VhcmNoPVtdO1xuICAgIHRoaXMuc3RhcnRfZGF0ZT1udWxsO1xuICAgIHRoaXMubGltaXRjb25kdmFsLnNraXA9MDtcbiAgICB0aGlzLmVuZF9kYXRlPW51bGw7XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uPXt9O1xuICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb249e307XG4gICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgfVxuICByZWZyZXNoYWxsZGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy90aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIGlmICh2YWwuZmlsdGVyZWREYXRhICE9bnVsbCAmJiB2YWwuZmlsdGVyZWREYXRhLmxlbmd0aCA8IHRoaXMub2xkZGF0YS5sZW5ndGgpIHtcbiAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlZnJlc2ggc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJyBVcGRhdGVkISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICBnZXRzdGF0dXModmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICBmb3IgKGxldCBiIGluIHRoaXMuc3RhdHVzYXJydmFsKSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXNhcnJ2YWxbYl0udmFsID09IHZhbClcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiTi9BXCI7XG4gIH1cbiAgcGRmRmxhZyh2YWw6IGFueSkge1xuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hhdHRlciBibG9rJyk7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdyYXB1cmwodmFsOiBhbnkpIHtcbiAgICAvLyAgZm9yIGFsbCByb3cgY2hlY2tpbmdcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpXG4gICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZDIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZDIgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zaCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdWQpO1xuICB9XG5cbiAgY29weVRleHQocm93OiBhbnksIHZhbDogc3RyaW5nKSB7XG5cbiAgICBsZXQgZnVsbHVybCA9IHZhbCArICcnICsgcm93O1xuICAgIGxldCBzZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHNlbEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgc2VsQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLnRvcCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBzZWxCb3gudmFsdWUgPSBmdWxsdXJsO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsQm94KTtcbiAgICBzZWxCb3guZm9jdXMoKTtcbiAgICBzZWxCb3guc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNlbEJveCk7XG4gIH1cblxuICBvcGVuaW50ZXJuYWxsaW5rKHZhbDphbnkpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt2YWwucm91dGVdKTtcbiAgfVxuICBvcGVuaW50ZXJuYWxsaW5rd2l0aHBhcmFtKHZhbDphbnksZGF0YTphbnkpe1xuICAgIGxldCByZGF0YTphbnk9W107XG4gICAgcmRhdGEucHVzaCh2YWwucm91dGUpO1xuICAgIGZvcihsZXQgdiBpbiB2YWwucGFyYW0pe1xuICAgICByZGF0YS5wdXNoKGRhdGFbdmFsLnBhcmFtW3ZdXSlcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygncmFkYXQnLHJkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShyZGF0YSk7XG4gIH1cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YSh2YWw6YW55LGRhdGE6YW55KXtcbiAgICAvL2NvbnNvbGUubG9nKCdvcGVuY3VzdG9tYnV0dG9uYWN0aW9ubG9jYWxkYXRhJyx2YWwsZGF0YSk7XG4gICAgbGV0IGRhdGFhcnI9W107XG4gICAgLy9kYXRhYXJyLnB1c2goWyduYW1lJywnZGViYXNpcyddKTtcbiAgICAvL2RhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgIGlmKHZhbC5yZWZyZXNoZGF0YSE9bnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBmb3IobGV0IHYgaW4gdmFsLmRhdGFmaWVsZHMpe1xuICAgICAgbGV0IHRlbXBhcnI9W107XG4gICAgICB0ZW1wYXJyLnB1c2godmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgaWYodmFsLmRhdGFmaWVsZHNbdl0hPSdpbWFnZScgJiYgdmFsLmRhdGFmaWVsZHNbdl0hPSd2aWRlbycpXG4gICAgICAgIHRlbXBhcnIucHVzaChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICBpZih2YWwuZGF0YWZpZWxkc1t2XT09J2ltYWdlJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArIFwiID4gPGJyLz5cIilcbiAgICAgIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB7XG4gICAgICAgIGxldCB0ZW1waHRtbCA6YW55PShcIjxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArXCIgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+XCIpO1xuICAgICAgICB0ZW1waHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRlbXBodG1sKTtcbiAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgIH1cbiAgICAgIC8vaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG4gICAgfVxuICAgIGxldCByZXM6YW55PWRhdGFhcnI7XG5cbiAgICBpZih0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSE9bnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZS5sZW5ndGg+MCkge1xuICAgICAgbGV0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgYiBpbiByZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkgPT0gcmVzW2JdWzBdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaCcsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCxyZXNbYl1bMV0scmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocmVzZGF0YVtiXT09bnVsbCkgcmVzZGF0YVtiXT1yZXNbYl07XG5cbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcz1yZXNkYXRhO1xuICAgICAgLy9jb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coJ2RhdGFhcnInLGRhdGFhcnIpO1xuICAgIGlmKHZhbC5yZWZyZXNoZGF0YSE9bnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC1hcGlkYXRhJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiByZXMgfVxuICAgIH0pO1xuICB9XG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhKHZhbDphbnksZGF0YTphbnkpe1xuICAgIC8vY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhJyx2YWwsZGF0YSk7XG4gICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgbGV0IGxpbms6YW55PXRoaXMuYXBpdXJsdmFsICt2YWwuZW5kcG9pbnQ7XG4gICAgbGV0IHNvdXJjZTphbnk9e307XG4gICAgc291cmNlW3ZhbC5wYXJhbV09ZGF0YS5faWQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcblxuICAgICAgLy9jb25zb2xlLmxvZygncmVzJyxyZXN1bHQpO1xuICAgICAgbGV0IHJlc2RhdGE6IGFueSA9IHt9O1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBpZiAocmVzdWx0LnJlc1swXSAhPSBudWxsKSB7XG4gICAgICAgIHJlc2RhdGEgPSByZXN1bHQucmVzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhYXJyID0gW107XG4gICAgICAvL2RhdGFhcnIucHVzaChbJ25hbWUnLCdkZWJhc2lzJ10pO1xuICAgICAgLy9kYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICAgIGZvciAobGV0IHYgaW4gcmVzZGF0YSkge1xuICAgICAgICBsZXQgdGVtcGFyciA9IFtdO1xuICAgICAgICB0ZW1wYXJyLnB1c2godik7XG4gICAgICAgIGlmICh2ICE9ICdpbWFnZScgJiYgdiAhPSAndmlkZW8nKVxuICAgICAgICAgIHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTtcbiAgICAgICAgaWYgKHYgPT0gJ2ltYWdlJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyByZXNkYXRhW3ZdICsgXCIgPiA8YnIvPlwiKVxuICAgICAgICBpZiAodiA9PSAndmlkZW8nKSB7XG4gICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoXCI8aWZyYW1lIHdpZHRoPTU2MCBoZWlnaHQ9MzE1IHNyYz1odHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIiArIHJlc2RhdGFbdl0gKyBcIiBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz5cIik7XG4gICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG5cbiAgICAgIH1cbiAgICAgICAgaWYodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUhPW51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoPjApIHtcbiAgICAgICAgICBsZXQgcmVzZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgYiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IGRhdGFhcnJbYl1bMF0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaCcsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsZGF0YWFycltiXVsxXSxkYXRhYXJyW2JdWzBdXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocmVzZGF0YVtiXT09bnVsbCkgcmVzZGF0YVtiXT1kYXRhYXJyW2JdO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgICAgICBkYXRhYXJyPXJlc2RhdGE7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKCdkYXRhYXJyJyxkYXRhYXJyKTtcbiAgICAgIGlmICh2YWwucmVmcmVzaGRhdGEgIT0gbnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgZGF0YToge2lzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogZGF0YWFycn1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJyl7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICBkYXRhOnJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOidTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuO1xuXG4gIH1cbiAgb3BlbmV4dGxpbmt3aXRocGFyYW0odmFsOmFueSxkYXRhOmFueSl7XG4gICAgLy9jb25zb2xlLmxvZygndmFsJyx2YWwsZGF0YSk7XG4gICAgbGV0IHF0ZXh0OmFueT0nJztcbiAgICBsZXQgZnVsbGxpbms6YW55PScnO1xuICAgIGZ1bGxsaW5rPXZhbC5saW5rO1xuICAgIGlmKHZhbC5wYXJhbXR5cGU9PW51bGwpIHtcbiAgICAgIGZvciAobGV0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICAgIHF0ZXh0ID0gdmFsLnBhcmFtW3ZdLnEgKyBcIj1cIiArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcbiAgICAgICAgaWYgKHBhcnNlSW50KHYpID09IDApIGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnPycgKyBxdGV4dDtcbiAgICAgICAgaWYgKHBhcnNlSW50KHYpICE9IDApIGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnJicgKyBxdGV4dDtcbiAgICAgIH1cbiAgICAgIC8vdmFsLmxpbms9ZnVsbGxpbms7XG4gICAgfVxuICAgIGlmKHZhbC5wYXJhbXR5cGUhPW51bGwgJiYgdmFsLnBhcmFtdHlwZT09J2FuZ3VsYXInKXtcbiAgICAgIGZvciAobGV0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICAgIC8vcXRleHQgPSB2YWwucGFyYW1bdl0ucSArIFwiPVwiICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdxdGV4dCcscXRleHQpO1xuXG4gICAgICAgICAgZnVsbGxpbmsgPSBmdWxsbGluayArICcvJyArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XV0pO1xuICAgICAgfVxuICAgICAgLy92YWwubGluaz1mdWxsbGluaztcbiAgICB9XG4gICAgc2V0VGltZW91dCAoKCkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gc2V0VGltZW91dFwiKTtcbiAgICAgIC8vY29uc29sZS5sb2coJ2xpbmsnLGZ1bGxsaW5rLGRhdGEscXRleHQpO1xuICAgIH0sIDEwKTtcblxuICAgIHdpbmRvdy5vcGVuKGZ1bGxsaW5rLCBcIl9ibGFua1wiKTtcbiAgfVxuICBjbGlja3VybCh2YWw6IGFueSwgdXJsOiBhbnkpIHtcbiAgICBsZXQgbGluayA9IHVybCArICcnICsgdmFsLl9pZCArICcnICsgdGhpcy5wZGZfbGlua192YWw7XG4gICAgd2luZG93Lm9wZW4obGluaywgXCJfYmxhbmtcIik7XG4gIH1cblxuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgaWYodGhpcy5zZWxlY3Rpb24hPW51bGwgJiYgdGhpcy5zZWxlY3Rpb24uc2VsZWN0KSB7XG4gICAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XG4gICAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgfVxuXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBjaGVja2JveCBvbiB0aGUgcGFzc2VkIHJvdyAqL1xuICBjaGVja2JveExhYmVsKHJvdz86IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0J30gYWxsYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3RoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KSA/ICdkZXNlbGVjdCcgOiAnc2VsZWN0J30gcm93ICR7cm93LnBvc2l0aW9uICsgMX1gO1xuICB9XG5cblxuICBjcmVhdGVEYXRhKHBvaW50OiBhbnkpIHtcbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRhdGFba2V5LnJlcGxhY2UoL1xccy9nLCBcIl9cIildID0gcG9pbnRba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH1cbiAgfVxuICAvKmFwcGx5RmlsdGVyMShmaWx0ZXJWYWx1ZTogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWwudmFsdWUpO1xuICAgIGxldCB2YWx1ZT0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh2YWwudmFsdWUpO1xuXG4gICAgdmFsdWUuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIC8hKiB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gZnVuY3Rpb24oZGF0YSwgZmlsdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIC8vIHJldHVybiBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfSohL1xuICB9Ki9cblxuICBzdHlsZUNlbGwoY29sX25hbWUsIHJvdykge1xuXG4gICAgLypcbiAgICAgaWYgKGNvbF9uYW1lWydjb2x1bW5EZWYnXT09J3Byb2dyZXNzJyAmJiByb3dbJ3Byb2dyZXNzJ109PScxMDAnKXtcbiAgICAgcmV0dXJuIHsnY29sb3InIDogJ3JlZCd9XG4gICAgIH0gZWxzZSB7XG4gICAgIHJldHVybiB7fVxuICAgICB9XG4gICAgICovXG5cblxuICAgIHJldHVybiB7fVxuICB9XG4gIC8qKnNob3cgdmlkZW8gbW9kYWwgb24gY2xpY2sgb2YgdGhhbW5haWwgZnVuY3Rpb24gYnkgc291cmF2ICovXG4gIGZldGNodmlkZW8odmlkZW9kYXRhOmFueSl7XG4gICAgLy9jb25zb2xlLndhcm4oJ3ZpZGVvZGF0YScsdmlkZW9kYXRhKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFZpZGVvUGxheWVyLCB7XG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94LXZpZGVvcGxheWVyLXByZXZpZXcnLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IHByZXZpZXdEYXRhOiB2aWRlb2RhdGEgfVxuICAgIH0pO1xuICB9XG5cbiAgdmlld2RhdGEoZGF0YTE6IGFueSkge1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IGRhdGExO1xuICAgIGxldCBkYXRhMjogYW55ID0gW107XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgbGV0IGZsYWdrOiBhbnkgPSAnJztcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IHRydWUpIGRhdGFba2V5XSA9ICdZZXMnO1xuICAgICAgICAgIGlmIChkYXRhW2tleV0gPT0gZmFsc2UpIGRhdGFba2V5XSA9ICdObyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgZGF0YVtrZXkgKyAnOiddID0gXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFba2V5XSArIFwiPjxici8+XCI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ29iamVjdCcpIHtcblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbGV0IHRlbXBkYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBrIGluIGRhdGFba2V5XSkge1xuICAgICAgICAgICAgZm9yIChsZXQgcCBpbiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ID09IGtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSA9PSAnaW1hZ2UnKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgaW1ndmFsOmFueT10aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5maWxldXJsK2RhdGFba2V5XVtrXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltZ3ZhbCk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhW2tleV1ba10ucmVwbGFjZSgvJy9nLCAnJykpO1xuICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFba2V5XVtrXSArIFwiPjxici8+XCIpO1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIitkYXRhW2tleV1ba10rXCI8L3NwYW4+PGJyLz5cIilcblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgIT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIC8vdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2RhdGFba2V5XVtrXStcIj48YnIvPlwiKVxuICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIiArIGRhdGFba2V5XVtrXSArIFwiPC9zcGFuPjxici8+XCIpO1xuXG5cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSAhPSBrZXkpIHtcbiAgICAgICAgICAgICAgICAvL3RlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV1ba10pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBvYmprIGluIGRhdGFba2V5XVtrXSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIgKyBvYmprICsgXCIgOiBcIiArIGRhdGFba2V5XVtrXVtvYmprXSArIFwiPC9zcGFuPjxici8+XCIpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9IHRlbXBkYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgbiBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtuXSAhPSBudWxsICYmIGRhdGFbbl0gIT0gJycpIHtcbiAgICAgICAgZGF0YTJbbl0gPSBkYXRhW25dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IHYgaW4gdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCkge1xuICAgICAgLy9kYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXT0nJztcbiAgICAgIGRlbGV0ZSBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXTtcbiAgICB9XG4gICAgbGV0IHJlcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEyKTtcbiAgICAvL2NvbnNvbGUubG9nKCd2aWV3IGRhdGEnLHJlcyk7XG4gICAgaWYodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUhPW51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoPjApIHtcbiAgICAgIGxldCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgIGZvciAobGV0IGIgaW4gcmVzKSB7XG4gICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IHJlc1tiXVswXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2gnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwscmVzW2JdWzFdLHJlc1tiXVswXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHJlc2RhdGFbYl09PW51bGwpIHJlc2RhdGFbYl09cmVzW2JdO1xuXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXM9cmVzZGF0YTtcbiAgICAgIC8vY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG5cbiAgfVxuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgbGV0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IHBhbmVsQ2xhc3M6ICdjdXN0b20tYm90dG9tc2hlZXQnLCBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXModGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnQsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy90aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy90aGlzLmFsbFNlYXJjaCgpO1xuXG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTonU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJ31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvL3RoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBmb3IgdHJlZSB2aWV3IGluIG1vZGFsXG4gIGN1c3RvbWJ1dHRvbmZ1bmMoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTsgICAgLy8gcm93IGRhdGFcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWJ1dHRvbnZhbCk7ICAgIC8vIG9iamVjdCBmcm9tIHdoZXJlIHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHVzZWRcbiAgICBsZXQgdW5zYWZldXJsOiBhbnkgPSB0aGlzLmN1c3RvbWJ1dHRvbnZhbC51cmw7ICAgLy9pZnJhbWUgdXJsXG4gICAgZm9yIChsZXQgYiBpbiB0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHMpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIGRhdGFbdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzW2JdXTtcbiAgICB9XG4gICAgdW5zYWZldXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7ICAgLy9mb3Igc2FuaXRpemluZyB0aGUgdXJsIGZvciBzZWN1cml0eSwgb3RoZXJ3aXNlIGl0IHdvbid0IGJlIGFibGUgdG8gc2hvdyB0aGUgcGFnZSBpbiBpZnJhbWUsIGhlbmNlIG1vZGFsXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHsgICAgICAgLy8gZm9yIG9wZW5pbmcgdGhlIG1vZGFsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tZGF0YS1tb2RhbCcsXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogW3sgZGF0YTogZGF0YSwgY3VzdG9tZGF0YTogdW5zYWZldXJsIH1dIH1cbiAgICB9KTtcblxuXG4gIH1cblxuXG5cbiAgbWFuYWdlc3RhdHVzbXVsdGlwbGUoKSB7XG5cbiAgICBsZXQgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgZGF0YTogeyBpdGVtczogdGhpcy5zdGF0dXNhcnJ2YWwgfSB9KTtcblxuICAgIGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAvL2RhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgLy9kYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIGxldCBuZXdzdGF0dXM6IGFueSA9IHJlc3VsdC52YWw7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzbWFueSh0aGlzLmFwaXVybHZhbCArICdzdGF0dXN1cGRhdGUnLCBpZHMsIHJlc3VsdC52YWwsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy90aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKHRoaXMub2xkZGF0YVtjXS5faWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gbmV3c3RhdHVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIC8vdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6J1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hISd9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZGVsZXRlbXVsdGlwbGUoKSB7XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YTogeyBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgcmVjb3Jkcz8nIH1cbiAgICB9KTtcbiAgICBsZXQgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU1hbnlEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5kZWxldGVlbmRwb2ludHZhbCwgaWRzLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgaW4gaWRzKSB7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuXG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQocykgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJyl7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOnJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOidTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuICBkZWxldGVkYXRhKGRhdGE6IGFueSkge1xuICAgIC8vYWxlcnQoNSk7XG4gICAgLy90aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsZGF0YSx0aGlzLmp3dHRva2VudmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YSA4ODkgLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2p3dHRva2VudmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCk7XG5cblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyByZWNvcmQgPz8nIH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PSAneWVzJykge1xuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5kZWxldGVlbmRwb2ludHZhbCwgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gZGF0YS5faWQpXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTonU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJ31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCwgZGF0YS5faWRdKTtcbiAgfVxuXG5cbiAgc29ydHRhYmxlKGZpZWxkOmFueSx0eXBlOmFueSl7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbC5maWVsZD1maWVsZDtcbiAgICB0aGlzLnNvcnRkYXRhdmFsLnR5cGU9dHlwZTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICB9XG5cbiAgYWxsU2VhcmNoKCl7XG4gICAgLy9jb25zb2xlLmxvZyhcImhpdFwiKTtcblxuICAgIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgbGV0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwrJy1jb3VudCc7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBsZXQgdGV4dFNlYXJjaDphbnk9e307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgZm9yKGxldCBpIGluIHRoaXMudHNlYXJjaCl7XG4gICAgICB0ZXh0U2VhcmNoW2ldPXskcmVnZXg6dGhpcy50c2VhcmNoW2ldLnRvTG93ZXJDYXNlKCl9O1xuICAgIH1cblxuICAgIGxldCBhdXRvc2VhcmNoOmFueT17fTtcbiAgICAvL3RoaXMuYXV0b3NlYXJjaDtcbiAgICBmb3IobGV0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKXtcbiAgICAgIGZvcihsZXQgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pe1xuICAgICAgICBsZXQgdHY6YW55PXt9O1xuICAgICAgICB0dltiXT10aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKGF1dG9zZWFyY2hbJyRvciddPT1udWxsKSBhdXRvc2VhcmNoWyckb3InXT1bXTtcbiAgICAgICAgYXV0b3NlYXJjaFsnJG9yJ10ucHVzaCh0dik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ2F1dG9zJyxhdXRvc2VhcmNoKTtcblxuXG5cbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6MFxuICAgICAgfSxcbiAgICAgIHNvcnQ6e1xuICAgICAgICBmaWVsZDp0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICB0eXBlOnRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG5cbiAgICAvL2NvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAvL2NvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAvL3JldHVybjtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbD0wO1xuICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZihyZXN1bHQucmVzdWx0cy5yZXMgIT1udWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGg+MCl7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogICAyMDAwLFxuICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkXCJ9XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG5cbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgIGRhdGE6IHtlcnJvcm1lc3NhZ2U6XCJObyBzdWNoIHNlYXJjaCByZWNvZCBmb3VuZCAhIVwifVxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxvYWRpbmc9ZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvL3RoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIH0pXG5cbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gKHJlc3VsdC5jb3VudCk7XG4gICAgICBpZihyZXN1bHQuY291bnQ9PTApIHRoaXMudGFibGVmbGFnPTE7XG4gICAgICBlbHNlIHRoaXMudGFibGVmbGFnPTA7XG4gICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgfSlcblxuICB9XG5cblxuXG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBzdGFydCAqL1xuICBhcnRpc3R4cFByZXZpZXcoc2luZ2xlRGF0YTogYW55KSB7XG4gICAgbGV0IGxpbmsgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjMwOTAvJyArICdkYXRhbGlzdCc7XG4gICAgLyoqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKiovXG4gICAgbGV0IGRhdGE6IGFueSA9IHsgXCJzb3VyY2VcIjogXCJibG9ja2NoYWludXNlcl92aWV3XCIsIFwiY29uZGl0aW9uXCI6IHsgXCJwb3N0c19pZF9vYmplY3RcIjogc2luZ2xlRGF0YS5faWQgfSwgXCJ0b2tlblwiOiB0aGlzLmp3dHRva2VudmFsIH07XG4gICAgLyoqKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKiovXG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0RGF0YShsaW5rLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHJlc3RsdDogYW55ID0gcmVzcG9uc2U7XG4gICAgICAvKiBvcGVuIGRpYWxvZyAqL1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtYXJ0aXN0eHAtcHJldmlldycsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBkYXRhOiB7IHByZXZpZXc6IHRydWUsIHByZXZpZXdEYXRhOiByZXN0bHQgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gZW5kICovXG5cblxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1kaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1kaWFsb2c+LFxuICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGxldCBiIGluIGRhdGEpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIHJvd2RhdGFbZGF0YVtiXV07XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpO1xuICB9XG5cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS53YXJuKFwiYm90dG9tLXNoZWV0XCIsZGF0YSk7XG4gIH1cblxuICBvcGVuTGluayh2YWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYm90dG9tU2hlZXRSZWYuZGlzbWlzcyh2YWwpO1xuICB9XG59XG5cbi8qKmxpc3RpbmcgdmlkZW8gcGxheWVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aWRlb3BsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAndmlkZW9wbGF5ZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFZpZGVvUGxheWVyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxWaWRlb1BsYXllcj4sXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS53YXJuKCd2aWRlb3BsYXllck1vZGFsJyxkYXRhLnByZXZpZXdEYXRhLnZpZGVvKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKmxpc3RpbmcgSW1hZ2UgVmlldyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ2ltZ19tb2RhbF92aWV3Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlVmlldz4sXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS53YXJuKCdJbWFnZVZpZXdNb2RhbCcsZGF0YS5hbGxkYXRhKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBzbmFja0JhclJlZjogTWF0U25hY2tCYXJSZWY8U25hY2tiYXJDb21wb25lbnQ+LFxuICAgICAgQEluamVjdChNQVRfU05BQ0tfQkFSX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnlcbiAgKSB7XG4gICAgLy9jb25zb2xlLmxvZygnc25hY2snLHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==