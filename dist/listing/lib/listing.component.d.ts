import { OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
export interface StateGroup {
    letter: string;
    names: string[];
}
export declare const _filter: (opt: string[], value: string) => string[];
export declare class ListingComponent implements OnInit {
    _apiService: ApiService;
    dialog: MatDialog;
    private bottomSheet;
    fb: FormBuilder;
    private router;
    private resolver;
    private container;
    myControl: FormControl;
    datasourceval: any;
    urlval: any;
    searchListval: any;
    pdf_link_val: any;
    statusarrval: any;
    skipval: any;
    errormg: any;
    jwttokenval: any;
    detail_datatypeval: any;
    detail_skip_arrayval: any;
    deleteendpointval: any;
    editrouteval: any;
    apiurlval: any;
    updateendpointval: any;
    modify_header_arrayval: any;
    selection: any;
    sourcedataval: any;
    columns: any;
    olddata: any;
    x: any;
    url: any;
    pdf_link: any;
    searchList: any;
    datasource: any;
    skip: any;
    detail_datatype: any;
    detail_skip_array: any;
    sourcedata: any;
    modify_header_array: any;
    deleteendpoint: any;
    updateendpoint: any;
    apiurl: any;
    jwttoken: any;
    statusarr: any;
    editroute: any;
    stateGroups: string[];
    stateGroup: Observable<string[]>;
    displayedColumns: string[];
    datacolumns: string[];
    displayedColumnsheader: string[];
    formarray: any;
    dataSource: MatTableDataSource<{}>;
    sort: MatSort;
    paginator: MatPaginator;
    options: FormGroup;
    myForm: any;
    constructor(_apiService: ApiService, dialog: MatDialog, bottomSheet: MatBottomSheet, fb: FormBuilder, router: Router, resolver: ComponentFactoryResolver, container: ViewContainerRef);
    onSubmit(): void;
    inputblur(val: any): void;
    ngOnInit(): void;
    private _filter;
    getstatus(val: any): any;
    clickurl(val: any, url: any): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string;
    createData(point: any): {};
    applyFilter(filterValue: string): void;
    styleCell(col_name: any, row: any): {};
    viewdata(data1: any): void;
    managestatus(data: any): void;
    managestatusmultiple(): void;
    deletemultiple(): void;
    deletedata(data: any): void;
    editdata(data: any): void;
}
export declare class Confirmdialog {
    dialogRef: MatDialogRef<Confirmdialog>;
    data: any;
    constructor(dialogRef: MatDialogRef<Confirmdialog>, data: any);
    onNoClick(): void;
}
export declare class BottomSheet {
    private bottomSheetRef;
    data: any;
    constructor(bottomSheetRef: MatBottomSheetRef<BottomSheet>, data: any);
    openLink(val: any): void;
}
