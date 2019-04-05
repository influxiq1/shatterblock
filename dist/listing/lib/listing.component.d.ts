import { OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef } from '@angular/material';
export declare class ListingComponent implements OnInit {
    _apiService: ApiService;
    dialog: MatDialog;
    datasourceval: any;
    skipval: any;
    jwttokenval: any;
    deleteendpointval: any;
    apiurlval: any;
    updateendpointval: any;
    modify_header_arrayval: any;
    selection: any;
    sourcedataval: any;
    columns: any;
    olddata: any;
    x: any;
    datasource: any;
    skip: any;
    sourcedata: any;
    modify_header_array: any;
    deleteendpoint: any;
    updateendpoint: any;
    apiurl: any;
    jwttoken: any;
    displayedColumns: string[];
    datacolumns: string[];
    displayedColumnsheader: string[];
    dataSource: MatTableDataSource<{}>;
    sort: MatSort;
    paginator: MatPaginator;
    constructor(_apiService: ApiService, dialog: MatDialog);
    ngOnInit(): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string;
    createData(point: any): {};
    applyFilter(filterValue: string): void;
    styleCell(col_name: any, row: any): {};
    viewdata(data: any): void;
    deletedata(data: any): void;
    editdata(data: any): void;
}
export declare class Confirmdialog {
    dialogRef: MatDialogRef<Confirmdialog>;
    data: any;
    constructor(dialogRef: MatDialogRef<Confirmdialog>, data: any);
    onNoClick(): void;
}
