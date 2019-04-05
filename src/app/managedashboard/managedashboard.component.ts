import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-managedashboard',
  templateUrl: './managedashboard.component.html',
  styleUrls: ['./managedashboard.component.css']
})
export class ManagedashboardComponent implements OnInit {
  datasource:any;
  pendingmodelapplicationarray1: any=[];
  pendingmodelapplicationarray: any=[];
  notpendingapplication_view: any=[];
  pendingmodelapplicationarray_skip: any= ['type','password','Contracts_Signed', 'created_at', '_id','username','email','status','date_iso_dateformat','regDate'];
  pendingmodelapplicationarray_modify_header: any = { 'date': 'Date','Age':'Age','name':'Name','submissionprocess':'Submission Process','contractssigned':'Contracts Signed'};
  pendingmodelapplicationarray_modify_header1: any = { 'dateformat': 'Date','username':'Username','status':'Status','email':'Email' };
  pendingmodelapplicationarray_skip1: any= ['_id'];
  adminlist:any=[];
  constructor(public router: Router,private route: ActivatedRoute, public apiservice: ApiService) {
    this.apiservice.getData({'source':'model_pending_and_notpending_application_view'}).subscribe(res=> {
      let result: any;
      result = res;
      console.log('result');
      console.log(result);
    });
  }

  ngOnInit() {
    console.log('data in oninit');
    this.route.data.forEach((data) => {
      // PRE LOAD DATA PRIOR
      console.log(data);
      console.log('data from route ... !!!');
      console.log('json',data['results']);
    });
  }

}
