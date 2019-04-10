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
    pendingapplication_view_skip: any= ['_id','username','phone','city','state','ethnicity','height','haircolor','eyecolor','weight','bust','waist','hips','slim','toned','tattoos','athletic','piercings','retail','voluptuous','promotions','sales','descriptionbox','facebooklink','twitterlink','instagramlink','modelmayhemlink','type','images'];
    pendingapplication_view_modify_header1: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name' };
    pendingapplication_view_detail_skip:any=['_id','email','name','type','status'];
    pendingapplication_view_detail_datatype:any=[{key:"images",value:'image',fileurl:"http://18.222.26.198/upload/modelimages/" }];




    status_gretterthan_zero: any=[];
    status_gretterthan_zero_skip: any= ['_id','username','phone','city','state','ethnicity','height','haircolor','eyecolor','weight','bust','waist','hips','slim','toned','tattoos','athletic','piercings','retail','voluptuous','promotions','sales','descriptionbox','facebooklink','twitterlink','instagramlink','modelmayhemlink','type','images'];
    status_gretterthan_zero_modify_header: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name' };
    status_gretterthan_zero_detail_skip:any=['_id','email','name','type','status'];
    status_gretterthan_zero_detail_datatype:any=[{key:"images",value:'image',fileurl:"http://18.222.26.198/upload/modelimages/" }];



    model_pending_and_notpending_application_view: any=[];
    model_pending_and_notpending_application_view_skip: any= ['type','password','Contracts_Signed', 'created_at', '_id','username','email','status','date_iso_dateformat','regDate'];
    model_pending_and_notpending_application_view_modify_header: any = { 'date': 'Date','Age':'Age','name':'Name','submissionprocess':'Submission Process','contractssigned':'Contracts Signed'};



    statusarray:any=[{val:1,name:'Approve'},{val:2,name:'Decline'},{val:4,name:'Lock'},{val:0,name:'Pending'},{val:3,name:'Dashboard Access'}];
    updateurl='addorupdatedata';
    delurl='deletesingledata';
    tablename='users';

    constructor(public router: Router,private route: ActivatedRoute, public apiservice: ApiService) {
      
    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            // PRE LOAD DATA PRIOR
            console.log(data);
            console.log('data from route ... !!!');
            console.log('json',data['results']);
            this.brandarray=data['results'].item.brand;
            this.status_gretterthan_zero=data['results'].item.status_gretterthan_zero;


            this.pendingapplication_view=data['results'].item.pendingapplication_view;
            // this.model_pending_and_notpending_application_view=data['results'].item.model_pending_and_notpending_application_view;

        });
    }

}

