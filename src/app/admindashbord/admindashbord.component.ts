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
    notpendingapplication_view: any=[];
    brandarray: any=[];
    adminlist:any=[];

    pendingapplication_view: any=[];
    pendingapplication_view_skip: any= ['_id','username'];
    pendingapplication_view_modify_header1: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name' };

    model_pending_and_notpending_application_view: any=[];
    model_pending_and_notpending_application_view_skip: any= ['type','password','Contracts_Signed', 'created_at', '_id','username','email','status','date_iso_dateformat','regDate'];
    model_pending_and_notpending_application_view_modify_header: any = { 'date': 'Date','Age':'Age','name':'Name','submissionprocess':'Submission Process','contractssigned':'Contracts Signed'};
    statusarray:any=[{val:1,name:'Approve'},{val:2,name:'Decline'},{val:3,name:'Lock'},{val:0,name:'Pending'}];

    updateurl='addorupdatedata';
    delurl='deletesingledata';
    tablename='users';

    constructor(public router: Router,private route: ActivatedRoute, public apiservice: ApiService) {
        /* this.apiservice.getData({'source':'model_pending_and_notpending_application_view'}).subscribe(res=> {
          let result: any;
          result = res;
          console.log('result');
          console.log(result);
          console.log(result.res);
          this.model_pending_and_notpending_application_view = result.res;
          this.model_pending_and_notpending_application_view[0].Age='';  // extera column add in matHeaderCellDef
      });*/
    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            // PRE LOAD DATA PRIOR
            console.log(data);
            console.log('data from route ... !!!');
            console.log('json',data['results']);
            this.brandarray=data['results'].item.brand;
            this.notpendingapplication_view=data['results'].item.notpendingapplication_view;
            
            
            this.pendingapplication_view=data['results'].item.pendingapplication_view;
            this.model_pending_and_notpending_application_view=data['results'].item.model_pending_and_notpending_application_view;
            
        });
    }

}
