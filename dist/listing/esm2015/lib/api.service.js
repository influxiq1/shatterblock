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
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { humanizeBytes } from 'ngx-uploader';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from "rxjs";
export class ApiService {
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
    ApiService.prototype.secretkey;
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
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4WEEsT0FBTyxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQVksR0FBRyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUF5QyxhQUFhLEVBQWlDLE1BQU0sY0FBYyxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBSWhDLE1BQU0sT0FBTyxVQUFVOzs7Ozs7Ozs7Ozs7SUE4QnJCLFlBQW9CLEtBQWlCLEVBQ2pCLFNBQXFCLEVBQ3JCLGFBQTRCO1FBRjVCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FB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U0FBUyxTQUFDLFlBQVk7Ozs7SUFOdkIsK0NBQTRHOztJQUM1RywyQkFBb0I7O0lBQ3BCLGlDQUF1Qzs7SUFDdkMsbUNBQXdCOztJQUN4Qiw4QkFBa0I7O0lBQ2xCLDZCQUF5Qjs7SUFDekIsbUNBQW1EOztJQU9uRCw4QkFBZ0I7O0lBQ2hCLGtDQUFvQjs7SUFDcEIsZ0NBQWtCOztJQUNsQiw4QkFBdUI7O0lBQ3ZCLGdDQUFrQjs7SUFDbEIsaUNBQTBCOztJQUMxQiwrQkFBMEI7O0lBRTFCLG9DQUFzQjs7Ozs7SUFRViwyQkFBeUI7Ozs7O0lBQ3pCLCtCQUE2Qjs7Ozs7SUFDN0IsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBpbXBvcnQgeyBVcGxvYWRPdXRwdXQsIFVwbG9hZElucHV0LCBVcGxvYWRGaWxlLCBodW1hbml6ZUJ5dGVzLCBVcGxvYWRlck9wdGlvbnMsIFVwbG9hZFN0YXR1cyB9IGZyb20gJ25neC11cGxvYWRlcic7XG5cblxuLy8gQEluamVjdGFibGUoKVxuLy8gZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuLy8gICBwdWJsaWMgZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbDogYW55ID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnICsgJ3VwbG9hZHMnIDtcbi8vICAgZmlsZXM6IFVwbG9hZEZpbGVbXTtcbi8vICAgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD47XG4vLyAgIGh1bWFuaXplQnl0ZXM6IEZ1bmN0aW9uO1xuLy8gICBkcmFnT3ZlcjogYm9vbGVhbjtcbi8vICAgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xuLy8gICBAVmlld0NoaWxkKCdmaWxlSW5wdXQxJykgdXBsb2FkZXJJbnB1dDogRWxlbWVudFJlZjtcbi8vICAgLypASW5wdXQoKVxuLy8gICBzZXQgZG9tYWluX2Zvcl9maWxldXBsb2FkKGRvbWFpbl9mb3JfZmlsZXVwbG9hZDogYW55KSB7XG4vLyAgICAgdGhpcy5kb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsID0gZG9tYWluX2Zvcl9maWxldXBsb2FkO1xuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnNraXB2YWwnKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwpO1xuLy8gICB9Ki9cbi8vICAgcHVibGljIGxlbmd0aGlzO1xuLy8gICBwdWJsaWMgcGVyY2VudGFnZWlzO1xuLy8gICBwdWJsaWMgaW5wcm9ncmVzcztcbi8vICAgcHVibGljIHByb2dyZXNzOmFueT1bXTtcbi8vICAgcHVibGljIHVwbG9hZHR5cGU7XG4vLyAgIHB1YmxpYyB1cGxvYWRlcnJvcjphbnk9Jyc7XG4vLyAgIC8vIHB1YmxpYyB1cGxvYWRPdXRwdXR2YWw6YW55O1xuLy8gICBmaWxlc2VydmVybmFtZTphbnk9W107XG4vLyAgIC8qQElucHV0KClcbi8vICAgc2V0IHVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IGFueSl7XG4vLyAgICAgdGhpcy51cGxvYWRPdXRwdXR2YWwgPSB1cGxvYWRPdXRwdXQ7XG4vLyAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkT3V0cHV0Jyk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy51cGxvYWRPdXRwdXQpO1xuLy8gICB9Ki9cbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbi8vICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQsXG4vLyAgICAgICAgICAgICAgICkge1xuLy8gICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xuLy8gICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XG4vLyAgICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxuLy8gICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XG4vLyAgICAgLy9jb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcbi8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcbi8vICAgfVxuLy8gICBvblVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IFVwbG9hZE91dHB1dCwgYXJyYXl2YWx1ZTogYW55LCB1cGxvYWR0eXBlYzogYW55LCB1cGxvYWRwYXRoOiBhbnkpOiB2b2lkIHtcbi8vICAgICAvLyB0aGlzLnVwbG9hZGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuLy8gICAgIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FsbEFkZGVkVG9RdWV1ZScpIHtcbi8vICAgICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRJbnB1dCA9IHtcbi8vICAgICAgICAgdHlwZTogJ3VwbG9hZEFsbCcsXG4vLyAgICAgICAgIHVybDogJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnLFxuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgZGF0YTogeyBwYXRoOiB1cGxvYWRwYXRoIH1cbi8vICAgICAgIH07XG4vLyAgICAgICB0aGlzLnVwbG9hZElucHV0LmVtaXQoZXZlbnQpO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhZGRlZFRvUXVldWUnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgIGlmICh1cGxvYWRPdXRwdXQuZmlsZS5yZXNwb25zZSAhPSAnJykge1xuLy8gICAgICAgICB0aGlzLmZpbGVzID0gW107XG4vLyAgICAgICAgIHRoaXMuZmlsZXMucHVzaCh1cGxvYWRPdXRwdXQuZmlsZSk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzKioqKioqKioqJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XG4vLyAgICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3VwbG9hZGluZycgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbGVzLmZpbmRJbmRleChmaWxlID0+IHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZmlsZS5pZCA9PT0gdXBsb2FkT3V0cHV0LmZpbGUuaWQpO1xuLy8gICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB1cGxvYWRPdXRwdXQuZmlsZTtcbi8vICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbClcbi8vICAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzPT09PT09PT09PT09PT09PT09Jyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAncmVtb3ZlZCcpIHtcbi8vICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZTogVXBsb2FkRmlsZSkgPT4gZmlsZSAhPT0gdXBsb2FkT3V0cHV0LmZpbGUpO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3ZlcicpIHtcbi8vICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0cnVlO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3V0Jykge1xuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcm9wJykge1xuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICBpZih0aGlzLmZpbGVzWzBdIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MhPW51bGwpIHtcbi8vICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PW51bGwpdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT0wO1xuLy8gICAgICAgdGhpcy5pbnByb2dyZXNzPXRydWU7XG4vLyAgICAgICBjb25zb2xlLmxvZygnZmlsZSB1cGxvYWQgcHJvZ3Jlc3NpbmcnKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcbi8vICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSAodGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuLy8gICAgICAgaWYodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT09MTAwKSB7XG4vLyAgICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09bnVsbDtcbi8vICAgICAgICAgdGhpcy5pbnByb2dyZXNzPW51bGw7XG4vLyAgICAgICB9XG4vLyAgICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWR0eXBlIGluIGFwaSBzZXJ2aWNlJyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh1cGxvYWR0eXBlYyk7XG4vLyAgICAgfVxuLy8gICAgIGlmICh1cGxvYWR0eXBlYz09J3NpbmdsZScpe1xuLy8gICAgICAgLy8gdGhpcy5maWxlc2VydmVybmFtZSA9IFtdO1xuLy8gICAgICAgaWYodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdPVtdO1xuLy8gICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHVwbG9hZHR5cGVjID09ICdtdWx0aXBsZScpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzWzBdLnJlc3BvbnNlJyk7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMubGVuZ3RoKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgICAgaWYgKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9IFtdO1xuLy8gICAgICAgLy8gaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCl7XG4vLyAgICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD09MSkge1xuLy8gICAgICAgICBpZih0aGlzLmZpbGVzWzBdICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlPT1udWxsICkge1xuLy8gICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICAgICAgICB0aGlzLmZpbGVzID0gW107XG4vLyAgICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZih0aGlzLmZpbGVzWzBdICE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSE9bnVsbCl7XG4vLyAgICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nZXJyb3Igb2NjdXJlZCBvbiB1cGxvYWRpbmcgISEhJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYodGhpcy5maWxlcy5sZW5ndGg+MSlcbi8vICAgICAgIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NkZmRzZj09PT0gaW4gbXVsdGlwbGUgbGVuZ3RoICcpO1xuLy8gICAgICAgICBmb3IobGV0IGIgaW4gdGhpcy5maWxlcyl7XG4vLyAgICAgICAgICAgaWYodGhpcy5maWxlc1tiXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzW2JdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwpIHtcbi8vICAgICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzW2JdLnJlc3BvbnNlKTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdGhpcy5maWxlcz1bXTtcbi8vICAgICAgIH1cbi8vICAgICAgIC8vfVxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc2VydmVybmFtZScpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNlcnZlcm5hbWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkZXJyb3IpO1xuLy8gICAgIC8vdGhpcy51cGxvYWRlcnNlcnZpY2UuZmlsZW5hbWV2YWxjMT10aGlzLmZpbGVzZXJ2ZXJuYW1lO1xuLy8gICAgIC8vVXBsb2FkZXJDb21wb25lbnQuZmlsZW5hbWV2YWxjMT04Nztcbi8vICAgICAvL2NvbnNvbGUubG9nKGNsYXNzdmFsKTtcblxuLy8gICB9XG4vLyAgIGlzVG9rZW5FeHBpcmVkKCkge1xuXG4vLyAgICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbi8vICAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuLy8gICAgIC8vIHZhciBpc0lkVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcbi8vICAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2lkX3Rva2VuIGlzRXhwaXJlZDonLGlzSWRUb2tlbkV4cGlyZWQpXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxuXG5cblxuLy8gICB9XG5cbi8vICAgZ2V0Y2xpZW50aXAoKSB7XG5cbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcblxuLy8gICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9pcGluZm8uaW8vP2Zvcm1hdD1qc29uJnRva2VuPTk3OTdjNDJiOTMwNzhhXCIpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cbi8vICAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IGFueSkge1xuXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6ICcnXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG5cbi8vICAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgZW5kcG9pbnQuc291cmNlLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuLy8gICBnZXREYXRhKGVuZHBvaW50OiBhbnkpIHtcblxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiAnJ1xuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArICdkYXRhbGlzdCcsIGVuZHBvaW50LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG4vLyAgIC8vIGdldERhdGEgZW5kXG5cbi8vICAgcG9zdERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IGRhdGEudG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyAgIHBvc3REYXRhd2l0aG91dFRva2VuKGVuZHBvaW50OmFueSwgZGF0YSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgcG9zdGxvZ2luKGVuZHBvaW50OmFueSwgZGF0YSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH0gLy8gcG9zdERhdGEgZW5kXG5cblxuXG5cbi8vICAgcG9zdFNlYXJjaCggbGluayx0b2tlbixzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJsaW5rIGluIHBvc3RTZWFyY2hcIik7XG4vLyAgICAgY29uc29sZS5sb2cobGluayk7XG4vLyAgICAgY29uc29sZS5sb2coc291cmNlKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyBwb3N0U2VhcmNoMSggbGluayxzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiBzb3VyY2UudG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwibGlua1wiKTtcbi8vICAgICBjb25zb2xlLmxvZyhsaW5rKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSkucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cblxuXG4vLyAgIHB1dERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLCBpZDphbnkpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpKycvJytpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG5cbi8vICAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZDpkYXRhLl9pZH1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gICAgIHRvZ2dsZXN0YXR1cyhlbmRwb2ludDphbnksIGRhdGEsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6ZGF0YX1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZHM6ZGF0YX1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OmFueSwgZGF0YSx2YWwsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6e2lkczpkYXRhLHZhbDp2YWx9fTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cbi8vICAgcHJpdmF0ZSBnZXRFbmRwb2ludFVybChlbmRwb2ludDogc3RyaW5nKSB7XG4vLyAgICAgICByZXR1cm4gJycgKyBlbmRwb2ludDtcbi8vICAgfVxuXG4vLyB9XG5cblxuXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqIEFkZGVkIEJ5IEhpbWFkcmkgdXNpbmcgTGFtZGEgc3RhcnQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5pbXBvcnQge0VsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3N3aXRjaE1hcCwgbWFwLCB0YWtlV2hpbGUsIGNhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBVcGxvYWRPdXRwdXQsIFVwbG9hZElucHV0LCBVcGxvYWRGaWxlLCBodW1hbml6ZUJ5dGVzLCBVcGxvYWRlck9wdGlvbnMsIFVwbG9hZFN0YXR1cyB9IGZyb20gJ25neC11cGxvYWRlcic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcInJ4anNcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHB1YmxpYyBkb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsOiBhbnkgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycgKyAndXBsb2FkcycgO1xuICBmaWxlczogVXBsb2FkRmlsZVtdO1xuICB1cGxvYWRJbnB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PjtcbiAgaHVtYW5pemVCeXRlczogRnVuY3Rpb247XG4gIGRyYWdPdmVyOiBib29sZWFuO1xuICBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dDEnKSB1cGxvYWRlcklucHV0OiBFbGVtZW50UmVmO1xuICAvKkBJbnB1dCgpXG4gIHNldCBkb21haW5fZm9yX2ZpbGV1cGxvYWQoZG9tYWluX2Zvcl9maWxldXBsb2FkOiBhbnkpIHtcbiAgICB0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwgPSBkb21haW5fZm9yX2ZpbGV1cGxvYWQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc2tpcHZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCk7XG4gIH0qL1xuICBwdWJsaWMgbGVuZ3RoaXM7XG4gIHB1YmxpYyBwZXJjZW50YWdlaXM7XG4gIHB1YmxpYyBpbnByb2dyZXNzO1xuICBwdWJsaWMgcHJvZ3Jlc3M6YW55PVtdO1xuICBwdWJsaWMgdXBsb2FkdHlwZTtcbiAgcHVibGljIHVwbG9hZGVycm9yOmFueT0nJztcbiAgcHVibGljIHNlY3JldGtleTphbnk9J25hJztcbiAgLy8gcHVibGljIHVwbG9hZE91dHB1dHZhbDphbnk7XG4gIGZpbGVzZXJ2ZXJuYW1lOmFueT1bXTtcblxuICAvKkBJbnB1dCgpXG4gIHNldCB1cGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBhbnkpe1xuICAgIHRoaXMudXBsb2FkT3V0cHV0dmFsID0gdXBsb2FkT3V0cHV0O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZE91dHB1dCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkT3V0cHV0KTtcbiAgfSovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2VcblxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IGNvbmN1cnJlbmN5OiAxMCwgbWF4VXBsb2FkczogMTAgfTtcbiAgICB0aGlzLmZpbGVzID0gW107IC8vIGxvY2FsIHVwbG9hZGluZyBmaWxlcyBhcnJheVxuICAgIHRoaXMudXBsb2FkSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PigpOyAvLyBpbnB1dCBldmVudHMsIHdlIHVzZSB0aGlzIHRvIGVtaXQgZGF0YSB0byBuZ3gtdXBsb2FkZXJcbiAgICB0aGlzLmh1bWFuaXplQnl0ZXMgPSBodW1hbml6ZUJ5dGVzO1xuICAgIGlmKHRoaXMuY29va2llU2VydmljZS5jaGVjaygnc2VjcmV0a2V5JykpXG4gICAgICB0aGlzLnNlY3JldGtleT10aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdzZWNyZXRrZXknKVxuICAgIC8vY29uc29sZS5sb2coJ3RoaXMuZG9tYWluJyk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmRvbWFpbik7XG4gIH1cblxuICBvblVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IFVwbG9hZE91dHB1dCwgYXJyYXl2YWx1ZTogYW55LCB1cGxvYWR0eXBlYzogYW55LCB1cGxvYWRwYXRoOiBhbnkpOiB2b2lkIHtcbiAgICAvLyB0aGlzLnVwbG9hZGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FsbEFkZGVkVG9RdWV1ZScpIHtcbiAgICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRJbnB1dCA9IHtcbiAgICAgICAgdHlwZTogJ3VwbG9hZEFsbCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogeyBwYXRoOiB1cGxvYWRwYXRoIH1cbiAgICAgIH07XG4gICAgICB0aGlzLnVwbG9hZElucHV0LmVtaXQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhZGRlZFRvUXVldWUnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh1cGxvYWRPdXRwdXQuZmlsZS5yZXNwb25zZSAhPSAnJykge1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMucHVzaCh1cGxvYWRPdXRwdXQuZmlsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzKioqKioqKioqJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3VwbG9hZGluZycgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbGVzLmZpbmRJbmRleChmaWxlID0+IHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZmlsZS5pZCA9PT0gdXBsb2FkT3V0cHV0LmZpbGUuaWQpO1xuICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB1cGxvYWRPdXRwdXQuZmlsZTtcbiAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbClcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzPT09PT09PT09PT09PT09PT09Jyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZTogVXBsb2FkRmlsZSkgPT4gZmlsZSAhPT0gdXBsb2FkT3V0cHV0LmZpbGUpO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3ZlcicpIHtcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3V0Jykge1xuICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcm9wJykge1xuICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICBpZih0aGlzLmZpbGVzWzBdIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MhPW51bGwpIHtcbiAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PW51bGwpdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT0wO1xuICAgICAgdGhpcy5pbnByb2dyZXNzPXRydWU7XG4gICAgICBjb25zb2xlLmxvZygnZmlsZSB1cGxvYWQgcHJvZ3Jlc3NpbmcnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSAodGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuICAgICAgaWYodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT09MTAwKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09bnVsbDtcbiAgICAgICAgdGhpcy5pbnByb2dyZXNzPW51bGw7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWR0eXBlIGluIGFwaSBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmxvZyh1cGxvYWR0eXBlYyk7XG4gICAgfVxuICAgIGlmICh1cGxvYWR0eXBlYz09J3NpbmdsZScpe1xuICAgICAgLy8gdGhpcy5maWxlc2VydmVybmFtZSA9IFtdO1xuICAgICAgaWYodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdPVtdO1xuICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcbiAgICAgIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbiAgICB9XG4gICAgaWYgKHVwbG9hZHR5cGVjID09ICdtdWx0aXBsZScpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzWzBdLnJlc3BvbnNlJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICAgICAgaWYgKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9IFtdO1xuICAgICAgLy8gaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCl7XG4gICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD09MSkge1xuICAgICAgICBpZih0aGlzLmZpbGVzWzBdICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlPT1udWxsICkge1xuICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nJztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmZpbGVzWzBdICE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSE9bnVsbCl7XG4gICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nZXJyb3Igb2NjdXJlZCBvbiB1cGxvYWRpbmcgISEhJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYodGhpcy5maWxlcy5sZW5ndGg+MSlcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NkZmRzZj09PT0gaW4gbXVsdGlwbGUgbGVuZ3RoICcpO1xuICAgICAgICBmb3IobGV0IGIgaW4gdGhpcy5maWxlcyl7XG4gICAgICAgICAgaWYodGhpcy5maWxlc1tiXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzW2JdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzW2JdLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxlcz1bXTtcbiAgICAgIH1cbiAgICAgIC8vfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc2VydmVybmFtZScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNlcnZlcm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkZXJyb3IpO1xuICAgIC8vdGhpcy51cGxvYWRlcnNlcnZpY2UuZmlsZW5hbWV2YWxjMT10aGlzLmZpbGVzZXJ2ZXJuYW1lO1xuICAgIC8vVXBsb2FkZXJDb21wb25lbnQuZmlsZW5hbWV2YWxjMT04NztcbiAgICAvL2NvbnNvbGUubG9nKGNsYXNzdmFsKTtcblxuICB9XG4gIGlzVG9rZW5FeHBpcmVkKCkge1xuXG4gICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbiAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgIC8vIHZhciBpc0lkVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcbiAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2lkX3Rva2VuIGlzRXhwaXJlZDonLGlzSWRUb2tlbkV4cGlyZWQpXG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxuXG5cblxuICB9XG5cbiAgZ2V0Y2xpZW50aXAoKSB7XG5cbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcblxuICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9pcGluZm8uaW8vP2Zvcm1hdD1qc29uJnRva2VuPTk3OTdjNDJiOTMwNzhhXCIpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cbiAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IGFueSkge1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJycpO1xuXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArIGVuZHBvaW50LnNvdXJjZSwge30sIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0RGF0YShlbmRwb2ludDogYW55KSB7XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICcnXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG5cbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgJ2RhdGFsaXN0JywgZW5kcG9pbnQsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJylcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy9IYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy9SZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksbWFwKHJlcyA9PiByZXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBnZXREYXRhIGVuZFxuXG4gIHBvc3REYXRhKGVuZHBvaW50OmFueSwgZGF0YSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogZGF0YS50b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBwb3N0RGF0YXdpdGhvdXRUb2tlbihlbmRwb2ludDphbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvL0hhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvL1JldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSxtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwb3N0bG9naW4oZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJylcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy9IYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy9SZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IC8vIHBvc3REYXRhIGVuZFxuXG5cblxuXG4gIHBvc3RTZWFyY2goIGxpbmssdG9rZW4sc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwibGluayBpbiBwb3N0U2VhcmNoXCIpO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7Ki9cbiAgICBzb3VyY2Uuc2VjcmV0a2V5PXRoaXMuc2VjcmV0a2V5O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QobGluaywgc291cmNlLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBwb3N0U2VhcmNoMSggbGluayxzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogc291cmNlLnRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImxpbmtcIik7XG4gICAgY29uc29sZS5sb2cobGluayk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvL0hhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvL1JldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSxtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cblxuXG4gIHB1dERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLCBpZDphbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpKycvJytpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIC8qIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codG9rZW4pOyovXG4gICAgbGV0IGRhdGF2YWw6YW55O1xuICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWQ6ZGF0YS5faWR9O1xuICAgIGRhdGF2YWwuc2VjcmV0a2V5PXRoaXMuc2VjcmV0a2V5O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvL0hhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvL1JldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSxtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0b2dnbGVzdGF0dXMoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgIC8qY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICBjb25zb2xlLmxvZyhzb3VyY2UpOyovXG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICAvKmNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7Ki9cbiAgICBsZXQgZGF0YXZhbDphbnk7XG4gICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOmRhdGF9O1xuICAgIGRhdGF2YWwuc2VjcmV0a2V5PXRoaXMuc2VjcmV0a2V5O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvL0hhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvL1JldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSxtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIC8qY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTsqL1xuICAgIGxldCBkYXRhdmFsOmFueTtcbiAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGlkczpkYXRhfTtcbiAgICBkYXRhdmFsLnNlY3JldGtleT10aGlzLnNlY3JldGtleTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvZ2dsZXN0YXR1c21hbnkoZW5kcG9pbnQ6YW55LCBkYXRhLHZhbCx0b2tlbixzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICAvKmNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7Ki9cbiAgICBsZXQgZGF0YXZhbDphbnk7XG4gICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOntpZHM6ZGF0YSx2YWw6dmFsfX07XG4gICAgZGF0YXZhbC5zZWNyZXRrZXk9dGhpcy5zZWNyZXRrZXk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvL0hhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvL1JldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSxtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBnZXRFbmRwb2ludFVybChlbmRwb2ludDogc3RyaW5nKSB7XG4gICAgcmV0dXJuICcnICsgZW5kcG9pbnQ7XG4gIH1cblxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKiBBZGRlZCBCeSBIaW1hZHJpIHVzaW5nIExhbWRhIGVuZCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIl19