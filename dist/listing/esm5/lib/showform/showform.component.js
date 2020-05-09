/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { SnackbarComponent } from "../listing.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
//import {MatSnackBar} from "@angular/material/snack-bar";
var ShowformComponent = /** @class */ (function () {
    function ShowformComponent(formBuilder, _apiService, _snackBar, router, elementRef) {
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
        this.currentautocomplete = '';
        this.fieldloading = '';
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        this.onFormFieldChange = new EventEmitter();
    }
    Object.defineProperty(ShowformComponent.prototype, "formdata", {
        set: /**
         * @param {?} formdata
         * @return {?}
         */
        function (formdata) {
            this.formdataval = formdata;
            console.log(this.formdataval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowformComponent.prototype, "formfieldrefreshdata", {
        set: /**
         * @param {?} formfieldrefreshdata
         * @return {?}
         */
        function (formfieldrefreshdata) {
            this.formfieldrefreshdataval = formfieldrefreshdata;
            console.log(this.formfieldrefreshdataval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowformComponent.prototype, "formfieldrefresh", {
        set: /**
         * @param {?} formfieldrefresh
         * @return {?}
         */
        function (formfieldrefresh) {
            this.formfieldrefreshval = formfieldrefresh;
            console.log(this.formfieldrefreshval);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ShowformComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createForm();
        //this.setChangeValidate()
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.navtocancel = /**
     * @return {?}
     */
    function () {
        if (this.formdataval.cancelroute != null) {
            this.router.navigate([this.formdataval.cancelroute]);
        }
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.log('in after view init trigger');
            for (var g in _this.formdataval.fields) {
                if (_this.formdataval.fields[g].type == 'file') {
                    _this.elementRef.nativeElement.querySelector('#drop' + _this.formdataval.fields[g].name).addEventListener('drop', _this.handleDrop.bind(_this));
                    _this.elementRef.nativeElement.querySelector('#drop' + _this.formdataval.fields[g].name).addEventListener('dragenter', _this.cancel.bind(_this));
                    _this.elementRef.nativeElement.querySelector('#drop' + _this.formdataval.fields[g].name).addEventListener('dragover', _this.cancel.bind(_this));
                }
            }
        }), 1000);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.triggerevents = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        console.log('in triggerevents');
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.log('val loadeed trigger', val);
            _this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('drop', _this.handleDrop.bind(_this));
            _this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragenter', _this.cancel.bind(_this));
            _this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragdragover', _this.cancel.bind(_this));
        }), 1000);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ShowformComponent.prototype.cancel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        //console.log('cancel',e);
        e.preventDefault();
        return false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ShowformComponent.prototype.handleDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        //let apiBaseURL=""
        /** @type {?} */
        var list = document.getElementById('list');
        /** @type {?} */
        var apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
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
            for (var g in this.formdataval.fields) {
                if (this.formdataval.fields[g].type == 'file' && this.formdataval.fields[g].name == e.target.id.replace('drop', '')) {
                    console.log('file details', this.formdataval.fields[g]);
                    if (this.formdataval.fields[g].multiple == null) {
                        this.filearray[e.target.id.replace('drop', '')] = files[0];
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
    };
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h);
    // }
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h);
    // }
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.uploadfile = 
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h);
    // }
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        var file = this.filearray[val.name];
        console.log('file val', val);
        //reader.addEventListener('loadend', function (e) {
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
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
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
            //});
        });
        reader.readAsArrayBuffer(file);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.deletefile = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        /** @type {?} */
        var source = {};
        /** @type {?} */
        var file = this.filearray[val.name];
        source['file'] = val.prefix + file.name;
        source['path'] = val.path;
        source['bucket'] = val.bucket;
        this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            if (result.status == 'success') {
                _this.formGroup.reset();
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: "Deleted !!" }
                });
                _this.filearray[val.name] = null;
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ShowformComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        console.log('ngonchange in form !!!', changes, 'frv', this.formfieldrefreshdataval);
        for (var v in changes) {
            //console.log(v,changes[v],'vv');
            if (v == 'formfieldrefreshdata') {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    console.log('fff in set tt');
                    if (_this.formfieldrefreshdataval != null) {
                        console.log(_this.formfieldrefreshdataval, 'm');
                        console.log(_this.formfieldrefreshdataval.field);
                        console.log(_this.formfieldrefreshdataval.value);
                        if (_this.formGroup != null && _this.formGroup.controls[_this.formfieldrefreshdataval.field] != null)
                            _this.formGroup.controls[_this.formfieldrefreshdataval.field].patchValue(_this.formfieldrefreshdataval.value);
                        if (_this.formfieldrefreshdataval.field == 'showfieldloader') {
                            _this.fieldloading = _this.formfieldrefreshdataval.value;
                        }
                        if (_this.formfieldrefreshdataval.field == 'addfromcontrol') {
                            _this.managefromcontrol(_this.formfieldrefreshdataval.value, 'add');
                        }
                        if (_this.formfieldrefreshdataval.field == 'removefromcontrol') {
                            _this.managefromcontrol(_this.formfieldrefreshdataval.value, 'remove');
                        }
                    }
                }), 0);
            }
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.inputblur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        //console.log('on blur .....');
        this.formGroup.controls[val].markAsUntouched();
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ShowformComponent.prototype.filterautocomplete = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        this.inputblur(val);
        console.log('cc', this.formGroup.controls[val].value, data.val);
        /** @type {?} */
        var fieldval = this.formGroup.controls[val].value;
        if (fieldval == '' || fieldval == null) {
            this.filerfielddata = [];
        }
        else {
            /** @type {?} */
            var filterval = data.val.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                console.log('e', e, fieldval);
                return e.val.includes(fieldval);
            }));
            this.filerfielddata = [];
            this.filerfielddata = filterval;
            console.log('fil', filterval);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.reloadautocomplete = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.currentautocomplete = val.name;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.removechipsingle = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.autocompletefiledvalue[val.name] = null;
    };
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.removechipmultiple = /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    function (val, index) {
        this.autocompletefiledvalue[val.name].splice(index, 1);
        if (this.autocompletefiledvalue[val.name].length == 0)
            this.autocompletefiledvalue[val.name] = null;
    };
    /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    ShowformComponent.prototype.setautocompletevalue = /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    function (val, field) {
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
    };
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    ShowformComponent.prototype.managefromcontrol = /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (field, type) {
        console.log('manage control', field, type);
        if (type == 'remove') {
            for (var y in this.formdataval.fields) {
                if (this.formdataval.fields[y].name == field.name) {
                    this.formdataval.fields.splice(parseInt(y), 1);
                    this.formGroup.removeControl(field.name);
                    console.log('removed', field['name'], 'c', y);
                }
            }
        }
        if (type == 'add') {
            console.log('in add form');
            for (var y in this.formdataval.fields) {
                if (this.formdataval.fields[y].name == field.after) {
                    this.formdataval.fields.splice(parseInt(y) + 1, 0, field);
                    this.createForm(1);
                    console.log('added ..', field['name'], 'c', y);
                }
            }
        }
    };
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.checkchange = /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (field, index) {
        console.log(field, 'change', this.formGroup.controls[field.name].value);
        this.onFormFieldChange.emit({ field: field, fieldval: this.formGroup.controls[field.name].value });
        if (field.dependent != null && field.dependent.length > 0) {
            /** @type {?} */
            var vc = 0;
            for (var n in field.dependent) {
                if (field.dependent[n].condval.toString() == this.formGroup.controls[field.name].value.toString()) {
                    // let temvalidationrulet: any = [];
                    vc++;
                    //this.formGroup.addControl(field.dependent[n].field.name, new FormControl(field.dependent[n].field.value, temvalidationrulet));
                    console.log('nnnnn', '--', parseInt(index + 1 + parseInt(vc)), '--', vc + index + 1, index, vc, field.dependent[n].field['name']);
                    this.formdataval.fields.splice(parseInt(index + parseInt(vc)), 0, field.dependent[n].field);
                    this.createForm(1);
                }
                else {
                    for (var y in this.formdataval.fields) {
                        if (this.formdataval.fields[y].name == field.dependent[n].field.name) {
                            this.formdataval.fields.splice(parseInt(y), 1);
                            this.formGroup.removeControl(field.dependent[n].field.name);
                            console.log('removed', field.dependent[n].field['name'], 'c', y);
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?=} initialize
     * @return {?}
     */
    ShowformComponent.prototype.createForm = /**
     * @param {?=} initialize
     * @return {?}
     */
    function (initialize) {
        var _this = this;
        if (initialize === void 0) { initialize = 0; }
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
        console.log(this.formGroup, 'fg');
        for (var n in this.formdataval.fields) {
            if (this.formGroup.controls[this.formdataval.fields[n]] == null) {
                /** @type {?} */
                var temcontrolarr = [];
                /** @type {?} */
                var temvalidationrule = [];
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
                            var tcharr = [];
                            for (var b in this.formdataval.fields[n].val) {
                                console.log('b', b, this.formdataval.fields[n].val[b]);
                                if (this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[b].key)) {
                                    tcharr.push(true);
                                }
                                else
                                    tcharr.push(false);
                            }
                            // push the val
                            temcontrolarr.push(tcharr);
                            console.log('tch', tcharr);
                        }
                    }
                }
                if (this.formdataval.fields[n].validations != null && this.formdataval.fields[n].validations.length > 0) {
                    for (var v in this.formdataval.fields[n].validations) {
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
                    var tchvar = false;
                    //let
                    console.log('vv ??? ', this.formdataval.fields[n].value, this.formdataval.fields[n].name, this.formdataval.fields[n].multiple);
                    //this.formGroup.addControl(this.formdataval.fields[n].name, new FormArray([]));
                    for (var j in this.formdataval.fields[n].val) {
                        if (this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[j].key))
                            tchvar = true;
                        else
                            tchvar = false;
                        console.log('n', n, j, tchvar);
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
        function () {
            //console.log(this.formGroup,'fg',demoArray);
            _this.showform = true;
            if (_this.formdataval.submitactive == null)
                _this.formdataval.submitactive = true;
            console.log('grp', _this.formGroup.controls);
        }), 10);
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.setChangeValidate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formGroup.get('validate').valueChanges.subscribe((/**
         * @param {?} validate
         * @return {?}
         */
        function (validate) {
            if (validate == '1') {
                _this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                _this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                _this.formGroup.get('name').setValidators(Validators.required);
            }
            _this.formGroup.get('name').updateValueAndValidity();
        }));
    };
    Object.defineProperty(ShowformComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.formGroup.get('name')));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} group
     * @return {?}
     */
    ShowformComponent.prototype.checkPasswords = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        // here we have the 'passwords' group
        /** @type {?} */
        var pass = group.controls.password.value;
        /** @type {?} */
        var confirmPass = group.controls.confirmpassword.value;
        if (confirmPass == null || confirmPass == '') {
            group.controls.confirmpassword.setErrors({ required: true });
            return { required: true };
        }
        if (pass != confirmPass) {
            group.controls.confirmpassword.setErrors({ 'match': true });
            return { match: true };
        }
        //return pass === confirmPass ? null : { notSame: true }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ShowformComponent.prototype.checkPassword = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var enteredPassword = control.value;
        /** @type {?} */
        var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
    };
    /**
     * @param {?} group
     * @return {?}
     */
    ShowformComponent.prototype.autorequired = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        for (var b in group) {
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
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ShowformComponent.prototype.checkInUseEmail = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        // mimic http database access
        /** @type {?} */
        var db = ['tony@gmail.com'];
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
                observer.next(result);
                observer.complete();
            }), 4000);
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ShowformComponent.prototype.getError = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log('getError', data);
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
            this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
                this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.getErrorPassword = /**
     * @return {?}
     */
    function () {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
            this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
    };
    /**
     * @param {?} post
     * @return {?}
     */
    ShowformComponent.prototype.onSubmit = /**
     * @param {?} post
     * @return {?}
     */
    function (post) {
        var _this = this;
        this.post = post;
        /** @type {?} */
        var tempformval = {};
        for (var x in this.formGroup.controls) {
            this.formGroup.controls[x].markAsTouched();
            console.log(this.formGroup.controls[x].errors, x, 'err');
            //if(this.formGroup.controls[x].valid){
            //console.log('x',x);
            /** @type {?} */
            var b = x.split('__');
            //console.log('b',b,b.length,b[0]);
            for (var m in this.formdataval.fields) {
                if (this.formdataval.fields[m].type == 'autocomplete') {
                    if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null && this.formdataval.fields[m].validations != null) {
                        console.log('autoerror', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: null });
                        console.log('autoerror after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
                    else {
                        console.log('autoerror set', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: true });
                        console.log('autoerror set after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
                    if (x == this.formdataval.fields[m].name && tempformval[x] == null)
                        tempformval[x] = this.autocompletefiledvalue[this.formdataval.fields[m].name];
                }
                if (b.length > 1 && b[0] == this.formdataval.fields[m].name && this.formdataval.fields[m].name != x && this.formdataval.fields[m].type == 'checkbox' && this.formdataval.fields[m].multiple != null) {
                    console.log('aaaaff...');
                    if (this.formGroup.controls[x].value == true) {
                        for (var k in this.formdataval.fields[m].val) {
                            if (this.formdataval.fields[m].val[k]['key'] == b[1]) {
                                if (tempformval[this.formdataval.fields[m].name] == null)
                                    tempformval[this.formdataval.fields[m].name] = [];
                                tempformval[this.formdataval.fields[m].name].push(b[1]);
                                console.log('gv', b[1]);
                            }
                        }
                    }
                }
                // else{
                if (x == this.formdataval.fields[m].name && tempformval[x] == null)
                    tempformval[x] = this.formGroup.controls[x].value;
                //  }
            }
            console.log(this.formGroup.controls[x].errors, x, 'err22');
            //}
        }
        console.log(post, 'post', this.formGroup.valid, this.formdataval, this.formdataval.apiUrl, 'ffff', tempformval);
        if (this.formGroup.valid) {
            this.loading = true;
            /** @type {?} */
            var link = this.formdataval.apiUrl + this.formdataval.endpoint;
            /** @type {?} */
            var source = {};
            source['data'] = this.formGroup.value;
            this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                if (result.status == 'success') {
                    _this.formGroup.reset();
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: _this.formdataval.successmessage }
                    });
                    console.log(result, 'red', _this.formdataval.redirectpath);
                    if (_this.formdataval.redirectpath != null) {
                        _this.router.navigate([_this.formdataval.redirectpath]);
                    }
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
        }
    };
    ShowformComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-showform',
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n\n                <mat-card class=\"form_header_{{fields.name}}\"\n                    *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \" [innerHTML]=\"fields.heading\">\n                </mat-card>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- for select-->\n                    <!-- <div>ff</div> -->\n                    <mat-label> Select {{fields.label}} </mat-label>\n                    <mat-select (blur)=\"inputblur(fields.name)\" (selectionChange)=\"checkchange(fields,ival)\"\n                        [formControlName]=\"fields.name\" [multiple]=\"fields.multiple?true:false\">\n                        <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                    </mat-select>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\"></mat-label>\n                    <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                        (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                        [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                    </mat-checkbox>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n                </div>\n                <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\"></mat-label>\n\n                    <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                        <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                            <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                [value]=\"vals.key\">{{vals.val}}\n                            </mat-checkbox>\n\n                        </ng-container>\n                    </ng-container>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                        class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                        <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                            (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                            {{vals.val}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n\n                    <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <mat-form-field\n                    *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type=='password')\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\" [placeholder]=\"fields.label\"\n                        (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\">\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <textarea matInput placeholder=\"Comment\" [formControlName]=\"fields.name\"\n                        (change)=\"inputblur(fields.name)\">\n  </textarea>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                    <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <!-- {{fields.val.length}}\n -->\n\n\n\n                    <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                    <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                    <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                        (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                        placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                    <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                            <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                (click)=\"setautocompletevalue(vals,fields)\">\n                                <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                <span>{{vals.val}}</span>\n                                <!-- <small>Population: {{state.population}}</small> -->\n                            </mat-option>\n                        </ng-container>\n                    </mat-autocomplete>\n\n\n\n\n\n                    <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                        aria-label=\"{{fields.name}} data\">\n                        <ng-container *ngFor=\"let vals of fields.val \">\n                            <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                <mat-chip [removable]=true>{{vals.val}}\n                                    <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                </mat-chip>\n                            </ng-container>\n\n                        </ng-container>\n\n                    </mat-chip-list>\n\n\n                    <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                        aria-label=\"{{fields.name}} data\">\n                        <ng-container *ngFor=\"let vals of fields.val \">\n                            <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                <ng-container *ngIf=\"vals.key==avals\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                        </mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n                            </ng-container>\n\n                        </ng-container>\n\n                    </mat-chip-list>\n\n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error>\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n                <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n                    <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\">\n                    </ckeditor>\n                    <mat-error\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span\n                                *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n\n\n\n\n\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                        formControlName=\"{{fields.name}}\">\n                    <mat-error\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span\n                                *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                    class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                    <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                        <div class=\"drop\" [attr.fileid]=\"fields.name\" id=\"drop{{fields.name}}\">Drop files here.</div>\n                        <div class=\"id\" id=\"list{{fields.name}}\">\n                            <h1>Files:</h1>\n                            <ng-container\n                                *ngIf=\"filearray[fields.name]!=null && filearray[fields.name].length>0 && fields.multiple!=null\">\n                                <ng-container *ngFor=\"let files of filearray[fields.name]\">\n                                    <span>{{files.name}}</span>\n                                    <span>{{files.type}}</span>\n                                    <button mat-raised-button type=\"button\">Upload</button>\n                                </ng-container>\n\n                            </ng-container>\n                            <ng-container *ngIf=\"filearray[fields.name]!=null  && fields.multiple==null\">\n                                <span>{{filearray[fields.name].name}}</span>\n                                <span>{{filearray[fields.name].type}}</span>\n                                <button *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button (click)=\"uploadfile(fields)\" type=\"button\">Upload</button>\n                                <button *ngIf=\"filearray[fields.name].uploaded==1\" mat-raised-button (click)=\"deletefile(fields)\" type=\"button\">Delete</button>\n\n                            </ng-container>\n                        </div>\n                    </div>\n\n                    <mat-error\n                        *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span\n                                *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n\n                <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                    </mat-progress-bar>\n                </section>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                class=\"button\">{{formdataval.resettext}}</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                    styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}"]
                }] }
    ];
    /** @nocollapse */
    ShowformComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: MatSnackBar },
        { type: Router },
        { type: ElementRef }
    ]; };
    ShowformComponent.propDecorators = {
        formdata: [{ type: Input }],
        formfieldrefreshdata: [{ type: Input }],
        formfieldrefresh: [{ type: Input }],
        onFormFieldChange: [{ type: Output }]
    };
    return ShowformComponent;
}());
export { ShowformComponent };
if (false) {
    /** @type {?} */
    ShowformComponent.prototype.formGroup;
    /** @type {?} */
    ShowformComponent.prototype.titleAlert;
    /** @type {?} */
    ShowformComponent.prototype.post;
    /** @type {?} */
    ShowformComponent.prototype.showform;
    /** @type {?} */
    ShowformComponent.prototype.loading;
    /** @type {?} */
    ShowformComponent.prototype.formfieldrefreshval;
    /** @type {?} */
    ShowformComponent.prototype.formdataval;
    /** @type {?} */
    ShowformComponent.prototype.formfieldrefreshdataval;
    /** @type {?} */
    ShowformComponent.prototype.filerfielddata;
    /** @type {?} */
    ShowformComponent.prototype.autocompletefiledvalue;
    /** @type {?} */
    ShowformComponent.prototype.filearray;
    /** @type {?} */
    ShowformComponent.prototype.currentautocomplete;
    /** @type {?} */
    ShowformComponent.prototype.fieldloading;
    /** @type {?} */
    ShowformComponent.prototype.color;
    /** @type {?} */
    ShowformComponent.prototype.mode;
    /** @type {?} */
    ShowformComponent.prototype.value;
    /** @type {?} */
    ShowformComponent.prototype.bufferValue;
    /** @type {?} */
    ShowformComponent.prototype.onFormFieldChange;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype.formBuilder;
    /** @type {?} */
    ShowformComponent.prototype._apiService;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype._snackBar;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBd0IsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhFLE9BQU8sRUFBc0IsV0FBVyxFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBRTlGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekM7SUE0Q0UsMkJBQW9CLFdBQXdCLEVBQVMsV0FBdUIsRUFBVSxTQUFzQixFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUFoSixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBckNwSyxlQUFVLEdBQVcsd0JBQXdCLENBQUM7UUFDOUMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6Qix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsNEJBQXVCLEdBQVEsRUFB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QXFDOztJQUNyQyx3Q0FBc0I7O0lBQ3RCLG9EQUFrQzs7SUFDbEMsMkNBQXlCOztJQUN6QixtREFBaUM7O0lBQ2pDLHNDQUFvQjs7SUFDcEIsZ0RBQThCOztJQUM5Qix5Q0FBdUI7O0lBSXZCLGtDQUFnQzs7SUFDaEMsaUNBQTRCOztJQUM1QixrQ0FBVzs7SUFDWCx3Q0FBaUI7O0lBaUJqQiw4Q0FBc0Q7Ozs7O0lBRTFDLHdDQUFnQzs7SUFBRSx3Q0FBOEI7Ozs7O0lBQUUsc0NBQThCOzs7OztJQUFFLG1DQUFzQjs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LCBTaW1wbGVDaGFuZ2UsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpcm1kaWFsb2csIFNuYWNrYmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL2xpc3RpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy9pbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2hvd2Zvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvd2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaG93Zm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hvd2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgdGl0bGVBbGVydDogc3RyaW5nID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICBwb3N0OiBhbnkgPSAnJztcbiAgc2hvd2Zvcm06IGJvb2xlYW4gPSBmYWxzZTtcbiAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBmb3JtZmllbGRyZWZyZXNodmFsOiBib29sZWFuID0gZmFsc2U7XG4gIGZvcm1kYXRhdmFsOiBhbnkgPSB7fTtcbiAgZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWw6IGFueSA9IHt9O1xuICBmaWxlcmZpZWxkZGF0YTogYW55ID0gW107XG4gIGF1dG9jb21wbGV0ZWZpbGVkdmFsdWU6IGFueSA9IFtdO1xuICBmaWxlYXJyYXk6IGFueSA9IFtdO1xuICBjdXJyZW50YXV0b2NvbXBsZXRlOiBhbnkgPSAnJztcbiAgZmllbGRsb2FkaW5nOiBhbnkgPSAnJztcblxuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICBASW5wdXQoKVxuICBzZXQgZm9ybWRhdGEoZm9ybWRhdGE6IGFueSkge1xuICAgIHRoaXMuZm9ybWRhdGF2YWwgPSBmb3JtZGF0YTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9ybWZpZWxkcmVmcmVzaGRhdGEoZm9ybWZpZWxkcmVmcmVzaGRhdGE6IGFueSkge1xuICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwgPSBmb3JtZmllbGRyZWZyZXNoZGF0YTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9ybWZpZWxkcmVmcmVzaChmb3JtZmllbGRyZWZyZXNoOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2h2YWwgPSBmb3JtZmllbGRyZWZyZXNoO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaHZhbCk7XG4gIH1cbiAgQE91dHB1dCgpIG9uRm9ybUZpZWxkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuXG5cbiAgICAvL3RoaXMuc2V0Q2hhbmdlVmFsaWRhdGUoKVxuICB9XG4gIG5hdnRvY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlXSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbiBhZnRlciB2aWV3IGluaXQgdHJpZ2dlcicpO1xuICAgICAgZm9yIChsZXQgZyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udHlwZSA9PSAnZmlsZScpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICB0cmlnZ2VyZXZlbnRzKHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2luIHRyaWdnZXJldmVudHMnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWwgbG9hZGVlZCB0cmlnZ2VyJywgdmFsKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBjYW5jZWwoZSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NhbmNlbCcsZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoYW5kbGVEcm9wKGUpIHtcbiAgICAvL2xldCBhcGlCYXNlVVJMPVwiXCJcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG4gICAgbGV0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jb25zb2xlLmxvZygnaGFuZGxlRHJvcCcsZSk7XG4gICAgdmFyIGR0ID0gZS5kYXRhVHJhbnNmZXI7XG4gICAgdmFyIGZpbGVzID0gZHQuZmlsZXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGVzLCAnZmlsZXMnLCBlLnRhcmdldC5pZCk7XG4gICAgICBjb25zb2xlLmxvZygnZmFycicsIHRoaXMuZmlsZWFycmF5KTtcbiAgICAgIGZvciAobGV0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnR5cGUgPT0gJ2ZpbGUnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxlIGRldGFpbHMnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSk7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm11bHRpcGxlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gZmlsZXNbMF07XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldLnB1c2goZmlsZXNbMF0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheScsIHRoaXMuZmlsZWFycmF5KTtcblxuICAgICAgLy8gdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAvLyByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgLy8gICBmZXRjaChhcGlCYXNlVVJMK1wiL3JlcXVlc3RVcGxvYWRVUkxcIiwge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLy8gICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgLy8gICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKGpzb24pe1xuICAgICAgLy8gICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgLy8gICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgLy8gICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7dHlwZTogZmlsZS50eXBlfSlcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIHZhciB1cGxvYWRlZEZpbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyAgICAgdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgICAvLyAgICAgbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gdXBsb2FkZmlsZSh2YWw6IGFueSkge1xuICAvLyAgIC8vbGV0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIjtcbiAgLy8gICBsZXQgaDphbnk9dGhpcy5idWNrZXR1cGxvYWQodmFsKTtcbiAgLy8gICBjb25zb2xlLmxvZygndXBwcHAnLGgpO1xuICAgIFxuXG4gIC8vIH1cblxuICB1cGxvYWRmaWxlKHZhbDphbnkpe1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGxldCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV07XG4gICAgY29uc29sZS5sb2coJ2ZpbGUgdmFsJyx2YWwpOyBcbiAgICAvL3JlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4gIHsgXG4gICAgICBmZXRjaCh2YWwuYXBpdXJsLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBuYW1lOiB2YWwucHJlZml4K2ZpbGUubmFtZSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aDp2YWwucGF0aCxcbiAgICAgICAgICBidWNrZXQ6dmFsLmJ1Y2tldFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2J1Y2snLHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7IHR5cGU6IGZpbGUudHlwZSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvL3JldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgZmlsZS51cGxvYWRlZD0xO1xuICAgICAgICAgIGZpbGUuZmlsZXNlcnZlcm5hbWU9dmFsLnByZWZpeCtmaWxlLm5hbWU7XG4gICAgICAgICAgLy8gdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAvLyB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAgICAgICAvLyBsaXN0LmFwcGVuZENoaWxkKHVwbG9hZGVkRmlsZU5vZGUpO1xuICAgICAgICB9KTtcbiAgICAvL30pO1xuICB9O1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfVxuICBkZWxldGVmaWxlKHZhbDphbnkpe1xuICAgIGxldCBzb3VyY2U6YW55PXt9O1xuICAgIGxldCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV07XG4gICAgc291cmNlWydmaWxlJ109dmFsLnByZWZpeCtmaWxlLm5hbWU7XG4gICAgc291cmNlWydwYXRoJ109dmFsLnBhdGg7XG4gICAgc291cmNlWydidWNrZXQnXT12YWwuYnVja2V0O1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaCh2YWwuYXBpZGVsZXRldXJsLCB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogXCJEZWxldGVkICEhXCIgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdPW51bGw7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG5cbiAgICBjb25zb2xlLmxvZygnbmdvbmNoYW5nZSBpbiBmb3JtICEhIScsIGNoYW5nZXMsICdmcnYnLCB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsKTtcbiAgICBmb3IgKGxldCB2IGluIGNoYW5nZXMpIHtcbiAgICAgIC8vY29uc29sZS5sb2codixjaGFuZ2VzW3ZdLCd2dicpO1xuICAgICAgaWYgKHYgPT0gJ2Zvcm1maWVsZHJlZnJlc2hkYXRhJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmZmIGluIHNldCB0dCcpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwsICdtJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwICE9IG51bGwgJiYgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZF0gIT0gbnVsbCkgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZF0ucGF0Y2hWYWx1ZSh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlKVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ3Nob3dmaWVsZGxvYWRlcicpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWVsZGxvYWRpbmcgPSB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ2FkZGZyb21jb250cm9sJykge1xuICAgICAgICAgICAgICB0aGlzLm1hbmFnZWZyb21jb250cm9sKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUsJ2FkZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ3JlbW92ZWZyb21jb250cm9sJykge1xuICAgICAgICAgICAgICB0aGlzLm1hbmFnZWZyb21jb250cm9sKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUsJ3JlbW92ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dGJsdXIodmFsOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIGZpbHRlcmF1dG9jb21wbGV0ZSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgdGhpcy5pbnB1dGJsdXIodmFsKTtcbiAgICBjb25zb2xlLmxvZygnY2MnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWxdLnZhbHVlLCBkYXRhLnZhbCk7XG4gICAgbGV0IGZpZWxkdmFsID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZTtcbiAgICBpZiAoZmllbGR2YWwgPT0gJycgfHwgZmllbGR2YWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmlsdGVydmFsID0gZGF0YS52YWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgIHJldHVybiBlLnZhbC5pbmNsdWRlcyhmaWVsZHZhbCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBmaWx0ZXJ2YWw7XG4gICAgICBjb25zb2xlLmxvZygnZmlsJywgZmlsdGVydmFsKTtcbiAgICB9XG5cbiAgfVxuICByZWxvYWRhdXRvY29tcGxldGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSB2YWwubmFtZTtcbiAgfVxuXG4gIHJlbW92ZWNoaXBzaW5nbGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdID0gbnVsbDtcbiAgfVxuICByZW1vdmVjaGlwbXVsdGlwbGUodmFsOiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0ubGVuZ3RoID09IDApXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdID0gbnVsbDtcbiAgfVxuICBzZXRhdXRvY29tcGxldGV2YWx1ZSh2YWw6IGFueSwgZmllbGQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdmZicsIHZhbCwgZmllbGQpO1xuICAgIGlmIChmaWVsZC5tdWx0aXBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0gPSB2YWwua2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID09IG51bGwpXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdLnB1c2godmFsLmtleSk7XG5cbiAgICB9XG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0ucGF0Y2hWYWx1ZShudWxsKTtcbiAgICB0aGlzLmlucHV0Ymx1cihmaWVsZC5uYW1lKTtcblxuICB9XG4gIG1hbmFnZWZyb21jb250cm9sKGZpZWxkOiBhbnksIHR5cGU6IGFueSl7XG4gICAgY29uc29sZS5sb2coJ21hbmFnZSBjb250cm9sJyxmaWVsZCx0eXBlKTtcbiAgICBpZih0eXBlPT0ncmVtb3ZlJyl7XG4gICAgICBmb3IgKGxldCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1t5XS5uYW1lID09IGZpZWxkLm5hbWUpIHtcbiAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSksIDEpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGQubmFtZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZWQnLGZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYodHlwZT09J2FkZCcpe1xuICAgICAgY29uc29sZS5sb2coJ2luIGFkZCBmb3JtJyk7XG4gICAgICBmb3IgKGxldCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1t5XS5uYW1lID09IGZpZWxkLmFmdGVyKSB7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpKzEsIDAsIGZpZWxkKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oMSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FkZGVkIC4uJyxmaWVsZFsnbmFtZSddLCAnYycsIHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgY2hlY2tjaGFuZ2UoZmllbGQ6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGZpZWxkLCAnY2hhbmdlJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUpO1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiBmaWVsZCwgZmllbGR2YWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlIH0pO1xuICAgIGlmIChmaWVsZC5kZXBlbmRlbnQgIT0gbnVsbCAmJiBmaWVsZC5kZXBlbmRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHZjOiBhbnkgPSAwO1xuICAgICAgZm9yIChsZXQgbiBpbiBmaWVsZC5kZXBlbmRlbnQpIHtcblxuICAgICAgICBpZiAoZmllbGQuZGVwZW5kZW50W25dLmNvbmR2YWwudG9TdHJpbmcoKSA9PSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gbGV0IHRlbXZhbGlkYXRpb25ydWxldDogYW55ID0gW107XG4gICAgICAgICAgdmMrKztcbiAgICAgICAgICAvL3RoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLm5hbWUsIG5ldyBGb3JtQ29udHJvbChmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQudmFsdWUsIHRlbXZhbGlkYXRpb25ydWxldCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdubm5ubicsICctLScsIHBhcnNlSW50KGluZGV4ICsgMSArIHBhcnNlSW50KHZjKSksICctLScsIHZjICsgaW5kZXggKyAxLCBpbmRleCwgdmMsIGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZFsnbmFtZSddKTtcbiAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoaW5kZXggKyBwYXJzZUludCh2YykpLCAwLCBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgZm9yIChsZXQgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLm5hbWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQubmFtZSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkJywgZmllbGQuZGVwZW5kZW50W25dLmZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIGNyZWF0ZUZvcm0oaW5pdGlhbGl6ZTogYW55ID0gMCkge1xuICAgIC8qdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlscmVnZXgpXSwgdGhpcy5jaGVja0luVXNlRW1haWxdLFxuICAgICAgJ2Z1bGxuYW1lJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAvLyAncGFzc3dvcmQnOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuY2hlY2tQYXNzd29yZF1dLFxuICAgICAgLy8nZGVzY3JpcHRpb24nOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCldXSxcbiAgICAgIC8vJ3ZhbGlkYXRlJzogJydcbiAgICB9KTsqL1xuICAgIC8vbGV0IGRlbW9BcnJheTphbnk9W107XG4gICAgaWYgKGluaXRpYWxpemUgPT0gMClcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCwgJ2ZnJylcbiAgICBmb3IgKGxldCBuIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl1dID09IG51bGwpIHtcbiAgICAgICAgbGV0IHRlbWNvbnRyb2xhcnI6IGFueSA9IFtdO1xuICAgICAgICBsZXQgdGVtdmFsaWRhdGlvbnJ1bGU6IGFueSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgIT0gbnVsbClcbiAgICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2godGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKCcnKTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgPT0gbnVsbCkgdGVtY29udHJvbGFyci5wdXNoKFtdKTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBsZXQgdGNoYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgYiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYicsIGIsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtiXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluY2x1ZGVzKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtiXS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICB0Y2hhcnIucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGNoYXJyLnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHB1c2ggdGhlIHZhbFxuICAgICAgICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2godGNoYXJyKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RjaCcsIHRjaGFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IHYgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoICgpPT57XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ubWVzc2FnZSA9PSBudWxsKVxuICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlID0gXCJOb3QgVmFsaWQgISFcIlxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ3JlcXVpcmVkJylcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtYXRjaCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmNoZWNrUGFzc3dvcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdhdXRvcmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5hdXRvcmVxdWlyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ3BhdHRlcm4nKVxuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21heExlbmd0aCcpXG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtaW4nKVxuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMubWluKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWF4JylcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21pbkxlbmd0aCcpXG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIC8vfSwwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZW1vQXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV09bmV3IEZvcm1Db250cm9sKCcnKTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBsZXQgdGNodmFyOiBhbnkgPSBmYWxzZTtcbiAgICAgICAgICAvL2xldFxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2diA/Pz8gJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlKTtcbiAgICAgICAgICAvL3RoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1BcnJheShbXSkpO1xuICAgICAgICAgIGZvciAobGV0IGogaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2pdLmtleSkpXG4gICAgICAgICAgICAgIHRjaHZhciA9IHRydWU7XG4gICAgICAgICAgICBlbHNlIHRjaHZhciA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ24nLCBuLCBqLCB0Y2h2YXIpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lICsgJ19fJyArIGosIG5ldyBGb3JtQ29udHJvbCh0Y2h2YXIsIHRlbXZhbGlkYXRpb25ydWxlKSk7XG4gICAgICAgICAgICAvKmNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGNodmFyKTsgLy8gaWYgZmlyc3QgaXRlbSBzZXQgdG8gdHJ1ZSwgZWxzZSBmYWxzZVxuICAgICAgICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSBhcyBGb3JtQXJyYXkpLnB1c2goY29udHJvbCk7Ki9cbiAgICAgICAgICAgIC8vdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW1xuICAgICAgICAgICAgLy90aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2wodGNodmFyKVxuICAgICAgICAgICAgLy9dKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyp0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0cnVlKSxcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woZmFsc2UpLFxuICAgICAgXSkpOyovXG4gICAgICAgICAgLy90aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh0ZW1jb250cm9sYXJyWzBdLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuXG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogdGVtY29udHJvbGFyclswXSwgZGlzYWJsZWQ6IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmRpc2FibGVkIH0sIHRlbXZhbGlkYXRpb25ydWxlKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8nbmV3Q29udHJvbCcsIG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgIH1cbiAgICB9XG4gICAgLy89dGhpcy5jaGVja1Bhc3N3b3Jkcyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgLy90aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoZGVtb0FycmF5KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCwnZmcnLGRlbW9BcnJheSk7XG4gICAgICB0aGlzLnNob3dmb3JtID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLnN1Ym1pdGFjdGl2ZSA9PSBudWxsKVxuICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLnN1Ym1pdGFjdGl2ZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZygnZ3JwJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHMpO1xuICAgIH0sIDEwKTtcblxuICB9XG5cblxuICBzZXRDaGFuZ2VWYWxpZGF0ZSgpIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3ZhbGlkYXRlJykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICh2YWxpZGF0ZSkgPT4ge1xuICAgICAgICBpZiAodmFsaWRhdGUgPT0gJzEnKSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKTtcbiAgICAgICAgICB0aGlzLnRpdGxlQWxlcnQgPSBcIllvdSBuZWVkIHRvIHNwZWNpZnkgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpIGFzIEZvcm1Db250cm9sXG4gIH1cblxuXG4gIGNoZWNrUGFzc3dvcmRzKGdyb3VwOiBGb3JtR3JvdXApIHsgLy8gaGVyZSB3ZSBoYXZlIHRoZSAncGFzc3dvcmRzJyBncm91cFxuICAgIGxldCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIGlmIChjb25maXJtUGFzcyA9PSBudWxsIHx8IGNvbmZpcm1QYXNzID09ICcnKSB7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAocGFzcyAhPSBjb25maXJtUGFzcykge1xuICAgICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7ICdtYXRjaCc6IHRydWUgfSk7XG4gICAgICByZXR1cm4geyBtYXRjaDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG4gIH1cbiAgY2hlY2tQYXNzd29yZChjb250cm9sKSB7XG4gICAgbGV0IGVudGVyZWRQYXNzd29yZCA9IGNvbnRyb2wudmFsdWVcbiAgICBsZXQgcGFzc3dvcmRDaGVjayA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89Lns4LH0pLztcbiAgICByZXR1cm4gKCFwYXNzd29yZENoZWNrLnRlc3QoZW50ZXJlZFBhc3N3b3JkKSAmJiBlbnRlcmVkUGFzc3dvcmQpID8geyAncmVxdWlyZW1lbnRzJzogdHJ1ZSB9IDogbnVsbDtcbiAgfVxuICBhdXRvcmVxdWlyZWQoZ3JvdXA6IGFueSkgeyAvLyBoZXJlIHdlIGhhdmUgdGhlICdwYXNzd29yZHMnIGdyb3VwXG5cbiAgICBmb3IgKGxldCBiIGluIGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXBbYl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiBncm91cFtiXS52YWxpZGF0aW9ucyAhPSBudWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdICE9IG51bGwgJiYgZ3JvdXBbYl0udmFsaWRhdGlvbnNbMF0ucnVsZSA9PSAnYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXBbYl0ubmFtZV0gPT0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdLnNldEVycm9ycyh7ICdhdXRvcmVxdWlyZWQnOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4geyBhdXRvcmVxdWlyZWQ6IHRydWUgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2JncnJyJyxncm91cCxncm91cC5uYW1lKTtcbiAgICAvLyBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tncm91cC5uYW1lXSAhPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnMhPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnNbMF0hPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnNbMF0ucnVsZT09J2F1dG9yZXF1aXJlZCcgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2dyb3VwLm5hbWVdPT1udWxsKXtcblxuXG5cbiAgICAvLyBsZXQgcGFzcyA9IGdyb3VwLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xuICAgIC8vIGxldCBjb25maXJtUGFzcyA9IGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC52YWx1ZTtcbiAgICAvLyBpZihjb25maXJtUGFzcz09bnVsbCB8fCBjb25maXJtUGFzcz09Jycpe1xuICAgIC8vICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7cmVxdWlyZWQ6dHJ1ZX0pO1xuICAgIC8vICAgcmV0dXJuIHsgcmVxdWlyZWQ6IHRydWUgfTtcbiAgICAvLyB9XG4gICAgLy8gaWYocGFzcyE9Y29uZmlybVBhc3Mpe1xuICAgIC8vICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7J21hdGNoJzp0cnVlfSk7XG4gICAgLy8gICByZXR1cm4ge21hdGNoOnRydWV9O1xuICAgIC8vIH1cblxuICAgIC8vcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG4gIH1cblxuICBjaGVja0luVXNlRW1haWwoY29udHJvbCkge1xuICAgIC8vIG1pbWljIGh0dHAgZGF0YWJhc2UgYWNjZXNzXG4gICAgbGV0IGRiID0gWyd0b255QGdtYWlsLmNvbSddO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IChkYi5pbmRleE9mKGNvbnRyb2wudmFsdWUpICE9PSAtMSkgPyB7ICdhbHJlYWR5SW5Vc2UnOiB0cnVlIH0gOiBudWxsO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9LCA0MDAwKVxuICAgIH0pXG4gIH1cblxuICBnZXRFcnJvcihkYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0RXJyb3InLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ0ZpZWxkIGlzIHJlcXVpcmVkJyA6XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3BhdHRlcm4nKSA/ICdOb3QgYSB2YWxpZCBlbWFpbGFkZHJlc3MnIDpcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdhbHJlYWR5SW5Vc2UnKSA/ICdUaGlzIGVtYWlsYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZScgOiAnJztcbiAgfVxuXG4gIGdldEVycm9yUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCAoYXQgbGVhc3QgZWlnaHQgY2hhcmFjdGVycywgb25lIHVwcGVyY2FzZSBsZXR0ZXIgYW5kIG9uZSBudW1iZXIpJyA6XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVtZW50cycpID8gJ1Bhc3N3b3JkIG5lZWRzIHRvIGJlIGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyJyA6ICcnO1xuICB9XG5cbiAgb25TdWJtaXQocG9zdCkge1xuICAgIHRoaXMucG9zdCA9IHBvc3Q7XG4gICAgbGV0IHRlbXBmb3JtdmFsOiBhbnkgPSB7fTtcbiAgICBmb3IgKGxldCB4IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMsIHgsICdlcnInKTtcbiAgICAgIC8vaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsaWQpe1xuICAgICAgLy9jb25zb2xlLmxvZygneCcseCk7XG4gICAgICBsZXQgYiA9IHguc3BsaXQoJ19fJyk7XG4gICAgICAvL2NvbnNvbGUubG9nKCdiJyxiLGIubGVuZ3RoLGJbMF0pO1xuICAgICAgZm9yIChsZXQgbSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgIT0gbnVsbCAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWxpZGF0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0b2Vycm9yJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNldEVycm9ycyh7IHJlcXVpcmVkOiBudWxsIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dG9lcnJvciBhZnRlciAnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0b2Vycm9yIHNldCcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoeyByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRvZXJyb3Igc2V0IGFmdGVyICcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHggPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XSA9PSBudWxsKVxuICAgICAgICAgICAgdGVtcGZvcm12YWxbeF0gPSB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIubGVuZ3RoID4gMSAmJiBiWzBdID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAhPSB4ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FhYWFmZi4uLicpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsW2tdWydrZXknXSA9PSBiWzFdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdID09IG51bGwpXG4gICAgICAgICAgICAgICAgICB0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnB1c2goYlsxXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2d2JywgYlsxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgaWYgKHggPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XSA9PSBudWxsKVxuICAgICAgICAgIHRlbXBmb3JtdmFsW3hdID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWU7XG4gICAgICAgIC8vICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMsIHgsICdlcnIyMicpO1xuXG4gICAgICAvL31cbiAgICB9XG4gICAgY29uc29sZS5sb2cocG9zdCwgJ3Bvc3QnLCB0aGlzLmZvcm1Hcm91cC52YWxpZCwgdGhpcy5mb3JtZGF0YXZhbCwgdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwsICdmZmZmJywgdGVtcGZvcm12YWwpO1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG5cblxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCBsaW5rOiBhbnkgPSB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCArIHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQ7XG4gICAgICBsZXQgc291cmNlOiBhbnkgPSB7fTtcbiAgICAgIHNvdXJjZVsnZGF0YSddID0gdGhpcy5mb3JtR3JvdXAudmFsdWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogdGhpcy5mb3JtZGF0YXZhbC5zdWNjZXNzbWVzc2FnZSB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCAncmVkJywgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGgpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==