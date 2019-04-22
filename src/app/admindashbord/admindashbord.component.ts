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
    endpoint:any = 'datalist';
    notpendingapplication_view: any=[];
    brandarray: any=[];
    adminlist:any=[];
    editroute1:any='modeledit';


    pendingapplication_view: any=[];
    pendingapplication_view_skip: any= ['_id','username','phone','city','state','ethnicity','height','haircolor','eyecolor','weight','bust','waist','hips','slim','toned','tattoos','athletic','piercings','retail','voluptuous','promotions','sales','descriptionbox','facebooklink','twitterlink','instagramlink','modelmayhemlink','type','images'];
    pendingapplication_view_modify_header1: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name' , 'bodytype' : 'Bodytype' };
    pendingapplication_view_detail_skip:any=['_id','email','name','type','status'];
    pendingapplication_view_detail_datatype:any=[{key:"images",value:'image',fileurl:this.apiservice.uplodeimg_url }];


    joquuserlist: any=[];
    joquuserlist_skip: any= ['id','_id','instagramlink','shatterblok_user_id','joqu_status','city','state','unique_id','created at'];
    joquuserlist_modify_header1: any = { 'name': 'Full Name','lastname':'Last Name','email':'Email', 'age':'Age', 'dateformat':'Date','status':'Status','phone':'Phone'};
    joquuserlist_statusarray:any=[{val:1,name:'Pending for process'},{val:2,name:'Processed by admin'},{val:3,name:'Approved from Joqu'},{val:4,name:'Decline'}];

    allordersdata:any=[];
    allordersdata_skip: any= ['id','_id','instagramlink','shatterblok_user_id','joqu_status','city','state','unique_id','created at'];
    allordersdata_modify_header1: any = { 'name': 'Name','email':'Email', 'phone':'Phone', 'enroller':'Enroller','sponsor':'Sponsor','mode':'Mode','Transaction Id':'Transaction Id','total':'Total','Promocode':'Promocode','Discount':'Discount','Order Time':'Order Time'};

    allcommissions:any=[];
    allcommissions_skip: any= ['_id','parent'];
    allcommissions_modify_header1: any = { 'date': 'Sign-Up Date','firstname':'First name', 'lastname':'Last name', 'accounttype':'Account Type','noofsale':'# Of Sale','totalamount':'Total Commission'};

    status_gretterthan_zero: any=[];
    status_gretterthan_zero_skip: any= ['_id','username','phone','city','state','ethnicity','height','haircolor','eyecolor','weight','bust','waist','hips','slim','toned','tattoos','athletic','piercings','retail','voluptuous','promotions','sales','descriptionbox','facebooklink','twitterlink','instagramlink','modelmayhemlink','type','images'];
    status_gretterthan_zero_modify_header: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name', 'bodytype' : 'Bodytype', 'shatterblok agreement date': 'Shatterblok Agreement Date', 'audiodeadline agreement date': 'Audiodeadline Agreement Date' };
    status_gretterthan_zero_detail_skip:any=['_id','email','name','type','status'];
    status_gretterthan_zero_detail_datatype:any=[{key:"images",value:'image',fileurl:this.apiservice.uplodeimg_url }];



    model_pending_and_notpending_application_view: any=[];
    model_pending_and_notpending_application_view_skip: any= ['type','password','Contracts_Signed', 'created_at', '_id','username','email','status','date_iso_dateformat','regDate'];
    model_pending_and_notpending_application_view_modify_header: any = { 'date': 'Date','Age':'Age','name':'Name','submissionprocess':'Submission Process','contractssigned':'Contracts Signed'};



   // statusarray:any=[{val:1,name:'Approve'},{val:2,name:'Decline'},{val:4,name:'Lock'},{val:0,name:'Pending'},{val:3,name:'Dashboard Access'}];
    statusarray:any=[{val:1,name:'Approve'},{val:4,name:'Decline'},{val:0,name:'Pending'},{val:3,name:'Dashboard Access'}];
    updateurl='addorupdatedata';
    delurl='deletesingledata';
    tablename='users';
    tablename1='joquuser';
    tablename2='demoname';

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
            this.joquuserlist=data['results'].item.joquusercollection_view;
            // this.model_pending_and_notpending_application_view=data['results'].item.model_pending_and_notpending_application_view;

        });
        this.allcommissionfunc();
    }
    allcommissionfunc(){
        let data = {source:'newcommision'};
        this.apiservice.postaffilite(this.endpoint, data).subscribe( res => {
            let result: any;
            result = res;
            this.allcommissions=result.res;
            console.log('this.allcommissions');
            console.log(this.allcommissions);
        })
    }
    allorders(){
        let sourcecondition={auidodeadineusername:{$exists:true}};
        let data = {source:'users',condition:sourcecondition};
        this.apiservice.postData(this.endpoint, data).subscribe( res => {
            let result: any = {};
            result = res;
            console.log('result');
            console.log(result);

        })
    }

}

