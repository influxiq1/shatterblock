import {Component, OnInit, ViewChild, Input, Inject} from '@angular/core';
import {MatSort, MatTableDataSource,MatPaginator} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ApiService } from './api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";


import {
  ComponentFactoryResolver, ComponentRef, Directive,
  ViewContainerRef
} from "@angular/core";

// import { FormGroup } from "@angular/forms";
// import { FieldConfig } from "./listing.component";
// import { InputComponent} from './input';
// import {ButtonComponent } from './button';
// import { SelectComponent} from './select';


export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
}

@Component({
  selector: 'lib-listing',
  templateUrl: './listing.module.html',
  styleUrls: ['./listing.module.css']
})
export class ListingComponent implements OnInit {




  datasourceval:any;
  statusarrval:any;
  skipval:any;
  errormg:any;
  jwttokenval:any;
  detail_datatypeval:any;
  detail_skip_arrayval:any;
  deleteendpointval:any;
  editrouteval:any;
  apiurlval:any;
  updateendpointval:any;
  modify_header_arrayval:any;
  selection :any;
  sourcedataval :any;
  columns :any=[];
  olddata :any=[];
  public x :any;


  @Input() field: FieldConfig;
  @Input()
  set group(group: any) {
    console.log(group);
    group: FormGroup;
  }
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
  set detail_datatype(detail_datatype: any) {
    this.detail_datatypeval = detail_datatype;
    console.log('this.detail_datatypeval');
    console.log(this.detail_datatypeval);
  }
 @Input()
  set detail_skip_array(detail_skip_array: any) {
    this.detail_skip_arrayval = detail_skip_array;
    console.log('this.detail_skip_arrayval');
    console.log(this.detail_skip_arrayval);
  }

@Input()
  set sourcedata(sourcedata: any) {
    this.sourcedataval = sourcedata;
    console.log('this.sourcedataval');
    console.log(this.sourcedataval);
  }

  @Input()
  set modify_header_array(modify_header_array: any) {
    this.modify_header_arrayval = modify_header_array;
    console.log('this.modify_header_arrayval');
    console.log(this.modify_header_arrayval);
  }

  @Input()
    set deleteendpoint(deleteendpointval: any) {
      this.deleteendpointval = deleteendpointval;
      console.log('this.deleteendpointval');
      console.log(this.deleteendpointval);
    }

 @Input()
    set updateendpoint(updateendpoint: any) {
      this.updateendpointval = updateendpoint;
      console.log('this.updateendpointval');
      console.log(this.updateendpointval);
    }
    @Input()
    set apiurl(apiurl: any) {
      this.apiurlval = apiurl;
      console.log('this.apiurlval');
      console.log(this.apiurlval);
    }

@Input()
    set jwttoken(jwttoken: any) {
      this.jwttokenval = jwttoken;
      console.log('this.jwttokenval');
      console.log(this.jwttokenval);
    }

    @Input()
    set statusarr(statusarr: any) {
      this.statusarrval = statusarr;
      console.log('this.statusarrval');
      console.log(this.statusarrval);
    }

  @Input()
  set editroute(editroute: any) {
    console.log('editroute');
    console.log(editroute);
    this.editrouteval = editroute;
    console.log('this.editrouteval');
    console.log(this.editrouteval);
  }


  displayedColumns: string[] = [];
  datacolumns: string[] = [];
  displayedColumnsheader: string[] = [];
  formarray: any = [];
  //email: any ;
  //dataSource = new MatTableDataSource(this.datasourceval);
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  options: FormGroup;
  myForm:any;
  // myForm:any;

  constructor(public _apiService: ApiService,public dialog: MatDialog,private bottomSheet: MatBottomSheet,public fb: FormBuilder,private router: Router) {

    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      password: ['', Validators.required]
    });



  }
  /*@Directive({
    selector: '[Listing]'
  })*/


  onSubmit() {
    let x: any;
    this.errormg = '';
    let data = this.myForm.value;
    console.log('data');
    console.log(data);
    console.log(this.myForm.valid);
    for (x in this.myForm.controls) {
      this.myForm.controls[x].markAsTouched();
    }
  }

  inputblur(val:any){
    console.log('on blur .....');
    this.myForm.controls[val].markAsUntouched();
  }
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
    this.olddata=data_list;

    this.dataSource = new MatTableDataSource(data_list);
    this.selection = new SelectionModel(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getstatus(val:any){
    for(let b in this.statusarrval){
      if(this.statusarrval[b].val==val)
        return this.statusarrval[b].name;
    }
    return "N/A";
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


  viewdata(data1:any){
    let data:any;
    data=data1;
    let data2:any=[];
    console.log('data');
    console.log(data);

      for (let key in data) {
        let flagk:any='';
          if (data.hasOwnProperty(key)) {
              console.log(key + " -> " + data[key]+"--->"+typeof (data[key]));
              if(typeof (data[key])=='boolean') {
                  if(data[key]==true) data[key]='Yes';
                  if(data[key]==false) data[key]='No';
              }

              if(typeof (data[key])=='object') {
                  let tempdata:any=[];
                  for(let k in data[key]){
                      console.log('key');
                      console.log(key);
                      console.log(this.detail_datatypeval);
                      for(let p in this.detail_datatypeval){
                          console.log('p');
                          console.log(p);
                          console.log(key);
                          console.log(data[key][k]);
                          if(this.detail_datatypeval[p].key==key && this.detail_datatypeval[p].value=='image'){

                              let imgval:any=this.detail_datatypeval[p].fileurl+data[key][k].replace(/'/g, '');
                              console.log('imgval');
                              console.log('imgval');
                              console.log(imgval);
                              console.log(data[key][k].replace(/'/g, ''));
                              tempdata.push("<img mat-card-image src="+imgval+"><br/>");
                             // tempdata.push("<span>"+data[key][k]+"</span><br/>")


                          }
                          if(this.detail_datatypeval[p].key==key && this.detail_datatypeval[p].value!='image'){
                              //tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                              tempdata.push("<span>"+data[key][k]+"</span><br/>");


                          }
                      }

                  }
                  data[key]=tempdata;
              }
          }
      }

      console.log('data');
      console.log(data);
      for(let n in data){
        if(data[n]!=null && data[n]!=''){
          data2[n]=data[n];
        }
      }

    for(let v in this.detail_skip_arrayval){
      //data2[this.detail_skip_arrayval[v]]='';
      delete data2[this.detail_skip_arrayval[v]];
      console.log('this.detail_skip_arrayval[v]');
      console.log(this.detail_skip_arrayval[v]);
    }
      let res = Object.entries(data2);
    console.log('this.detail_skip_array');
    console.log(this.detail_skip_arrayval);
    console.log(this.detail_datatypeval);

    console.log('res');
    console.log(res);



    const dialogRef = this.dialog.open(Confirmdialog, {
      height: 'auto',
      panelClass: 'custom-modalbox',
      data: {isconfirmation:false,data:res}
    });

  }
  managestatus(data:any){
    console.log('data');
    console.log(data);
    let bs=this.bottomSheet.open(BottomSheet,{panelClass: 'custom-bottomsheet',data:{items:this.statusarrval}});

    bs.afterDismissed().subscribe(result => {
      console.log('The bottom sheet was closed');
      console.log(result);
      if(result!=null){
        data.status = result.val;
        data.id = data._id;
      this._apiService.togglestatus(this.apiurlval + 'statusupdate', data, this.jwttokenval, this.sourcedataval).subscribe(res => {
        let result: any = {};
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

          let dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            data: {message: 'Status updated successfully!!', isconfirmation: false}
          });

        }

      }, error => {
        console.log('Oooops!');
      });
    }
      //this.animal = result;
    });

  }

  managestatusmultiple(){

    let ids:any=[];
    let c:any;
    for(c in this.selection.selected){

      ids.push(this.selection.selected[c]._id);
    }
    console.log('ids');
    console.log(ids);
    //console.log('data');
    //console.log(data);
    let bs=this.bottomSheet.open(BottomSheet,{data:{items:this.statusarrval}});

    bs.afterDismissed().subscribe(result => {
      console.log('The bottom sheet was closed');
      console.log(result);
      if(result!=null){
        //data.status = result.val;
        //data.id = data._id;
        let newstatus:any=result.val;
      this._apiService.togglestatusmany(this.apiurlval + 'statusupdate', ids,result.val, this.jwttokenval, this.sourcedataval).subscribe(res => {
        let result: any = {};
        result = res;
        if (result.status == 'success') {
          for (let c in this.olddata) {
            //this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
            if (ids.indexOf(this.olddata[c]._id)>-1) {
              console.log('in data update');
              //console.log(data);
              this.olddata[c].status = newstatus;
            }
          }
          this.dataSource = new MatTableDataSource(this.olddata);
          this.selection = new SelectionModel(true, []);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          let dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: 'custom-modalbox',
            data: {message: 'Status updated successfully!!', isconfirmation: false}
          });

        }

      }, error => {
        console.log('Oooops!');
      });
    }
      //this.animal = result;
    });

  }

  deletemultiple(){
    console.log('this.selection.selected.length');
    console.log(this.selection.selected.length);
    console.log(this.selection);
    console.log(this.selection.selected);

    const dialogRef = this.dialog.open(Confirmdialog, {
      panelClass: 'custom-modalbox',
      data: {message: 'Are you sure to delete selected records ??'}
    });
    let ids:any=[];
    let c:any;
    for(c in this.selection.selected){

      ids.push(this.selection.selected[c]._id);
    }
    console.log('ids');
    console.log(ids);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result=='yes'){
        this._apiService.deteManyData(this.apiurlval+this.deleteendpointval,ids,this.jwttokenval,this.sourcedataval).subscribe(res => {
          let result: any = {};
          result = res;
          if(result.status=='success'){
            for(let c in ids){
              this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
            }
            this.dataSource = new MatTableDataSource(this.olddata);
            this.selection = new SelectionModel(true, []);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            let dialogRef = this.dialog.open(Confirmdialog, {
              panelClass: 'custom-modalbox',
              data: {message: 'Are you sure to delete this record ??',isconfirmation:false}
            });

          }

        }, error => {
          console.log('Oooops!');
        });

      }
      //this.animal = result;
    });
  }
  deletedata(data:any){
    //alert(5);
    //this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
    console.log('data 889 ---');
    console.log(data);
    console.log('jwttokenval');
    console.log(this.jwttokenval);


    const dialogRef = this.dialog.open(Confirmdialog, {
      panelClass: 'custom-modalbox',
      height: 'auto',
      data: {message: 'Are you sure to delete this record ??'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result=='yes'){
        this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval,this.sourcedataval).subscribe(res => {
          let result: any = {};
          result = res;
          if(result.status=='success'){

            this.olddata = this.olddata.filter(olddata => olddata._id != data._id)
            this.dataSource = new MatTableDataSource(this.olddata);
            this.selection = new SelectionModel(true, []);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            let dialogRef = this.dialog.open(Confirmdialog, {
              panelClass: 'custom-modalbox',
              data: {message: 'Record  deleted successfully !!',isconfirmation:false}
            });
          }

        }, error => {
          console.log('Oooops!');
        });

      }
      //this.animal = result;
    });

  }

 editdata(data:any){
    console.log('data');
    console.log(data);
    console.log(this.editrouteval);
    console.log(this.editrouteval+data._id);
    console.log(this.jwttokenval);
   this.router.navigate([this.editrouteval,data._id]);
    //this.na


  }



}


@Component({
  selector: 'confirmdialog',
  templateUrl: 'confirm-dialog.html',
})
export class Confirmdialog {

  constructor(
      public dialogRef: MatDialogRef<Confirmdialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('my data ...');
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}




@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheet>,@Inject(MAT_BOTTOM_SHEET_DATA) public data:any) {}

  openLink(val:any): void {
    console.log('bottomsheet data');
    console.log(val);
    this.bottomSheetRef.dismiss(val);
    //event.preventDefault();
  }
}