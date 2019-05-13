(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/collections'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/core'), require('@angular/material'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@angular/common'), require('angular-material-fileupload'), require('ngx-uploader'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('listing-angular7', ['exports', '@angular/cdk/collections', '@angular/common/http', 'rxjs/operators', '@angular/platform-browser', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/core', '@angular/material', '@angular/platform-browser/animations', '@angular/forms', '@angular/common', 'angular-material-fileupload', 'ngx-uploader', '@angular/router'], factory) :
    (factory((global['listing-angular7'] = {}),global.ng.cdk.collections,global.ng.common.http,global.rxjs.operators,global.ng.platformBrowser,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.core,global.ng.material,global.ng.platformBrowser.animations,global.ng.forms,global.ng.common,global.angularMaterialFileupload,global.ngxUploader,global.ng.router));
}(this, (function (exports,collections,http,operators,platformBrowser,a11y,dragDrop,portal,scrolling,stepper,table,tree,i0,material,animations,forms,common,angularMaterialFileupload,ngxUploader,router) { 'use strict';

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
                        'access-token': ''
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
                        'access-token': ''
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
                        'access-token': ''
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
         * @param {?} endpoint
         * @param {?} data
         * @param {?} id
         * @return {?}
         */
        ApiService.prototype.putData =
            // postData end
            /**
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
                        'access-token': token
                    })
                };
                console.log('------ ');
                console.log("endpoint");
                console.log(endpoint);
                console.log(data);
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
                        'access-token': token
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
                        'access-token': token
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
                        'access-token': token
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
    /*
    export interface StateGroup {
      letter: string;
      names: string[];
    }*/
    /*
    export const filter = (opt: string[], value: string): string[] => {
      const filterValue = value.toLowerCase();

      return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
    };*/
    /*import { FieldConfig } from "../lib/myfrom/field.interface";
    import { InputComponent } from "../lib/myfrom/input.component";
    import { ButtonComponent } from "../lib/myfrom/button.component";
    import { SelectComponent } from "../lib/myfrom/select.component";
    import { DateComponent } from "../lib/myfrom/date.component";
    import { RadiobuttonComponent } from "../lib/myfrom/radiobutton.component";
    import { CheckboxComponent } from "../lib/myfrom/checkbox.component";

    const componentMapper = {
      input: InputComponent,
      button: ButtonComponent,
      select: SelectComponent,
      date: DateComponent,
      radiobutton: RadiobuttonComponent,
      checkbox: CheckboxComponent
    };
    @Directive({
      selector: "[dynamicField]"
    })*/
    var ListingComponent = /** @class */ (function () {
        // myForm:any;
        function ListingComponent(_apiService, dialog, bottomSheet, fb, router$$1, resolver, container) {
            /* this.myForm = this.fb.group({
               email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
               password: ['', Validators.required]
             });*/
            this._apiService = _apiService;
            this.dialog = dialog;
            this.bottomSheet = bottomSheet;
            this.fb = fb;
            this.router = router$$1;
            this.resolver = resolver;
            this.container = container;
            /* //added Input decorator over label props
              @Input() label: string;
              options={
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true
              };*/
            /*stateForm: FormGroup = this.fb.group({
                stateGroup: '',
              });*/
            this.myControl = new forms.FormControl();
            this.columns = [];
            this.olddata = [];
            this.sh = false;
            this.aud = false;
            this.stateGroups = this.searchListval;
            this.displayedColumns = [];
            this.datacolumns = [];
            this.displayedColumnsheader = [];
            this.formarray = [];
            //email: any ;
            //dataSource = new MatTableDataSource(this.datasourceval);
            this.dataSource = new material.MatTableDataSource;
        }
        Object.defineProperty(ListingComponent.prototype, "click_to_add_ananother_page", {
            set: /**
             * @param {?} click_to_add_ananother_page
             * @return {?}
             */ function (click_to_add_ananother_page) {
                this.click_to_add_ananother_pageval = click_to_add_ananother_page;
                console.log('this.click_to_add_ananother_pageval');
                console.log(this.click_to_add_ananother_pageval);
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
                console.log('this.urlval');
                console.log(this.urlval);
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
                console.log('this.searchendpointval');
                console.log(this.searchendpointval);
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
                console.log('this.pdf_link_val');
                console.log(this.pdf_link_val);
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
                console.log('this.searchListval');
                console.log(this.searchListval);
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
                console.log('this.datasourceval');
                console.log(this.datasourceval);
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
                console.log('this.skipval');
                console.log(this.skipval);
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
                console.log('this.detail_datatypeval');
                console.log(this.detail_datatypeval);
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
                console.log('this.detail_skip_arrayval');
                console.log(this.detail_skip_arrayval);
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
                console.log('this.sourcedataval');
                console.log(this.sourcedataval);
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
                console.log('this.modify_header_arrayval');
                console.log(this.modify_header_arrayval);
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
                console.log('this.deleteendpointval');
                console.log(this.deleteendpointval);
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
                console.log('this.updateendpointval');
                console.log(this.updateendpointval);
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
                console.log('this.apiurlval');
                console.log(this.apiurlval);
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
                console.log('this.jwttokenval');
                console.log(this.jwttokenval);
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
                console.log('this.statusarrval');
                console.log(this.statusarrval);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "editroute", {
            set: /**
             * @param {?} editroute
             * @return {?}
             */ function (editroute) {
                console.log('editroute');
                console.log(editroute);
                this.editrouteval = editroute;
                console.log('this.editrouteval');
                console.log(this.editrouteval);
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
         * @return {?}
         */
        ListingComponent.prototype.onSubmit = /*@Directive({
            selector: '[Listing]'
          })*/
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var x;
                this.errormg = '';
                /** @type {?} */
                var data = this.myForm.value;
                console.log('data');
                console.log(data);
                console.log(this.myForm.valid);
                for (x in this.myForm.controls) {
                    this.myForm.controls[x].markAsTouched();
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
                console.log('on blur .....');
                this.myForm.controls[val].markAsUntouched();
            };
        /**
         * @return {?}
         */
        ListingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // this._service.success(this.columns[0].date,'dndnnd',this.options);
                /* this.stateGroupOptions = this.myControl.valueChanges
                     .pipe(
                         startWith(''),
                         map(value => this._filterGroup(value))
                     );*/
                var _this = this;
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
                temp = Object.keys(keys);
                /** @type {?} */
                var coldef_list = [];
                /** @type {?} */
                var header_list = [];
                for (var i = 0; i < temp.length; i++) {
                    coldef_list.push(temp[i].replace(/\s/g, "_"));
                    header_list.push(temp[i]);
                }
                //coldef_list.push('Actions');
                //header_list.push('Actions')
                console.log('coldef_list', coldef_list);
                console.log('header_list', header_list);
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var ff = "row." + coldef_list[i];
                    tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i].replace(/_/g, " "), cell: ( /**
                             * @param {?} row
                             * @return {?}
                             */function (row) { return eval(ff); }), objlength: header_list.length };
                    console.log('tt.columnDef');
                    console.log(tt.columnDef);
                    for (var b in this_1.modify_header_arrayval) {
                        if (b == tt.header)
                            tt.header = this_1.modify_header_arrayval[b];
                    }
                    if (this_1.skipval.indexOf(tt.columnDef) == -1)
                        this_1.columns.push(tt);
                    console.log('this.columns');
                    console.log(this_1.columns);
                };
                var this_1 = this, tt;
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
                this.displayedColumns.unshift('select');
                /** @type {?} */
                var data_list = [];
                for (var i = 0; i < this.x.length; i++) {
                    data_list.push(this.createData(x[i]));
                }
                this.olddata = data_list;
                this.dataSource = new material.MatTableDataSource(data_list);
                this.selection = new collections.SelectionModel(true, []);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
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
        /*private _filterGroup(value: string): StateGroup[] {
         /!* if (value) {
            return this.searchListval
                .map(group => ({names: _filter(group.names, value)}))
                .filter(group => group.names.length > 0);
          }
      
          return this.searchListval;*!/
          const filterValue = value.toLowerCase();
      
          return this.searchListval.filter(option => option.toLowerCase().includes(filterValue));
        }*/
        /*private _filterGroup(value: string): StateGroup[] {
           /!* if (value) {
              return this.searchListval
                  .map(group => ({names: _filter(group.names, value)}))
                  .filter(group => group.names.length > 0);
            }
        
            return this.searchListval;*!/
            const filterValue = value.toLowerCase();
        
            return this.searchListval.filter(option => option.toLowerCase().includes(filterValue));
          }*/
        /**
         * @param {?} val
         * @return {?}
         */
        ListingComponent.prototype.getstatus = /*private _filterGroup(value: string): StateGroup[] {
           /!* if (value) {
              return this.searchListval
                  .map(group => ({names: _filter(group.names, value)}))
                  .filter(group => group.names.length > 0);
            }
        
            return this.searchListval;*!/
            const filterValue = value.toLowerCase();
        
            return this.searchListval.filter(option => option.toLowerCase().includes(filterValue));
          }*/
            /**
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
        ListingComponent.prototype.hi = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                // console.log('val');
                // console.log(val);
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
                // console.log(this.sh);
                // console.log(this.aud);
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
                console.log('ok');
                console.log(val);
                console.log(val._id);
                /*for (i in this.urlval) {
                 if (this.urlval[i].val == val) {
                   return this.urlval[i].url;
                   // console.log( this.urlval[i].url);
                 }
                  console.log('jjj' + this.urlval[i].url);
                }*/
                /*if (val.status == 2){
                  console.log('shatter blok');
                  this.sh = true;
                  this.aud = false;
                } else if (val.status == 3) {
                  this.sh = true;
                  this.aud = false;
                } else {
                  this.sh = false;
                  this.aud = false;
                }*/
                console.log(url);
                console.log(url + '' + val._id + '' + this.pdf_link_val);
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
        /**
         * @param {?} col_name
         * @param {?} row
         * @return {?}
         */
        ListingComponent.prototype.styleCell = /**
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
                console.log('data');
                console.log(data);
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        console.log(key + " -> " + data[key] + "--->" + typeof (data[key]));
                        if (typeof (data[key]) == 'boolean') {
                            if (data[key] == true)
                                data[key] = 'Yes';
                            if (data[key] == false)
                                data[key] = 'No';
                        }
                        if (typeof (data[key]) == 'object') {
                            /** @type {?} */
                            var tempdata = [];
                            for (var k in data[key]) {
                                console.log('key');
                                console.log(key);
                                console.log(this.detail_datatypeval);
                                for (var p in this.detail_datatypeval) {
                                    console.log('p');
                                    console.log(p);
                                    console.log(key);
                                    console.log(data[key][k]);
                                    if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value == 'image') {
                                        /** @type {?} */
                                        var imgval = this.detail_datatypeval[p].fileurl + data[key][k].replace(/'/g, '');
                                        console.log('imgval');
                                        console.log('imgval');
                                        console.log(imgval);
                                        console.log(data[key][k].replace(/'/g, ''));
                                        tempdata.push("<img mat-card-image src=" + imgval + "><br/>");
                                        // tempdata.push("<span>"+data[key][k]+"</span><br/>")
                                    }
                                    if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value != 'image') {
                                        //tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                        tempdata.push("<span>" + data[key][k] + "</span><br/>");
                                    }
                                }
                            }
                            data[key] = tempdata;
                        }
                    }
                }
                console.log('data');
                console.log(data);
                for (var n in data) {
                    if (data[n] != null && data[n] != '') {
                        data2[n] = data[n];
                    }
                }
                for (var v in this.detail_skip_arrayval) {
                    //data2[this.detail_skip_arrayval[v]]='';
                    delete data2[this.detail_skip_arrayval[v]];
                    console.log('this.detail_skip_arrayval[v]');
                    console.log(this.detail_skip_arrayval[v]);
                }
                /** @type {?} */
                var res = Object.entries(data2);
                console.log('this.detail_skip_array');
                console.log(this.detail_skip_arrayval);
                console.log(this.detail_datatypeval);
                console.log('res');
                console.log(res);
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
                console.log('data');
                console.log(data);
                /** @type {?} */
                var bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
                bs.afterDismissed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    console.log('The bottom sheet was closed');
                    console.log(result);
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
                                        console.log('in data update');
                                        console.log(data);
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
                console.log('ids');
                console.log(ids);
                //console.log('data');
                //console.log(data);
                /** @type {?} */
                var bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
                bs.afterDismissed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    console.log('The bottom sheet was closed');
                    console.log(result);
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
                                        console.log('in data update');
                                        //console.log(data);
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
                console.log('this.selection.selected.length');
                console.log(this.selection.selected.length);
                console.log(this.selection);
                console.log(this.selection.selected);
                /** @type {?} */
                var dialogRef = this.dialog.open(Confirmdialog, {
                    panelClass: 'custom-modalbox',
                    data: { message: 'Are you sure to delete selected records ??' }
                });
                /** @type {?} */
                var ids = [];
                /** @type {?} */
                var c;
                for (c in this.selection.selected) {
                    ids.push(this.selection.selected[c]._id);
                }
                console.log('ids');
                console.log(ids);
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    console.log('The dialog was closed');
                    console.log(result);
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
                                    data: { message: 'Are you sure to delete this record ??', isconfirmation: false }
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
                var _this = this;
                //alert(5);
                //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
                console.log('data 889 ---');
                console.log(data);
                console.log('jwttokenval');
                console.log(this.jwttokenval);
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
                    console.log('The dialog was closed');
                    console.log(result);
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
                console.log('data');
                console.log(data);
                console.log(this.editrouteval);
                console.log(this.editrouteval + data._id);
                console.log(this.jwttokenval);
                this.router.navigate([this.editrouteval, data._id]);
                //this.na
            };
        ListingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-listing',
                        template: "<div class=\"container\">\n\n\n  <mat-card>\n    <mat-toolbar-row class=\"searchbar\" style=\"display: flex!important; justify-content: space-between!important;\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n      <span *ngIf=\"click_to_add_ananother_pageval\">\n        <button mat-raised-button color=\"primary\" class=\"add_button\" style=\"margin: 0!important; margin-left: 10px!important; \" [routerLink]=\"click_to_add_ananother_pageval\" >Add</button>\n    </span>\n    </mat-toolbar-row>\n\n\n\n    <ng-container *ngIf=\"selection.selected.length!=null && selection.selected.length>0\">\n      <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n      <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n    </ng-container>\n\n\n\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-center\">{{column.header}}</th>\n        <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"styleCell(column,row)\" data-title=\"{{column.header}}\"   class=\"td-cell-center\">\n          <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }} {{hi(row)}}</span>\n          <span *ngIf=\"column.columnDef!='status' \">{{ column.cell(row) }}</span>\n          <br>\n\n<!--          <span *ngIf=\"sh==true\">-->\n            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true\" class=\"cursor\">\n              <i title=\"{{urlval[0].label}}\" (click)=\"clickurl(row,urlval[0].url)\" class=\"material-icons\">cloud_download</i>\n            </span>\n<!--          </span>-->\n<!--          <span *ngIf=\"aud==true\">-->\n            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true\">\n              <i title=\"{{urlval[1].label}}\" (click)=\"clickurl(row,urlval[1].url)\" class=\"material-icons\">cloud_download</i>\n            </span>\n<!--          </span>-->\n          <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval\" class=\"cursor\">\n            <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n          </span>\n          </span>-->\n        </td>\n      </ng-container>\n\n\n\n      <ng-container matColumnDef=\"Actions\"   >\n        <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n        <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\" data-label=\"Actions\"  class=\"td-cell-center\">\n          <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n            <span class=\"cursor\" (click)=\"editdata(row)\" >\n              <i class=\"material-icons\">\n                edit\n              </i>\n            </span>\n\n            <!--For modern browsers-->\n            <span class=\"cursor\" (click)=\"deletedata(row)\" >\n              <i class=\"material-icons\">\n                delete_outline\n              </i>\n            </span>\n\n            <!--For modern browsers-->\n            <span class=\"cursor\" (click)=\"viewdata(row)\" >\n              <i class=\"material-icons\">\n                pageview\n              </i>\n            </span>\n\n            <!--For modern browsers-->\n            <span class=\"cursor\" (click)=\"managestatus(row)\" >\n              <i class=\"material-icons\">\n                toggle_off\n              </i>\n            </span>\n           <!-- <span>\n              <span *ngFor=\"let item of urlval\" class=\"cursor\">\n                <i title=\"{{item.label}}\" (click)=\"clickurl(row,item.url)\" class=\"material-icons\">cloud_download</i>\n              </span>-->\n\n<!--            </span>-->\n          </span>\n\n        </td>\n      </ng-container>\n\n\n\n\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>\n\n    <br>\n\n\n   <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n    <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n  </mat-card>\n\n<!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n  <br>\n  <br>\n\n\n</div>\n",
                        styles: [".container{background:#fff}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%}th.mat-sort-header-sorted{color:#000}.custom-modalbox{display:none}"]
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
                { type: i0.ViewContainerRef }
            ];
        };
        ListingComponent.propDecorators = {
            click_to_add_ananother_page: [{ type: i0.Input }],
            url: [{ type: i0.Input }],
            searchendpoint: [{ type: i0.Input }],
            pdf_link: [{ type: i0.Input }],
            searchList: [{ type: i0.Input }],
            datasource: [{ type: i0.Input }],
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
            editroute: [{ type: i0.Input }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }],
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }]
        };
        return ListingComponent;
    }());
    var Confirmdialog = /** @class */ (function () {
        function Confirmdialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            console.log('my data ...');
            console.log(this.data);
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
        Confirmdialog.decorators = [
            { type: i0.Component, args: [{
                        selector: 'confirmdialog',
                        template: "<h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\" >Hey !</h1>\n<h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null\">Details </h1>\n<div mat-dialog-content>\n    <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n    <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n        <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n            <mat-card-header id=\"dialogdata{{item[0]}}\">\n                <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                <mat-card-title>{{item[0]}}</mat-card-title>\n            </mat-card-header>\n            <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n            <mat-card-content id=\"dialogdata{{item[0]}}\">\n                <p [innerHtml]=\"item[1]\">\n\n                </p>\n            </mat-card-content>\n        </mat-card>\n\n\n\n    </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        Confirmdialog.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Confirmdialog;
    }());
    var BottomSheet = /** @class */ (function () {
        function BottomSheet(bottomSheetRef, data) {
            this.bottomSheetRef = bottomSheetRef;
            this.data = data;
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
                console.log('bottomsheet data');
                console.log(val);
                this.bottomSheetRef.dismiss(val);
                //event.preventDefault();
            };
        BottomSheet.decorators = [
            { type: i0.Component, args: [{
                        selector: 'bottom-sheet',
                        template: "<mat-nav-list>\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span mat-line></span>\n        <span mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
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
    var ListingModule = /** @class */ (function () {
        function ListingModule() {
        }
        ListingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ListingComponent, Confirmdialog, BottomSheet,
                        ],
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule, animations.BrowserAnimationsModule,
                            DemoMaterialModule,
                            forms.FormsModule, forms.ReactiveFormsModule,
                            angularMaterialFileupload.MatFileUploadModule, ngxUploader.NgxUploaderModule, router.RouterModule,
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        exports: [ListingComponent,
                            //MyfromComponent,
                            ngxUploader.NgxUploaderModule],
                        providers: [ApiService],
                        entryComponents: [Confirmdialog, BottomSheet],
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
    exports.ListingModule = ListingModule;
    exports.ɵa = ApiService;
    exports.ɵb = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=listing-angular7.umd.js.map