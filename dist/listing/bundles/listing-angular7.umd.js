(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/collections'), require('ngx-uploader'), require('rxjs/operators'), require('@angular/common/http'), require('moment'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@angular/common'), require('ngx-moment'), require('@angular/router'), require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('listing-angular7', ['exports', '@angular/cdk/collections', 'ngx-uploader', 'rxjs/operators', '@angular/common/http', 'moment', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material', '@angular/platform-browser/animations', '@angular/forms', '@angular/common', 'ngx-moment', '@angular/router', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['listing-angular7'] = {}),global.ng.cdk.collections,global.ngxUploader,global.rxjs.operators,global.ng.common.http,global.momentImported,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material,global.ng.platformBrowser.animations,global.ng.forms,global.ng.common,global.ngxMoment,global.ng.router,global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,collections,ngxUploader,operators,http,momentImported,a11y,dragDrop,portal,scrolling,stepper,table,tree,material,animations,forms,common,ngxMoment,router,i0,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingService = /** @class */ (function () {
        function ListingService() {
        }
        ListingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ListingService.ctorParameters = function () { return []; };
        /** @nocollapse */ ListingService.ngInjectableDef = i0.defineInjectable({ factory: function ListingService_Factory() { return new ListingService(); }, token: ListingService, providedIn: "root" });
        return ListingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiService = /** @class */ (function () {
        /*@Input()
        set uploadOutput(uploadOutput: any){
          this.uploadOutputval = uploadOutput;
          console.log('this.uploadOutput');
          console.log(this.uploadOutput);
        }*/
        function ApiService(_http, _authHttp) {
            this._http = _http;
            this._authHttp = _authHttp;
            this.domain_for_fileupload_val = 'http://developmentapi.audiodeadline.com:7031/uploads' + 'uploads';
            this.progress = [];
            this.uploaderror = '';
            // public uploadOutputval:any;
            this.fileservername = [];
            this.options = { concurrency: 10, maxUploads: 10 };
            this.files = []; // local uploading files array
            this.uploadInput = new i0.EventEmitter(); // input events, we use this to emit data to ngx-uploader
            this.humanizeBytes = ngxUploader.humanizeBytes;
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
        ApiService.prototype.onUploadOutput = /**
         * @param {?} uploadOutput
         * @param {?} arrayvalue
         * @param {?} uploadtypec
         * @param {?} uploadpath
         * @return {?}
         */
            function (uploadOutput, arrayvalue, uploadtypec, uploadpath) {
                // this.uploaderInput.nativeElement.value = '';
                if (uploadOutput.type === 'allAddedToQueue') {
                    /** @type {?} */
                    var event_1 = {
                        type: 'uploadAll',
                        url: 'http://developmentapi.audiodeadline.com:7031/uploads',
                        method: 'POST',
                        data: { path: uploadpath }
                    };
                    this.uploadInput.emit(event_1);
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
                    var index = this.files.findIndex(( /**
                     * @param {?} file
                     * @return {?}
                     */function (file) { return typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id; }));
                    this.files[index] = uploadOutput.file;
                    this.lengthis = this.files.length;
                    if (this.files[0] != null && this.files[0].progress != null)
                        this.percentageis = this.files[0].progress.data.percentage;
                    console.log('this.files==================');
                    console.log(this.files);
                }
                else if (uploadOutput.type === 'removed') {
                    this.files = this.files.filter(( /**
                     * @param {?} file
                     * @return {?}
                     */function (file) { return file !== uploadOutput.file; }));
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
                        for (var b in this.files) {
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
            };
        /**
         * @return {?}
         */
        ApiService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getclientip = /**
         * @return {?}
         */
            function () {
                console.log('endpoint');
                // this.isTokenExpired()
                /** @type {?} */
                var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @return {?}
         */
        ApiService.prototype.getEndpoint = /**
         * @param {?} endpoint
         * @return {?}
         */
            function (endpoint) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
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
                var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @return {?}
         */
        ApiService.prototype.getData = /**
         * @param {?} endpoint
         * @return {?}
         */
            function (endpoint) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
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
                var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        // getData end
        // getData end
        /**
         * @param {?} endpoint
         * @param {?} data
         * @return {?}
         */
        ApiService.prototype.postData =
            // getData end
            /**
             * @param {?} endpoint
             * @param {?} data
             * @return {?}
             */
            function (endpoint, data) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
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
                var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} data
         * @return {?}
         */
        ApiService.prototype.postDatawithoutToken = /**
         * @param {?} endpoint
         * @param {?} data
         * @return {?}
         */
            function (endpoint, data) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                };
                console.log('');
                console.log('endpoint');
                console.log(endpoint);
                /** @type {?} */
                var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} data
         * @return {?}
         */
        ApiService.prototype.postlogin = /**
         * @param {?} endpoint
         * @param {?} data
         * @return {?}
         */
            function (endpoint, data) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                };
                console.log('');
                console.log('endpoint');
                console.log(endpoint);
                /** @type {?} */
                var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            }; // postData end
        // postData end
        /**
         * @param {?} link
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
        ApiService.prototype.postSearch =
            // postData end
            /**
             * @param {?} link
             * @param {?} token
             * @param {?} source
             * @return {?}
             */
            function (link, token, source) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': token
                    })
                };
                console.log('------ ');
                console.log("link in postSearch");
                console.log(link);
                console.log(source);
                /** @type {?} */
                var result = this._http.post(link, source, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} link
         * @param {?} source
         * @return {?}
         */
        ApiService.prototype.postSearch1 = /**
         * @param {?} link
         * @param {?} source
         * @return {?}
         */
            function (link, source) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': source.token
                    })
                };
                console.log('------ ');
                console.log("link");
                console.log(link);
                /** @type {?} */
                var result = this._http.post(link, source).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} id
         * @return {?}
         */
        ApiService.prototype.putData = /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} id
         * @return {?}
         */
            function (endpoint, data, id) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': ''
                    })
                };
                console.log('');
                console.log("endpoint");
                console.log(endpoint);
                /** @type {?} */
                var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
        ApiService.prototype.deteOneData = /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
            function (endpoint, data, token, source) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': token
                    })
                };
                console.log('------ ');
                console.log("endpoint");
                console.log(endpoint);
                console.log(data);
                console.log(token);
                /** @type {?} */
                var dataval;
                dataval = { source: source, id: data._id };
                /** @type {?} */
                var result = this._http.post(endpoint, dataval, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
        ApiService.prototype.togglestatus = /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
            function (endpoint, data, token, source) {
                console.log(endpoint);
                console.log(data);
                console.log(token);
                console.log(source);
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': token
                    })
                };
                console.log('------ ');
                console.log("endpoint");
                console.log(endpoint);
                console.log(data);
                /** @type {?} */
                var dataval;
                dataval = { source: source, data: data };
                /** @type {?} */
                var result = this._http.post(endpoint, dataval, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
        ApiService.prototype.deteManyData = /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
            function (endpoint, data, token, source) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': token
                    })
                };
                console.log('------ ');
                console.log("endpoint");
                console.log(endpoint);
                console.log(data);
                /** @type {?} */
                var dataval;
                dataval = { source: source, ids: data };
                /** @type {?} */
                var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} val
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
        ApiService.prototype.togglestatusmany = /**
         * @param {?} endpoint
         * @param {?} data
         * @param {?} val
         * @param {?} token
         * @param {?} source
         * @return {?}
         */
            function (endpoint, data, val, token, source) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': token
                    })
                };
                console.log('------ ');
                console.log("endpoint");
                console.log(endpoint);
                console.log(data);
                /** @type {?} */
                var dataval;
                dataval = { source: source, data: { ids: data, val: val } };
                /** @type {?} */
                var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @private
         * @param {?} endpoint
         * @return {?}
         */
        ApiService.prototype.getEndpointUrl = /**
         * @private
         * @param {?} endpoint
         * @return {?}
         */
            function (endpoint) {
                return '' + endpoint;
            };
        ApiService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: http.HttpClient }
            ];
        };
        ApiService.propDecorators = {
            uploaderInput: [{ type: i0.ViewChild, args: ['fileInput1',] }]
        };
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import {ProgressBarMode} from '@angular/material/progress-bar';
    /** @type {?} */
    var moment = momentImported;
    var ListingComponent = /** @class */ (function () {
        // myForm:any;
        function ListingComponent(_apiService, dialog, bottomSheet, fb, router$$1, resolver, container, _http, sanitizer) {
            var _this = this;
            this._apiService = _apiService;
            this.dialog = dialog;
            this.bottomSheet = bottomSheet;
            this.fb = fb;
            this.router = router$$1;
            this.resolver = resolver;
            this.container = container;
            this._http = _http;
            this.sanitizer = sanitizer;
            this.myControl = new forms.FormControl();
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
            this.dataSource = new material.MatTableDataSource;
            this.router.events.subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                switch (true) {
                    case event instanceof router.NavigationStart: {
                        _this.loading = true;
                        break;
                    }
                    case event instanceof router.NavigationEnd:
                    case event instanceof router.NavigationCancel:
                    case event instanceof router.NavigationError: {
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
             */ function (search_settings) {
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
             */ function (click_to_add_ananother_page) {
                this.click_to_add_ananother_pageval = click_to_add_ananother_page;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "limitcond", {
            set: /**
             * @param {?} limitcondval
             * @return {?}
             */ function (limitcondval) {
                this.limitcondval = limitcondval;
                console.log('limitcondval', this.limitcondval);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "date_search_source_count", {
            set: /**
             * @param {?} date_search_source_countval
             * @return {?}
             */ function (date_search_source_countval) {
                this.date_search_source_countval = date_search_source_countval;
                if (this.date_search_source_countval == 0)
                    this.limitcondval.pagecount = 1;
                console.log('date_search_source_count', this.date_search_source_countval);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "grab_link", {
            set: /**
             * @param {?} grab_link
             * @return {?}
             */ function (grab_link) {
                this.grab_linkval = grab_link;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "custombutton", {
            set: /**
             * @param {?} custombutton
             * @return {?}
             */ function (custombutton) {
                this.custombuttonval = custombutton;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "date_search_source", {
            set: /**
             * @param {?} date_search_source
             * @return {?}
             */ function (date_search_source) {
                this.date_search_sourceval = date_search_source;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "sortdata", {
            set: /**
             * @param {?} sortdataval
             * @return {?}
             */ function (sortdataval) {
                this.sortdataval = sortdataval;
                console.log(this.sortdataval, 'sortdataval');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "date_search_endpoint", {
            set: /**
             * @param {?} date_search_endpoint
             * @return {?}
             */ function (date_search_endpoint) {
                this.date_search_endpointval = date_search_endpoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "url", {
            set: /**
             * @param {?} url
             * @return {?}
             */ function (url) {
                this.urlval = url;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "searchendpoint", {
            set: /**
             * @param {?} searchendpoint
             * @return {?}
             */ function (searchendpoint) {
                this.searchendpointval = searchendpoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "pdf_link", {
            set: /**
             * @param {?} pdf_link
             * @return {?}
             */ function (pdf_link) {
                this.pdf_link_val = pdf_link;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "searchList", {
            set: /**
             * @param {?} searchList
             * @return {?}
             */ function (searchList) {
                this.searchListval = searchList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "datasource", {
            set: /**
             * @param {?} datasource
             * @return {?}
             */ function (datasource) {
                this.datasourceval = datasource;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "datacollection", {
            set: /**
             * @param {?} datacollectionval
             * @return {?}
             */ function (datacollectionval) {
                this.datacollectionval = datacollectionval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "skip", {
            set: /**
             * @param {?} skip
             * @return {?}
             */ function (skip) {
                this.skipval = skip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "detail_datatype", {
            set: /**
             * @param {?} detail_datatype
             * @return {?}
             */ function (detail_datatype) {
                this.detail_datatypeval = detail_datatype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "detail_skip_array", {
            set: /**
             * @param {?} detail_skip_array
             * @return {?}
             */ function (detail_skip_array) {
                this.detail_skip_arrayval = detail_skip_array;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "sourcedata", {
            set: /**
             * @param {?} sourcedata
             * @return {?}
             */ function (sourcedata) {
                this.sourcedataval = sourcedata;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "modify_header_array", {
            set: /**
             * @param {?} modify_header_array
             * @return {?}
             */ function (modify_header_array) {
                this.modify_header_arrayval = modify_header_array;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "deleteendpoint", {
            set: /**
             * @param {?} deleteendpointval
             * @return {?}
             */ function (deleteendpointval) {
                this.deleteendpointval = deleteendpointval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "updateendpoint", {
            set: /**
             * @param {?} updateendpoint
             * @return {?}
             */ function (updateendpoint) {
                this.updateendpointval = updateendpoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "apiurl", {
            set: /**
             * @param {?} apiurl
             * @return {?}
             */ function (apiurl) {
                this.apiurlval = apiurl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "jwttoken", {
            set: /**
             * @param {?} jwttoken
             * @return {?}
             */ function (jwttoken) {
                this.jwttokenval = jwttoken;
                //console.log(this.jwttokenval)
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "statusarr", {
            set: /**
             * @param {?} statusarr
             * @return {?}
             */ function (statusarr) {
                this.statusarrval = statusarr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "emailarray", {
            set: /**
             * @param {?} emailarray
             * @return {?}
             */ function (emailarray) {
                this.emailarrayval = emailarray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "editroute", {
            set: /**
             * @param {?} editroute
             * @return {?}
             */ function (editroute) {
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
         * @param {?} val
         * @return {?}
         */
        ListingComponent.prototype.inputblur = /*@Directive({
            selector: '[Listing]'
          })*/
            /**
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
                    this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
                    .pipe(operators.startWith(''), operators.map(( /**
             * @param {?} value
             * @return {?}
             */function (value) { return _this._filter(value); })));
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
                    tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i].replace(/_/g, " "), cell: ( /**
                             * @param {?} row
                             * @return {?}
                             */function (row) { return eval(ff); }), objlength: header_list.length };
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
                var displayedcols = this.columns.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.columnDef; }));
                displayedcols.push('Actions');
                this.displayedColumns = displayedcols;
                this.displayedColumns.unshift('select'); /*adds select column in table by unshift function*/
                /*adds select column in table by unshift function*/
                /** @type {?} */
                var data_list = [];
                for (var i = 0; i < this.x.length; i++) {
                    data_list.push(this.createData(x[i]));
                }
                this.olddata = data_list;
                this.dataSource = new material.MatTableDataSource(data_list);
                this.selection = new collections.SelectionModel(true, []);
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
                console.log("start date");
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
                    var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition);
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
                    this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
                        /** @type {?} */
                        var result = {};
                        result = res;
                        _this.dataSource = new material.MatTableDataSource(result.results.res);
                        _this.loading = false;
                        // this.dataSource.paginator = this.paginator;
                        //this.dataSource.sort = this.sort;
                    }));
                    this._apiService.postSearch(link1, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
                        /** @type {?} */
                        var result = {};
                        result = res;
                        _this.date_search_source_countval = (result.count);
                        if (result.count == 0)
                            _this.tableflag = 1;
                        else
                            _this.tableflag = 0;
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
                console.log(val, 'ss', this.datacollectionval, this.limitcondval);
                /** @type {?} */
                var textSearch = {};
                for (var i in this.tsearch) {
                    textSearch[i] = { $regex: this.tsearch[i].toLowerCase() };
                }
                /** @type {?} */
                var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, this.autosearch, this.selectSearch_condition);
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
                this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.result = res;
                    console.log(_this.result, 'res');
                    _this.dataSource = new material.MatTableDataSource(_this.result.results.res);
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
                console.log('v', val);
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
                console.log(this.autosearchinput, 'asi');
                if (this.autosearch[value] == null) {
                    this.autosearch[value] = [];
                }
                this.autosearch[value].push(data);
                console.log(value, data, 'ss', this.autosearch);
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
                console.warn(this.tsearch);
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
                this.dataSource = new material.MatTableDataSource(this.olddata);
                this.selection = new collections.SelectionModel(true, []);
                //this.dataSource.paginator = this.paginator;
                //this.dataSource.sort = this.sort;
                if (val.filteredData.length < this.olddata.length) {
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
                return this.searchListval.filter(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) { return option.toLowerCase().includes(filterValue); }));
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
                /** @type {?} */
                var numSelected = this.selection.selected.length;
                /** @type {?} */
                var numRows = this.dataSource.data.length;
                return numSelected === numRows;
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
                    this.dataSource.data.forEach(( /**
                     * @param {?} row
                     * @return {?}
                     */function (row) { return _this.selection.select(row); }));
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
                Object.keys(point).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
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
                bs.afterDismissed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result != null) {
                        data.status = result.val;
                        data.id = data._id;
                        _this._apiService.togglestatus(_this.apiurlval + 'statusupdate', data, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
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
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
                                _this.dataSource.paginator = _this.paginator;
                                _this.dataSource.sort = _this.sort;
                                /** @type {?} */
                                var dialogRef = _this.dialog.open(Confirmdialog, {
                                    panelClass: 'custom-modalbox',
                                    data: { message: 'Status updated successfully!!', isconfirmation: false }
                                });
                            }
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            console.log('Oooops!');
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
                bs.afterDismissed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result != null) {
                        //data.status = result.val;
                        //data.id = data._id;
                        /** @type {?} */
                        var newstatus_1 = result.val;
                        _this._apiService.togglestatusmany(_this.apiurlval + 'statusupdate', ids, result.val, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
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
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
                                _this.dataSource.paginator = _this.paginator;
                                _this.dataSource.sort = _this.sort;
                                /** @type {?} */
                                var dialogRef = _this.dialog.open(Confirmdialog, {
                                    panelClass: 'custom-modalbox',
                                    data: { message: 'Status updated successfully!!', isconfirmation: false }
                                });
                            }
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            console.log('Oooops!');
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
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result == 'yes') {
                        _this._apiService.deteManyData(_this.apiurlval + _this.deleteendpointval, ids, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
                            /** @type {?} */
                            var result = {};
                            result = res;
                            if (result.status == 'success') {
                                var _loop_2 = function (c_2) {
                                    _this.olddata = _this.olddata.filter(( /**
                                     * @param {?} olddata
                                     * @return {?}
                                     */function (olddata) { return olddata._id != ids[c_2]; }));
                                };
                                for (var c_2 in ids) {
                                    _loop_2(c_2);
                                }
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
                                _this.dataSource.paginator = _this.paginator;
                                _this.dataSource.sort = _this.sort;
                                /** @type {?} */
                                var dialogRef_1 = _this.dialog.open(Confirmdialog, {
                                    panelClass: 'custom-modalbox',
                                    data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                                });
                            }
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            console.log('Oooops!');
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
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result == 'yes') {
                        _this._apiService.deteOneData(_this.apiurlval + _this.deleteendpointval, data, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
                            /** @type {?} */
                            var result = {};
                            result = res;
                            if (result.status == 'success') {
                                _this.olddata = _this.olddata.filter(( /**
                                 * @param {?} olddata
                                 * @return {?}
                                 */function (olddata) { return olddata._id != data._id; }));
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
                                _this.dataSource.paginator = _this.paginator;
                                _this.dataSource.sort = _this.sort;
                                /** @type {?} */
                                var dialogRef_2 = _this.dialog.open(Confirmdialog, {
                                    panelClass: 'custom-modalbox',
                                    data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                                });
                            }
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            console.log('Oooops!');
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
                var _this = this;
                console.log("hit");
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
                var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition);
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
                this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    _this.dataSource = new material.MatTableDataSource(result.results.res);
                    _this.loading = false;
                    // this.dataSource.paginator = this.paginator;
                    //this.dataSource.sort = this.sort;
                }));
                this._apiService.postSearch(link1, this.jwttokenval, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    _this.date_search_source_countval = (result.count);
                    if (result.count == 0)
                        _this.tableflag = 1;
                    else
                        _this.tableflag = 0;
                    console.log('count', result);
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
                this._apiService.postData(link, data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
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
            { type: i0.Component, args: [{
                        selector: 'lib-listing',
                        template: "<div class=\"container\">\n\n\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\">\n            <span class=\"inputfilter\">\n                <!-- <mat-form-field class=\"searchdiv\">\n\n      <input  class=\"filterForFilter\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field> -->\n            </span>\n            <span class=\"inputfilterForloop\" *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\" >\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field)\" (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\" >\n                            search\n                        </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </span>\n\n            <span class=\"inputfilterForAuto\" *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip\n            *ngFor=\"let v of autosearch[item.field]; let i=index;\"\n            [selectable]=\"true\"\n            [removable]=\"true\"\n            (removed)=\"remove(v,i,item.field)\">\n      {{v.name}}\n        <mat-icon matChipRemove >cancel</mat-icon>\n    </mat-chip>\n    <input\n            placeholder=\"{{item.label}}\"\n            #fruitInput\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"chipList\"\n            [(ngModel)]=\"autosearchinput[item.field]\"\n            >\n  </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete  #auto=\"matAutocomplete\" >\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of item.values\" [value]=\"statusval.val\" (click)=\"autosearchfunction(item.field,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </span>\n\n\n\n<!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container  class=\"filterForTexticon\" *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <mat-form-field *ngFor=\"let status of this.search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" >\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval\" (click)=\"selectSearch(statusval.val, status)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\"date_search_endpointval !=null && date_search_sourceval != null && search_settingsval.datesearch != null \">\n                <span  class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"autocomplete=\"off\"  placeholder=\"{{status.startdatelabel}}\"  [(ngModel)]=\"start_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input  class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1 ></mat-datepicker>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                </span>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <ng-container class=\"refresh\">\n                <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                    autorenew\n                </i>\n            </ng-container>\n\n            <ng-container class=\"refresh\"  *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"  (click)=\"allSearch()\">Search</button>\n            </ng-container>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\" [routerLink]=\"click_to_add_ananother_pageval\" >Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container *ngIf=\"selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\"  class=\"example-section\">\n            <mat-progress-bar\n                    class=\"example-margin\"\n                    [color]=\"color\"\n                    [mode]=\"mode\"\n                    [value]=\"value\"\n                    [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n        </section>\n        <br/>\n        <br/>\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\n\n                <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                      (change)=\"$event ? selection.toggle(row) : null\"\n                                      [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">\n                        <span>\n                            {{column.header}}\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\" class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                            arrow_downward\n                        </span>\n                        <span class=\"material-icons cursor float-right\" *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"  (click)=\"sorttable(column.columnDef,'desc')\" >arrow_upward\n                        </span>\n\n                            <span class=\"material-icons cursor\" *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\" (click)=\"sorttable(column.columnDef,'desc')\" >\n                                unfold_more\n                            </span>\n\n                        </span>\n\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"   class=\"td-cell-center\">\n          \n                        <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }} {{pdfFlag(row)}}</span>\n                        <span *ngIf=\"column.columnDef!='status' &&  column.columnDef!='image' && column.columnDef!='video'\">{{ column.cell(row) }}</span>\n                        <!-- for image view  -->\n                        <span *ngIf=\"column.columnDef=='image'\" (click)=\"img_modal_view(column.cell(row))\"> <span class=\"module_imgblock\"><img src=\"{{ column.cell(row) }}\" alt=\"{{ column.cell(row) }}\" ></span></span>\n                        <!-- for video view -->\n                        <span *ngIf=\"column.columnDef=='video' \"><span class=\"module_videoblock\" (click)=\"fetchvideo(row)\">\n                            <img src=\"https://img.youtube.com/vi/{{ column.cell(row) }}/sddefault.jpg\" alt=\"{{ column.cell(row) }}\"\n                                 (click)=\"fetchvideo(row)\"></span>\n                        </span>\n\n                        <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n                        <br>\n\n                        <!--          <span *ngIf=\"sh==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null\" class=\"cursor\">\n                            <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"column.columnDef=='contractssigned' && aud==true  && urlval !=null\">\n                            <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\" class=\"material-icons\">cloud_download</i>\n                        </span>\n\n\n<!--// for grap url//-->\n\n\n\n                        <span *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name]\" class=\"cursor\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url)\">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <br>\n                        <!--          </span>-->\n                        <!--          <span *ngIf=\"aud==true\">-->\n                        <span *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef== [grab_linkval[0].col_name]\">\n                            <button mat-button (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url)\">{{grab_linkval[2].label}}</button>\n                        </span>\n\n                        <!--          //grap url end//-->\n\n\n<!--          </span>-->\n                        <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n\n\n\n                <ng-container matColumnDef=\"Actions\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n                    <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\" data-label=\"Actions\"  class=\"td-cell-center\">\n                        <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                            <span class=\"cursor\" (click)=\"editdata(row)\" >\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" (click)=\"deletedata(row)\" >\n                                <i class=\"material-icons\">\n                                    delete_outline\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" (click)=\"viewdata(row)\" >\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" (click)=\"managestatus(row)\" >\n                                <i class=\"material-icons\">\n                                    toggle_off\n                                </i>\n                            </span>\n                            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\" >\n                                <i class=\"material-icons treeclass\">\n                                    toggle_off\n                                </i>\n                            </span>\n\n                            <!-- artistxp preview start -->\n                            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                <i class=\"material-icons\">perm_media</i>\n                            </span>\n                            <!-- artistxp preview end -->\n\n                        </span>\n\n                    </td>\n                </ng-container>\n\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n\n        <mat-card *ngIf=\"tableflag!=0\">No Records Exists !!!</mat-card>\n        <ng-container *ngIf=\"tableflag==0\">\n\n            <mat-label>Showing {{(limitcondval.pagecount-1)*limitcondval.limit}} To  {{(limitcondval.pagecount)*limitcondval.limit}} of </mat-label>\n            <span *ngIf=\"date_search_source_countval!=0 \">  {{date_search_source_countval}} </span>\n            <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n            <mat-form-field>\n                <mat-label>Page Size</mat-label>\n                <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\" >\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-label>Page No</mat-label>\n                <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\"  (keyup)=\"paging(10)\">\n            </mat-form-field>\n\n\n            <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                skip_previous\n            </span>\n\n            <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                skip_next\n            </span>\n\n        </ng-container>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>\n",
                        styles: [".container{background:#fff}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}"]
                    }] }
        ];
        /** @nocollapse */
        ListingComponent.ctorParameters = function () {
            return [
                { type: ApiService },
                { type: material.MatDialog },
                { type: material.MatBottomSheet },
                { type: forms.FormBuilder },
                { type: router.Router },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef },
                { type: http.HttpClient },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        ListingComponent.propDecorators = {
            search_settings: [{ type: i0.Input }],
            click_to_add_ananother_page: [{ type: i0.Input }],
            limitcond: [{ type: i0.Input }],
            date_search_source_count: [{ type: i0.Input }],
            grab_link: [{ type: i0.Input }],
            custombutton: [{ type: i0.Input }],
            date_search_source: [{ type: i0.Input }],
            sortdata: [{ type: i0.Input }],
            date_search_endpoint: [{ type: i0.Input }],
            url: [{ type: i0.Input }],
            searchendpoint: [{ type: i0.Input }],
            pdf_link: [{ type: i0.Input }],
            searchList: [{ type: i0.Input }],
            datasource: [{ type: i0.Input }],
            datacollection: [{ type: i0.Input }],
            skip: [{ type: i0.Input }],
            detail_datatype: [{ type: i0.Input }],
            detail_skip_array: [{ type: i0.Input }],
            sourcedata: [{ type: i0.Input }],
            modify_header_array: [{ type: i0.Input }],
            deleteendpoint: [{ type: i0.Input }],
            updateendpoint: [{ type: i0.Input }],
            apiurl: [{ type: i0.Input }],
            jwttoken: [{ type: i0.Input }],
            statusarr: [{ type: i0.Input }],
            emailarray: [{ type: i0.Input }],
            editroute: [{ type: i0.Input }],
            preview_artistxp: [{ type: i0.Input }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }],
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }]
        };
        return ListingComponent;
    }());
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
            { type: i0.Component, args: [{
                        selector: 'confirmdialog',
                        template: "\n<div class=\"maindialog maindialognew\">\n\n<div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\" >Hey !</h1>\n    <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n    <div mat-dialog-content>\n        <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n        <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n            <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                <mat-card-header id=\"dialogdata{{item[0]}}\">\n                    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                    <mat-card-title>{{item[0]}}</mat-card-title>\n                </mat-card-header>\n                <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                <mat-card-content id=\"dialogdata{{item[0]}}\">\n                    <p [innerHtml]=\"item[1]\">\n\n                    </p>\n                </mat-card-content>\n            </mat-card>\n\n        </div>\n\n        <!--for custom page in modal(mainly used for tree)-->\n        <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n            <iframe class=\"custom-datadiv\" height=\"auto\"  [src]=\"data.data[0].customdata\" ></iframe>\n\n        </div>\n\n    </div>\n</div>\n\n\n<div *ngIf=\"data.preview == true\">\n    <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n</div>\n\n\n\n\n\n<div mat-dialog-actions *ngIf=\"data.preview != true\">\n    <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n</div>\n\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        Confirmdialog.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return Confirmdialog;
    }());
    var BottomSheet = /** @class */ (function () {
        function BottomSheet(bottomSheetRef, data) {
            this.bottomSheetRef = bottomSheetRef;
            this.data = data;
            console.warn("bottom-sheet", data);
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
            { type: i0.Component, args: [{
                        selector: 'bottom-sheet',
                        template: "\n\n<mat-nav-list class=\"navlist\">\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
                    }] }
        ];
        /** @nocollapse */
        BottomSheet.ctorParameters = function () {
            return [
                { type: material.MatBottomSheetRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
            ];
        };
        return BottomSheet;
    }());
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
            { type: i0.Component, args: [{
                        selector: 'videoplayer',
                        template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
                    }] }
        ];
        /** @nocollapse */
        VideoPlayer.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return VideoPlayer;
    }());
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
            { type: i0.Component, args: [{
                        selector: 'image',
                        template: "<mat-card class=\"imgmodalcls\">\n    <mat-card-container>\n        <span>\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\n        </span>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \n    </mat-card-container>\n    </mat-card>"
                    }] }
        ];
        /** @nocollapse */
        ImageView.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return ImageView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatStepperModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var YoutubeplayerComponent = /** @class */ (function () {
        function YoutubeplayerComponent(sanitizer) {
            this.sanitizer = sanitizer;
        }
        Object.defineProperty(YoutubeplayerComponent.prototype, "videoid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this.id = (id) || '<no name set>';
                this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
                // console.warn(this.id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        YoutubeplayerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        YoutubeplayerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-youtubeplayer',
                        template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        YoutubeplayerComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        YoutubeplayerComponent.propDecorators = {
            videoid: [{ type: i0.Input }]
        };
        return YoutubeplayerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingModule = /** @class */ (function () {
        function ListingModule() {
        }
        ListingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView],
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule, animations.BrowserAnimationsModule,
                            DemoMaterialModule,
                            forms.FormsModule, forms.ReactiveFormsModule,
                            router.RouterModule,
                            ngxMoment.MomentModule
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        exports: [ListingComponent,
                        ],
                        providers: [ApiService],
                        entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView],
                    },] }
        ];
        return ListingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ListingService = ListingService;
    exports.ListingComponent = ListingComponent;
    exports.Confirmdialog = Confirmdialog;
    exports.BottomSheet = BottomSheet;
    exports.VideoPlayer = VideoPlayer;
    exports.ImageView = ImageView;
    exports.ListingModule = ListingModule;
    exports.ɵa = ApiService;
    exports.ɵc = DemoMaterialModule;
    exports.ɵb = YoutubeplayerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=listing-angular7.umd.js.map