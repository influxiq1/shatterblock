/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { SnackbarComponent } from "../listing.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
//import {MatSnackBar} from "@angular/material/snack-bar";
export class ShowformComponent {
    /**
     * @param {?} formBuilder
     * @param {?} _apiService
     * @param {?} _snackBar
     * @param {?} router
     */
    constructor(formBuilder, _apiService, _snackBar, router) {
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this._snackBar = _snackBar;
        this.router = router;
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
    /**
     * @param {?} formdata
     * @return {?}
     */
    set formdata(formdata) {
        this.formdataval = formdata;
        console.log(this.formdataval);
    }
    /**
     * @param {?} formfieldrefreshdata
     * @return {?}
     */
    set formfieldrefreshdata(formfieldrefreshdata) {
        this.formfieldrefreshdataval = formfieldrefreshdata;
        console.log(this.formfieldrefreshdataval);
    }
    /**
     * @param {?} formfieldrefresh
     * @return {?}
     */
    set formfieldrefresh(formfieldrefresh) {
        this.formfieldrefreshval = formfieldrefresh;
        console.log(this.formfieldrefreshval);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createForm();
        //this.setChangeValidate()
    }
    /**
     * @return {?}
     */
    navtocancel() {
        if (this.formdataval.cancelroute != null) {
            this.router.navigate([this.formdataval.cancelroute]);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log('ngonchange in form !!!', changes, 'frv', this.formfieldrefreshdataval);
        for (let v in changes) {
            //console.log(v,changes[v],'vv');
            if (v == 'formfieldrefreshdata') {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    console.log('fff in set tt');
                    if (this.formfieldrefreshdataval != null) {
                        console.log(this.formfieldrefreshdataval, 'm');
                        console.log(this.formfieldrefreshdataval.field);
                        console.log(this.formfieldrefreshdataval.value);
                        if (this.formGroup != null)
                            this.formGroup.controls[this.formfieldrefreshdataval.field].patchValue(this.formfieldrefreshdataval.value);
                    }
                }), 0);
            }
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputblur(val) {
        //console.log('on blur .....');
        this.formGroup.controls[val].markAsUntouched();
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    checkchange(field, index) {
        console.log(field, 'change', this.formGroup.controls[field.name].value);
        if (field.dependent != null) {
            if (field.dependent.condval == this.formGroup.controls[field.name].value) {
                /** @type {?} */
                let temvalidationrulet = [];
                for (let v in field.dependent.field.validations) {
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
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    filterautocomplete(val, data) {
        this.inputblur(val);
        console.log('cc', this.formGroup.controls[val].value, data.val);
        /** @type {?} */
        let fieldval = this.formGroup.controls[val].value;
        if (fieldval == '' || fieldval == null) {
            this.filerfielddata = data.val;
        }
        else {
            /** @type {?} */
            let filterval = data.val.filter((/**
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
    }
    /**
     * @return {?}
     */
    createForm() {
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
        for (let n in this.formdataval.fields) {
            /** @type {?} */
            let temcontrolarr = [];
            /** @type {?} */
            let temvalidationrule = [];
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
                        let tcharr = [];
                        for (let b in this.formdataval.fields[n].val) {
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
                for (let v in this.formdataval.fields[n].validations) {
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
                let tchvar = false;
                //let
                console.log('vv ??? ', this.formdataval.fields[n].value, this.formdataval.fields[n].name, this.formdataval.fields[n].multiple);
                //this.formGroup.addControl(this.formdataval.fields[n].name, new FormArray([]));
                for (let j in this.formdataval.fields[n].val) {
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
        () => {
            //console.log(this.formGroup,'fg',demoArray);
            this.showform = true;
            if (this.formdataval.submitactive == null)
                this.formdataval.submitactive = true;
            console.log('grp', this.formGroup.controls);
        }), 10);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    removechipsingle(val) {
        this.autocompletefiledvalue[val.name] = null;
    }
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    removechipmultiple(val, index) {
        this.autocompletefiledvalue[val.name].splice(index, 1);
        if (this.autocompletefiledvalue[val.name].length == 0)
            this.autocompletefiledvalue[val.name] = null;
    }
    /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    setautocompletevalue(val, field) {
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
    }
    /**
     * @return {?}
     */
    setChangeValidate() {
        this.formGroup.get('validate').valueChanges.subscribe((/**
         * @param {?} validate
         * @return {?}
         */
        (validate) => {
            if (validate == '1') {
                this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                this.formGroup.get('name').setValidators(Validators.required);
            }
            this.formGroup.get('name').updateValueAndValidity();
        }));
    }
    /**
     * @return {?}
     */
    get name() {
        return (/** @type {?} */ (this.formGroup.get('name')));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    checkPasswords(group) {
        // here we have the 'passwords' group
        /** @type {?} */
        let pass = group.controls.password.value;
        /** @type {?} */
        let confirmPass = group.controls.confirmpassword.value;
        if (confirmPass == null || confirmPass == '') {
            group.controls.confirmpassword.setErrors({ required: true });
            return { required: true };
        }
        if (pass != confirmPass) {
            group.controls.confirmpassword.setErrors({ 'match': true });
            return { match: true };
        }
        //return pass === confirmPass ? null : { notSame: true }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    checkPassword(control) {
        /** @type {?} */
        let enteredPassword = control.value;
        /** @type {?} */
        let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    autorequired(group) {
        for (let b in group) {
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
    }
    /**
     * @param {?} control
     * @return {?}
     */
    checkInUseEmail(control) {
        // mimic http database access
        /** @type {?} */
        let db = ['tony@gmail.com'];
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
                observer.next(result);
                observer.complete();
            }), 4000);
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getError(data) {
        console.log('getError', data);
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
            this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
                this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    }
    /**
     * @return {?}
     */
    getErrorPassword() {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
            this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
    }
    /**
     * @param {?} post
     * @return {?}
     */
    onSubmit(post) {
        this.post = post;
        /** @type {?} */
        let tempformval = {};
        for (let x in this.formGroup.controls) {
            this.formGroup.controls[x].markAsTouched();
            console.log(this.formGroup.controls[x].errors, x, 'err');
            //if(this.formGroup.controls[x].valid){
            //console.log('x',x);
            /** @type {?} */
            let b = x.split('__');
            //console.log('b',b,b.length,b[0]);
            for (let m in this.formdataval.fields) {
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
                        for (let k in this.formdataval.fields[m].val) {
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
            let link = this.formdataval.apiUrl + this.formdataval.endpoint;
            /** @type {?} */
            let source = {};
            source['data'] = this.formGroup.value;
            this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                if (result.status == 'success') {
                    this.formGroup.reset();
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: this.formdataval.successmessage }
                    });
                    console.log(result, 'red', this.formdataval.redirectpath);
                    if (this.formdataval.redirectpath != null) {
                        this.router.navigate([this.formdataval.redirectpath]);
                    }
                }
                if (result.status == 'error') {
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: result
                    });
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                //console.log('Oooops!');
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                });
                this.loading = false;
            }));
        }
    }
}
ShowformComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-showform',
                template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n<section *ngIf=\"loading == true\"  class=\"example-section\">\n    <mat-progress-bar\n            class=\"example-margin\"\n            [color]=\"color\"\n            [mode]=\"mode\"\n            [value]=\"value\"\n            [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container  *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n                <mat-card class=\"form_header_{{fields.name}}\" *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \" [innerHTML]=\"fields.heading\"></mat-card>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- for select-->\n                    <!-- <div>ff</div> -->\n                    <mat-label> Select {{fields.label}}  </mat-label>\n                    <mat-select [formControlName]=\"fields.name\" [multiple]=\"fields.multiple?true:false\">\n                        <mat-option *ngFor=\"let data of fields.val\"  [value]=\"data.val\"> {{data.name}}</mat-option>\n                    </mat-select>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\"  [innerHTML]=\"fields.label\"></mat-label>\n                    <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"   [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}} </mat-checkbox>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n                </div>\n                <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \" class=\"form-element form_field_{{fields.name}}\">\n                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\"  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                        <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                            <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"   formControlName=\"{{fields.name}}__{{vi}}\" [value]=\"vals.key\">{{vals.val}} </mat-checkbox>\n\n                        </ng-container>\n                    </ng-container>\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                   <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <mat-radio-group\n                            aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\"\n                            [formControlName]=\"fields.name\" >\n                        <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                            {{vals.val}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n\n                    <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </div>\n                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type=='password')\" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n                    <input  matInput  (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\" [placeholder]=\"fields.label\" [formControlName]=\"fields.name\">\n                  \n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n                 <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n                    <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea>\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n\n                 <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label>\n\n                    <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n<mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \" class=\"form-element form_field_{{fields.name}}\">\n                    <mat-label  [innerHTML]=\"fields.label\"></mat-label> \n                    <!-- {{fields.val.length}}\n -->\n                \n <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\" aria-label=\"{{fields.name}} data\">\n     <ng-container *ngFor=\"let vals of fields.val \">\n     <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n        <mat-chip  [removable]=true  >{{vals.val}}\n            <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n        </mat-chip>\n         </ng-container>\n\n     </ng-container>\n    \n  </mat-chip-list>\n\n\n  <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\" aria-label=\"{{fields.name}} data\">\n    <ng-container *ngFor=\"let vals of fields.val \">\n    <ng-container  *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n    <ng-container *ngIf=\"vals.key==avals\">\n       <mat-chip  [removable]=true  >{{vals.val}}\n           <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel</mat-icon>\n       </mat-chip>\n       </ng-container>\n        </ng-container>\n\n    </ng-container>\n   \n </mat-chip-list>\n                    <input matInput (blur)=\"inputblur(fields.name)\" (keyup)=filterautocomplete(fields.name,fields)  [formControlName]=\"fields.name\" placeholder=\"{{fields.label}}\"\n           [matAutocomplete]=\"auto\">\n\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\" (click)=\"setautocompletevalue(vals,fields)\">\n        <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n        <span>{{vals.val}}</span>\n        <!-- <small>Population: {{state.population}}</small> -->\n      </mat-option>\n    </mat-autocomplete>\n  \n                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                        <mat-hint  align=\"start\" >{{fields.hint}}</mat-hint>\n                    </ng-container>\n\n\n                </mat-form-field>\n\n<!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n<div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\" class=\"form-element form_field_{{fields.name}}\">\n    <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n    <ckeditor\n    [formControlName]=\"fields.name\"\n    >\n  </ckeditor>\n    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n        <ng-container *ngFor=\"let valdidations of fields.validations\">\n            <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n        </ng-container>\n    </mat-error>\n</div>\n\n              \n\n\n\n\n                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\" class=\"form-element form_field_{{fields.name}}\">\n                    <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n                </div>\n\n\n            </ng-container>\n        </ng-container>\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formdataval.submitactive\">Submit Form</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\" (click)=\"navtocancel()\" >Cancel</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\" class=\"button\"  >Reset</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ShowformComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: MatSnackBar },
    { type: Router }
];
ShowformComponent.propDecorators = {
    formdata: [{ type: Input }],
    formfieldrefreshdata: [{ type: Input }],
    formfieldrefresh: [{ type: Input }]
};
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQXFCLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFTLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFnQixpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRFLE9BQU8sRUFBcUIsV0FBVyxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBRTVGLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFRdkMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQW1DNUIsWUFBb0IsV0FBd0IsRUFBUSxXQUF1QixFQUFTLFNBQXNCLEVBQVMsTUFBYztRQUE3RyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFRLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFqQ2pJLGVBQVUsR0FBVyx3QkFBd0IsQ0FBQztRQUM5QyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFTLEtBQUssQ0FBQztRQUN2QixZQUFPLEdBQVMsS0FBSyxDQUFDO1FBQ3RCLHdCQUFtQixHQUFTLEtBQUssQ0FBQztRQUNsQyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0Qiw0QkFBdUIsR0FBUSxFQUFFLENBQUM7UUFDbEMsbUJBQWMsR0FBSyxFQUFFLENBQUM7UUFDdEIsMkJB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QUFDLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzdGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO3dCQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUVyRztvQkFDRCxJQUFHLENBQUMsSUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUk7d0JBQzdELFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdFO2dCQUNELElBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRSxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFFLElBQUksRUFBQztvQkFDeEwsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FB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OztJQUN0QixtREFBOEI7O0lBSTlCLGtDQUFnQzs7SUFDaEMsaUNBQTRCOztJQUM1QixrQ0FBVzs7SUFDWCx3Q0FBaUI7Ozs7O0lBa0JMLHdDQUFnQzs7SUFBQyx3Q0FBOEI7Ozs7O0lBQUMsc0NBQThCOzs7OztJQUFDLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCwgU2ltcGxlQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1kaWFsb2csIFNuYWNrYmFyQ29tcG9uZW50fSBmcm9tIFwiLi4vbGlzdGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy9pbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2hvd2Zvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvd2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaG93Zm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hvd2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgdGl0bGVBbGVydDogc3RyaW5nID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICBwb3N0OiBhbnkgPSAnJztcbiAgc2hvd2Zvcm06Ym9vbGVhbj1mYWxzZTtcbiAgbG9hZGluZzpib29sZWFuPWZhbHNlO1xuICBmb3JtZmllbGRyZWZyZXNodmFsOmJvb2xlYW49ZmFsc2U7XG4gIGZvcm1kYXRhdmFsOiBhbnkgPSB7fTtcbiAgZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWw6IGFueSA9IHt9O1xuICBmaWxlcmZpZWxkZGF0YTphbnk9W107XG4gIGF1dG9jb21wbGV0ZWZpbGVkdmFsdWU6YW55PVtdO1xuXG4gIC8qZm9yIHByb2dyZXNzIGJhciovXG5cbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcbiAgbW9kZTogYW55ID0gJ2luZGV0ZXJtaW5hdGUnO1xuICB2YWx1ZSA9IDUwO1xuICBidWZmZXJWYWx1ZSA9IDc1O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZGF0YShmb3JtZGF0YTogYW55KSB7XG4gICAgdGhpcy5mb3JtZGF0YXZhbCA9IGZvcm1kYXRhO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoZGF0YShmb3JtZmllbGRyZWZyZXNoZGF0YTogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCA9IGZvcm1maWVsZHJlZnJlc2hkYXRhO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoKGZvcm1maWVsZHJlZnJlc2g6IGFueSkge1xuICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaHZhbCA9IGZvcm1maWVsZHJlZnJlc2g7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNodmFsKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSxwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG5cblxuICAgIC8vdGhpcy5zZXRDaGFuZ2VWYWxpZGF0ZSgpXG4gIH1cbiAgbmF2dG9jYW5jZWwoKXtcbiAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlIT1udWxsKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlXSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG5cbiAgICBjb25zb2xlLmxvZygnbmdvbmNoYW5nZSBpbiBmb3JtICEhIScsY2hhbmdlcywnZnJ2Jyx0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsKTtcbiAgICBmb3IobGV0IHYgaW4gY2hhbmdlcyl7XG4gICAgICAvL2NvbnNvbGUubG9nKHYsY2hhbmdlc1t2XSwndnYnKTtcbiAgICAgIGlmKHY9PSdmb3JtZmllbGRyZWZyZXNoZGF0YScpe1xuICAgICAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZmZiBpbiBzZXQgdHQnKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLCdtJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpO1xuICAgICAgICAgICAgICBpZih0aGlzLmZvcm1Hcm91cCE9bnVsbCApdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZF0ucGF0Y2hWYWx1ZSh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlKVxuXG4gICAgICAgICAgfVxuICAgICAgICB9LDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIGNoZWNrY2hhbmdlKGZpZWxkOmFueSxpbmRleDphbnkpe1xuICAgIGNvbnNvbGUubG9nKGZpZWxkLCdjaGFuZ2UnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlKTtcbiAgICBpZihmaWVsZC5kZXBlbmRlbnQhPW51bGwpe1xuICAgICAgaWYoZmllbGQuZGVwZW5kZW50LmNvbmR2YWw9PXRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlKXtcbiAgICAgICAgbGV0IHRlbXZhbGlkYXRpb25ydWxldDphbnk9W107XG5cbiAgICAgICAgZm9yKGxldCB2IGluICBmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnMpe1xuICAgICAgICAgIC8vIHNldFRpbWVvdXQoICgpPT57XG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5tZXNzYWdlPT1udWxsKVxuICAgICAgICAgICBmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ubWVzc2FnZT1cIk5vdCBWYWxpZCAhIVwiXG4gICAgICAgICAgIGlmKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS5ydWxlPT0ncmVxdWlyZWQnKVxuICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxldC5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J21hdGNoJykge1xuICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmNoZWNrUGFzc3dvcmRzKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J2F1dG9yZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuYXV0b3JlcXVpcmVkKTtcbiAgICAgICAgIH1cbiAgICAgICAgICAgaWYoZmllbGQuZGVwZW5kZW50LmZpZWxkLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdwYXR0ZXJuJylcbiAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGV0LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J21heExlbmd0aCcpXG4gICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxldC5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J21pbicpXG4gICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxldC5wdXNoKFZhbGlkYXRvcnMubWluKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J21heCcpXG4gICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxldC5wdXNoKFZhbGlkYXRvcnMubWF4KGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICBpZihmaWVsZC5kZXBlbmRlbnQuZmllbGQudmFsaWRhdGlvbnNbdl0ucnVsZT09J21pbkxlbmd0aCcpXG4gICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxldC5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAvL30sMCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChmaWVsZC5kZXBlbmRlbnQuZmllbGQubmFtZSwgbmV3IEZvcm1Db250cm9sKGZpZWxkLmRlcGVuZGVudC5maWVsZC52YWx1ZSwgdGVtdmFsaWRhdGlvbnJ1bGV0KSk7XG4gICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShpbmRleCsxLDAsZmllbGQuZGVwZW5kZW50LmZpZWxkKTtcblxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGQuZGVwZW5kZW50LmZpZWxkLm5hbWUpO1xuICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UoaW5kZXgrMSwxKTtcbiAgICAgICAgXG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaWx0ZXJhdXRvY29tcGxldGUodmFsOmFueSxkYXRhOmFueSl7XG4gICAgdGhpcy5pbnB1dGJsdXIodmFsKTtcbiAgICBjb25zb2xlLmxvZygnY2MnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWUsZGF0YS52YWwpO1xuICAgIGxldCBmaWVsZHZhbD10aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWxdLnZhbHVlO1xuICAgIGlmKGZpZWxkdmFsPT0nJyB8fCBmaWVsZHZhbD09bnVsbCl7XG4gICAgICB0aGlzLmZpbGVyZmllbGRkYXRhPWRhdGEudmFsO1xuICAgIH1lbHNle1xuICAgIGxldCBmaWx0ZXJ2YWwgPSBkYXRhLnZhbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlJyxlLGZpZWxkdmFsKVxuICAgIHJldHVybiBlLnZhbC5pbmNsdWRlcyhmaWVsZHZhbCk7XG59KTtcbiAgICB0aGlzLmZpbGVyZmllbGRkYXRhPWZpbHRlcnZhbDtcbiAgICBjb25zb2xlLmxvZygnZmlsJyxmaWx0ZXJ2YWwpO1xuICB9XG4gIFxuICB9XG5cblxuICBjcmVhdGVGb3JtKCkge1xuICAgIC8qdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlscmVnZXgpXSwgdGhpcy5jaGVja0luVXNlRW1haWxdLFxuICAgICAgJ2Z1bGxuYW1lJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAvLyAncGFzc3dvcmQnOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuY2hlY2tQYXNzd29yZF1dLFxuICAgICAgLy8nZGVzY3JpcHRpb24nOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCldXSxcbiAgICAgIC8vJ3ZhbGlkYXRlJzogJydcbiAgICB9KTsqL1xuICAgIC8vbGV0IGRlbW9BcnJheTphbnk9W107XG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCwnZmcnKVxuICAgIGZvcihsZXQgbiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcyl7XG4gICAgICBsZXQgdGVtY29udHJvbGFycjphbnk9W107XG4gICAgICBsZXQgdGVtdmFsaWRhdGlvbnJ1bGU6YW55PVtdO1xuICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUhPW51bGwpXG4gICAgICB0ZW1jb250cm9sYXJyLnB1c2godGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpO1xuICAgICAgZWxzZVxuICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2goJycpO1xuICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZT09J2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSE9bnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZT09dHJ1ZSl7XG4gICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlPT1udWxsKSAgdGVtY29udHJvbGFyci5wdXNoKFtdKTtcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwhPW51bGwpe1xuICAgICAgICAgICAgbGV0IHRjaGFycjphbnk9W107XG4gICAgICAgICAgICBmb3IobGV0IGIgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2InLGIsdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2JdKTtcbiAgICAgICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2JdLmtleSkpe1xuICAgICAgICAgICAgICAgIHRjaGFyci5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICB9ZWxzZSB0Y2hhcnIucHVzaChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBwdXNoIHRoZSB2YWxcbiAgICAgICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0Y2hhcnIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RjaCcsdGNoYXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMhPW51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMubGVuZ3RoPjApe1xuICAgICAgICBmb3IobGV0IHYgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMgKXtcbiAgICAgICAgIC8vIHNldFRpbWVvdXQoICgpPT57XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ubWVzc2FnZT09bnVsbClcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLm1lc3NhZ2U9XCJOb3QgVmFsaWQgISFcIlxuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdyZXF1aXJlZCcpXG4gICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGU9PSdtYXRjaCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmNoZWNrUGFzc3dvcmRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZT09J2F1dG9yZXF1aXJlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5hdXRvcmVxdWlyZWQpO1xuICAgICAgICB9XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZT09J3BhdHRlcm4nKVxuICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF4TGVuZ3RoJylcbiAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWluJylcbiAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5taW4odGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWF4JylcbiAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5tYXgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlPT0nbWluTGVuZ3RoJylcbiAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAvL30sMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZGVtb0FycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdPW5ldyBGb3JtQ29udHJvbCgnJyk7XG4gICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlPT0nY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IHRjaHZhcjphbnk9ZmFsc2U7XG4gICAgICAgIC8vbGV0XG4gICAgICAgIGNvbnNvbGUubG9nKCd2diA/Pz8gJyx0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSx0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlKTtcbiAgICAgICAgLy90aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQXJyYXkoW10pKTtcbiAgICAgICAgZm9yKGxldCBqIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCl7XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2pdLmtleSkpXG4gICAgICAgICAgICB0Y2h2YXI9dHJ1ZTtcbiAgICAgICAgICBlbHNlIHRjaHZhcj1mYWxzZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbicsbixqLHRjaHZhcik7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lKydfXycraiwgbmV3IEZvcm1Db250cm9sKHRjaHZhciwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgICAgLypjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKHRjaHZhcik7IC8vIGlmIGZpcnN0IGl0ZW0gc2V0IHRvIHRydWUsIGVsc2UgZmFsc2VcbiAgICAgICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSBhcyBGb3JtQXJyYXkpLnB1c2goY29udHJvbCk7Ki9cbiAgICAgICAgICAvL3RoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSx0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtcbiAgICAgIC8vdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRjaHZhcilcbiAgICAvL10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW1xuICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKGZhbHNlKSxcbiAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0cnVlKSxcbiAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0cnVlKSxcbiAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgXSkpOyovXG4gICAgLy90aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh0ZW1jb250cm9sYXJyWzBdLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuXG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBcblxuICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUNvbnRyb2wodGVtY29udHJvbGFyclswXSwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgIH1cbiAgICAgIC8vJ25ld0NvbnRyb2wnLCBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgfVxuICAgIC8vPXRoaXMuY2hlY2tQYXNzd29yZHModGhpcy5mb3JtR3JvdXApO1xuICAgIC8vdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGRlbW9BcnJheSk7XG5cbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCdmZycsZGVtb0FycmF5KTtcbiAgICAgIHRoaXMuc2hvd2Zvcm09dHJ1ZTtcbiAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlPT1udWxsKVxuICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLnN1Ym1pdGFjdGl2ZT10cnVlO1xuICAgICAgY29uc29sZS5sb2coJ2dycCcsdGhpcy5mb3JtR3JvdXAuY29udHJvbHMpO1xuICAgIH0sIDEwKTtcblxuICB9XG4gIHJlbW92ZWNoaXBzaW5nbGUodmFsOmFueSl7XG4gICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXT1udWxsO1xuICB9XG4gIHJlbW92ZWNoaXBtdWx0aXBsZSh2YWw6YW55LGluZGV4OmFueSl7XG4gICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgaWYodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXS5sZW5ndGg9PTApXG4gICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXT1udWxsO1xuICB9XG4gIHNldGF1dG9jb21wbGV0ZXZhbHVlKHZhbDphbnksZmllbGQ6YW55KXtcbiAgICBjb25zb2xlLmxvZygnZmYnLHZhbCxmaWVsZCk7XG4gICAgaWYoZmllbGQubXVsdGlwbGU9PW51bGwpe1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdPXZhbC5rZXk7XG4gICAgfWVsc2V7XG4gICAgICBpZih0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV09PW51bGwpXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV09W107XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0ucHVzaCh2YWwua2V5KTtcblxuICAgIH1cbiAgICB0aGlzLmlucHV0Ymx1cihmaWVsZC5uYW1lKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS5wYXRjaFZhbHVlKG51bGwpO1xuICAgIFxuICB9XG5cbiAgc2V0Q2hhbmdlVmFsaWRhdGUoKSB7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCd2YWxpZGF0ZScpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAgICh2YWxpZGF0ZSkgPT4ge1xuICAgICAgICAgIGlmICh2YWxpZGF0ZSA9PSAnMScpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlQWxlcnQgPSBcIllvdSBuZWVkIHRvIHNwZWNpZnkgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKSBhcyBGb3JtQ29udHJvbFxuICB9XG5cblxuICBjaGVja1Bhc3N3b3Jkcyhncm91cDogRm9ybUdyb3VwKSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcbiAgICBsZXQgcGFzcyA9IGdyb3VwLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xuICAgIGxldCBjb25maXJtUGFzcyA9IGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC52YWx1ZTtcbiAgICBpZihjb25maXJtUGFzcz09bnVsbCB8fCBjb25maXJtUGFzcz09Jycpe1xuICAgICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7cmVxdWlyZWQ6dHJ1ZX0pO1xuICAgICAgcmV0dXJuIHsgcmVxdWlyZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgaWYocGFzcyE9Y29uZmlybVBhc3Mpe1xuICAgICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7J21hdGNoJzp0cnVlfSk7XG4gICAgICByZXR1cm4ge21hdGNoOnRydWV9O1xuICAgIH1cblxuICAgIC8vcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG4gIH1cbiAgY2hlY2tQYXNzd29yZChjb250cm9sKSB7XG4gICAgbGV0IGVudGVyZWRQYXNzd29yZCA9IGNvbnRyb2wudmFsdWVcbiAgICBsZXQgcGFzc3dvcmRDaGVjayA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89Lns4LH0pLztcbiAgICByZXR1cm4gKCFwYXNzd29yZENoZWNrLnRlc3QoZW50ZXJlZFBhc3N3b3JkKSAmJiBlbnRlcmVkUGFzc3dvcmQpID8geyAncmVxdWlyZW1lbnRzJzogdHJ1ZSB9IDogbnVsbDtcbiAgfVxuICBhdXRvcmVxdWlyZWQoZ3JvdXA6IGFueSkgeyAvLyBoZXJlIHdlIGhhdmUgdGhlICdwYXNzd29yZHMnIGdyb3VwXG5cbiAgZm9yKGxldCBiIGluIGdyb3VwKXtcbiAgICBpZihncm91cFtiXS50eXBlPT0nYXV0b2NvbXBsZXRlJyAmJiBncm91cFtiXS52YWxpZGF0aW9ucyE9bnVsbCAmJiBncm91cFtiXS52YWxpZGF0aW9uc1swXSE9bnVsbCAmJiBncm91cFtiXS52YWxpZGF0aW9uc1swXS5ydWxlPT0nYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXBbYl0ubmFtZV09PW51bGwpe1xuXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tncm91cC5uYW1lXS5zZXRFcnJvcnMoeydhdXRvcmVxdWlyZWQnOnRydWV9KTtcbiAgICAgIHJldHVybiB7YXV0b3JlcXVpcmVkOnRydWV9O1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZygnYmdycnInLGdyb3VwLGdyb3VwLm5hbWUpO1xuICAvLyBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tncm91cC5uYW1lXSAhPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnMhPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnNbMF0hPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnNbMF0ucnVsZT09J2F1dG9yZXF1aXJlZCcgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2dyb3VwLm5hbWVdPT1udWxsKXtcbiAgXG4gIFxuXG4gIC8vIGxldCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gIC8vIGxldCBjb25maXJtUGFzcyA9IGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC52YWx1ZTtcbiAgLy8gaWYoY29uZmlybVBhc3M9PW51bGwgfHwgY29uZmlybVBhc3M9PScnKXtcbiAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHtyZXF1aXJlZDp0cnVlfSk7XG4gIC8vICAgcmV0dXJuIHsgcmVxdWlyZWQ6IHRydWUgfTtcbiAgLy8gfVxuICAvLyBpZihwYXNzIT1jb25maXJtUGFzcyl7XG4gIC8vICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7J21hdGNoJzp0cnVlfSk7XG4gIC8vICAgcmV0dXJuIHttYXRjaDp0cnVlfTtcbiAgLy8gfVxuXG4gIC8vcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG59XG5cbiAgY2hlY2tJblVzZUVtYWlsKGNvbnRyb2wpIHtcbiAgICAvLyBtaW1pYyBodHRwIGRhdGFiYXNlIGFjY2Vzc1xuICAgIGxldCBkYiA9IFsndG9ueUBnbWFpbC5jb20nXTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSAoZGIuaW5kZXhPZihjb250cm9sLnZhbHVlKSAhPT0gLTEpID8geyAnYWxyZWFkeUluVXNlJzogdHJ1ZSB9IDogbnVsbDtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSwgNDAwMClcbiAgICB9KVxuICB9XG5cbiAgZ2V0RXJyb3IoZGF0YTphbnkpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0RXJyb3InLGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnRmllbGQgaXMgcmVxdWlyZWQnIDpcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdwYXR0ZXJuJykgPyAnTm90IGEgdmFsaWQgZW1haWxhZGRyZXNzJyA6XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ2FscmVhZHlJblVzZScpID8gJ1RoaXMgZW1haWxhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlJyA6ICcnO1xuICB9XG5cbiAgZ2V0RXJyb3JQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXNzd29yZCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ0ZpZWxkIGlzIHJlcXVpcmVkIChhdCBsZWFzdCBlaWdodCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlIGxldHRlciBhbmQgb25lIG51bWJlciknIDpcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXNzd29yZCcpLmhhc0Vycm9yKCdyZXF1aXJlbWVudHMnKSA/ICdQYXNzd29yZCBuZWVkcyB0byBiZSBhdCBsZWFzdCBlaWdodCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlIGxldHRlciBhbmQgb25lIG51bWJlcicgOiAnJztcbiAgfVxuXG4gIG9uU3VibWl0KHBvc3QpIHtcbiAgICB0aGlzLnBvc3QgPSBwb3N0O1xuICAgIGxldCB0ZW1wZm9ybXZhbDphbnk9e307XG4gICAgZm9yIChsZXQgeCBpbiB0aGlzLmZvcm1Hcm91cC5jb250cm9scykge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0uZXJyb3JzLHgsJ2VycicpO1xuICAgICAgLy9pZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWxpZCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3gnLHgpO1xuICAgICAgICBsZXQgYj14LnNwbGl0KCdfXycpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdiJyxiLGIubGVuZ3RoLGJbMF0pO1xuICAgICAgICBmb3IobGV0IG0gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpe1xuICAgICAgICAgIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGU9PSdhdXRvY29tcGxldGUnKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZSAhPW51bGwgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdIT1udWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbGlkYXRpb25zIT1udWxsKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dG9lcnJvcicsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uc2V0RXJyb3JzKHtyZXF1aXJlZDpudWxsfSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRvZXJyb3IgYWZ0ZXIgJyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRvZXJyb3Igc2V0Jyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoe3JlcXVpcmVkOnRydWV9KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dG9lcnJvciBzZXQgYWZ0ZXIgJyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih4PT10aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmIHRlbXBmb3JtdmFsW3hdPT1udWxsKSBcbiAgICAgICAgICAgIHRlbXBmb3JtdmFsW3hdPXRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoYi5sZW5ndGg+MSAmJiBiWzBdPT10aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lIT14ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGU9PSdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUhPW51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FhYWFmZi4uLicpO1xuICAgICAgICAgICAgaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWU9PXRydWUpe1xuICAgICAgICAgICAgICBmb3IobGV0IGsgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWxba11bJ2tleSddPT1iWzFdKXtcbiAgICAgICAgICAgICAgICAgIGlmKHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdPT1udWxsKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXT1bXTtcbiAgICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnB1c2goYlsxXSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ3YnLGJbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgIC8vIGVsc2V7XG4gICAgICAgIGlmKHg9PXRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGVtcGZvcm12YWxbeF09PW51bGwpXG4gICAgICAgIHRlbXBmb3JtdmFsW3hdPXRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlO1xuICAgIC8vICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0uZXJyb3JzLHgsJ2VycjIyJyk7XG4gICAgICBcbiAgICAgIC8vfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwb3N0LCdwb3N0Jyx0aGlzLmZvcm1Hcm91cC52YWxpZCx0aGlzLmZvcm1kYXRhdmFsLHRoaXMuZm9ybWRhdGF2YWwuYXBpVXJsLCdmZmZmJyx0ZW1wZm9ybXZhbCk7XG5cbiAgICBpZih0aGlzLmZvcm1Hcm91cC52YWxpZCl7XG5cblxuICAgICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgICBsZXQgbGluazphbnk9dGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwgK3RoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQ7XG4gICAgICBsZXQgc291cmNlOmFueT17fTtcbiAgICAgIHNvdXJjZVsnZGF0YSddPXRoaXMuZm9ybUdyb3VwLnZhbHVlO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogICA2MDAwLFxuICAgICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTp0aGlzLmZvcm1kYXRhdmFsLnN1Y2Nlc3NtZXNzYWdlfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwncmVkJyx0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCk7XG4gICAgICAgICAgaWYodGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGghPW51bGwpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJyl7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgICBkYXRhOnJlc3VsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAgIDYwMDAsXG4gICAgICAgICAgZGF0YToge2Vycm9ybWVzc2FnZTonU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJ31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==