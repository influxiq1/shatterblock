/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import {ElementRef, EventEmitter, Injectable, Input, ViewChild} from '@angular/core';
// import { switchMap, map, takeWhile } from 'rxjs/operators';
// import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';
// @Injectable()
// export class ApiService {
//   public domain_for_fileupload_val: any = 'http://developmentapi.audiodeadline.com:7031/uploads' + 'uploads' ;
//   files: UploadFile[];
//   uploadInput: EventEmitter<UploadInput>;
//   humanizeBytes: Function;
//   dragOver: boolean;
//   options: UploaderOptions;
//   @ViewChild('fileInput1') uploaderInput: ElementRef;
//   /*@Input()
//   set domain_for_fileupload(domain_for_fileupload: any) {
//     this.domain_for_fileupload_val = domain_for_fileupload;
//     console.log('this.skipval');
//     console.log(this.domain_for_fileupload_val);
//   }*/
//   public lengthis;
//   public percentageis;
//   public inprogress;
//   public progress:any=[];
//   public uploadtype;
//   public uploaderror:any='';
//   // public uploadOutputval:any;
//   fileservername:any=[];
//   /*@Input()
//   set uploadOutput(uploadOutput: any){
//     this.uploadOutputval = uploadOutput;
//     console.log('this.uploadOutput');
//     console.log(this.uploadOutput);
//   }*/
//   constructor(private _http: HttpClient,
//               private _authHttp: HttpClient,
//               ) {
//     this.options = { concurrency: 10, maxUploads: 10 };
//     this.files = []; // local uploading files array
//     this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
//     this.humanizeBytes = humanizeBytes;
//     //console.log('this.domain');
//     //console.log(this.domain);
//   }
//   onUploadOutput(uploadOutput: UploadOutput, arrayvalue: any, uploadtypec: any, uploadpath: any): void {
//     // this.uploaderInput.nativeElement.value = '';
//     if (uploadOutput.type === 'allAddedToQueue') {
//       const event: UploadInput = {
//         type: 'uploadAll',
//         url: 'http://developmentapi.audiodeadline.com:7031/uploads',
//         method: 'POST',
//         data: { path: uploadpath }
//       };
//       this.uploadInput.emit(event);
//     } else if (uploadOutput.type === 'addedToQueue' && typeof uploadOutput.file !== 'undefined') {
//       if (uploadOutput.file.response != '') {
//         this.files = [];
//         this.files.push(uploadOutput.file);
//         console.log('this.files*********');
//         console.log(this.files);
//         this.lengthis = this.files.length;
//         this.percentageis = this.files[0].progress.data.percentage;
//       }
//     } else if (uploadOutput.type === 'uploading' && typeof uploadOutput.file !== 'undefined') {
//       const index = this.files.findIndex(file => typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id);
//       this.files[index] = uploadOutput.file;
//       this.lengthis = this.files.length;
//       if(this.files[0]!=null && this.files[0].progress!=null)
//         this.percentageis = this.files[0].progress.data.percentage;
//       console.log('this.files==================');
//       console.log(this.files);
//     } else if (uploadOutput.type === 'removed') {
//       this.files = this.files.filter((file: UploadFile) => file !== uploadOutput.file);
//     } else if (uploadOutput.type === 'dragOver') {
//       this.dragOver = true;
//     } else if (uploadOutput.type === 'dragOut') {
//       this.dragOver = false;
//     } else if (uploadOutput.type === 'drop') {
//       this.dragOver = false;
//     }
//     console.log('files');
//     console.log(this.files);
//     if(this.files[0]!=null && this.files[0].progress!=null) {
//       if(this.progress[arrayvalue]==null)this.progress[arrayvalue]=0;
//       this.inprogress=true;
//       console.log('file upload progressing');
//       console.log(this.files[0].progress.data.percentage);
//       this.progress[arrayvalue] = (this.files[0].progress.data.percentage);
//       if(this.progress[arrayvalue]==100) {
//         this.progress[arrayvalue]=null;
//         this.inprogress=null;
//       }
//       console.log('this.uploadtype in api service');
//       console.log(uploadtypec);
//     }
//     if (uploadtypec=='single'){
//       // this.fileservername = [];
//       if(this.fileservername[arrayvalue] == null) this.fileservername[arrayvalue]=[];
//       this.fileservername[arrayvalue]=[];
//       if(this.files[0].response!=null) this.fileservername[arrayvalue].push(this.files[0].response);
//     }
//     if (uploadtypec == 'multiple') {
//       console.log('this.files[0].response');
//       // console.log(this.files[0].response);
//       console.log(this.files.length);
//       console.log(this.files);
//       if (this.fileservername[arrayvalue] == null) this.fileservername[arrayvalue] = [];
//       // if(this.files[0].response!=null){
//       if(this.files.length==1) {
//         if(this.files[0] && this.files[0].response!=null && this.files[0].response.error_code==null ) {
//           this.fileservername[arrayvalue].push(this.files[0].response);
//           this.files = [];
//           this.uploaderror='';
//         }
//         if(this.files[0] !=null && this.files[0].response!=null && this.files[0].response.error_code!=null){
//           this.uploaderror='error occured on uploading !!!';
//         }
//       }
//       if(this.files.length>1)
//       {
//         console.log('sdfdsf==== in multiple length ');
//         for(let b in this.files){
//           if(this.files[b].response!=null && this.files[b].response.error_code==null) {
//             this.fileservername[arrayvalue].push(this.files[b].response);
//           }
//         }
//         this.files=[];
//       }
//       //}
//     }
//     console.log('this.fileservername');
//     console.log(this.fileservername);
//     console.log(this.uploaderror);
//     //this.uploaderservice.filenamevalc1=this.fileservername;
//     //UploaderComponent.filenamevalc1=87;
//     //console.log(classval);
//   }
//   isTokenExpired() {
//     // const helper = new JwtHelperService();
//     // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
//     // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
//     // console.log('refresh_token',localStorage.getItem('refresh_token'))
//     // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
//     // console.log('id_token isExpired:',isIdTokenExpired)
//     // console.log('refresh_token isExpired:',isRefreshTokenExpired)
//   }
//   getclientip() {
//     console.log('endpoint');
//     // this.isTokenExpired()
//     var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map(res => res));
//     return result;
//   }
//   getEndpoint(endpoint: any) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'access-token': ''
//       })
//     };
//     console.log('endpoint');
//     console.log(endpoint);
//     console.log('httpOptions');
//     console.log(httpOptions);
//     console.log('');
//     // this.isTokenExpired()
//     var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   getData(endpoint: any) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'access-token': ''
//       })
//     };
//     console.log('endpoint');
//     console.log(endpoint);
//     console.log('httpOptions');
//     console.log(httpOptions);
//     console.log('');
//     // this.isTokenExpired()
//     var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   // getData end
//   postData(endpoint:any, data) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'access-token': data.token
//       })
//     };
//     console.log('');
//     console.log('endpoint');
//     console.log(endpoint);
//     console.log('httpOptions');
//     console.log(httpOptions);
//     var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   }
//   postDatawithoutToken(endpoint:any, data) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     };
//     console.log('');
//     console.log('endpoint');
//     console.log(endpoint);
//     var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   }
//   postlogin(endpoint:any, data) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     };
//     console.log('');
//     console.log('endpoint');
//     console.log(endpoint);
//     var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   } // postData end
//   postSearch( link,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("link in postSearch");
//     console.log(link);
//     console.log(source);
//     var result = this._http.post(link, source, httpOptions).pipe(map(res => res));
//     return result;
//   }
// postSearch1( link,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': source.token
//       })
//     };
//     console.log('------ ');
//     console.log("link");
//     console.log(link);
//     var result = this._http.post(link, source).pipe(map(res => res));
//     return result;
//   }
//   putData(endpoint:any, data, id:any) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': ''
//       })
//     };
//     console.log('');
//     console.log("endpoint");
//     console.log(endpoint);
//     var result = this._http.put(this.getEndpointUrl(endpoint)+'/'+id, JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   }
//   deteOneData(endpoint:any, data,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,id:data._id}
//     var result = this._http.post(endpoint,dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//     togglestatus(endpoint:any, data,token,source) {
//       console.log(endpoint);
//       console.log(data);
//       console.log(token);
//       console.log(source);
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,data:data}
//     var result = this._http.post(endpoint,dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   deteManyData(endpoint:any, data,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,ids:data}
//     var result = this._http.post(endpoint+'many',dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//     togglestatusmany(endpoint:any, data,val,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,data:{ids:data,val:val}};
//     var result = this._http.post(endpoint+'many',dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   private getEndpointUrl(endpoint: string) {
//       return '' + endpoint;
//   }
// }
/********************* Added By Himadri using Lamda start *************************/
import { ElementRef, EventEmitter, Injectable, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { humanizeBytes } from 'ngx-uploader';
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
        this.uploadInput = new EventEmitter(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
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
            var index = this.files.findIndex((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id; }));
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
            function (file) { return file !== uploadOutput.file; }));
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
        var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
        function (res) { return res; })));
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
        var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        console.log('------ ');
        console.log("link in postSearch");
        console.log(link);
        console.log(source);
        /** @type {?} */
        var result = this._http.post(link, source, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': source.token
            })
        };
        console.log('------ ');
        console.log("link");
        console.log(link);
        /** @type {?} */
        var result = this._http.post(link, source).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
        function (res) { return res; })));
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
            headers: new HttpHeaders({
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
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
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
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
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
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
            headers: new HttpHeaders({
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
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient }
    ]; };
    ApiService.propDecorators = {
        uploaderInput: [{ type: ViewChild, args: ['fileInput1',] }]
    };
    return ApiService;
}());
export { ApiService };
if (false) {
    /** @type {?} */
    ApiService.prototype.domain_for_fileupload_val;
    /** @type {?} */
    ApiService.prototype.files;
    /** @type {?} */
    ApiService.prototype.uploadInput;
    /** @type {?} */
    ApiService.prototype.humanizeBytes;
    /** @type {?} */
    ApiService.prototype.dragOver;
    /** @type {?} */
    ApiService.prototype.options;
    /** @type {?} */
    ApiService.prototype.uploaderInput;
    /** @type {?} */
    ApiService.prototype.lengthis;
    /** @type {?} */
    ApiService.prototype.percentageis;
    /** @type {?} */
    ApiService.prototype.inprogress;
    /** @type {?} */
    ApiService.prototype.progress;
    /** @type {?} */
    ApiService.prototype.uploadtype;
    /** @type {?} */
    ApiService.prototype.uploaderror;
    /** @type {?} */
    ApiService.prototype.fileservername;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._authHttp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4WEEsT0FBTyxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQWEsR0FBRyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQXlDLGFBQWEsRUFBaUMsTUFBTSxjQUFjLENBQUM7QUFHbkg7SUF3QkU7Ozs7O09BS0c7SUFDSCxvQkFBb0IsS0FBaUIsRUFDakIsU0FBcUI7UUFEckIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFZO1FBN0JsQyw4QkFBeUIsR0FBUSxzREFBc0QsR0FBRyxTQUFTLENBQUU7UUFnQnJHLGFBQVEsR0FBSyxFQUFFLENBQUM7UUFFaEIsZ0JBQVcsR0FBSyxFQUFFLENBQUM7O1FBRTFCLG1CQUFjLEdBQUssRUFB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IHtFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBpbXBvcnQgeyBVcGxvYWRPdXRwdXQsIFVwbG9hZElucHV0LCBVcGxvYWRGaWxlLCBodW1hbml6ZUJ5dGVzLCBVcGxvYWRlck9wdGlvbnMsIFVwbG9hZFN0YXR1cyB9IGZyb20gJ25neC11cGxvYWRlcic7XG5cblxuLy8gQEluamVjdGFibGUoKVxuLy8gZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuLy8gICBwdWJsaWMgZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbDogYW55ID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnICsgJ3VwbG9hZHMnIDtcbi8vICAgZmlsZXM6IFVwbG9hZEZpbGVbXTtcbi8vICAgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD47XG4vLyAgIGh1bWFuaXplQnl0ZXM6IEZ1bmN0aW9uO1xuLy8gICBkcmFnT3ZlcjogYm9vbGVhbjtcbi8vICAgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xuLy8gICBAVmlld0NoaWxkKCdmaWxlSW5wdXQxJykgdXBsb2FkZXJJbnB1dDogRWxlbWVudFJlZjtcbi8vICAgLypASW5wdXQoKVxuLy8gICBzZXQgZG9tYWluX2Zvcl9maWxldXBsb2FkKGRvbWFpbl9mb3JfZmlsZXVwbG9hZDogYW55KSB7XG4vLyAgICAgdGhpcy5kb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsID0gZG9tYWluX2Zvcl9maWxldXBsb2FkO1xuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnNraXB2YWwnKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwpO1xuLy8gICB9Ki9cbi8vICAgcHVibGljIGxlbmd0aGlzO1xuLy8gICBwdWJsaWMgcGVyY2VudGFnZWlzO1xuLy8gICBwdWJsaWMgaW5wcm9ncmVzcztcbi8vICAgcHVibGljIHByb2dyZXNzOmFueT1bXTtcbi8vICAgcHVibGljIHVwbG9hZHR5cGU7XG4vLyAgIHB1YmxpYyB1cGxvYWRlcnJvcjphbnk9Jyc7XG4vLyAgIC8vIHB1YmxpYyB1cGxvYWRPdXRwdXR2YWw6YW55O1xuLy8gICBmaWxlc2VydmVybmFtZTphbnk9W107XG4vLyAgIC8qQElucHV0KClcbi8vICAgc2V0IHVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IGFueSl7XG4vLyAgICAgdGhpcy51cGxvYWRPdXRwdXR2YWwgPSB1cGxvYWRPdXRwdXQ7XG4vLyAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkT3V0cHV0Jyk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy51cGxvYWRPdXRwdXQpO1xuLy8gICB9Ki9cbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbi8vICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQsXG4vLyAgICAgICAgICAgICAgICkge1xuLy8gICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xuLy8gICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XG4vLyAgICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxuLy8gICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XG4vLyAgICAgLy9jb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcbi8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcbi8vICAgfVxuLy8gICBvblVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IFVwbG9hZE91dHB1dCwgYXJyYXl2YWx1ZTogYW55LCB1cGxvYWR0eXBlYzogYW55LCB1cGxvYWRwYXRoOiBhbnkpOiB2b2lkIHtcbi8vICAgICAvLyB0aGlzLnVwbG9hZGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuLy8gICAgIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FsbEFkZGVkVG9RdWV1ZScpIHtcbi8vICAgICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRJbnB1dCA9IHtcbi8vICAgICAgICAgdHlwZTogJ3VwbG9hZEFsbCcsXG4vLyAgICAgICAgIHVybDogJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnLFxuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgZGF0YTogeyBwYXRoOiB1cGxvYWRwYXRoIH1cbi8vICAgICAgIH07XG4vLyAgICAgICB0aGlzLnVwbG9hZElucHV0LmVtaXQoZXZlbnQpO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhZGRlZFRvUXVldWUnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgIGlmICh1cGxvYWRPdXRwdXQuZmlsZS5yZXNwb25zZSAhPSAnJykge1xuLy8gICAgICAgICB0aGlzLmZpbGVzID0gW107XG4vLyAgICAgICAgIHRoaXMuZmlsZXMucHVzaCh1cGxvYWRPdXRwdXQuZmlsZSk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzKioqKioqKioqJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XG4vLyAgICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3VwbG9hZGluZycgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbGVzLmZpbmRJbmRleChmaWxlID0+IHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZmlsZS5pZCA9PT0gdXBsb2FkT3V0cHV0LmZpbGUuaWQpO1xuLy8gICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB1cGxvYWRPdXRwdXQuZmlsZTtcbi8vICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbClcbi8vICAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzPT09PT09PT09PT09PT09PT09Jyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAncmVtb3ZlZCcpIHtcbi8vICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZTogVXBsb2FkRmlsZSkgPT4gZmlsZSAhPT0gdXBsb2FkT3V0cHV0LmZpbGUpO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3ZlcicpIHtcbi8vICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0cnVlO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3V0Jykge1xuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcm9wJykge1xuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICBpZih0aGlzLmZpbGVzWzBdIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MhPW51bGwpIHtcbi8vICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PW51bGwpdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT0wO1xuLy8gICAgICAgdGhpcy5pbnByb2dyZXNzPXRydWU7XG4vLyAgICAgICBjb25zb2xlLmxvZygnZmlsZSB1cGxvYWQgcHJvZ3Jlc3NpbmcnKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcbi8vICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSAodGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuLy8gICAgICAgaWYodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT09MTAwKSB7XG4vLyAgICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09bnVsbDtcbi8vICAgICAgICAgdGhpcy5pbnByb2dyZXNzPW51bGw7XG4vLyAgICAgICB9XG4vLyAgICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWR0eXBlIGluIGFwaSBzZXJ2aWNlJyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh1cGxvYWR0eXBlYyk7XG4vLyAgICAgfVxuLy8gICAgIGlmICh1cGxvYWR0eXBlYz09J3NpbmdsZScpe1xuLy8gICAgICAgLy8gdGhpcy5maWxlc2VydmVybmFtZSA9IFtdO1xuLy8gICAgICAgaWYodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdPVtdO1xuLy8gICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHVwbG9hZHR5cGVjID09ICdtdWx0aXBsZScpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzWzBdLnJlc3BvbnNlJyk7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMubGVuZ3RoKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgICAgaWYgKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9IFtdO1xuLy8gICAgICAgLy8gaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCl7XG4vLyAgICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD09MSkge1xuLy8gICAgICAgICBpZih0aGlzLmZpbGVzWzBdICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlPT1udWxsICkge1xuLy8gICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICAgICAgICB0aGlzLmZpbGVzID0gW107XG4vLyAgICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZih0aGlzLmZpbGVzWzBdICE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSE9bnVsbCl7XG4vLyAgICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nZXJyb3Igb2NjdXJlZCBvbiB1cGxvYWRpbmcgISEhJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYodGhpcy5maWxlcy5sZW5ndGg+MSlcbi8vICAgICAgIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NkZmRzZj09PT0gaW4gbXVsdGlwbGUgbGVuZ3RoICcpO1xuLy8gICAgICAgICBmb3IobGV0IGIgaW4gdGhpcy5maWxlcyl7XG4vLyAgICAgICAgICAgaWYodGhpcy5maWxlc1tiXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzW2JdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwpIHtcbi8vICAgICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzW2JdLnJlc3BvbnNlKTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdGhpcy5maWxlcz1bXTtcbi8vICAgICAgIH1cbi8vICAgICAgIC8vfVxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc2VydmVybmFtZScpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNlcnZlcm5hbWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkZXJyb3IpO1xuLy8gICAgIC8vdGhpcy51cGxvYWRlcnNlcnZpY2UuZmlsZW5hbWV2YWxjMT10aGlzLmZpbGVzZXJ2ZXJuYW1lO1xuLy8gICAgIC8vVXBsb2FkZXJDb21wb25lbnQuZmlsZW5hbWV2YWxjMT04Nztcbi8vICAgICAvL2NvbnNvbGUubG9nKGNsYXNzdmFsKTtcblxuLy8gICB9XG4vLyAgIGlzVG9rZW5FeHBpcmVkKCkge1xuXG4vLyAgICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbi8vICAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuLy8gICAgIC8vIHZhciBpc0lkVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcbi8vICAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2lkX3Rva2VuIGlzRXhwaXJlZDonLGlzSWRUb2tlbkV4cGlyZWQpXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxuXG5cblxuLy8gICB9XG5cbi8vICAgZ2V0Y2xpZW50aXAoKSB7XG5cbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcblxuLy8gICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9pcGluZm8uaW8vP2Zvcm1hdD1qc29uJnRva2VuPTk3OTdjNDJiOTMwNzhhXCIpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cbi8vICAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IGFueSkge1xuXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6ICcnXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG5cbi8vICAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgZW5kcG9pbnQuc291cmNlLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuLy8gICBnZXREYXRhKGVuZHBvaW50OiBhbnkpIHtcblxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiAnJ1xuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArICdkYXRhbGlzdCcsIGVuZHBvaW50LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG4vLyAgIC8vIGdldERhdGEgZW5kXG5cbi8vICAgcG9zdERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IGRhdGEudG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyAgIHBvc3REYXRhd2l0aG91dFRva2VuKGVuZHBvaW50OmFueSwgZGF0YSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgcG9zdGxvZ2luKGVuZHBvaW50OmFueSwgZGF0YSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH0gLy8gcG9zdERhdGEgZW5kXG5cblxuXG5cbi8vICAgcG9zdFNlYXJjaCggbGluayx0b2tlbixzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJsaW5rIGluIHBvc3RTZWFyY2hcIik7XG4vLyAgICAgY29uc29sZS5sb2cobGluayk7XG4vLyAgICAgY29uc29sZS5sb2coc291cmNlKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyBwb3N0U2VhcmNoMSggbGluayxzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiBzb3VyY2UudG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwibGlua1wiKTtcbi8vICAgICBjb25zb2xlLmxvZyhsaW5rKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSkucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cblxuXG4vLyAgIHB1dERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLCBpZDphbnkpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpKycvJytpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG5cbi8vICAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZDpkYXRhLl9pZH1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gICAgIHRvZ2dsZXN0YXR1cyhlbmRwb2ludDphbnksIGRhdGEsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6ZGF0YX1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZHM6ZGF0YX1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OmFueSwgZGF0YSx2YWwsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6e2lkczpkYXRhLHZhbDp2YWx9fTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cbi8vICAgcHJpdmF0ZSBnZXRFbmRwb2ludFVybChlbmRwb2ludDogc3RyaW5nKSB7XG4vLyAgICAgICByZXR1cm4gJycgKyBlbmRwb2ludDtcbi8vICAgfVxuXG4vLyB9XG5cblxuXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqIEFkZGVkIEJ5IEhpbWFkcmkgdXNpbmcgTGFtZGEgc3RhcnQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5pbXBvcnQge0VsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFVwbG9hZE91dHB1dCwgVXBsb2FkSW5wdXQsIFVwbG9hZEZpbGUsIGh1bWFuaXplQnl0ZXMsIFVwbG9hZGVyT3B0aW9ucywgVXBsb2FkU3RhdHVzIH0gZnJvbSAnbmd4LXVwbG9hZGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHB1YmxpYyBkb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsOiBhbnkgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycgKyAndXBsb2FkcycgO1xuICBmaWxlczogVXBsb2FkRmlsZVtdO1xuICB1cGxvYWRJbnB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PjtcbiAgaHVtYW5pemVCeXRlczogRnVuY3Rpb247XG4gIGRyYWdPdmVyOiBib29sZWFuO1xuICBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dDEnKSB1cGxvYWRlcklucHV0OiBFbGVtZW50UmVmO1xuICAvKkBJbnB1dCgpXG4gIHNldCBkb21haW5fZm9yX2ZpbGV1cGxvYWQoZG9tYWluX2Zvcl9maWxldXBsb2FkOiBhbnkpIHtcbiAgICB0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwgPSBkb21haW5fZm9yX2ZpbGV1cGxvYWQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc2tpcHZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCk7XG4gIH0qL1xuICBwdWJsaWMgbGVuZ3RoaXM7XG4gIHB1YmxpYyBwZXJjZW50YWdlaXM7XG4gIHB1YmxpYyBpbnByb2dyZXNzO1xuICBwdWJsaWMgcHJvZ3Jlc3M6YW55PVtdO1xuICBwdWJsaWMgdXBsb2FkdHlwZTtcbiAgcHVibGljIHVwbG9hZGVycm9yOmFueT0nJztcbiAgLy8gcHVibGljIHVwbG9hZE91dHB1dHZhbDphbnk7XG4gIGZpbGVzZXJ2ZXJuYW1lOmFueT1bXTtcblxuICAvKkBJbnB1dCgpXG4gIHNldCB1cGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBhbnkpe1xuICAgIHRoaXMudXBsb2FkT3V0cHV0dmFsID0gdXBsb2FkT3V0cHV0O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZE91dHB1dCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkT3V0cHV0KTtcbiAgfSovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LFxuXG4gICAgICAgICAgICAgICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xuICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XG4gICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxuICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XG4gICAgLy9jb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcbiAgfVxuXG4gIG9uVXBsb2FkT3V0cHV0KHVwbG9hZE91dHB1dDogVXBsb2FkT3V0cHV0LCBhcnJheXZhbHVlOiBhbnksIHVwbG9hZHR5cGVjOiBhbnksIHVwbG9hZHBhdGg6IGFueSk6IHZvaWQge1xuICAgIC8vIHRoaXMudXBsb2FkZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWxsQWRkZWRUb1F1ZXVlJykge1xuICAgICAgY29uc3QgZXZlbnQ6IFVwbG9hZElucHV0ID0ge1xuICAgICAgICB0eXBlOiAndXBsb2FkQWxsJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7IHBhdGg6IHVwbG9hZHBhdGggfVxuICAgICAgfTtcbiAgICAgIHRoaXMudXBsb2FkSW5wdXQuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FkZGVkVG9RdWV1ZScgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHVwbG9hZE91dHB1dC5maWxlLnJlc3BvbnNlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKHVwbG9hZE91dHB1dC5maWxlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXMqKioqKioqKionKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAndXBsb2FkaW5nJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuZmluZEluZGV4KGZpbGUgPT4gdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJyAmJiBmaWxlLmlkID09PSB1cGxvYWRPdXRwdXQuZmlsZS5pZCk7XG4gICAgICB0aGlzLmZpbGVzW2luZGV4XSA9IHVwbG9hZE91dHB1dC5maWxlO1xuICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgICAgaWYodGhpcy5maWxlc1swXSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzIT1udWxsKVxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXM9PT09PT09PT09PT09PT09PT0nKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlOiBVcGxvYWRGaWxlKSA9PiBmaWxlICE9PSB1cGxvYWRPdXRwdXQuZmlsZSk7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdmVyJykge1xuICAgICAgdGhpcy5kcmFnT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdXQnKSB7XG4gICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2Ryb3AnKSB7XG4gICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdmaWxlcycpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbCkge1xuICAgICAgaWYodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT09bnVsbCl0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPTA7XG4gICAgICB0aGlzLmlucHJvZ3Jlc3M9dHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWxlIHVwbG9hZCBwcm9ncmVzc2luZycpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9ICh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XG4gICAgICBpZih0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPT0xMDApIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT1udWxsO1xuICAgICAgICB0aGlzLmlucHJvZ3Jlc3M9bnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZHR5cGUgaW4gYXBpIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUubG9nKHVwbG9hZHR5cGVjKTtcbiAgICB9XG4gICAgaWYgKHVwbG9hZHR5cGVjPT0nc2luZ2xlJyl7XG4gICAgICAvLyB0aGlzLmZpbGVzZXJ2ZXJuYW1lID0gW107XG4gICAgICBpZih0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV09W107XG4gICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdPVtdO1xuICAgICAgaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuICAgIH1cbiAgICBpZiAodXBsb2FkdHlwZWMgPT0gJ211bHRpcGxlJykge1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNbMF0ucmVzcG9uc2UnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcy5sZW5ndGgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgICBpZiAodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107XG4gICAgICAvLyBpZih0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsKXtcbiAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoPT0xKSB7XG4gICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwgKSB7XG4gICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPScnO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlIT1udWxsKXtcbiAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPSdlcnJvciBvY2N1cmVkIG9uIHVwbG9hZGluZyAhISEnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD4xKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZygnc2RmZHNmPT09PSBpbiBtdWx0aXBsZSBsZW5ndGggJyk7XG4gICAgICAgIGZvcihsZXQgYiBpbiB0aGlzLmZpbGVzKXtcbiAgICAgICAgICBpZih0aGlzLmZpbGVzW2JdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UuZXJyb3JfY29kZT09bnVsbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGVzPVtdO1xuICAgICAgfVxuICAgICAgLy99XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzZXJ2ZXJuYW1lJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5maWxlc2VydmVybmFtZSk7XG4gICAgY29uc29sZS5sb2codGhpcy51cGxvYWRlcnJvcik7XG4gICAgLy90aGlzLnVwbG9hZGVyc2VydmljZS5maWxlbmFtZXZhbGMxPXRoaXMuZmlsZXNlcnZlcm5hbWU7XG4gICAgLy9VcGxvYWRlckNvbXBvbmVudC5maWxlbmFtZXZhbGMxPTg3O1xuICAgIC8vY29uc29sZS5sb2coY2xhc3N2YWwpO1xuXG4gIH1cbiAgaXNUb2tlbkV4cGlyZWQoKSB7XG5cbiAgICAvLyBjb25zdCBoZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xuICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuJyxsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKVxuICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbiBpc0V4cGlyZWQ6Jyxpc1JlZnJlc2hUb2tlbkV4cGlyZWQpXG5cblxuXG4gIH1cblxuICBnZXRjbGllbnRpcCgpIHtcblxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2lwaW5mby5pby8/Zm9ybWF0PWpzb24mdG9rZW49OTc5N2M0MmI5MzA3OGFcIikucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICBnZXRFbmRwb2ludChlbmRwb2ludDogYW55KSB7XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICcnXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG5cbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgZW5kcG9pbnQuc291cmNlLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXREYXRhKGVuZHBvaW50OiBhbnkpIHtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKCcnKTtcblxuICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyAnZGF0YWxpc3QnLCBlbmRwb2ludCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBnZXREYXRhIGVuZFxuXG4gIHBvc3REYXRhKGVuZHBvaW50OmFueSwgZGF0YSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogZGF0YS50b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcG9zdERhdGF3aXRob3V0VG9rZW4oZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBvc3Rsb2dpbihlbmRwb2ludDphbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IC8vIHBvc3REYXRhIGVuZFxuXG5cblxuXG4gIHBvc3RTZWFyY2goIGxpbmssdG9rZW4sc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImxpbmsgaW4gcG9zdFNlYXJjaFwiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QobGluaywgc291cmNlLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbnBvc3RTZWFyY2gxKCBsaW5rLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBzb3VyY2UudG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwibGlua1wiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSkucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cblxuXG4gIHB1dERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLCBpZDphbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpKycvJytpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIGxldCBkYXRhdmFsOmFueTtcbiAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGlkOmRhdGEuX2lkfVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgICB0b2dnbGVzdGF0dXMoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgZGF0YXZhbDphbnk7XG4gICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOmRhdGF9XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbGV0IGRhdGF2YWw6YW55O1xuICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWRzOmRhdGF9XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OmFueSwgZGF0YSx2YWwsdG9rZW4sc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgZGF0YXZhbDphbnk7XG4gICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOntpZHM6ZGF0YSx2YWw6dmFsfX07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuXG4gIHByaXZhdGUgZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQ6IHN0cmluZykge1xuICAgICAgcmV0dXJuICcnICsgZW5kcG9pbnQ7XG4gIH1cblxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKiBBZGRlZCBCeSBIaW1hZHJpIHVzaW5nIExhbWRhIGVuZCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIl19