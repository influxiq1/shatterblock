import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {
  datasource:any;
    pendingmodelapplicationarray:any=[];
    pendingmodelapplicationarray_skip:any=['_id','type','password'];
    statusarray:any=[{val:1,name:'Approve'},{val:2,name:'Decline'},{val:3,name:'Lock'}];
    pendingmodelapplicationarray_modify_header:any={'firstname':"First Name",'email':'Email Id','lastname':'Last Name','name':"Full Name"};
    brandarray:any=[];
    notpendingapplication_view:any=[];
    adminlist:any=[];
    updateurl='addorupdatedata';
    delurl='deletesingledata';
    tablename='users';

  constructor(public router: Router,private route: ActivatedRoute,private _apiService: ApiService) {
    this.datasource='pendingapplication_view';
      this._apiService.getData({"source":"users","condition":{"type":"admin"}}).subscribe(res => {
          let result: any = {};
          result = res;
          console.log('in constructor');
          console.log(result);
          this.adminlist=result.res;

      }, error => {
          console.log('Oooops!');
      });
  }

  ngOnInit() {

      this.route.data.forEach((data) => {
          //PRE LOAD DATA PRIOR
          console.log('data from route ... !!!');
          console.log('json',data['results']);
          this.pendingmodelapplicationarray=data['results'].item.notpendingapplication_view;
          this.brandarray=data['results'].item.brand;
          this.notpendingapplication_view=data['results'].item.notpendingapplication_view;


      });
  }

}
