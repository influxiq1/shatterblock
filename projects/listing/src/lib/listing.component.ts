import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort, MatTableDataSource,MatPaginator} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'lib-listing',
  templateUrl: './listing.module.html',
  styleUrls: ['./listing.module.css']
})
export class ListingComponent implements OnInit {

  datasourceval:any;
  skipval:any;
  modify_header_arrayval:any;
  selection :any;
  columns :any=[];
  public x :any;

  @Input()
  set datasource(datasource: any) {
    this.datasourceval = datasource;
    console.log('this.datasourceval');
    console.log(this.datasourceval);
  }

  @Input()
  set skip(skip: any) {
    this.skipval = skip;
    console.log('this.skipval');
    console.log(this.skipval);
  }
  @Input()
  set modify_header_array(modify_header_array: any) {
    this.modify_header_arrayval = modify_header_array;
    console.log('this.modify_header_arrayval');
    console.log(this.modify_header_arrayval);
  }


  displayedColumns: string[] = [];
  datacolumns: string[] = [];
  displayedColumnsheader: string[] = [];
  //dataSource = new MatTableDataSource(this.datasourceval);
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {


    this.x = this.datasourceval;
    let x=this.x;

    let temp = []
    let keys = x[0]
    temp = Object.keys(keys)

    let coldef_list = [];
    let header_list = [];
    for (let i = 0; i < temp.length; i++) {
      coldef_list.push(temp[i].replace(/\s/g, "_"));
      header_list.push(temp[i])
    }
    //coldef_list.push('Actions');
    //header_list.push('Actions')
    console.log('coldef_list',coldef_list);
    console.log('header_list',header_list);

    for (let i = 0; i < coldef_list.length; i++) {
      let ff = `row.${coldef_list[i]}`
      var tt = { columnDef: `${coldef_list[i]}`,    header: `${header_list[i].replace(/_/g," ")}`,  cell: (row) => eval(ff) ,objlength:header_list.length  };
      console.log(tt.columnDef);
      for (let b in this.modify_header_arrayval){
        if(b==tt.header) tt.header=this.modify_header_arrayval[b];
      }
      if(this.skipval.indexOf(tt.columnDef)==-1)
      this.columns.push(tt)
    }
    let displayedcols= this.columns.map(x => x.columnDef);
    displayedcols.push('Actions');

    this.displayedColumns =displayedcols;
    this.displayedColumns.unshift('select');

    let data_list = []
    for (let i = 0; i < this.x.length; i++) {
      data_list.push(this.createData(x[i]));
    }

    this.dataSource = new MatTableDataSource(data_list);
    this.selection = new SelectionModel(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  createData(point:any){
    let data = {}
    Object.keys(point).forEach(function (key) {
      data[key.replace(/\s/g, "_")] = point[key];
    })
    return data
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  styleCell(col_name,row){

    /*
     if (col_name['columnDef']=='progress' && row['progress']=='100'){
     return {'color' : 'red'}
     } else {
     return {}
     }
     */


    return {}
  }



}
