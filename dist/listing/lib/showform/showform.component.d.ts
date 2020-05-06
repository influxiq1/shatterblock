import { OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from "@angular/material/core";
import { Router } from "@angular/router";
export declare class ShowformComponent implements OnInit {
    private formBuilder;
    _apiService: ApiService;
    private _snackBar;
    private router;
    formGroup: FormGroup;
    titleAlert: string;
    post: any;
    showform: boolean;
    loading: boolean;
    formfieldrefreshval: boolean;
    formdataval: any;
    formfieldrefreshdataval: any;
    filerfielddata: any;
    autocompletefiledvalue: any;
    color: ThemePalette;
    mode: any;
    value: number;
    bufferValue: number;
    formdata: any;
    formfieldrefreshdata: any;
    formfieldrefresh: any;
    constructor(formBuilder: FormBuilder, _apiService: ApiService, _snackBar: MatSnackBar, router: Router);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    inputblur(val: any): void;
    checkchange(field: any, index: any): void;
    filterautocomplete(val: any, data: any): void;
    createForm(): void;
    removechipsingle(val: any): void;
    removechipmultiple(val: any, index: any): void;
    setautocompletevalue(val: any, field: any): void;
    setChangeValidate(): void;
    readonly name: FormControl;
    checkPasswords(group: FormGroup): {
        required: boolean;
        match?: undefined;
    } | {
        match: boolean;
        required?: undefined;
    };
    checkPassword(control: any): {
        'requirements': boolean;
    };
    autorequired(group: any): {
        autorequired: boolean;
    };
    checkInUseEmail(control: any): Observable<{}>;
    getError(data: any): "" | "Field is required" | "Not a valid emailaddress" | "This emailaddress is already in use";
    getErrorPassword(): "" | "Field is required (at least eight characters, one uppercase letter and one number)" | "Password needs to be at least eight characters, one uppercase letter and one number";
    onSubmit(post: any): void;
}
