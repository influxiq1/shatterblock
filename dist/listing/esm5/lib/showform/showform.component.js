/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef } from '@angular/core';
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
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
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
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.uploadfile = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        var file = this.filearray[val.name];
        reader.addEventListener('loadend', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            fetch(apiBaseURL + "/requestUploadURL", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: file.name,
                    type: file.type
                })
            })
                .then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
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
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
        }));
        reader.readAsArrayBuffer(file);
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
                        if (_this.formGroup != null)
                            _this.formGroup.controls[_this.formfieldrefreshdataval.field].patchValue(_this.formfieldrefreshdataval.value);
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
        if (field.dependent != null) {
            if (field.dependent.condval == this.formGroup.controls[field.name].value) {
                /** @type {?} */
                var temvalidationrulet = [];
                for (var v in field.dependent.field.validations) {
                    // setTimeout( ()=>{
                    if (field.dependent.field.validations[v].message == null)
                        field.dependent.field.validations[v].message = "Not Valid !!";
                    if (field.dependent.field.validations[v].rule == 'required')
                        temvalidationrulet.push(Validators.required);
                    if (field.dependent.field.validations[v].rule == 'match') {
                        this.formGroup.setValidators(this.checkPasswords);
                    }
                    if (field.dependent.field.validations[v].rule == 'autorequired') {
                        this.formGroup.setValidators(this.autorequired);
                    }
                    if (field.dependent.field.validations[v].rule == 'pattern')
                        temvalidationrulet.push(Validators.pattern(field.dependent.field.validations[v].value));
                    if (field.dependent.field.validations[v].rule == 'maxLength')
                        temvalidationrulet.push(Validators.maxLength(field.dependent.field.validations[v].value));
                    if (field.dependent.field.validations[v].rule == 'min')
                        temvalidationrulet.push(Validators.min(field.dependent.field.validations[v].value));
                    if (field.dependent.field.validations[v].rule == 'max')
                        temvalidationrulet.push(Validators.max(field.dependent.field.validations[v].value));
                    if (field.dependent.field.validations[v].rule == 'minLength')
                        temvalidationrulet.push(Validators.minLength(field.dependent.field.validations[v].value));
                    //},0);
                }
                this.formGroup.addControl(field.dependent.field.name, new FormControl(field.dependent.field.value, temvalidationrulet));
                this.formdataval.fields.splice(index + 1, 0, field.dependent.field);
            }
            else {
                this.formGroup.removeControl(field.dependent.field.name);
                this.formdataval.fields.splice(index + 1, 1);
            }
        }
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
            this.filerfielddata = data.val;
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
            this.filerfielddata = filterval;
            console.log('fil', filterval);
        }
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.createForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /*this.formGroup = this.formBuilder.group({
          'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
          'fullname': [null, Validators.required],
         // 'password': [null, [Validators.required, this.checkPassword]],
          //'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          //'validate': ''
        });*/
        //let demoArray:any=[];
        this.formGroup = this.formBuilder.group({});
        console.log(this.formGroup, 'fg');
        for (var n in this.formdataval.fields) {
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
                this.formGroup.addControl(this.formdataval.fields[n].name, new FormControl(temcontrolarr[0], temvalidationrule));
            }
            //'newControl', new FormControl('', Validators.required)
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
        this.inputblur(field.name);
        this.formGroup.controls[field.name].patchValue(null);
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
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n<section *ngIf=\"loading == true\"  class=\"example-section\">\n    <mat-progress-bar\n            class=\"example-margin\"\n            [color]=\"color\"\n            [mode]=\"mode\"\n            [value]=\"value\"\n            [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container  *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n                <mat-card class=\"form_header_{{fields.name}}\" *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \" [innerHTML]=\"fields.heading\"></mat-card>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- for select-->\n                    <!-- <div>ff</div> -->\n                    <mat-label> Select {{fields.label}}  </mat-label>\n                    <mat-select [formControlName]=\"fields.name\" [multiple]=\"fields.multiple?true:false\">\n                        <mat-option *ngFor=\"let data of fields.val\"  [value]=\"data.val\"> {{data.name}}</mat-option>\n                    </mat-select>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\"  [innerHTML]=\"fields.label\"></mat-label>\n                    <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"   [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}} </mat-checkbox>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n                </div>\n                <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\"  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                        <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                            <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"   formControlName=\"{{fields.name}}__{{vi}}\" [value]=\"vals.key\">{{vals.val}} </mat-checkbox>\n\n                        </ng-container>\n                    </ng-container>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                   <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <mat-radio-group\n                            aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\"\n                            [formControlName]=\"fields.name\" >\n                        <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                            {{vals.val}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n\n                    <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type=='password')\" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n                    <input  matInput  (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\" [placeholder]=\"fields.label\" [formControlName]=\"fields.name\">\n                  \n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n                 <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n                    <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n\n                 <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n<mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label> \n                    <!-- {{fields.val.length}}\n -->\n                \n <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\" aria-label=\"{{fields.name}} data\">\n     <ng-container *ngFor=\"let vals of fields.val \">\n     <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n        <mat-chip  [removable]=true  >{{vals.val}}\n            <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n        </mat-chip>\n         </ng-container>\n\n     </ng-container>\n    \n  </mat-chip-list>\n\n\n  <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\" aria-label=\"{{fields.name}} data\">\n    <ng-container *ngFor=\"let vals of fields.val \">\n    <ng-container  *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n    <ng-container *ngIf=\"vals.key==avals\">\n       <mat-chip  [removable]=true  >{{vals.val}}\n           <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel</mat-icon>\n       </mat-chip>\n       </ng-container>\n        </ng-container>\n\n    </ng-container>\n   \n </mat-chip-list>\n                    <input matInput (blur)=\"inputblur(fields.name)\" (keyup)=filterautocomplete(fields.name,fields)  [formControlName]=\"fields.name\" placeholder=\"{{fields.label}}\"\n           [matAutocomplete]=\"auto\">\n\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\" (click)=\"setautocompletevalue(vals,fields)\">\n        <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n        <span>{{vals.val}}</span>\n        <!-- <small>Population: {{state.population}}</small> -->\n      </mat-option>\n    </mat-autocomplete>\n  \n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n<!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n<div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\" class=\"form-element form_field_{{fields.name}}\">\n    <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n    <ckeditor\n    (blur)=\"inputblur(fields.name)\"\n    [formControlName]=\"fields.name\"\n    >\n  </ckeditor>\n    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n        <ng-container *ngFor=\"let valdidations of fields.validations\">\n            <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n        </ng-container>\n    </mat-error>\n</div>\n\n\n              \n\n\n\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\" class=\"form-element form_field_{{fields.name}}\">\n                    <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n                    <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                        <div class=\"drop\" [attr.fileid]=\"fields.name\" id=\"drop{{fields.name}}\" >Drop files here.</div>\n                        <div class=\"id\"  id=\"list{{fields.name}}\">\n                          <h1>Files:</h1>\n                          <ng-container *ngIf=\"filearray[fields.name]!=null && filearray[fields.name].length>0 && fields.multiple!=null\">\n                          <ng-container *ngFor=\"let files of filearray[fields.name]\">\n                              <span>{{files.name}}</span>\n                              <span>{{files.type}}</span>\n                              <button mat-raised-button type=\"button\">Upload</button>\n                          </ng-container>\n\n                          </ng-container>\n                          <ng-container *ngIf=\"filearray[fields.name]!=null  && fields.multiple==null\">\n                                <span>{{filearray[fields.name].name}}</span>\n                                <span>{{filearray[fields.name].type}}</span>\n                                <button mat-raised-button (click)=\"uploadfile(fields)\" type=\"button\">Upload</button>\n  \n                            </ng-container>\n                        </div>\n                      </div>\n\n                    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n        \n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\" (click)=\"navtocancel()\" >{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\" class=\"button\"  >{{formdataval.resettext}}</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>\n",
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
        formfieldrefresh: [{ type: Input }]
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
    ShowformComponent.prototype.color;
    /** @type {?} */
    ShowformComponent.prototype.mode;
    /** @type {?} */
    ShowformComponent.prototype.value;
    /** @type {?} */
    ShowformComponent.prototype.bufferValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQXFCLEtBQUssRUFBdUIsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxXQUFXLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBUyxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBZ0IsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQXFCLFdBQVcsRUFBaUIsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBR3ZDO0lBeUNFLDJCQUFvQixXQUF3QixFQUFRLFdBQXVCLEVBQVMsU0FBc0IsRUFBUyxNQUFjLEVBQVMsVUFBcUI7UUFBM0ksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWxDL0osZUFBVSxHQUFXLHdCQUF3QixDQUFDO1FBQzlDLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixhQUFRLEdBQVMsS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBUyxLQUFLLENBQUM7UUFDdEIsd0JBQW1CLEdBQVMsS0FBSyxDQUFDO1FBQ2xDLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLDRCQUF1QixHQUFRLEVBQUUsQ0FBQztRQUNsQyxtQkFBYyxH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LEFBbGtCRCxJQWtrQkM7U0E3akJZLGlCQUFpQjs7O0lBQzVCLHNDQUFxQjs7SUFDckIsdUNBQThDOztJQUM5QyxpQ0FBZTs7SUFDZixxQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7SUFDdEIsZ0RBQWtDOztJQUNsQyx3Q0FBc0I7O0lBQ3RCLG9EQUFrQzs7SUFDbEMsMkNBQXNCOztJQUN0QixtREFBOEI7O0lBQzlCLHNDQUFpQjs7SUFJakIsa0NBQWdDOztJQUNoQyxpQ0FBNEI7O0lBQzVCLGtDQUFXOztJQUNYLHdDQUFpQjs7Ozs7SUFrQkwsd0NBQWdDOztJQUFDLHdDQUE4Qjs7Ozs7SUFBQyxzQ0FBOEI7Ozs7O0lBQUMsbUNBQXNCOzs7OztJQUFDLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCwgU2ltcGxlQ2hhbmdlLEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgIGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWRpYWxvZywgU25hY2tiYXJDb21wb25lbnR9IGZyb20gXCIuLi9saXN0aW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQge01BVF9TTkFDS19CQVJfREFUQSwgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vL2ltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaG93Zm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG93Zm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Nob3dmb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG93Zm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICB0aXRsZUFsZXJ0OiBzdHJpbmcgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIHBvc3Q6IGFueSA9ICcnO1xuICBzaG93Zm9ybTpib29sZWFuPWZhbHNlO1xuICBsb2FkaW5nOmJvb2xlYW49ZmFsc2U7XG4gIGZvcm1maWVsZHJlZnJlc2h2YWw6Ym9vbGVhbj1mYWxzZTtcbiAgZm9ybWRhdGF2YWw6IGFueSA9IHt9O1xuICBmb3JtZmllbGRyZWZyZXNoZGF0YXZhbDogYW55ID0ge307XG4gIGZpbGVyZmllbGRkYXRhOmFueT1bXTtcbiAgYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZTphbnk9W107XG4gIGZpbGVhcnJheTphbnk9W107XG5cbiAgLypmb3IgcHJvZ3Jlc3MgYmFyKi9cblxuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBhbnkgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG4gIGJ1ZmZlclZhbHVlID0gNzU7XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcm1kYXRhKGZvcm1kYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1kYXRhdmFsID0gZm9ybWRhdGE7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2hkYXRhKGZvcm1maWVsZHJlZnJlc2hkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsID0gZm9ybWZpZWxkcmVmcmVzaGRhdGE7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2goZm9ybWZpZWxkcmVmcmVzaDogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNodmFsID0gZm9ybWZpZWxkcmVmcmVzaDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2h2YWwpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIscHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcixwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcblxuXG4gICAgLy90aGlzLnNldENoYW5nZVZhbGlkYXRlKClcbiAgfVxuICBuYXZ0b2NhbmNlbCgpe1xuICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGUhPW51bGwpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGVdKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbiBhZnRlciB2aWV3IGluaXQgdHJpZ2dlcicpO1xuICAgICAgZm9yKGxldCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKXtcbiAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udHlwZT09J2ZpbGUnKXtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcrdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcrdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnK3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgXG4gICAgfSwxMDAwKTtcbiAgfVxuXG4gIHRyaWdnZXJldmVudHModmFsOmFueSl7XG4gICAgY29uc29sZS5sb2coJ2luIHRyaWdnZXJldmVudHMnKTtcbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndmFsIGxvYWRlZWQgdHJpZ2dlcicsdmFsKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyt2YWwubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyt2YWwubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcrdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgfSwxMDAwKTtcblxuICB9XG5cbiAgY2FuY2VsKGUpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjYW5jZWwnLGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGFuZGxlRHJvcChlKXtcbiAgICAvL2xldCBhcGlCYXNlVVJMPVwiXCJcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG4gICAgbGV0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jb25zb2xlLmxvZygnaGFuZGxlRHJvcCcsZSk7XG4gICAgdmFyIGR0ICAgID0gZS5kYXRhVHJhbnNmZXI7XG4gICAgdmFyIGZpbGVzID0gZHQuZmlsZXM7XG4gICAgZm9yICh2YXIgaT0wOyBpPGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZmlsZSA9IGZpbGVzW2ldO1xuICAgICAgY29uc29sZS5sb2coZmlsZXMsJ2ZpbGVzJyxlLnRhcmdldC5pZCk7XG4gICAgICBjb25zb2xlLmxvZygnZmFycicsdGhpcy5maWxlYXJyYXkpO1xuICAgICAgZm9yKGxldCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKXtcbiAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udHlwZT09J2ZpbGUnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWU9PWUudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCcnKSl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGUgZGV0YWlscycsdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10pO1xuICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubXVsdGlwbGU9PW51bGwpe1xuICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCcnKV09ZmlsZXNbMF07XG4gICAgICAgICAgXG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZih0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywnJyldPT1udWxsKXtcbiAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywnJyldPVtdOyBcbiAgICAgICAgICB9XG4gICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywnJyldLnB1c2goZmlsZXNbMF0pO1xuXG4gICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5Jyx0aGlzLmZpbGVhcnJheSk7XG5cbiAgICAgIC8vIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbihlKXtcbiAgICAgIC8vICAgZmV0Y2goYXBpQmFzZVVSTCtcIi9yZXF1ZXN0VXBsb2FkVVJMXCIsIHtcbiAgICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIC8vICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbihqc29uKXtcbiAgICAgIC8vICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgIC8vICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIC8vICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwge3R5cGU6IGZpbGUudHlwZX0pXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgIC8vICAgICB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gICAgIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgLy8gICAgIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgICAvL3JlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHVwbG9hZGZpbGUodmFsOmFueSl7XG4gICAgbGV0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIjtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBsZXQgZmlsZTphbnk9dGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24oZSl7XG4gICAgICBmZXRjaChhcGlCYXNlVVJMK1wiL3JlcXVlc3RVcGxvYWRVUkxcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihqc29uKXtcbiAgICAgICAgcmV0dXJuIGZldGNoKGpzb24udXBsb2FkVVJMLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwge3R5cGU6IGZpbGUudHlwZX0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgICAgIC8vIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG5cbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcblxuICAgIGNvbnNvbGUubG9nKCduZ29uY2hhbmdlIGluIGZvcm0gISEhJyxjaGFuZ2VzLCdmcnYnLHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwpO1xuICAgIGZvcihsZXQgdiBpbiBjaGFuZ2VzKXtcbiAgICAgIC8vY29uc29sZS5sb2codixjaGFuZ2VzW3ZdLCd2dicpO1xuICAgICAgaWYodj09J2Zvcm1maWVsZHJlZnJlc2hkYXRhJyl7XG4gICAgICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmZmIGluIHNldCB0dCcpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwsJ20nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSk7XG4gICAgICAgICAgICAgIGlmKHRoaXMuZm9ybUdyb3VwIT1udWxsICl0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkXS5wYXRjaFZhbHVlKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpXG5cbiAgICAgICAgICB9XG4gICAgICAgIH0sMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZygnb24gYmx1ciAuLi4uLicpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbiAgY2hlY2tjaGFuZ2UoZmllbGQ6YW55LGluZGV4OmFueSl7XG4gICAgY29uc29sZS5sb2coZmllbGQsJ2NoYW5nZScsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUpO1xuICAgIGlmKGZpZWxkLmRlcGVuZGVudCE9bnVsbCl7XG4gICAgICBpZihmaWVsZC5kZXBlbmRlbnQuY29uZHZhbD09dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUpe1xuICAgICAgICBsZXQgdGVtdmFsaWRhdGlvbnJ1bGV0OmFueT1bXTtcblxuICAgICAgICBmb3IobGV0IHYgaW4gIGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9ucyl7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCggKCk9PntcbiAgICAgICAgICAgaWYoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLm1lc3NhZ2U9PW51bGwpXG4gICAgICAgICAgIGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5tZXNzYWdlPVwiTm90IFZhbGlkICEhXCJcbiAgICAgICAgICAgaWYoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdyZXF1aXJlZCcpXG4gICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF0Y2gnKSB7XG4gICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuY2hlY2tQYXNzd29yZHMpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nYXV0b3JlcXVpcmVkJykge1xuICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5hdXRvcmVxdWlyZWQpO1xuICAgICAgICAgfVxuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J3BhdHRlcm4nKVxuICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZXQucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF4TGVuZ3RoJylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWluJylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5taW4oZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF4JylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5tYXgoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWluTGVuZ3RoJylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIC8vfSwwKTtcbiAgICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGZpZWxkLmRlcGVuZGVudC5maWVsZC5uYW1lLCBuZXcgRm9ybUNvbnRyb2woZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbHVlLCB0ZW12YWxpZGF0aW9ucnVsZXQpKTtcbiAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKGluZGV4KzEsMCxmaWVsZC5kZXBlbmRlbnQuZmllbGQpO1xuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChmaWVsZC5kZXBlbmRlbnQuZmllbGQubmFtZSk7XG4gICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShpbmRleCsxLDEpO1xuICAgICAgICBcblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbHRlcmF1dG9jb21wbGV0ZSh2YWw6YW55LGRhdGE6YW55KXtcbiAgICB0aGlzLmlucHV0Ymx1cih2YWwpO1xuICAgIGNvbnNvbGUubG9nKCdjYycsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZSxkYXRhLnZhbCk7XG4gICAgbGV0IGZpZWxkdmFsPXRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWU7XG4gICAgaWYoZmllbGR2YWw9PScnIHx8IGZpZWxkdmFsPT1udWxsKXtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGE9ZGF0YS52YWw7XG4gICAgfWVsc2V7XG4gICAgbGV0IGZpbHRlcnZhbCA9IGRhdGEudmFsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2UnLGUsZmllbGR2YWwpXG4gICAgcmV0dXJuIGUudmFsLmluY2x1ZGVzKGZpZWxkdmFsKTtcbn0pO1xuICAgIHRoaXMuZmlsZXJmaWVsZGRhdGE9ZmlsdGVydmFsO1xuICAgIGNvbnNvbGUubG9nKCdmaWwnLGZpbHRlcnZhbCk7XG4gIH1cbiAgXG4gIH1cblxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgLyp0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2VtYWlsJzogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxyZWdleCldLCB0aGlzLmNoZWNrSW5Vc2VFbWFpbF0sXG4gICAgICAnZnVsbG5hbWUnOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgIC8vICdwYXNzd29yZCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5jaGVja1Bhc3N3b3JkXV0sXG4gICAgICAvLydkZXNjcmlwdGlvbic6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKV1dLFxuICAgICAgLy8ndmFsaWRhdGUnOiAnJ1xuICAgIH0pOyovXG4gICAgLy9sZXQgZGVtb0FycmF5OmFueT1bXTtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCdmZycpXG4gICAgZm9yKGxldCBuIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKXtcbiAgICAgIGxldCB0ZW1jb250cm9sYXJyOmFueT1bXTtcbiAgICAgIGxldCB0ZW12YWxpZGF0aW9ucnVsZTphbnk9W107XG4gICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSE9bnVsbClcbiAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSk7XG4gICAgICBlbHNlXG4gICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCgnJyk7XG4gICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlPT0nY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlIT1udWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlPT10cnVlKXtcbiAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWU9PW51bGwpICB0ZW1jb250cm9sYXJyLnB1c2goW10pO1xuICAgICAgICBlbHNle1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCE9bnVsbCl7XG4gICAgICAgICAgICBsZXQgdGNoYXJyOmFueT1bXTtcbiAgICAgICAgICAgIGZvcihsZXQgYiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpe1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYicsYix0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0pO1xuICAgICAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZS5pbmNsdWRlcyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0ua2V5KSl7XG4gICAgICAgICAgICAgICAgdGNoYXJyLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgIH1lbHNlIHRjaGFyci5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHB1c2ggdGhlIHZhbFxuICAgICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKHRjaGFycik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGNoJyx0Y2hhcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucyE9bnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucy5sZW5ndGg+MCl7XG4gICAgICAgIGZvcihsZXQgdiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucyApe1xuICAgICAgICAgLy8gc2V0VGltZW91dCggKCk9PntcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlPT1udWxsKVxuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ubWVzc2FnZT1cIk5vdCBWYWxpZCAhIVwiXG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZT09J3JlcXVpcmVkJylcbiAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZT09J21hdGNoJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuY2hlY2tQYXNzd29yZHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0nYXV0b3JlcXVpcmVkJykge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmF1dG9yZXF1aXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0ncGF0dGVybicpXG4gICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtYXhMZW5ndGgnKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtaW4nKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtYXgnKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtaW5MZW5ndGgnKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIC8vfSwwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZW1vQXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV09bmV3IEZvcm1Db250cm9sKCcnKTtcbiAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGU9PSdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlICkge1xuICAgICAgICBsZXQgdGNodmFyOmFueT1mYWxzZTtcbiAgICAgICAgLy9sZXRcbiAgICAgICAgY29uc29sZS5sb2coJ3Z2ID8/PyAnLHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUpO1xuICAgICAgICAvL3RoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1BcnJheShbXSkpO1xuICAgICAgICBmb3IobGV0IGogaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsKXtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZS5pbmNsdWRlcyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbal0ua2V5KSlcbiAgICAgICAgICAgIHRjaHZhcj10cnVlO1xuICAgICAgICAgIGVsc2UgdGNodmFyPWZhbHNlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCduJyxuLGosdGNodmFyKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUrJ19fJytqLCBuZXcgRm9ybUNvbnRyb2wodGNodmFyLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICAgICAvKmNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGNodmFyKTsgLy8gaWYgZmlyc3QgaXRlbSBzZXQgdG8gdHJ1ZSwgZWxzZSBmYWxzZVxuICAgICAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdIGFzIEZvcm1BcnJheSkucHVzaChjb250cm9sKTsqL1xuICAgICAgICAgIC8vdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW1xuICAgICAgLy90aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2wodGNodmFyKVxuICAgIC8vXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyp0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXG4gICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woZmFsc2UpLFxuICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKGZhbHNlKSxcbiAgICBdKSk7Ki9cbiAgICAvL3RoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1Db250cm9sKHRlbWNvbnRyb2xhcnJbMF0sIHRlbXZhbGlkYXRpb25ydWxlKSk7XG5cblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIFxuXG4gICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh0ZW1jb250cm9sYXJyWzBdLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgfVxuICAgICAgLy8nbmV3Q29udHJvbCcsIG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICB9XG4gICAgLy89dGhpcy5jaGVja1Bhc3N3b3Jkcyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgLy90aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoZGVtb0FycmF5KTtcblxuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAsJ2ZnJyxkZW1vQXJyYXkpO1xuICAgICAgdGhpcy5zaG93Zm9ybT10cnVlO1xuICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5zdWJtaXRhY3RpdmU9PW51bGwpXG4gICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlPXRydWU7XG4gICAgICBjb25zb2xlLmxvZygnZ3JwJyx0aGlzLmZvcm1Hcm91cC5jb250cm9scyk7XG4gICAgfSwgMTApO1xuXG4gIH1cbiAgcmVtb3ZlY2hpcHNpbmdsZSh2YWw6YW55KXtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdPW51bGw7XG4gIH1cbiAgcmVtb3ZlY2hpcG11bHRpcGxlKHZhbDphbnksaW5kZXg6YW55KXtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLnNwbGljZShpbmRleCwxKTtcbiAgICBpZih0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLmxlbmd0aD09MClcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdPW51bGw7XG4gIH1cbiAgc2V0YXV0b2NvbXBsZXRldmFsdWUodmFsOmFueSxmaWVsZDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdmZicsdmFsLGZpZWxkKTtcbiAgICBpZihmaWVsZC5tdWx0aXBsZT09bnVsbCl7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV09dmFsLmtleTtcbiAgICB9ZWxzZXtcbiAgICAgIGlmKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXT09bnVsbClcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXT1bXTtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5wdXNoKHZhbC5rZXkpO1xuXG4gICAgfVxuICAgIHRoaXMuaW5wdXRibHVyKGZpZWxkLm5hbWUpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgXG4gIH1cblxuICBzZXRDaGFuZ2VWYWxpZGF0ZSgpIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3ZhbGlkYXRlJykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgKHZhbGlkYXRlKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbGlkYXRlID09ICcxJykge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGVBbGVydCA9IFwiWW91IG5lZWQgdG8gc3BlY2lmeSBhdCBsZWFzdCAzIGNoYXJhY3RlcnNcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgKVxuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpIGFzIEZvcm1Db250cm9sXG4gIH1cblxuXG4gIGNoZWNrUGFzc3dvcmRzKGdyb3VwOiBGb3JtR3JvdXApIHsgLy8gaGVyZSB3ZSBoYXZlIHRoZSAncGFzc3dvcmRzJyBncm91cFxuICAgIGxldCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIGlmKGNvbmZpcm1QYXNzPT1udWxsIHx8IGNvbmZpcm1QYXNzPT0nJyl7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHtyZXF1aXJlZDp0cnVlfSk7XG4gICAgICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZihwYXNzIT1jb25maXJtUGFzcyl7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsnbWF0Y2gnOnRydWV9KTtcbiAgICAgIHJldHVybiB7bWF0Y2g6dHJ1ZX07XG4gICAgfVxuXG4gICAgLy9yZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbiAgfVxuICBjaGVja1Bhc3N3b3JkKGNvbnRyb2wpIHtcbiAgICBsZXQgZW50ZXJlZFBhc3N3b3JkID0gY29udHJvbC52YWx1ZVxuICAgIGxldCBwYXNzd29yZENoZWNrID0gL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkoPz0uezgsfSkvO1xuICAgIHJldHVybiAoIXBhc3N3b3JkQ2hlY2sudGVzdChlbnRlcmVkUGFzc3dvcmQpICYmIGVudGVyZWRQYXNzd29yZCkgPyB7ICdyZXF1aXJlbWVudHMnOiB0cnVlIH0gOiBudWxsO1xuICB9XG4gIGF1dG9yZXF1aXJlZChncm91cDogYW55KSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcblxuICBmb3IobGV0IGIgaW4gZ3JvdXApe1xuICAgIGlmKGdyb3VwW2JdLnR5cGU9PSdhdXRvY29tcGxldGUnICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zIT1udWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdIT1udWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdLnJ1bGU9PSdhdXRvcmVxdWlyZWQnICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtncm91cFtiXS5uYW1lXT09bnVsbCl7XG5cbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdLnNldEVycm9ycyh7J2F1dG9yZXF1aXJlZCc6dHJ1ZX0pO1xuICAgICAgcmV0dXJuIHthdXRvcmVxdWlyZWQ6dHJ1ZX07XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdiZ3JycicsZ3JvdXAsZ3JvdXAubmFtZSk7XG4gIC8vIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdICE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9ucyE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXSE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXS5ydWxlPT0nYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXAubmFtZV09PW51bGwpe1xuICBcbiAgXG5cbiAgLy8gbGV0IHBhc3MgPSBncm91cC5jb250cm9scy5wYXNzd29yZC52YWx1ZTtcbiAgLy8gbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAvLyBpZihjb25maXJtUGFzcz09bnVsbCB8fCBjb25maXJtUGFzcz09Jycpe1xuICAvLyAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoe3JlcXVpcmVkOnRydWV9KTtcbiAgLy8gICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAvLyB9XG4gIC8vIGlmKHBhc3MhPWNvbmZpcm1QYXNzKXtcbiAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsnbWF0Y2gnOnRydWV9KTtcbiAgLy8gICByZXR1cm4ge21hdGNoOnRydWV9O1xuICAvLyB9XG5cbiAgLy9yZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbn1cblxuICBjaGVja0luVXNlRW1haWwoY29udHJvbCkge1xuICAgIC8vIG1pbWljIGh0dHAgZGF0YWJhc2UgYWNjZXNzXG4gICAgbGV0IGRiID0gWyd0b255QGdtYWlsLmNvbSddO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IChkYi5pbmRleE9mKGNvbnRyb2wudmFsdWUpICE9PSAtMSkgPyB7ICdhbHJlYWR5SW5Vc2UnOiB0cnVlIH0gOiBudWxsO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9LCA0MDAwKVxuICAgIH0pXG4gIH1cblxuICBnZXRFcnJvcihkYXRhOmFueSkge1xuICAgIGNvbnNvbGUubG9nKCdnZXRFcnJvcicsZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCcgOlxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3BhdHRlcm4nKSA/ICdOb3QgYSB2YWxpZCBlbWFpbGFkZHJlc3MnIDpcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcignYWxyZWFkeUluVXNlJykgPyAnVGhpcyBlbWFpbGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UnIDogJyc7XG4gIH1cblxuICBnZXRFcnJvclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnRmllbGQgaXMgcmVxdWlyZWQgKGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyKScgOlxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVtZW50cycpID8gJ1Bhc3N3b3JkIG5lZWRzIHRvIGJlIGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyJyA6ICcnO1xuICB9XG5cbiAgb25TdWJtaXQocG9zdCkge1xuICAgIHRoaXMucG9zdCA9IHBvc3Q7XG4gICAgbGV0IHRlbXBmb3JtdmFsOmFueT17fTtcbiAgICBmb3IgKGxldCB4IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMseCwnZXJyJyk7XG4gICAgICAvL2lmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbGlkKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZygneCcseCk7XG4gICAgICAgIGxldCBiPXguc3BsaXQoJ19fJyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2InLGIsYi5sZW5ndGgsYlswXSk7XG4gICAgICAgIGZvcihsZXQgbSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcyl7XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZT09J2F1dG9jb21wbGV0ZScpe1xuICAgICAgICAgICAgaWYodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICE9bnVsbCAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0hPW51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsaWRhdGlvbnMhPW51bGwpe1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0b2Vycm9yJyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoe3JlcXVpcmVkOm51bGx9KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dG9lcnJvciBhZnRlciAnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dG9lcnJvciBzZXQnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNldEVycm9ycyh7cmVxdWlyZWQ6dHJ1ZX0pO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0b2Vycm9yIHNldCBhZnRlciAnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHg9PXRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGVtcGZvcm12YWxbeF09PW51bGwpIFxuICAgICAgICAgICAgdGVtcGZvcm12YWxbeF09dGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihiLmxlbmd0aD4xICYmIGJbMF09PXRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUhPXggJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZT09J2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSE9bnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWFhYWZmLi4uJyk7XG4gICAgICAgICAgICBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZT09dHJ1ZSl7XG4gICAgICAgICAgICAgIGZvcihsZXQgayBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWwpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbFtrXVsna2V5J109PWJbMV0pe1xuICAgICAgICAgICAgICAgICAgaWYodGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV09PW51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdPVtdO1xuICAgICAgICAgICAgICAgICAgdGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucHVzaChiWzFdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdndicsYlsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgaWYoeD09dGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XT09bnVsbClcbiAgICAgICAgdGVtcGZvcm12YWxbeF09dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWU7XG4gICAgLy8gIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMseCwnZXJyMjInKTtcbiAgICAgIFxuICAgICAgLy99XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBvc3QsJ3Bvc3QnLHRoaXMuZm9ybUdyb3VwLnZhbGlkLHRoaXMuZm9ybWRhdGF2YWwsdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwsJ2ZmZmYnLHRlbXBmb3JtdmFsKTtcblxuICAgIGlmKHRoaXMuZm9ybUdyb3VwLnZhbGlkKXtcblxuXG4gICAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICAgIGxldCBsaW5rOmFueT10aGlzLmZvcm1kYXRhdmFsLmFwaVVybCArdGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludDtcbiAgICAgIGxldCBzb3VyY2U6YW55PXt9O1xuICAgICAgc291cmNlWydkYXRhJ109dGhpcy5mb3JtR3JvdXAudmFsdWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOnRoaXMuZm9ybWRhdGF2YWwuc3VjY2Vzc21lc3NhZ2V9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCdyZWQnLHRoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoKTtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCE9bnVsbCl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKXtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOidTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19