/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Inject } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
/**
 * @record
 */
export function Validator() { }
if (false) {
    /** @type {?} */
    Validator.prototype.name;
    /** @type {?} */
    Validator.prototype.validator;
    /** @type {?} */
    Validator.prototype.message;
}
/**
 * @record
 */
export function FieldConfig() { }
if (false) {
    /** @type {?|undefined} */
    FieldConfig.prototype.label;
    /** @type {?|undefined} */
    FieldConfig.prototype.name;
    /** @type {?|undefined} */
    FieldConfig.prototype.inputType;
    /** @type {?|undefined} */
    FieldConfig.prototype.options;
    /** @type {?|undefined} */
    FieldConfig.prototype.collections;
    /** @type {?} */
    FieldConfig.prototype.type;
    /** @type {?|undefined} */
    FieldConfig.prototype.value;
    /** @type {?|undefined} */
    FieldConfig.prototype.validations;
}
export class ListingComponent {
    // myForm:any;
    /**
     * @param {?} _apiService
     * @param {?} dialog
     * @param {?} bottomSheet
     * @param {?} fb
     * @param {?} router
     */
    constructor(_apiService, dialog, bottomSheet, fb, router) {
        this._apiService = _apiService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.fb = fb;
        this.router = router;
        this.columns = [];
        this.olddata = [];
        this.displayedColumns = [];
        this.datacolumns = [];
        this.displayedColumnsheader = [];
        this.formarray = [];
        //email: any ;
        //dataSource = new MatTableDataSource(this.datasourceval);
        this.dataSource = new MatTableDataSource;
        this.myForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', Validators.required]
        });
    }
    /**
     * @param {?} group
     * @return {?}
     */
    set group(group) {
        console.log(group);
        group: FormGroup;
    }
    /**
     * @param {?} datasource
     * @return {?}
     */
    set datasource(datasource) {
        this.datasourceval = datasource;
        console.log('this.datasourceval');
        console.log(this.datasourceval);
    }
    /**
     * @param {?} skip
     * @return {?}
     */
    set skip(skip) {
        this.skipval = skip;
        console.log('this.skipval');
        console.log(this.skipval);
    }
    /**
     * @param {?} detail_datatype
     * @return {?}
     */
    set detail_datatype(detail_datatype) {
        this.detail_datatypeval = detail_datatype;
        console.log('this.detail_datatypeval');
        console.log(this.detail_datatypeval);
    }
    /**
     * @param {?} detail_skip_array
     * @return {?}
     */
    set detail_skip_array(detail_skip_array) {
        this.detail_skip_arrayval = detail_skip_array;
        console.log('this.detail_skip_arrayval');
        console.log(this.detail_skip_arrayval);
    }
    /**
     * @param {?} sourcedata
     * @return {?}
     */
    set sourcedata(sourcedata) {
        this.sourcedataval = sourcedata;
        console.log('this.sourcedataval');
        console.log(this.sourcedataval);
    }
    /**
     * @param {?} modify_header_array
     * @return {?}
     */
    set modify_header_array(modify_header_array) {
        this.modify_header_arrayval = modify_header_array;
        console.log('this.modify_header_arrayval');
        console.log(this.modify_header_arrayval);
    }
    /**
     * @param {?} deleteendpointval
     * @return {?}
     */
    set deleteendpoint(deleteendpointval) {
        this.deleteendpointval = deleteendpointval;
        console.log('this.deleteendpointval');
        console.log(this.deleteendpointval);
    }
    /**
     * @param {?} updateendpoint
     * @return {?}
     */
    set updateendpoint(updateendpoint) {
        this.updateendpointval = updateendpoint;
        console.log('this.updateendpointval');
        console.log(this.updateendpointval);
    }
    /**
     * @param {?} apiurl
     * @return {?}
     */
    set apiurl(apiurl) {
        this.apiurlval = apiurl;
        console.log('this.apiurlval');
        console.log(this.apiurlval);
    }
    /**
     * @param {?} jwttoken
     * @return {?}
     */
    set jwttoken(jwttoken) {
        this.jwttokenval = jwttoken;
        console.log('this.jwttokenval');
        console.log(this.jwttokenval);
    }
    /**
     * @param {?} statusarr
     * @return {?}
     */
    set statusarr(statusarr) {
        this.statusarrval = statusarr;
        console.log('this.statusarrval');
        console.log(this.statusarrval);
    }
    /**
     * @param {?} editroute
     * @return {?}
     */
    set editroute(editroute) {
        console.log('editroute');
        console.log(editroute);
        this.editrouteval = editroute;
        console.log('this.editrouteval');
        console.log(this.editrouteval);
    }
    /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        let x;
        this.errormg = '';
        /** @type {?} */
        let data = this.myForm.value;
        console.log('data');
        console.log(data);
        console.log(this.myForm.valid);
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputblur(val) {
        console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.x = this.datasourceval;
        /** @type {?} */
        let x = this.x;
        /** @type {?} */
        let temp = [];
        /** @type {?} */
        let keys = x[0];
        temp = Object.keys(keys);
        /** @type {?} */
        let coldef_list = [];
        /** @type {?} */
        let header_list = [];
        for (let i = 0; i < temp.length; i++) {
            coldef_list.push(temp[i].replace(/\s/g, "_"));
            header_list.push(temp[i]);
        }
        //coldef_list.push('Actions');
        //header_list.push('Actions')
        console.log('coldef_list', coldef_list);
        console.log('header_list', header_list);
        for (let i = 0; i < coldef_list.length; i++) {
            /** @type {?} */
            let ff = `row.${coldef_list[i]}`;
            /** @type {?} */
            var tt = { columnDef: `${coldef_list[i]}`, header: `${header_list[i].replace(/_/g, " ")}`, cell: (/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => eval(ff)), objlength: header_list.length };
            console.log(tt.columnDef);
            for (let b in this.modify_header_arrayval) {
                if (b == tt.header)
                    tt.header = this.modify_header_arrayval[b];
            }
            if (this.skipval.indexOf(tt.columnDef) == -1)
                this.columns.push(tt);
        }
        /** @type {?} */
        let displayedcols = this.columns.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.columnDef));
        displayedcols.push('Actions');
        this.displayedColumns = displayedcols;
        this.displayedColumns.unshift('select');
        /** @type {?} */
        let data_list = [];
        for (let i = 0; i < this.x.length; i++) {
            data_list.push(this.createData(x[i]));
        }
        this.olddata = data_list;
        this.dataSource = new MatTableDataSource(data_list);
        this.selection = new SelectionModel(true, []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    getstatus(val) {
        for (let b in this.statusarrval) {
            if (this.statusarrval[b].val == val)
                return this.statusarrval[b].name;
        }
        return "N/A";
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.selection.select(row)));
    }
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    /**
     * @param {?} point
     * @return {?}
     */
    createData(point) {
        /** @type {?} */
        let data = {};
        Object.keys(point).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            data[key.replace(/\s/g, "_")] = point[key];
        }));
        return data;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    /**
     * @param {?} col_name
     * @param {?} row
     * @return {?}
     */
    styleCell(col_name, row) {
        /*
         if (col_name['columnDef']=='progress' && row['progress']=='100'){
         return {'color' : 'red'}
         } else {
         return {}
         }
         */
        return {};
    }
    /**
     * @param {?} data1
     * @return {?}
     */
    viewdata(data1) {
        /** @type {?} */
        let data;
        data = data1;
        /** @type {?} */
        let data2 = [];
        console.log('data');
        console.log(data);
        for (let key in data) {
            /** @type {?} */
            let flagk = '';
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
                    let tempdata = [];
                    for (let k in data[key]) {
                        console.log('key');
                        console.log(key);
                        console.log(this.detail_datatypeval);
                        for (let p in this.detail_datatypeval) {
                            console.log('p');
                            console.log(p);
                            console.log(key);
                            console.log(data[key][k]);
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value == 'image') {
                                /** @type {?} */
                                let imgval = this.detail_datatypeval[p].fileurl + data[key][k].replace(/'/g, '');
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
        for (let n in data) {
            if (data[n] != null && data[n] != '') {
                data2[n] = data[n];
            }
        }
        for (let v in this.detail_skip_arrayval) {
            //data2[this.detail_skip_arrayval[v]]='';
            delete data2[this.detail_skip_arrayval[v]];
            console.log('this.detail_skip_arrayval[v]');
            console.log(this.detail_skip_arrayval[v]);
        }
        /** @type {?} */
        let res = Object.entries(data2);
        console.log('this.detail_skip_array');
        console.log(this.detail_skip_arrayval);
        console.log(this.detail_datatypeval);
        console.log('res');
        console.log(res);
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: 'custom-modalbox',
            data: { isconfirmation: false, data: res }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    managestatus(data) {
        console.log('data');
        console.log(data);
        /** @type {?} */
        let bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The bottom sheet was closed');
            console.log(result);
            if (result != null) {
                data.status = result.val;
                data.id = data._id;
                this._apiService.togglestatus(this.apiurlval + 'statusupdate', data, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (let c in this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (this.olddata[c]._id == data._id) {
                                console.log('in data update');
                                console.log(data);
                                this.olddata[c].status = data.status;
                            }
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    }
    /**
     * @return {?}
     */
    managestatusmultiple() {
        /** @type {?} */
        let ids = [];
        /** @type {?} */
        let c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        console.log('ids');
        console.log(ids);
        //console.log('data');
        //console.log(data);
        /** @type {?} */
        let bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
        bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The bottom sheet was closed');
            console.log(result);
            if (result != null) {
                //data.status = result.val;
                //data.id = data._id;
                /** @type {?} */
                let newstatus = result.val;
                this._apiService.togglestatusmany(this.apiurlval + 'statusupdate', ids, result.val, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (let c in this.olddata) {
                            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (ids.indexOf(this.olddata[c]._id) > -1) {
                                console.log('in data update');
                                //console.log(data);
                                this.olddata[c].status = newstatus;
                            }
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    }
    /**
     * @return {?}
     */
    deletemultiple() {
        console.log('this.selection.selected.length');
        console.log(this.selection.selected.length);
        console.log(this.selection);
        console.log(this.selection.selected);
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            data: { message: 'Are you sure to delete selected records ??' }
        });
        /** @type {?} */
        let ids = [];
        /** @type {?} */
        let c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        console.log('ids');
        console.log(ids);
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result == 'yes') {
                this._apiService.deteManyData(this.apiurlval + this.deleteendpointval, ids, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (let c in ids) {
                            this.olddata = this.olddata.filter((/**
                             * @param {?} olddata
                             * @return {?}
                             */
                            olddata => olddata._id != ids[c]));
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Are you sure to delete this record ??', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    deletedata(data) {
        //alert(5);
        //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        console.log('data 889 ---');
        console.log(data);
        console.log('jwttokenval');
        console.log(this.jwttokenval);
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            height: 'auto',
            data: { message: 'Are you sure to delete this record ??' }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result == 'yes') {
                this._apiService.deteOneData(this.apiurlval + this.deleteendpointval, data, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        this.olddata = this.olddata.filter((/**
                         * @param {?} olddata
                         * @return {?}
                         */
                        olddata => olddata._id != data._id));
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        /** @type {?} */
                        let dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: 'custom-modalbox',
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.log('Oooops!');
                }));
            }
            //this.animal = result;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    editdata(data) {
        console.log('data');
        console.log(data);
        console.log(this.editrouteval);
        console.log(this.editrouteval + data._id);
        console.log(this.jwttokenval);
        this.router.navigate([this.editrouteval, data._id]);
        //this.na
    }
}
ListingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing',
                template: "<div class=\"container\">\n\n\n  <mat-card>\n\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <ng-container *ngIf=\"selection.selected.length!=null && selection.selected.length>0\">\n      <button mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n      <button mat-raised-button (click)=\"managestatusmultiple()\"> Update Status </button>\n    </ng-container>\n\n\n\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\" >\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-center\">{{ column.header }}</th>\n        <td mat-cell *matCellDef=\"let row\"  [ngStyle]=\"styleCell(column,row)\" class=\"td-cell-center\">\n          <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}</span>\n          <span *ngIf=\"column.columnDef!='status' \">{{ column.cell(row) }}</span>\n        </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"Actions\"   >\n        <th mat-header-cell *matHeaderCellDef  class=\"th-header-center\">Actions</th>\n        <td (click)=\"$event.stopPropagation()\" mat-cell  *matCellDef=\"let row\"  class=\"td-cell-center\">\n          <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n        <span class=\"cursor\" (click)=\"editdata(row)\" >\n        <i class=\"material-icons\">\n          edit\n        </i>\n        </span>\n\n          <!--For modern browsers-->\n          <span class=\"cursor\" (click)=\"deletedata(row)\" >\n        <i class=\"material-icons\">\n          delete_outline\n        </i>\n        </span>\n\n          <!--For modern browsers-->\n          <span class=\"cursor\" (click)=\"viewdata(row)\" >\n          <i class=\"material-icons\">\n            pageview\n          </i>\n          </span>\n\n          <!--For modern browsers-->\n          <span class=\"cursor\" (click)=\"managestatus(row)\" >\n          <i class=\"material-icons\">\n            toggle_off\n          </i>\n          </span>\n          </span>\n\n        </td>\n        <!--<td *ngIf=\"column.objlength==i+1\" mat-cell *matCellDef=\"i\">\n          <mat-icon>more_vert</mat-icon>\n        </td>-->\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>\n\n    <br>\n\n\n\n  </mat-card>\n\n<!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n  <br>\n  <br>\n\n\n</div>\n",
                styles: [".container{background:#fff}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%}th.mat-sort-header-sorted{color:#000}.custom-modalbox{display:none}"]
            }] }
];
/** @nocollapse */
ListingComponent.ctorParameters = () => [
    { type: ApiService },
    { type: MatDialog },
    { type: MatBottomSheet },
    { type: FormBuilder },
    { type: Router }
];
ListingComponent.propDecorators = {
    field: [{ type: Input }],
    group: [{ type: Input }],
    datasource: [{ type: Input }],
    skip: [{ type: Input }],
    detail_datatype: [{ type: Input }],
    detail_skip_array: [{ type: Input }],
    sourcedata: [{ type: Input }],
    modify_header_array: [{ type: Input }],
    deleteendpoint: [{ type: Input }],
    updateendpoint: [{ type: Input }],
    apiurl: [{ type: Input }],
    jwttoken: [{ type: Input }],
    statusarr: [{ type: Input }],
    editroute: [{ type: Input }],
    sort: [{ type: ViewChild, args: [MatSort,] }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }]
};
if (false) {
    /** @type {?} */
    ListingComponent.prototype.datasourceval;
    /** @type {?} */
    ListingComponent.prototype.statusarrval;
    /** @type {?} */
    ListingComponent.prototype.skipval;
    /** @type {?} */
    ListingComponent.prototype.errormg;
    /** @type {?} */
    ListingComponent.prototype.jwttokenval;
    /** @type {?} */
    ListingComponent.prototype.detail_datatypeval;
    /** @type {?} */
    ListingComponent.prototype.detail_skip_arrayval;
    /** @type {?} */
    ListingComponent.prototype.deleteendpointval;
    /** @type {?} */
    ListingComponent.prototype.editrouteval;
    /** @type {?} */
    ListingComponent.prototype.apiurlval;
    /** @type {?} */
    ListingComponent.prototype.updateendpointval;
    /** @type {?} */
    ListingComponent.prototype.modify_header_arrayval;
    /** @type {?} */
    ListingComponent.prototype.selection;
    /** @type {?} */
    ListingComponent.prototype.sourcedataval;
    /** @type {?} */
    ListingComponent.prototype.columns;
    /** @type {?} */
    ListingComponent.prototype.olddata;
    /** @type {?} */
    ListingComponent.prototype.x;
    /** @type {?} */
    ListingComponent.prototype.field;
    /** @type {?} */
    ListingComponent.prototype.displayedColumns;
    /** @type {?} */
    ListingComponent.prototype.datacolumns;
    /** @type {?} */
    ListingComponent.prototype.displayedColumnsheader;
    /** @type {?} */
    ListingComponent.prototype.formarray;
    /** @type {?} */
    ListingComponent.prototype.dataSource;
    /** @type {?} */
    ListingComponent.prototype.sort;
    /** @type {?} */
    ListingComponent.prototype.paginator;
    /** @type {?} */
    ListingComponent.prototype.options;
    /** @type {?} */
    ListingComponent.prototype.myForm;
    /** @type {?} */
    ListingComponent.prototype._apiService;
    /** @type {?} */
    ListingComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.bottomSheet;
    /** @type {?} */
    ListingComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.router;
}
export class Confirmdialog {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('my data ...');
        console.log(this.data);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
Confirmdialog.decorators = [
    { type: Component, args: [{
                selector: 'confirmdialog',
                template: "<h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\" >Hey !</h1>\n<h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null\">Details </h1>\n<div mat-dialog-content>\n    <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n\n    <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n        <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n            <mat-card-header id=\"dialogdata{{item[0]}}\">\n                <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                <mat-card-title>{{item[0]}}</mat-card-title>\n            </mat-card-header>\n            <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n            <mat-card-content id=\"dialogdata{{item[0]}}\">\n                <p [innerHtml]=\"item[1]\">\n\n                </p>\n            </mat-card-content>\n        </mat-card>\n\n\n\n    </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Ok</button>\n</div>\n"
            }] }
];
/** @nocollapse */
Confirmdialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Confirmdialog.prototype.dialogRef;
    /** @type {?} */
    Confirmdialog.prototype.data;
}
export class BottomSheet {
    /**
     * @param {?} bottomSheetRef
     * @param {?} data
     */
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    openLink(val) {
        console.log('bottomsheet data');
        console.log(val);
        this.bottomSheetRef.dismiss(val);
        //event.preventDefault();
    }
}
BottomSheet.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet',
                template: "<mat-nav-list>\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span mat-line></span>\n        <span mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
            }] }
];
/** @nocollapse */
BottomSheet.ctorParameters = () => [
    { type: MatBottomSheetRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheet.prototype.bottomSheetRef;
    /** @type {?} */
    BottomSheet.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzFGLE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQWV6QywrQkFJQzs7O0lBSEMseUJBQWE7O0lBQ2IsOEJBQWU7O0lBQ2YsNEJBQWdCOzs7OztBQUVsQixpQ0FTQzs7O0lBUkMsNEJBQWU7O0lBQ2YsMkJBQWM7O0lBQ2QsZ0NBQW1COztJQUNuQiw4QkFBbUI7O0lBQ25CLGtDQUFrQjs7SUFDbEIsMkJBQWE7O0lBQ2IsNEJBQVk7O0lBQ1osa0NBQTBCOztBQVE1QixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFnSTNCLFlBQW1CLFdBQXVCLEVBQVEsTUFBaUIsRUFBUyxXQUEyQixFQUFRLEVBQWUsRUFBUyxNQUFjO1FBQWxJLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVEs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QUFRO1FBQTdGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQztRQUF1QyxTQUFJLEdBQUosSUFBSSxDQUFJO0lBQUcsQ0FBQzs7Ozs7SUFFckgsUUFBUSxDQUFDLEdBQU87UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyx5QkFBeUI7SUFDM0IsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixrT0FBZ0M7YUFDakM7Ozs7WUFqbkJ1QixpQkFBaUI7NENBbW5CNkIsTUFBTSxTQUFDLHFCQUFxQjs7Ozs7OztJQUFwRixxQ0FBc0Q7O0lBQUMsMkJBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLE1hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYsTUFUX0JPVFRPTV9TSEVFVF9EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8vIGltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuLy8gaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi9saXN0aW5nLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgSW5wdXRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQnO1xuLy8gaW1wb3J0IHtCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbic7XG4vLyBpbXBvcnQgeyBTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0JztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRvciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsaWRhdG9yOiBhbnk7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRDb25maWcge1xuICBsYWJlbD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBvcHRpb25zPzogc3RyaW5nW107XG4gIGNvbGxlY3Rpb25zPzogYW55O1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlPzogYW55O1xuICB2YWxpZGF0aW9ucz86IFZhbGlkYXRvcltdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuXG5cbiAgZGF0YXNvdXJjZXZhbDphbnk7XG4gIHN0YXR1c2FycnZhbDphbnk7XG4gIHNraXB2YWw6YW55O1xuICBlcnJvcm1nOmFueTtcbiAgand0dG9rZW52YWw6YW55O1xuICBkZXRhaWxfZGF0YXR5cGV2YWw6YW55O1xuICBkZXRhaWxfc2tpcF9hcnJheXZhbDphbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOmFueTtcbiAgZWRpdHJvdXRldmFsOmFueTtcbiAgYXBpdXJsdmFsOmFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6YW55O1xuICBtb2RpZnlfaGVhZGVyX2FycmF5dmFsOmFueTtcbiAgc2VsZWN0aW9uIDphbnk7XG4gIHNvdXJjZWRhdGF2YWwgOmFueTtcbiAgY29sdW1ucyA6YW55PVtdO1xuICBvbGRkYXRhIDphbnk9W107XG4gIHB1YmxpYyB4IDphbnk7XG5cblxuICBASW5wdXQoKSBmaWVsZDogRmllbGRDb25maWc7XG4gIEBJbnB1dCgpXG4gIHNldCBncm91cChncm91cDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZ3JvdXApO1xuICAgIGdyb3VwOiBGb3JtR3JvdXA7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGFzb3VyY2UoZGF0YXNvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gZGF0YXNvdXJjZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5kYXRhc291cmNldmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhc291cmNldmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBza2lwKHNraXA6IGFueSkge1xuICAgIHRoaXMuc2tpcHZhbCA9IHNraXA7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc2tpcHZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2tpcHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9kYXRhdHlwZShkZXRhaWxfZGF0YXR5cGU6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsID0gZGV0YWlsX2RhdGF0eXBlO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKTtcbiAgfVxuIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfc2tpcF9hcnJheShkZXRhaWxfc2tpcF9hcnJheTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCA9IGRldGFpbF9za2lwX2FycmF5O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCk7XG4gIH1cblxuQElucHV0KClcbiAgc2V0IHNvdXJjZWRhdGEoc291cmNlZGF0YTogYW55KSB7XG4gICAgdGhpcy5zb3VyY2VkYXRhdmFsID0gc291cmNlZGF0YTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5zb3VyY2VkYXRhdmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zb3VyY2VkYXRhdmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RpZnlfaGVhZGVyX2FycmF5KG1vZGlmeV9oZWFkZXJfYXJyYXk6IGFueSkge1xuICAgIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCA9IG1vZGlmeV9oZWFkZXJfYXJyYXk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICAgIHNldCBkZWxldGVlbmRwb2ludChkZWxldGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgICB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5kZWxldGVlbmRwb2ludHZhbCcpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5kZWxldGVlbmRwb2ludHZhbCk7XG4gICAgfVxuXG4gQElucHV0KClcbiAgICBzZXQgdXBkYXRlZW5kcG9pbnQodXBkYXRlZW5kcG9pbnQ6IGFueSkge1xuICAgICAgdGhpcy51cGRhdGVlbmRwb2ludHZhbCA9IHVwZGF0ZWVuZHBvaW50O1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMudXBkYXRlZW5kcG9pbnR2YWwnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudXBkYXRlZW5kcG9pbnR2YWwpO1xuICAgIH1cbiAgICBASW5wdXQoKVxuICAgIHNldCBhcGl1cmwoYXBpdXJsOiBhbnkpIHtcbiAgICAgIHRoaXMuYXBpdXJsdmFsID0gYXBpdXJsO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuYXBpdXJsdmFsJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFwaXVybHZhbCk7XG4gICAgfVxuXG5ASW5wdXQoKVxuICAgIHNldCBqd3R0b2tlbihqd3R0b2tlbjogYW55KSB7XG4gICAgICB0aGlzLmp3dHRva2VudmFsID0gand0dG9rZW47XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5qd3R0b2tlbnZhbCcpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgc3RhdHVzYXJyKHN0YXR1c2FycjogYW55KSB7XG4gICAgICB0aGlzLnN0YXR1c2FycnZhbCA9IHN0YXR1c2FycjtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnN0YXR1c2FycnZhbCcpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0dXNhcnJ2YWwpO1xuICAgIH1cblxuICBASW5wdXQoKVxuICBzZXQgZWRpdHJvdXRlKGVkaXRyb3V0ZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2VkaXRyb3V0ZScpO1xuICAgIGNvbnNvbGUubG9nKGVkaXRyb3V0ZSk7XG4gICAgdGhpcy5lZGl0cm91dGV2YWwgPSBlZGl0cm91dGU7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZWRpdHJvdXRldmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5lZGl0cm91dGV2YWwpO1xuICB9XG5cblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkYXRhY29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc2hlYWRlcjogc3RyaW5nW10gPSBbXTtcbiAgZm9ybWFycmF5OiBhbnkgPSBbXTtcbiAgLy9lbWFpbDogYW55IDtcbiAgLy9kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmRhdGFzb3VyY2V2YWwpO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgb3B0aW9uczogRm9ybUdyb3VwO1xuICBteUZvcm06YW55O1xuICAvLyBteUZvcm06YW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSxwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cscHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQscHVibGljIGZiOiBGb3JtQnVpbGRlcixwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcblxuXG5cbiAgfVxuICAvKkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW0xpc3RpbmddJ1xuICB9KSovXG5cblxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIHRoaXMuZXJyb3JtZyA9ICcnO1xuICAgIGxldCBkYXRhID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWxpZCk7XG4gICAgZm9yICh4IGluIHRoaXMubXlGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5teUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgbGV0IHg9dGhpcy54O1xuXG4gICAgbGV0IHRlbXAgPSBbXVxuICAgIGxldCBrZXlzID0geFswXVxuICAgIHRlbXAgPSBPYmplY3Qua2V5cyhrZXlzKVxuXG4gICAgbGV0IGNvbGRlZl9saXN0ID0gW107XG4gICAgbGV0IGhlYWRlcl9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2xkZWZfbGlzdC5wdXNoKHRlbXBbaV0ucmVwbGFjZSgvXFxzL2csIFwiX1wiKSk7XG4gICAgICBoZWFkZXJfbGlzdC5wdXNoKHRlbXBbaV0pXG4gICAgfVxuICAgIC8vY29sZGVmX2xpc3QucHVzaCgnQWN0aW9ucycpO1xuICAgIC8vaGVhZGVyX2xpc3QucHVzaCgnQWN0aW9ucycpXG4gICAgY29uc29sZS5sb2coJ2NvbGRlZl9saXN0Jyxjb2xkZWZfbGlzdCk7XG4gICAgY29uc29sZS5sb2coJ2hlYWRlcl9saXN0JyxoZWFkZXJfbGlzdCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGRlZl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZmYgPSBgcm93LiR7Y29sZGVmX2xpc3RbaV19YFxuICAgICAgdmFyIHR0ID0geyBjb2x1bW5EZWY6IGAke2NvbGRlZl9saXN0W2ldfWAsICAgIGhlYWRlcjogYCR7aGVhZGVyX2xpc3RbaV0ucmVwbGFjZSgvXy9nLFwiIFwiKX1gLCAgY2VsbDogKHJvdykgPT4gZXZhbChmZikgLG9iamxlbmd0aDpoZWFkZXJfbGlzdC5sZW5ndGggIH07XG4gICAgICBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuICAgICAgZm9yIChsZXQgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpe1xuICAgICAgICBpZihiPT10dC5oZWFkZXIpIHR0LmhlYWRlcj10aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07XG4gICAgICB9XG4gICAgICBpZih0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpPT0tMSlcbiAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KVxuICAgIH1cbiAgICBsZXQgZGlzcGxheWVkY29scz0gdGhpcy5jb2x1bW5zLm1hcCh4ID0+IHguY29sdW1uRGVmKTtcbiAgICBkaXNwbGF5ZWRjb2xzLnB1c2goJ0FjdGlvbnMnKTtcblxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9ZGlzcGxheWVkY29scztcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnc2VsZWN0Jyk7XG5cbiAgICBsZXQgZGF0YV9saXN0ID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueC5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YV9saXN0LnB1c2godGhpcy5jcmVhdGVEYXRhKHhbaV0pKTtcbiAgICB9XG4gICAgdGhpcy5vbGRkYXRhPWRhdGFfbGlzdDtcblxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoZGF0YV9saXN0KTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG5cbiAgZ2V0c3RhdHVzKHZhbDphbnkpe1xuICAgIGZvcihsZXQgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCl7XG4gICAgICBpZih0aGlzLnN0YXR1c2FycnZhbFtiXS52YWw9PXZhbClcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiBcIk4vQVwiO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDphbnkpe1xuICAgIGxldCBkYXRhID0ge31cbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgXCJfXCIpXSA9IHBvaW50W2tleV07XG4gICAgfSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0eWxlQ2VsbChjb2xfbmFtZSxyb3cpe1xuXG4gICAgLypcbiAgICAgaWYgKGNvbF9uYW1lWydjb2x1bW5EZWYnXT09J3Byb2dyZXNzJyAmJiByb3dbJ3Byb2dyZXNzJ109PScxMDAnKXtcbiAgICAgcmV0dXJuIHsnY29sb3InIDogJ3JlZCd9XG4gICAgIH0gZWxzZSB7XG4gICAgIHJldHVybiB7fVxuICAgICB9XG4gICAgICovXG5cblxuICAgIHJldHVybiB7fVxuICB9XG5cblxuICB2aWV3ZGF0YShkYXRhMTphbnkpe1xuICAgIGxldCBkYXRhOmFueTtcbiAgICBkYXRhPWRhdGExO1xuICAgIGxldCBkYXRhMjphbnk9W107XG4gICAgY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgbGV0IGZsYWdrOmFueT0nJztcbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSArIFwiIC0+IFwiICsgZGF0YVtrZXldK1wiLS0tPlwiK3R5cGVvZiAoZGF0YVtrZXldKSk7XG4gICAgICAgICAgICAgIGlmKHR5cGVvZiAoZGF0YVtrZXldKT09J2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICBpZihkYXRhW2tleV09PXRydWUpIGRhdGFba2V5XT0nWWVzJztcbiAgICAgICAgICAgICAgICAgIGlmKGRhdGFba2V5XT09ZmFsc2UpIGRhdGFba2V5XT0nTm8nO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYodHlwZW9mIChkYXRhW2tleV0pPT0nb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHRlbXBkYXRhOmFueT1bXTtcbiAgICAgICAgICAgICAgICAgIGZvcihsZXQgayBpbiBkYXRhW2tleV0pe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXknKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHAgaW4gdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtrZXldW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5PT1rZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWU9PSdpbWFnZScpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1ndmFsOmFueT10aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5maWxldXJsK2RhdGFba2V5XVtrXS5yZXBsYWNlKC8nL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZ3ZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2tleV1ba10ucmVwbGFjZSgvJy9nLCAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2ltZ3ZhbCtcIj48YnIvPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxzcGFuPlwiK2RhdGFba2V5XVtrXStcIjwvc3Bhbj48YnIvPlwiKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXk9PWtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSE9J2ltYWdlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIitkYXRhW2tleV1ba10rXCI8L3NwYW4+PGJyLz5cIik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBkYXRhW2tleV09dGVtcGRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGZvcihsZXQgbiBpbiBkYXRhKXtcbiAgICAgICAgaWYoZGF0YVtuXSE9bnVsbCAmJiBkYXRhW25dIT0nJyl7XG4gICAgICAgICAgZGF0YTJbbl09ZGF0YVtuXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgZm9yKGxldCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpe1xuICAgICAgLy9kYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXT0nJztcbiAgICAgIGRlbGV0ZSBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXTtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdKTtcbiAgICB9XG4gICAgICBsZXQgcmVzID0gT2JqZWN0LmVudHJpZXMoZGF0YTIpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRldGFpbF9za2lwX2FycmF5Jyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCk7XG4gICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpO1xuXG4gICAgY29uc29sZS5sb2coJ3JlcycpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cblxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgZGF0YToge2lzY29uZmlybWF0aW9uOmZhbHNlLGRhdGE6cmVzfVxuICAgIH0pO1xuXG4gIH1cbiAgbWFuYWdlc3RhdHVzKGRhdGE6YW55KXtcbiAgICBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBicz10aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQse3BhbmVsQ2xhc3M6ICdjdXN0b20tYm90dG9tc2hlZXQnLGRhdGE6e2l0ZW1zOnRoaXMuc3RhdHVzYXJydmFsfX0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgYm90dG9tIHNoZWV0IHdhcyBjbG9zZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBpZihyZXN1bHQhPW51bGwpe1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzKHRoaXMuYXBpdXJsdmFsICsgJ3N0YXR1c3VwZGF0ZScsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAvL3RoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIGRhdGEgdXBkYXRlJyk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgICAgICBkYXRhOiB7bWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgfSk7XG4gICAgfVxuICAgICAgLy90aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgbWFuYWdlc3RhdHVzbXVsdGlwbGUoKXtcblxuICAgIGxldCBpZHM6YW55PVtdO1xuICAgIGxldCBjOmFueTtcbiAgICBmb3IoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCl7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdpZHMnKTtcbiAgICBjb25zb2xlLmxvZyhpZHMpO1xuICAgIC8vY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBicz10aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQse2RhdGE6e2l0ZW1zOnRoaXMuc3RhdHVzYXJydmFsfX0pO1xuXG4gICAgYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgYm90dG9tIHNoZWV0IHdhcyBjbG9zZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBpZihyZXN1bHQhPW51bGwpe1xuICAgICAgICAvL2RhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgLy9kYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIGxldCBuZXdzdGF0dXM6YW55PXJlc3VsdC52YWw7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnRvZ2dsZXN0YXR1c21hbnkodGhpcy5hcGl1cmx2YWwgKyAnc3RhdHVzdXBkYXRlJywgaWRzLHJlc3VsdC52YWwsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAvL3RoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKHRoaXMub2xkZGF0YVtjXS5faWQpPi0xKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBkYXRhIHVwZGF0ZScpO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gbmV3c3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICAgICAgZGF0YToge21lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZX1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRlbGV0ZW11bHRpcGxlKCl7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3Rpb24pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKTtcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICBkYXRhOiB7bWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgc2VsZWN0ZWQgcmVjb3JkcyA/Pyd9XG4gICAgfSk7XG4gICAgbGV0IGlkczphbnk9W107XG4gICAgbGV0IGM6YW55O1xuICAgIGZvcihjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKXtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2lkcycpO1xuICAgIGNvbnNvbGUubG9nKGlkcyk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBpZihyZXN1bHQ9PSd5ZXMnKXtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5kZXRlTWFueURhdGEodGhpcy5hcGl1cmx2YWwrdGhpcy5kZWxldGVlbmRwb2ludHZhbCxpZHMsdGhpcy5qd3R0b2tlbnZhbCx0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzPT0nc3VjY2Vzcycpe1xuICAgICAgICAgICAgZm9yKGxldCBjIGluIGlkcyl7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgICAgICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgICAgICAgIGRhdGE6IHttZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIHJlY29yZCA/PycsaXNjb25maXJtYXRpb246ZmFsc2V9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlZGF0YShkYXRhOmFueSl7XG4gICAgLy9hbGVydCg1KTtcbiAgICAvL3RoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwrdGhpcy5kZWxldGVlbmRwb2ludHZhbCxkYXRhLHRoaXMuand0dG9rZW52YWwpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIDg4OSAtLS0nKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZygnand0dG9rZW52YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKTtcblxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YToge21lc3NhZ2U6ICdBcmUgeW91IHN1cmUgdG8gZGVsZXRlIHRoaXMgcmVjb3JkID8/J31cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIGlmKHJlc3VsdD09J3llcycpe1xuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsZGF0YSx0aGlzLmp3dHRva2VudmFsLHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXM9PSdzdWNjZXNzJyl7XG5cbiAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBkYXRhLl9pZClcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgbGV0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgICAgICAgZGF0YToge21lc3NhZ2U6ICdSZWNvcmQgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJyxpc2NvbmZpcm1hdGlvbjpmYWxzZX1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gZWRpdGRhdGEoZGF0YTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codGhpcy5lZGl0cm91dGV2YWwpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdHJvdXRldmFsK2RhdGEuX2lkKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKTtcbiAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCxkYXRhLl9pZF0pO1xuICAgIC8vdGhpcy5uYVxuXG5cbiAgfVxuXG5cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbmZpcm1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbmZpcm0tZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtZGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtZGlhbG9nPixcbiAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ215IGRhdGEgLi4uJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTphbnkpIHt9XG5cbiAgb3BlbkxpbmsodmFsOmFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdib3R0b21zaGVldCBkYXRhJyk7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICB0aGlzLmJvdHRvbVNoZWV0UmVmLmRpc21pc3ModmFsKTtcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn0iXX0=