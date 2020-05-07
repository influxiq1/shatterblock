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
            _this.elementRef.nativeElement.querySelector('#drop').addEventListener('drop', _this.handleDrop.bind(_this));
            _this.elementRef.nativeElement.querySelector('#drop').addEventListener('dragenter', _this.cancel.bind(_this));
            _this.elementRef.nativeElement.querySelector('#drop').addEventListener('dragover', _this.cancel.bind(_this));
        }), 3000);
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
        console.log('cancel', e);
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
        console.log('handleDrop', e);
        /** @type {?} */
        var dt = e.dataTransfer;
        /** @type {?} */
        var files = dt.files;
        for (var i = 0; i < files.length; i++) {
            /** @type {?} */
            var file = files[i];
            /** @type {?} */
            var reader = new FileReader();
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
                    /** @type {?} */
                    var uploadedFileNode = document.createElement('div');
                    uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/' + file.name + '">' + file.name + '</a>';
                    list.appendChild(uploadedFileNode);
                }));
            }));
            reader.readAsArrayBuffer(file);
        }
        return false;
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
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n<section *ngIf=\"loading == true\"  class=\"example-section\">\n    <mat-progress-bar\n            class=\"example-margin\"\n            [color]=\"color\"\n            [mode]=\"mode\"\n            [value]=\"value\"\n            [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container  *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n                <mat-card class=\"form_header_{{fields.name}}\" *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \" [innerHTML]=\"fields.heading\"></mat-card>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- for select-->\n                    <!-- <div>ff</div> -->\n                    <mat-label> Select {{fields.label}}  </mat-label>\n                    <mat-select [formControlName]=\"fields.name\" [multiple]=\"fields.multiple?true:false\">\n                        <mat-option *ngFor=\"let data of fields.val\"  [value]=\"data.val\"> {{data.name}}</mat-option>\n                    </mat-select>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\"  [innerHTML]=\"fields.label\"></mat-label>\n                    <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"   [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}} </mat-checkbox>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n                </div>\n                <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\"  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                        <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                            <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"   formControlName=\"{{fields.name}}__{{vi}}\" [value]=\"vals.key\">{{vals.val}} </mat-checkbox>\n\n                        </ng-container>\n                    </ng-container>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                   <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <mat-radio-group\n                            aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\"\n                            [formControlName]=\"fields.name\" >\n                        <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                            {{vals.val}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n\n                    <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type=='password')\" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n                    <input  matInput  (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\" [placeholder]=\"fields.label\" [formControlName]=\"fields.name\">\n                  \n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n                 <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n                    <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n\n                 <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n<mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label> \n                    <!-- {{fields.val.length}}\n -->\n                \n <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\" aria-label=\"{{fields.name}} data\">\n     <ng-container *ngFor=\"let vals of fields.val \">\n     <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n        <mat-chip  [removable]=true  >{{vals.val}}\n            <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n        </mat-chip>\n         </ng-container>\n\n     </ng-container>\n    \n  </mat-chip-list>\n\n\n  <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\" aria-label=\"{{fields.name}} data\">\n    <ng-container *ngFor=\"let vals of fields.val \">\n    <ng-container  *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n    <ng-container *ngIf=\"vals.key==avals\">\n       <mat-chip  [removable]=true  >{{vals.val}}\n           <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel</mat-icon>\n       </mat-chip>\n       </ng-container>\n        </ng-container>\n\n    </ng-container>\n   \n </mat-chip-list>\n                    <input matInput (blur)=\"inputblur(fields.name)\" (keyup)=filterautocomplete(fields.name,fields)  [formControlName]=\"fields.name\" placeholder=\"{{fields.label}}\"\n           [matAutocomplete]=\"auto\">\n\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\" (click)=\"setautocompletevalue(vals,fields)\">\n        <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n        <span>{{vals.val}}</span>\n        <!-- <small>Population: {{state.population}}</small> -->\n      </mat-option>\n    </mat-autocomplete>\n  \n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n<!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n<div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\" class=\"form-element form_field_{{fields.name}}\">\n    <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n    <ckeditor\n    [formControlName]=\"fields.name\"\n    >\n  </ckeditor>\n    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n        <ng-container *ngFor=\"let valdidations of fields.validations\">\n            <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n        </ng-container>\n    </mat-error>\n</div>\n\n\n              \n\n\n\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\" class=\"form-element form_field_{{fields.name}}\">\n                    <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div>\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n        \n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n<<<<<<< HEAD\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formdataval.submitactive\">Submit Form</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\" (click)=\"navtocancel()\" >Cancel</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\" class=\"button\"  >Reset</button>\n=======\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\" (click)=\"navtocancel()\" >{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\" class=\"button\"  >{{formdataval.resettext}}</button>\n>>>>>>> 5724ead4808f9171b153d859ba0e33405c935cb0\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>\n",
                    styles: ["#drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:none;align-items:center;justify-content:center;flex-direction:column}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQXFCLEtBQUssRUFBdUIsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxXQUFXLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBUyxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBZ0IsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQXFCLFdBQVcsRUFBaUIsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBR3ZDO0lBdUNFLDJCQUFvQixXQUF3QixFQUFRLFdBQXVCLEVBQVMsU0FBc0IsRUFBUyxNQUFjLEVBQVMsVUFBcUI7UUFBM0ksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWhDL0osZUFBVSxHQUFXLHdCQUF3QixDQUFDO1FBQzlDLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixhQUFRLEdBQVMsS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBUyxLQUFLLENBQUM7UUFDdEIsd0JBQW1CLEdBQVMsS0FBSyxDQUFDO1FBQ2xDLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLDRCQUF1QixHQUFRLEVBQUUsQ0FBQztRQUNsQyxtQkFBYyxH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O29CQUNoQixJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUMsbUNBQW1DLEVBQUM7aUJBQ3pELENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7Z0JBdmZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsZytxQkFBd0M7O2lCQUV6Qzs7OztnQkFkUSxXQUFXO2dCQUVYLFVBQVU7Z0JBR1MsV0FBVztnQkFFL0IsTUFBTTtnQkFSb0QsVUFBVTs7OzJCQWtDekUsS0FBSzt1Q0FLTCxLQUFLO21DQUtMLEtBQUs7O0lBd2RSLHdCQUFDO0NBQUEsQUF6ZkQsSUF5ZkM7U0FwZlksaUJBQWlCOzs7SUFDNUIsc0NBQXFCOztJQUNyQix1Q0FBOEM7O0lBQzlDLGlDQUFlOztJQUNmLHFDQUF1Qjs7SUFDdkIsb0NBQXNCOztJQUN0QixnREFBa0M7O0lBQ2xDLHdDQUFzQjs7SUFDdEIsb0RBQWtDOztJQUNsQywyQ0FBc0I7O0lBQ3RCLG1EQUE4Qjs7SUFJOUIsa0NBQWdDOztJQUNoQyxpQ0FBNEI7O0lBQzVCLGtDQUFXOztJQUNYLHdDQUFpQjs7Ozs7SUFpQkwsd0NBQWdDOztJQUFDLHdDQUE4Qjs7Ozs7SUFBQyxzQ0FBOEI7Ozs7O0lBQUMsbUNBQXNCOzs7OztJQUFDLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCwgU2ltcGxlQ2hhbmdlLEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgIGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWRpYWxvZywgU25hY2tiYXJDb21wb25lbnR9IGZyb20gXCIuLi9saXN0aW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQge01BVF9TTkFDS19CQVJfREFUQSwgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vL2ltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXJcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaG93Zm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG93Zm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Nob3dmb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG93Zm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICB0aXRsZUFsZXJ0OiBzdHJpbmcgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIHBvc3Q6IGFueSA9ICcnO1xuICBzaG93Zm9ybTpib29sZWFuPWZhbHNlO1xuICBsb2FkaW5nOmJvb2xlYW49ZmFsc2U7XG4gIGZvcm1maWVsZHJlZnJlc2h2YWw6Ym9vbGVhbj1mYWxzZTtcbiAgZm9ybWRhdGF2YWw6IGFueSA9IHt9O1xuICBmb3JtZmllbGRyZWZyZXNoZGF0YXZhbDogYW55ID0ge307XG4gIGZpbGVyZmllbGRkYXRhOmFueT1bXTtcbiAgYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZTphbnk9W107XG5cbiAgLypmb3IgcHJvZ3Jlc3MgYmFyKi9cblxuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBhbnkgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG4gIGJ1ZmZlclZhbHVlID0gNzU7XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZGF0YShmb3JtZGF0YTogYW55KSB7XG4gICAgdGhpcy5mb3JtZGF0YXZhbCA9IGZvcm1kYXRhO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoZGF0YShmb3JtZmllbGRyZWZyZXNoZGF0YTogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCA9IGZvcm1maWVsZHJlZnJlc2hkYXRhO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoKGZvcm1maWVsZHJlZnJlc2g6IGFueSkge1xuICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaHZhbCA9IGZvcm1maWVsZHJlZnJlc2g7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNodmFsKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSxwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG5cblxuICAgIC8vdGhpcy5zZXRDaGFuZ2VWYWxpZGF0ZSgpXG4gIH1cbiAgbmF2dG9jYW5jZWwoKXtcbiAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlIT1udWxsKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlXSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnKS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJykuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgIH0sMzAwMCk7XG4gIH1cblxuICBjYW5jZWwoZSkge1xuICAgIGNvbnNvbGUubG9nKCdjYW5jZWwnLGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGFuZGxlRHJvcChlKXtcbiAgICAvL2xldCBhcGlCYXNlVVJMPVwiXCJcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG4gICAgbGV0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZURyb3AnLGUpO1xuICAgIHZhciBkdCAgICA9IGUuZGF0YVRyYW5zZmVyO1xuICAgIHZhciBmaWxlcyA9IGR0LmZpbGVzO1xuICAgIGZvciAodmFyIGk9MDsgaTxmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZmV0Y2goYXBpQmFzZVVSTCtcIi9yZXF1ZXN0VXBsb2FkVVJMXCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihqc29uKXtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwge3R5cGU6IGZpbGUudHlwZX0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcblxuICAgIGNvbnNvbGUubG9nKCduZ29uY2hhbmdlIGluIGZvcm0gISEhJyxjaGFuZ2VzLCdmcnYnLHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwpO1xuICAgIGZvcihsZXQgdiBpbiBjaGFuZ2VzKXtcbiAgICAgIC8vY29uc29sZS5sb2codixjaGFuZ2VzW3ZdLCd2dicpO1xuICAgICAgaWYodj09J2Zvcm1maWVsZHJlZnJlc2hkYXRhJyl7XG4gICAgICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmZmIGluIHNldCB0dCcpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwsJ20nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSk7XG4gICAgICAgICAgICAgIGlmKHRoaXMuZm9ybUdyb3VwIT1udWxsICl0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkXS5wYXRjaFZhbHVlKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpXG5cbiAgICAgICAgICB9XG4gICAgICAgIH0sMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZygnb24gYmx1ciAuLi4uLicpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbiAgY2hlY2tjaGFuZ2UoZmllbGQ6YW55LGluZGV4OmFueSl7XG4gICAgY29uc29sZS5sb2coZmllbGQsJ2NoYW5nZScsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUpO1xuICAgIGlmKGZpZWxkLmRlcGVuZGVudCE9bnVsbCl7XG4gICAgICBpZihmaWVsZC5kZXBlbmRlbnQuY29uZHZhbD09dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUpe1xuICAgICAgICBsZXQgdGVtdmFsaWRhdGlvbnJ1bGV0OmFueT1bXTtcblxuICAgICAgICBmb3IobGV0IHYgaW4gIGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9ucyl7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCggKCk9PntcbiAgICAgICAgICAgaWYoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLm1lc3NhZ2U9PW51bGwpXG4gICAgICAgICAgIGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5tZXNzYWdlPVwiTm90IFZhbGlkICEhXCJcbiAgICAgICAgICAgaWYoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdyZXF1aXJlZCcpXG4gICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF0Y2gnKSB7XG4gICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuY2hlY2tQYXNzd29yZHMpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nYXV0b3JlcXVpcmVkJykge1xuICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5hdXRvcmVxdWlyZWQpO1xuICAgICAgICAgfVxuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J3BhdHRlcm4nKVxuICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZXQucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF4TGVuZ3RoJylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWluJylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5taW4oZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF4JylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5tYXgoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWluTGVuZ3RoJylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgIC8vfSwwKTtcbiAgICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGZpZWxkLmRlcGVuZGVudC5maWVsZC5uYW1lLCBuZXcgRm9ybUNvbnRyb2woZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbHVlLCB0ZW12YWxpZGF0aW9ucnVsZXQpKTtcbiAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKGluZGV4KzEsMCxmaWVsZC5kZXBlbmRlbnQuZmllbGQpO1xuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChmaWVsZC5kZXBlbmRlbnQuZmllbGQubmFtZSk7XG4gICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShpbmRleCsxLDEpO1xuICAgICAgICBcblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbHRlcmF1dG9jb21wbGV0ZSh2YWw6YW55LGRhdGE6YW55KXtcbiAgICB0aGlzLmlucHV0Ymx1cih2YWwpO1xuICAgIGNvbnNvbGUubG9nKCdjYycsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZSxkYXRhLnZhbCk7XG4gICAgbGV0IGZpZWxkdmFsPXRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWU7XG4gICAgaWYoZmllbGR2YWw9PScnIHx8IGZpZWxkdmFsPT1udWxsKXtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGE9ZGF0YS52YWw7XG4gICAgfWVsc2V7XG4gICAgbGV0IGZpbHRlcnZhbCA9IGRhdGEudmFsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2UnLGUsZmllbGR2YWwpXG4gICAgcmV0dXJuIGUudmFsLmluY2x1ZGVzKGZpZWxkdmFsKTtcbn0pO1xuICAgIHRoaXMuZmlsZXJmaWVsZGRhdGE9ZmlsdGVydmFsO1xuICAgIGNvbnNvbGUubG9nKCdmaWwnLGZpbHRlcnZhbCk7XG4gIH1cbiAgXG4gIH1cblxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgLyp0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2VtYWlsJzogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxyZWdleCldLCB0aGlzLmNoZWNrSW5Vc2VFbWFpbF0sXG4gICAgICAnZnVsbG5hbWUnOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgIC8vICdwYXNzd29yZCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5jaGVja1Bhc3N3b3JkXV0sXG4gICAgICAvLydkZXNjcmlwdGlvbic6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKV1dLFxuICAgICAgLy8ndmFsaWRhdGUnOiAnJ1xuICAgIH0pOyovXG4gICAgLy9sZXQgZGVtb0FycmF5OmFueT1bXTtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCdmZycpXG4gICAgZm9yKGxldCBuIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKXtcbiAgICAgIGxldCB0ZW1jb250cm9sYXJyOmFueT1bXTtcbiAgICAgIGxldCB0ZW12YWxpZGF0aW9ucnVsZTphbnk9W107XG4gICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSE9bnVsbClcbiAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSk7XG4gICAgICBlbHNlXG4gICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCgnJyk7XG4gICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlPT0nY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlIT1udWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlPT10cnVlKXtcbiAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWU9PW51bGwpICB0ZW1jb250cm9sYXJyLnB1c2goW10pO1xuICAgICAgICBlbHNle1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCE9bnVsbCl7XG4gICAgICAgICAgICBsZXQgdGNoYXJyOmFueT1bXTtcbiAgICAgICAgICAgIGZvcihsZXQgYiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpe1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYicsYix0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0pO1xuICAgICAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZS5pbmNsdWRlcyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0ua2V5KSl7XG4gICAgICAgICAgICAgICAgdGNoYXJyLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgIH1lbHNlIHRjaGFyci5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHB1c2ggdGhlIHZhbFxuICAgICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKHRjaGFycik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGNoJyx0Y2hhcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucyE9bnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucy5sZW5ndGg+MCl7XG4gICAgICAgIGZvcihsZXQgdiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucyApe1xuICAgICAgICAgLy8gc2V0VGltZW91dCggKCk9PntcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlPT1udWxsKVxuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ubWVzc2FnZT1cIk5vdCBWYWxpZCAhIVwiXG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZT09J3JlcXVpcmVkJylcbiAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZT09J21hdGNoJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuY2hlY2tQYXNzd29yZHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0nYXV0b3JlcXVpcmVkJykge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmF1dG9yZXF1aXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0ncGF0dGVybicpXG4gICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtYXhMZW5ndGgnKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtaW4nKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtYXgnKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtaW5MZW5ndGgnKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgIC8vfSwwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZW1vQXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV09bmV3IEZvcm1Db250cm9sKCcnKTtcbiAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGU9PSdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlICkge1xuICAgICAgICBsZXQgdGNodmFyOmFueT1mYWxzZTtcbiAgICAgICAgLy9sZXRcbiAgICAgICAgY29uc29sZS5sb2coJ3Z2ID8/PyAnLHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUpO1xuICAgICAgICAvL3RoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1BcnJheShbXSkpO1xuICAgICAgICBmb3IobGV0IGogaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsKXtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZS5pbmNsdWRlcyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbal0ua2V5KSlcbiAgICAgICAgICAgIHRjaHZhcj10cnVlO1xuICAgICAgICAgIGVsc2UgdGNodmFyPWZhbHNlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCduJyxuLGosdGNodmFyKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUrJ19fJytqLCBuZXcgRm9ybUNvbnRyb2wodGNodmFyLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICAgICAvKmNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGNodmFyKTsgLy8gaWYgZmlyc3QgaXRlbSBzZXQgdG8gdHJ1ZSwgZWxzZSBmYWxzZVxuICAgICAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdIGFzIEZvcm1BcnJheSkucHVzaChjb250cm9sKTsqL1xuICAgICAgICAgIC8vdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW1xuICAgICAgLy90aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2wodGNodmFyKVxuICAgIC8vXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyp0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXG4gICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woZmFsc2UpLFxuICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKGZhbHNlKSxcbiAgICBdKSk7Ki9cbiAgICAvL3RoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1Db250cm9sKHRlbWNvbnRyb2xhcnJbMF0sIHRlbXZhbGlkYXRpb25ydWxlKSk7XG5cblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIFxuXG4gICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh0ZW1jb250cm9sYXJyWzBdLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgfVxuICAgICAgLy8nbmV3Q29udHJvbCcsIG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICB9XG4gICAgLy89dGhpcy5jaGVja1Bhc3N3b3Jkcyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgLy90aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoZGVtb0FycmF5KTtcblxuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAsJ2ZnJyxkZW1vQXJyYXkpO1xuICAgICAgdGhpcy5zaG93Zm9ybT10cnVlO1xuICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5zdWJtaXRhY3RpdmU9PW51bGwpXG4gICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlPXRydWU7XG4gICAgICBjb25zb2xlLmxvZygnZ3JwJyx0aGlzLmZvcm1Hcm91cC5jb250cm9scyk7XG4gICAgfSwgMTApO1xuXG4gIH1cbiAgcmVtb3ZlY2hpcHNpbmdsZSh2YWw6YW55KXtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdPW51bGw7XG4gIH1cbiAgcmVtb3ZlY2hpcG11bHRpcGxlKHZhbDphbnksaW5kZXg6YW55KXtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLnNwbGljZShpbmRleCwxKTtcbiAgICBpZih0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLmxlbmd0aD09MClcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdPW51bGw7XG4gIH1cbiAgc2V0YXV0b2NvbXBsZXRldmFsdWUodmFsOmFueSxmaWVsZDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdmZicsdmFsLGZpZWxkKTtcbiAgICBpZihmaWVsZC5tdWx0aXBsZT09bnVsbCl7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV09dmFsLmtleTtcbiAgICB9ZWxzZXtcbiAgICAgIGlmKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXT09bnVsbClcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXT1bXTtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5wdXNoKHZhbC5rZXkpO1xuXG4gICAgfVxuICAgIHRoaXMuaW5wdXRibHVyKGZpZWxkLm5hbWUpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgXG4gIH1cblxuICBzZXRDaGFuZ2VWYWxpZGF0ZSgpIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3ZhbGlkYXRlJykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgKHZhbGlkYXRlKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbGlkYXRlID09ICcxJykge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGVBbGVydCA9IFwiWW91IG5lZWQgdG8gc3BlY2lmeSBhdCBsZWFzdCAzIGNoYXJhY3RlcnNcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgKVxuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpIGFzIEZvcm1Db250cm9sXG4gIH1cblxuXG4gIGNoZWNrUGFzc3dvcmRzKGdyb3VwOiBGb3JtR3JvdXApIHsgLy8gaGVyZSB3ZSBoYXZlIHRoZSAncGFzc3dvcmRzJyBncm91cFxuICAgIGxldCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIGlmKGNvbmZpcm1QYXNzPT1udWxsIHx8IGNvbmZpcm1QYXNzPT0nJyl7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHtyZXF1aXJlZDp0cnVlfSk7XG4gICAgICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZihwYXNzIT1jb25maXJtUGFzcyl7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsnbWF0Y2gnOnRydWV9KTtcbiAgICAgIHJldHVybiB7bWF0Y2g6dHJ1ZX07XG4gICAgfVxuXG4gICAgLy9yZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbiAgfVxuICBjaGVja1Bhc3N3b3JkKGNvbnRyb2wpIHtcbiAgICBsZXQgZW50ZXJlZFBhc3N3b3JkID0gY29udHJvbC52YWx1ZVxuICAgIGxldCBwYXNzd29yZENoZWNrID0gL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkoPz0uezgsfSkvO1xuICAgIHJldHVybiAoIXBhc3N3b3JkQ2hlY2sudGVzdChlbnRlcmVkUGFzc3dvcmQpICYmIGVudGVyZWRQYXNzd29yZCkgPyB7ICdyZXF1aXJlbWVudHMnOiB0cnVlIH0gOiBudWxsO1xuICB9XG4gIGF1dG9yZXF1aXJlZChncm91cDogYW55KSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcblxuICBmb3IobGV0IGIgaW4gZ3JvdXApe1xuICAgIGlmKGdyb3VwW2JdLnR5cGU9PSdhdXRvY29tcGxldGUnICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zIT1udWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdIT1udWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdLnJ1bGU9PSdhdXRvcmVxdWlyZWQnICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtncm91cFtiXS5uYW1lXT09bnVsbCl7XG5cbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdLnNldEVycm9ycyh7J2F1dG9yZXF1aXJlZCc6dHJ1ZX0pO1xuICAgICAgcmV0dXJuIHthdXRvcmVxdWlyZWQ6dHJ1ZX07XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdiZ3JycicsZ3JvdXAsZ3JvdXAubmFtZSk7XG4gIC8vIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdICE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9ucyE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXSE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXS5ydWxlPT0nYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXAubmFtZV09PW51bGwpe1xuICBcbiAgXG5cbiAgLy8gbGV0IHBhc3MgPSBncm91cC5jb250cm9scy5wYXNzd29yZC52YWx1ZTtcbiAgLy8gbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAvLyBpZihjb25maXJtUGFzcz09bnVsbCB8fCBjb25maXJtUGFzcz09Jycpe1xuICAvLyAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoe3JlcXVpcmVkOnRydWV9KTtcbiAgLy8gICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAvLyB9XG4gIC8vIGlmKHBhc3MhPWNvbmZpcm1QYXNzKXtcbiAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsnbWF0Y2gnOnRydWV9KTtcbiAgLy8gICByZXR1cm4ge21hdGNoOnRydWV9O1xuICAvLyB9XG5cbiAgLy9yZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbn1cblxuICBjaGVja0luVXNlRW1haWwoY29udHJvbCkge1xuICAgIC8vIG1pbWljIGh0dHAgZGF0YWJhc2UgYWNjZXNzXG4gICAgbGV0IGRiID0gWyd0b255QGdtYWlsLmNvbSddO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IChkYi5pbmRleE9mKGNvbnRyb2wudmFsdWUpICE9PSAtMSkgPyB7ICdhbHJlYWR5SW5Vc2UnOiB0cnVlIH0gOiBudWxsO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9LCA0MDAwKVxuICAgIH0pXG4gIH1cblxuICBnZXRFcnJvcihkYXRhOmFueSkge1xuICAgIGNvbnNvbGUubG9nKCdnZXRFcnJvcicsZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCcgOlxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3BhdHRlcm4nKSA/ICdOb3QgYSB2YWxpZCBlbWFpbGFkZHJlc3MnIDpcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcignYWxyZWFkeUluVXNlJykgPyAnVGhpcyBlbWFpbGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UnIDogJyc7XG4gIH1cblxuICBnZXRFcnJvclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnRmllbGQgaXMgcmVxdWlyZWQgKGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyKScgOlxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVtZW50cycpID8gJ1Bhc3N3b3JkIG5lZWRzIHRvIGJlIGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyJyA6ICcnO1xuICB9XG5cbiAgb25TdWJtaXQocG9zdCkge1xuICAgIHRoaXMucG9zdCA9IHBvc3Q7XG4gICAgbGV0IHRlbXBmb3JtdmFsOmFueT17fTtcbiAgICBmb3IgKGxldCB4IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMseCwnZXJyJyk7XG4gICAgICAvL2lmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbGlkKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZygneCcseCk7XG4gICAgICAgIGxldCBiPXguc3BsaXQoJ19fJyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2InLGIsYi5sZW5ndGgsYlswXSk7XG4gICAgICAgIGZvcihsZXQgbSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcyl7XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZT09J2F1dG9jb21wbGV0ZScpe1xuICAgICAgICAgICAgaWYodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICE9bnVsbCAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0hPW51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsaWRhdGlvbnMhPW51bGwpe1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0b2Vycm9yJyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoe3JlcXVpcmVkOm51bGx9KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dG9lcnJvciBhZnRlciAnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dG9lcnJvciBzZXQnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNldEVycm9ycyh7cmVxdWlyZWQ6dHJ1ZX0pO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0b2Vycm9yIHNldCBhZnRlciAnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHg9PXRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGVtcGZvcm12YWxbeF09PW51bGwpIFxuICAgICAgICAgICAgdGVtcGZvcm12YWxbeF09dGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihiLmxlbmd0aD4xICYmIGJbMF09PXRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUhPXggJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZT09J2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSE9bnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWFhYWZmLi4uJyk7XG4gICAgICAgICAgICBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZT09dHJ1ZSl7XG4gICAgICAgICAgICAgIGZvcihsZXQgayBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWwpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbFtrXVsna2V5J109PWJbMV0pe1xuICAgICAgICAgICAgICAgICAgaWYodGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV09PW51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdPVtdO1xuICAgICAgICAgICAgICAgICAgdGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucHVzaChiWzFdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdndicsYlsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgaWYoeD09dGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XT09bnVsbClcbiAgICAgICAgdGVtcGZvcm12YWxbeF09dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWU7XG4gICAgLy8gIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMseCwnZXJyMjInKTtcbiAgICAgIFxuICAgICAgLy99XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBvc3QsJ3Bvc3QnLHRoaXMuZm9ybUdyb3VwLnZhbGlkLHRoaXMuZm9ybWRhdGF2YWwsdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwsJ2ZmZmYnLHRlbXBmb3JtdmFsKTtcblxuICAgIGlmKHRoaXMuZm9ybUdyb3VwLnZhbGlkKXtcblxuXG4gICAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICAgIGxldCBsaW5rOmFueT10aGlzLmZvcm1kYXRhdmFsLmFwaVVybCArdGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludDtcbiAgICAgIGxldCBzb3VyY2U6YW55PXt9O1xuICAgICAgc291cmNlWydkYXRhJ109dGhpcy5mb3JtR3JvdXAudmFsdWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOnRoaXMuZm9ybWRhdGF2YWwuc3VjY2Vzc21lc3NhZ2V9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCdyZWQnLHRoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoKTtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCE9bnVsbCl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKXtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246ICAgNjAwMCxcbiAgICAgICAgICBkYXRhOiB7ZXJyb3JtZXNzYWdlOidTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19