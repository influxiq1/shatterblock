import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Validators } from "@angular/forms";
import {FieldConfig} from "../field.interface";
declare var moment:any;


@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {
    componentRef: any;
    datasource: any; 
    status_gretterthan_zero: any;
    pendingapplication_view: any;
    joquuserlist: any;
    custombutton: any={label:'my tree',fields:['type','name','_id'],url:'http://localhost:4200/affiliate-tree'};
    placeholder: any = ['placeholder'];
    type: any = ['text'];
    name: any = ['Username'];



     // use for Download the PDF 

    custom_link: any = [{
        label: 'shatterblok',
        url: 'http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=',
        action: 'null'
    }, {
        label: 'Audiodateline',
        url: 'http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=',
        action: 'null'
    }];



    // use for grab the link
    grab_link: any = [
        {
            col_name: 'grab_url',
            field_name: 'name'
        },
        {
        label: 'shatterblok grab url',
        url: 'artixtxp.com/',
        action: 'null'
    }, {
        label: 'Audiodateline grab url',
        url: 'audiodateline.com/',
        action: 'null'
    }
];

    pendingmodelapplicationarray: any = [];
   
 

     // use for status search

    statusarray: any = [{val: 1, name: 'Approve'}, {val: 4, name: 'Decline'}, {val: 3, name: 'Lock'}]; 

     // use for ststic email search
    //  Example like this
    emailarray: any = [{val: 'sourotest222@gmail.com', name: 'sourotest222@gmail.com'}, {val: 'octtest@yopmail.com', name: 'octtest@yopmail.com'}, {val: 'septest@yopmail.com', name: 'septest@yopmail.com'}];

    // use for edit any field Navigate that page And you should be import the app-routing.module.ts   ex:- {path: 'editroute/:id', component: < "Write the class name"> },

    //  Example like this
    editroute: any = 'editroute';


    // use for Table Header modification 

    // Like Table head name is " firstname" => "First Name"
    modify_header_array: any = {
        'firstname': "First Name",
        'email': 'Email Id',
        'lastname': 'Last Name',
        'name': "Full Name",
        'blogtitle':"Blog Title"
    };


    // use for Table Header Skip 
    pendingmodelapplicationarray_skip: any = ['_id', 'type', 'password','description','blogs_image','created_at'];



      // use for Table Detail Field Skip 
    pendingmodelapplicationarray_detail_skip: any = ['_id', 'email', 'name'];


     // use for Table Detail inside the modal image path 
    pendingmodelapplicationarray_detail_datatype: any = [{
        key: "images",
        value: 'image',
        fileurl: "http://18.222.26.198/upload/brandimages/"             // Image path 
    }];

    // updateendpoint is use for data update endpoint
    updateendpoint = 'addorupdatedata';

    // deleteendpoint is use for data delete endpoint
    deleteendpoint = 'deletesingledata';

    // this is a database collection name
    tablename = 'users';

    // searchendpoint is use for data search endpoint
    searchendpoint = 'datalist';

    // use for click to another page routing path
    click_to_add_ananother_page = '/adminlist';



    // date_search_endpoint is use for date search endpoint
    date_search_endpoint: any='datalist';


    // this is a database collection or view name
    date_search_source: any='userslist_view';

    // this is use for  All type of search 
    search_settings:any={

        datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

        // selectsearch:[{label:'Search By email',field:'email',values:this.emailarray}, {label:'Search By Status',field:'status',values:this.statusarray}], // this is use for  select search

        // textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

        // search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
    };



    brandarray: any = [];
    notpendingapplication_view: any = [];
    adminlist: any = [];



    editroute1:any='modeledit';


    
    status_gretterthan_zero_skip: any= ['_id','username','phone','city','state','ethnicity','height','haircolor','eyecolor','weight','bust','waist','hips','slim','toned','tattoos','athletic','piercings','retail','voluptuous','promotions','sales','descriptionbox','facebooklink','twitterlink','instagramlink','modelmayhemlink','type','images'];
    status_gretterthan_zero_modify_header: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name', 'bodytype' : 'Bodytype', 'shatterblok agreement date': 'Shatterblok Agreement Date', 'audiodeadline agreement date': 'Audiodeadline Agreement Date' };
    status_gretterthan_zero_detail_skip:any=['_id','email','name','type','status'];
    status_gretterthan_zero_detail_datatype:any=[{key:"images",value:'image',fileurl:this._apiService.uplodeimg_url }];


    // editroute:any = [{val: 1, name:"hi"}];

    constructor(public router: Router, private route: ActivatedRoute, private _apiService: ApiService) {
        // console.log('custom_link');
        // console.log(this.custom_link);
        this.datasource = '';
        let endpoint='getadminbloglistdata';
        let data:any={
            "condition":{
                "limit":2,
                "skip":0
            }

        }
        this._apiService.postData(endpoint,data).subscribe((res:any) => {
            // console.log('in constructor');
            // console.log(result);
            this.pendingmodelapplicationarray =res.results.blogs;
            console.warn('blogData',res);

        }, error => {
            console.log('Oooops!');
        });
    }

    ngOnInit() {
        // this.route.data.forEach((data) => {
        //     // PRE LOAD DATA PRIOR
        //     console.log(data);
        //     console.log('data from route ... !!!');
        //     console.log('json', data['results']);
        //     this.brandarray = data['results'].item.brand;
        //     for(let v in data['results'].item.status_gretterthan_zero){
        //         data['results'].item.status_gretterthan_zero[v].grab_url='';
        //     }
        //     this.status_gretterthan_zero = data['results'].item.status_gretterthan_zero;
        //     console.log('this.status_gretterthan_zero');
        //     console.warn(this.status_gretterthan_zero);


        //     this.pendingapplication_view = data['results'].item.pendingapplication_view;
        //     this.joquuserlist = data['results'].item.joquusercollection_view;
        //     // this.model_pending_and_notpending_application_view=data['results'].item.model_pending_and_notpending_application_view;

        // });
        // this.allcommissionfunc();
        // this.allorders();
    }

}
