import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort, MatTableDataSource,MatPaginator} from '@angular/material';

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

  @Input()
  set datasource(datasource: any) {
    this.datasourceval = datasource;
    console.log('this.datasourceval');
    console.log(this.datasourceval);
  }


  displayedColumns: string[] = [];
  //dataSource = new MatTableDataSource(this.datasourceval);
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    for(let key in this.datasourceval){
      for(let objkey in this.datasourceval[key]) {

        this.displayedColumns.push(objkey);
      }
      break;
    }

    let data_list = []
    for (let i = 0; i < this.datasourceval.length; i++) {
      data_list.push(this.createData(this.datasourceval[i]));
    }

    this.dataSource = new MatTableDataSource(data_list);




    console.log('this.displayedColumns');
    console.log(this.displayedColumns);
    console.log(this.datasourceval);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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



}
