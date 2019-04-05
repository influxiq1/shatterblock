import { OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export declare class ListingComponent implements OnInit {
    datasourceval: any;
    skipval: any;
    modify_header_arrayval: any;
    selection: any;
    columns: any;
    x: any;
    datasource: any;
    skip: any;
    modify_header_array: any;
    displayedColumns: string[];
    datacolumns: string[];
    displayedColumnsheader: string[];
    dataSource: MatTableDataSource<{}>;
    sort: MatSort;
    paginator: MatPaginator;
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
}
