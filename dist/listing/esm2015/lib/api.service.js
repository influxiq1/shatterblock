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
     */
    constructor(_http, _authHttp) {
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
        var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(map((/**
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
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
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
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
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
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
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
        console.log('------ ');
        console.log("link in postSearch");
        console.log(link);
        console.log(source);
        /** @type {?} */
        var result = this._http.post(link, source, httpOptions).pipe(map((/**
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
        var result = this._http.post(link, source).pipe(map((/**
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
        console.log('------ ');
        console.log("endpoint");
        console.log(endpoint);
        console.log(data);
        console.log(token);
        /** @type {?} */
        let dataval;
        dataval = { source: source, id: data._id };
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(map((/**
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
        console.log(endpoint);
        console.log(data);
        console.log(token);
        console.log(source);
        /** @type {?} */
        const httpOptions = {
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
        let dataval;
        dataval = { source: source, data: data };
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(map((/**
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
        console.log('------ ');
        console.log("endpoint");
        console.log(endpoint);
        console.log(data);
        /** @type {?} */
        let dataval;
        dataval = { source: source, ids: data };
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(map((/**
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
        console.log('------ ');
        console.log("endpoint");
        console.log(endpoint);
        console.log(data);
        /** @type {?} */
        let dataval;
        dataval = { source: source, data: { ids: data, val: val } };
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(map((/**
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
    { type: HttpClient }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1WUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQWEsR0FBRyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQXlDLGFBQWEsRUFBaUMsTUFBTSxjQUFjLENBQUM7QUFJbkgsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7Ozs7O0lBNkJyQixZQUFvQixLQUFpQixFQUNqQixTQUFxQjtRQURyQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUE3QmxDLDhCQUF5QixHQUFRLHNEQUFzRCxHQUFHLFNBQVMsQ0FBRTtRQWdCckcsYUFBUSxHQUFLLEVBQUUsQ0FBQztRQUVoQixnQkFBVyxHQUFLLEVBQUUsQ0FBQzs7UUFFMUIsbUJB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LElBQUksQ0FBQyxRQUFRLEdBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBSU8sY0FBYyxDQUFDLFFBQWdCO1FBQ25DLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7WUFyWEYsVUFBVTs7OztZQUpGLFVBQVU7WUFBVixVQUFVOzs7NEJBWWhCLFNBQVMsU0FBQyxZQUFZOzs7O0lBTnZCLCtDQUE0Rzs7SUFDNUcsMkJBQW9COztJQUNwQixpQ0FBdUM7O0lBQ3ZDLG1DQUF3Qjs7SUFDeEIsOEJBQWtCOztJQUNsQiw2QkFBeUI7O0lBQ3pCLG1DQUFtRDs7SUFPbkQsOEJBQWdCOztJQUNoQixrQ0FBb0I7O0lBQ3BCLGdDQUFrQjs7SUFDbEIsOEJBQXVCOztJQUN2QixnQ0FBa0I7O0lBQ2xCLGlDQUEwQjs7SUFFMUIsb0NBQXNCOzs7OztJQVFWLDJCQUF5Qjs7Ozs7SUFDekIsK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQge0VsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGltcG9ydCB7IFVwbG9hZE91dHB1dCwgVXBsb2FkSW5wdXQsIFVwbG9hZEZpbGUsIGh1bWFuaXplQnl0ZXMsIFVwbG9hZGVyT3B0aW9ucywgVXBsb2FkU3RhdHVzIH0gZnJvbSAnbmd4LXVwbG9hZGVyJztcblxuXG4vLyBASW5qZWN0YWJsZSgpXG4vLyBleHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4vLyAgIHB1YmxpYyBkb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsOiBhbnkgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycgKyAndXBsb2FkcycgO1xuLy8gICBmaWxlczogVXBsb2FkRmlsZVtdO1xuLy8gICB1cGxvYWRJbnB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0Pjtcbi8vICAgaHVtYW5pemVCeXRlczogRnVuY3Rpb247XG4vLyAgIGRyYWdPdmVyOiBib29sZWFuO1xuLy8gICBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XG4vLyAgIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dDEnKSB1cGxvYWRlcklucHV0OiBFbGVtZW50UmVmO1xuLy8gICAvKkBJbnB1dCgpXG4vLyAgIHNldCBkb21haW5fZm9yX2ZpbGV1cGxvYWQoZG9tYWluX2Zvcl9maWxldXBsb2FkOiBhbnkpIHtcbi8vICAgICB0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwgPSBkb21haW5fZm9yX2ZpbGV1cGxvYWQ7XG4vLyAgICAgY29uc29sZS5sb2coJ3RoaXMuc2tpcHZhbCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCk7XG4vLyAgIH0qL1xuLy8gICBwdWJsaWMgbGVuZ3RoaXM7XG4vLyAgIHB1YmxpYyBwZXJjZW50YWdlaXM7XG4vLyAgIHB1YmxpYyBpbnByb2dyZXNzO1xuLy8gICBwdWJsaWMgcHJvZ3Jlc3M6YW55PVtdO1xuLy8gICBwdWJsaWMgdXBsb2FkdHlwZTtcbi8vICAgcHVibGljIHVwbG9hZGVycm9yOmFueT0nJztcbi8vICAgLy8gcHVibGljIHVwbG9hZE91dHB1dHZhbDphbnk7XG4vLyAgIGZpbGVzZXJ2ZXJuYW1lOmFueT1bXTtcblxuLy8gICAvKkBJbnB1dCgpXG4vLyAgIHNldCB1cGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBhbnkpe1xuLy8gICAgIHRoaXMudXBsb2FkT3V0cHV0dmFsID0gdXBsb2FkT3V0cHV0O1xuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZE91dHB1dCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkT3V0cHV0KTtcbi8vICAgfSovXG4vLyAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4vLyAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LFxuXG4vLyAgICAgICAgICAgICAgICkge1xuLy8gICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xuLy8gICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XG4vLyAgICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxuLy8gICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XG4vLyAgICAgLy9jb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcbi8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcbi8vICAgfVxuXG4vLyAgIG9uVXBsb2FkT3V0cHV0KHVwbG9hZE91dHB1dDogVXBsb2FkT3V0cHV0LCBhcnJheXZhbHVlOiBhbnksIHVwbG9hZHR5cGVjOiBhbnksIHVwbG9hZHBhdGg6IGFueSk6IHZvaWQge1xuLy8gICAgIC8vIHRoaXMudXBsb2FkZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4vLyAgICAgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWxsQWRkZWRUb1F1ZXVlJykge1xuLy8gICAgICAgY29uc3QgZXZlbnQ6IFVwbG9hZElucHV0ID0ge1xuLy8gICAgICAgICB0eXBlOiAndXBsb2FkQWxsJyxcbi8vICAgICAgICAgdXJsOiAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycsXG4vLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgICBkYXRhOiB7IHBhdGg6IHVwbG9hZHBhdGggfVxuLy8gICAgICAgfTtcbi8vICAgICAgIHRoaXMudXBsb2FkSW5wdXQuZW1pdChldmVudCk7XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FkZGVkVG9RdWV1ZScgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgaWYgKHVwbG9hZE91dHB1dC5maWxlLnJlc3BvbnNlICE9ICcnKSB7XG4vLyAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbi8vICAgICAgICAgdGhpcy5maWxlcy5wdXNoKHVwbG9hZE91dHB1dC5maWxlKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXMqKioqKioqKionKTtcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4vLyAgICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbi8vICAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbi8vICAgICAgIH1cbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAndXBsb2FkaW5nJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuZmluZEluZGV4KGZpbGUgPT4gdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJyAmJiBmaWxlLmlkID09PSB1cGxvYWRPdXRwdXQuZmlsZS5pZCk7XG4vLyAgICAgICB0aGlzLmZpbGVzW2luZGV4XSA9IHVwbG9hZE91dHB1dC5maWxlO1xuLy8gICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuLy8gICAgICAgaWYodGhpcy5maWxlc1swXSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzIT1udWxsKVxuLy8gICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xuLy8gICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXM9PT09PT09PT09PT09PT09PT0nKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdyZW1vdmVkJykge1xuLy8gICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlOiBVcGxvYWRGaWxlKSA9PiBmaWxlICE9PSB1cGxvYWRPdXRwdXQuZmlsZSk7XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdmVyJykge1xuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IHRydWU7XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdXQnKSB7XG4vLyAgICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2Ryb3AnKSB7XG4vLyAgICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKCdmaWxlcycpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbCkge1xuLy8gICAgICAgaWYodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT09bnVsbCl0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPTA7XG4vLyAgICAgICB0aGlzLmlucHJvZ3Jlc3M9dHJ1ZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWxlIHVwbG9hZCBwcm9ncmVzc2luZycpO1xuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuLy8gICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9ICh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XG4vLyAgICAgICBpZih0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPT0xMDApIHtcbi8vICAgICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT1udWxsO1xuLy8gICAgICAgICB0aGlzLmlucHJvZ3Jlc3M9bnVsbDtcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZHR5cGUgaW4gYXBpIHNlcnZpY2UnKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHVwbG9hZHR5cGVjKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHVwbG9hZHR5cGVjPT0nc2luZ2xlJyl7XG4vLyAgICAgICAvLyB0aGlzLmZpbGVzZXJ2ZXJuYW1lID0gW107XG4vLyAgICAgICBpZih0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV09W107XG4vLyAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdPVtdO1xuLy8gICAgICAgaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuLy8gICAgIH1cbi8vICAgICBpZiAodXBsb2FkdHlwZWMgPT0gJ211bHRpcGxlJykge1xuLy8gICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNbMF0ucmVzcG9uc2UnKTtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcy5sZW5ndGgpO1xuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4vLyAgICAgICBpZiAodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107XG4vLyAgICAgICAvLyBpZih0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsKXtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoPT0xKSB7XG4vLyAgICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwgKSB7XG4vLyAgICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuLy8gICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbi8vICAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPScnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlIT1udWxsKXtcbi8vICAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPSdlcnJvciBvY2N1cmVkIG9uIHVwbG9hZGluZyAhISEnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD4xKVxuLy8gICAgICAge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnc2RmZHNmPT09PSBpbiBtdWx0aXBsZSBsZW5ndGggJyk7XG4vLyAgICAgICAgIGZvcihsZXQgYiBpbiB0aGlzLmZpbGVzKXtcbi8vICAgICAgICAgICBpZih0aGlzLmZpbGVzW2JdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UuZXJyb3JfY29kZT09bnVsbCkge1xuLy8gICAgICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UpO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICB0aGlzLmZpbGVzPVtdO1xuLy8gICAgICAgfVxuLy8gICAgICAgLy99XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzZXJ2ZXJuYW1lJyk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5maWxlc2VydmVybmFtZSk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy51cGxvYWRlcnJvcik7XG4vLyAgICAgLy90aGlzLnVwbG9hZGVyc2VydmljZS5maWxlbmFtZXZhbGMxPXRoaXMuZmlsZXNlcnZlcm5hbWU7XG4vLyAgICAgLy9VcGxvYWRlckNvbXBvbmVudC5maWxlbmFtZXZhbGMxPTg3O1xuLy8gICAgIC8vY29uc29sZS5sb2coY2xhc3N2YWwpO1xuXG4vLyAgIH1cbi8vICAgaXNUb2tlbkV4cGlyZWQoKSB7XG5cbi8vICAgICAvLyBjb25zdCBoZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xuLy8gICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4vLyAgICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuJyxsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKVxuLy8gICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcbi8vICAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbiBpc0V4cGlyZWQ6Jyxpc1JlZnJlc2hUb2tlbkV4cGlyZWQpXG5cblxuXG4vLyAgIH1cblxuLy8gICBnZXRjbGllbnRpcCgpIHtcblxuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2lwaW5mby5pby8/Zm9ybWF0PWpzb24mdG9rZW49OTc5N2M0MmI5MzA3OGFcIikucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG5cblxuLy8gICBnZXRFbmRwb2ludChlbmRwb2ludDogYW55KSB7XG5cbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogJydcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4vLyAgICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuLy8gICAgIGNvbnNvbGUubG9nKCcnKTtcblxuLy8gICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyBlbmRwb2ludC5zb3VyY2UsIHt9LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG4vLyAgIGdldERhdGEoZW5kcG9pbnQ6IGFueSkge1xuXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6ICcnXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG5cbi8vICAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgJ2RhdGFsaXN0JywgZW5kcG9pbnQsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG5cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cbi8vICAgLy8gZ2V0RGF0YSBlbmRcblxuLy8gICBwb3N0RGF0YShlbmRwb2ludDphbnksIGRhdGEpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogZGF0YS50b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCcnKTtcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4vLyAgICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgcG9zdERhdGF3aXRob3V0VG9rZW4oZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCcnKTtcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG4vLyAgIHBvc3Rsb2dpbihlbmRwb2ludDphbnksIGRhdGEpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9IC8vIHBvc3REYXRhIGVuZFxuXG5cblxuXG4vLyAgIHBvc3RTZWFyY2goIGxpbmssdG9rZW4sc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwibGluayBpbiBwb3N0U2VhcmNoXCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGxpbmspO1xuLy8gICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gcG9zdFNlYXJjaDEoIGxpbmssc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogc291cmNlLnRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImxpbmtcIik7XG4vLyAgICAgY29uc29sZS5sb2cobGluayk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cblxuXG5cblxuLy8gICBwdXREYXRhKGVuZHBvaW50OmFueSwgZGF0YSwgaWQ6YW55KSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnQXV0aG9yaXphdGlvbic6ICcnXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnB1dCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSsnLycraWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG4vLyAgIGRldGVPbmVEYXRhKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWQ6ZGF0YS5faWR9XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuLy8gICAgIHRvZ2dsZXN0YXR1cyhlbmRwb2ludDphbnksIGRhdGEsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG5cbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsZGF0YTpkYXRhfVxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cbi8vICAgZGV0ZU1hbnlEYXRhKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWRzOmRhdGF9XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cbi8vICAgICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OmFueSwgZGF0YSx2YWwsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6e2lkczpkYXRhLHZhbDp2YWx9fTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cbi8vICAgcHJpdmF0ZSBnZXRFbmRwb2ludFVybChlbmRwb2ludDogc3RyaW5nKSB7XG4vLyAgICAgICByZXR1cm4gJycgKyBlbmRwb2ludDtcbi8vICAgfVxuXG4vLyB9XG5cblxuXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqIEFkZGVkIEJ5IEhpbWFkcmkgdXNpbmcgTGFtZGEgc3RhcnQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5pbXBvcnQge0VsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFVwbG9hZE91dHB1dCwgVXBsb2FkSW5wdXQsIFVwbG9hZEZpbGUsIGh1bWFuaXplQnl0ZXMsIFVwbG9hZGVyT3B0aW9ucywgVXBsb2FkU3RhdHVzIH0gZnJvbSAnbmd4LXVwbG9hZGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHB1YmxpYyBkb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsOiBhbnkgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycgKyAndXBsb2FkcycgO1xuICBmaWxlczogVXBsb2FkRmlsZVtdO1xuICB1cGxvYWRJbnB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PjtcbiAgaHVtYW5pemVCeXRlczogRnVuY3Rpb247XG4gIGRyYWdPdmVyOiBib29sZWFuO1xuICBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dDEnKSB1cGxvYWRlcklucHV0OiBFbGVtZW50UmVmO1xuICAvKkBJbnB1dCgpXG4gIHNldCBkb21haW5fZm9yX2ZpbGV1cGxvYWQoZG9tYWluX2Zvcl9maWxldXBsb2FkOiBhbnkpIHtcbiAgICB0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwgPSBkb21haW5fZm9yX2ZpbGV1cGxvYWQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc2tpcHZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCk7XG4gIH0qL1xuICBwdWJsaWMgbGVuZ3RoaXM7XG4gIHB1YmxpYyBwZXJjZW50YWdlaXM7XG4gIHB1YmxpYyBpbnByb2dyZXNzO1xuICBwdWJsaWMgcHJvZ3Jlc3M6YW55PVtdO1xuICBwdWJsaWMgdXBsb2FkdHlwZTtcbiAgcHVibGljIHVwbG9hZGVycm9yOmFueT0nJztcbiAgLy8gcHVibGljIHVwbG9hZE91dHB1dHZhbDphbnk7XG4gIGZpbGVzZXJ2ZXJuYW1lOmFueT1bXTtcblxuICAvKkBJbnB1dCgpXG4gIHNldCB1cGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBhbnkpe1xuICAgIHRoaXMudXBsb2FkT3V0cHV0dmFsID0gdXBsb2FkT3V0cHV0O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZE91dHB1dCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkT3V0cHV0KTtcbiAgfSovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LFxuXG4gICAgICAgICAgICAgICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xuICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XG4gICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxuICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XG4gICAgLy9jb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcbiAgfVxuXG4gIG9uVXBsb2FkT3V0cHV0KHVwbG9hZE91dHB1dDogVXBsb2FkT3V0cHV0LCBhcnJheXZhbHVlOiBhbnksIHVwbG9hZHR5cGVjOiBhbnksIHVwbG9hZHBhdGg6IGFueSk6IHZvaWQge1xuICAgIC8vIHRoaXMudXBsb2FkZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWxsQWRkZWRUb1F1ZXVlJykge1xuICAgICAgY29uc3QgZXZlbnQ6IFVwbG9hZElucHV0ID0ge1xuICAgICAgICB0eXBlOiAndXBsb2FkQWxsJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7IHBhdGg6IHVwbG9hZHBhdGggfVxuICAgICAgfTtcbiAgICAgIHRoaXMudXBsb2FkSW5wdXQuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FkZGVkVG9RdWV1ZScgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHVwbG9hZE91dHB1dC5maWxlLnJlc3BvbnNlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKHVwbG9hZE91dHB1dC5maWxlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXMqKioqKioqKionKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAndXBsb2FkaW5nJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuZmluZEluZGV4KGZpbGUgPT4gdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJyAmJiBmaWxlLmlkID09PSB1cGxvYWRPdXRwdXQuZmlsZS5pZCk7XG4gICAgICB0aGlzLmZpbGVzW2luZGV4XSA9IHVwbG9hZE91dHB1dC5maWxlO1xuICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgICAgaWYodGhpcy5maWxlc1swXSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzIT1udWxsKVxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXM9PT09PT09PT09PT09PT09PT0nKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlOiBVcGxvYWRGaWxlKSA9PiBmaWxlICE9PSB1cGxvYWRPdXRwdXQuZmlsZSk7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdmVyJykge1xuICAgICAgdGhpcy5kcmFnT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdXQnKSB7XG4gICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2Ryb3AnKSB7XG4gICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdmaWxlcycpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbCkge1xuICAgICAgaWYodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT09bnVsbCl0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPTA7XG4gICAgICB0aGlzLmlucHJvZ3Jlc3M9dHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWxlIHVwbG9hZCBwcm9ncmVzc2luZycpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9ICh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XG4gICAgICBpZih0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPT0xMDApIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT1udWxsO1xuICAgICAgICB0aGlzLmlucHJvZ3Jlc3M9bnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZHR5cGUgaW4gYXBpIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUubG9nKHVwbG9hZHR5cGVjKTtcbiAgICB9XG4gICAgaWYgKHVwbG9hZHR5cGVjPT0nc2luZ2xlJyl7XG4gICAgICAvLyB0aGlzLmZpbGVzZXJ2ZXJuYW1lID0gW107XG4gICAgICBpZih0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV09W107XG4gICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdPVtdO1xuICAgICAgaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuICAgIH1cbiAgICBpZiAodXBsb2FkdHlwZWMgPT0gJ211bHRpcGxlJykge1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNbMF0ucmVzcG9uc2UnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcy5sZW5ndGgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgICBpZiAodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107XG4gICAgICAvLyBpZih0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsKXtcbiAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoPT0xKSB7XG4gICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwgKSB7XG4gICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPScnO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlIT1udWxsKXtcbiAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPSdlcnJvciBvY2N1cmVkIG9uIHVwbG9hZGluZyAhISEnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD4xKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZygnc2RmZHNmPT09PSBpbiBtdWx0aXBsZSBsZW5ndGggJyk7XG4gICAgICAgIGZvcihsZXQgYiBpbiB0aGlzLmZpbGVzKXtcbiAgICAgICAgICBpZih0aGlzLmZpbGVzW2JdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UuZXJyb3JfY29kZT09bnVsbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGVzPVtdO1xuICAgICAgfVxuICAgICAgLy99XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzZXJ2ZXJuYW1lJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5maWxlc2VydmVybmFtZSk7XG4gICAgY29uc29sZS5sb2codGhpcy51cGxvYWRlcnJvcik7XG4gICAgLy90aGlzLnVwbG9hZGVyc2VydmljZS5maWxlbmFtZXZhbGMxPXRoaXMuZmlsZXNlcnZlcm5hbWU7XG4gICAgLy9VcGxvYWRlckNvbXBvbmVudC5maWxlbmFtZXZhbGMxPTg3O1xuICAgIC8vY29uc29sZS5sb2coY2xhc3N2YWwpO1xuXG4gIH1cbiAgaXNUb2tlbkV4cGlyZWQoKSB7XG5cbiAgICAvLyBjb25zdCBoZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xuICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuJyxsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKVxuICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbiBpc0V4cGlyZWQ6Jyxpc1JlZnJlc2hUb2tlbkV4cGlyZWQpXG5cblxuXG4gIH1cblxuICBnZXRjbGllbnRpcCgpIHtcblxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2lwaW5mby5pby8/Zm9ybWF0PWpzb24mdG9rZW49OTc5N2M0MmI5MzA3OGFcIikucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICBnZXRFbmRwb2ludChlbmRwb2ludDogYW55KSB7XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICcnXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG5cbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgZW5kcG9pbnQuc291cmNlLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXREYXRhKGVuZHBvaW50OiBhbnkpIHtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKCcnKTtcblxuICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyAnZGF0YWxpc3QnLCBlbmRwb2ludCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBnZXREYXRhIGVuZFxuXG4gIHBvc3REYXRhKGVuZHBvaW50OmFueSwgZGF0YSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogZGF0YS50b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcG9zdERhdGF3aXRob3V0VG9rZW4oZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBvc3Rsb2dpbihlbmRwb2ludDphbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IC8vIHBvc3REYXRhIGVuZFxuXG5cblxuXG4gIHBvc3RTZWFyY2goIGxpbmssdG9rZW4sc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImxpbmsgaW4gcG9zdFNlYXJjaFwiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QobGluaywgc291cmNlLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbnBvc3RTZWFyY2gxKCBsaW5rLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBzb3VyY2UudG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwibGlua1wiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSkucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cblxuXG4gIHB1dERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLCBpZDphbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpKycvJytpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIGxldCBkYXRhdmFsOmFueTtcbiAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGlkOmRhdGEuX2lkfVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgICB0b2dnbGVzdGF0dXMoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgZGF0YXZhbDphbnk7XG4gICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOmRhdGF9XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbGV0IGRhdGF2YWw6YW55O1xuICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWRzOmRhdGF9XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OmFueSwgZGF0YSx2YWwsdG9rZW4sc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgZGF0YXZhbDphbnk7XG4gICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOntpZHM6ZGF0YSx2YWw6dmFsfX07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuXG4gIHByaXZhdGUgZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQ6IHN0cmluZykge1xuICAgICAgcmV0dXJuICcnICsgZW5kcG9pbnQ7XG4gIH1cblxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKiBBZGRlZCBCeSBIaW1hZHJpIHVzaW5nIExhbWRhIGVuZCAqKioqKioqKioqKioqKioqKioqKioqKioqLyJdfQ==