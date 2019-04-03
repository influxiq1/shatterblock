import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {
  datasource:any;
    public endpoint = 'datalist';
    pendingmodelapplicationarray: any=[];
    brandarray: any=[];
    pendingmodelapplicationarray_skip: any= ['type','password','Contracts_Signed', 'created_at'];
    pendingmodelapplicationarray_modify_header: any = {'Name' : "Full Name", 'date': 'Date', 'status': 'Status','_id':'Id'};
    adminlist:any=[];
  constructor(public router: Router,private route: ActivatedRoute, public apiservice: ApiService) {
    // this.datasource='pendingapplication_view';
      this.apiservice.getData({'source':'pendingapplication_view'}).subscribe(res=> {
          let result: any;
          result = res;
          console.log('result');
          console.log(result);
          console.log(result.res);
          this.pendingmodelapplicationarray = result.res;
      });
  }

  ngOnInit() {

      this.route.data.forEach((data) => {
          //PRE LOAD DATA PRIOR
          console.log('data from route ... !!!');
          console.log('json',data['results']);
          this.pendingmodelapplicationarray=data['results'].item.pendingapplication_view;
           this.brandarray=data['results'].item.brand;
          //this.notpendingapplication_view=data['results'].item.notpendingapplication_view;


      });
  }


}
