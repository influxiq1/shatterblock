import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AdminformComponent} from "../adminform/adminform.component";
import {AdminmodalformComponent} from "../adminmodalform/adminmodalform.component";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../app/api.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})

export class AdminlistComponent implements OnInit {
  displayedColumns: string[] = ['status', 'name', 'username', 'description', 'actions' ];
  dataSource: any ;
  dataSource1: any ;
  public result: any;
  public endpoint ='datalist';
  constructor( public dialog:MatDialog, public apiservice: ApiService, public router :Router, public route: ActivatedRoute) {





  }

  ngOnInit() {
    this.route.data.forEach( (data) =>{
      console.log('data in resolve');
      console.log(data);
      this.dataSource = data['results'].item.brand;
      console.log('this.dataSource');
      console.log(this.dataSource);
      console.log(this.dataSource.length);
      console.log(this.dataSource[0].name);
      console.log(this.dataSource);

    })
  }
  openDialog(){
    const dialogRef= this.dialog.open(AdminmodalformComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //  toogle views
  public show:boolean = true;
  public hide:boolean = false;
  public buttonName:any = 'ListView';

  toggle(){
    this.show = !this.show;
    this.hide = !this.hide;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "GridView";
    else
      this.buttonName = "ListView";


  };


  applyFilter( filterValue: string){
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
