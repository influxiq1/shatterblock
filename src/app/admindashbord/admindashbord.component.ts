import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Validators } from "@angular/forms";
import {FieldConfig} from "../field.interface";
declare var moment:any;

/*export interface Validator {
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
}*/

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


    custom_link: any = [{
        label: 'shatterblok',
        url: 'http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=',
        action: 'null'
    }, {
        label: 'Audiodateline',
        url: 'http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=',
        action: 'null'
    }];

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
    pendingmodelapplicationarray_skip: any = ['_id', 'type', 'password'];
    pendingmodelapplicationarray_detail_skip: any = ['_id', 'email', 'name'];
    pendingmodelapplicationarray_detail_datatype: any = [{
        key: "images",
        value: 'image',
        fileurl: "http://18.222.26.198/upload/brandimages/"
    }];

    statusarray: any = [{val: 1, name: 'Approve'}, {val: 4, name: 'Decline'}, {val: 3, name: 'Lock'}];
    emailarray: any = [{val: 'sourotest222@gmail.com', name: 'sourotest222@gmail.com'}, {val: 'octtest@yopmail.com', name: 'octtest@yopmail.com'}, {val: 'septest@yopmail.com', name: 'septest@yopmail.com'}];
    editroute: any = 'editroute';
    pendingmodelapplicationarray_modify_header: any = {
        'firstname': "First Name",
        'email': 'Email Id',
        'lastname': 'Last Name',
        'name': "Full Name"
    };
    brandarray: any = [];
    notpendingapplication_view: any = [];
    adminlist: any = [];
    updateurl = 'addorupdatedata';
    delurl = 'deletesingledata';
    tablename = 'users';
    searchendpoint = 'datalist';
    click_to_add_ananother_page = '/adminlist';


    editroute1:any='modeledit';


    date_search_endpoint: any='datalist';
    date_search_source: any='userslist_view';
    search_settings:any={datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],
        selectsearch:[{label:'Search By email',field:'email',values:this.emailarray},
            {label:'Search By Status',field:'status',values:this.statusarray}
            ],
        textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],
        search:[{label:"Search By autocomplete",field:'name'}]
    };

    status_gretterthan_zero_skip: any= ['_id','username','phone','city','state','ethnicity','height','haircolor','eyecolor','weight','bust','waist','hips','slim','toned','tattoos','athletic','piercings','retail','voluptuous','promotions','sales','descriptionbox','facebooklink','twitterlink','instagramlink','modelmayhemlink','type','images'];
    status_gretterthan_zero_modify_header: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name', 'bodytype' : 'Bodytype', 'shatterblok agreement date': 'Shatterblok Agreement Date', 'audiodeadline agreement date': 'Audiodeadline Agreement Date' };
    status_gretterthan_zero_detail_skip:any=['_id','email','name','type','status'];
    status_gretterthan_zero_detail_datatype:any=[{key:"images",value:'image',fileurl:this._apiService.uplodeimg_url }];


    // editroute:any = [{val: 1, name:"hi"}];

    constructor(public router: Router, private route: ActivatedRoute, private _apiService: ApiService) {
        console.log('custom_link');
        console.log(this.custom_link);
        this.datasource = 'pendingapplication_view';
        this._apiService.getData({"source": "users", "condition": {"type": "admin"}}).subscribe(res => {
            let result: any = {};
            result = res;
            console.log('in constructor');
            console.log(result);
            this.adminlist = result.res;

        }, error => {
            console.log('Oooops!');
        });
    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            // PRE LOAD DATA PRIOR
            console.log(data);
            console.log('data from route ... !!!');
            console.log('json', data['results']);
            this.brandarray = data['results'].item.brand;
            for(let v in data['results'].item.status_gretterthan_zero){
                data['results'].item.status_gretterthan_zero[v].grab_url='';
            }
            this.status_gretterthan_zero = data['results'].item.status_gretterthan_zero;
            console.log('this.status_gretterthan_zero');
            console.log(this.status_gretterthan_zero);


            this.pendingapplication_view = data['results'].item.pendingapplication_view;
            this.joquuserlist = data['results'].item.joquusercollection_view;
            // this.model_pending_and_notpending_application_view=data['results'].item.model_pending_and_notpending_application_view;

        });
        // this.allcommissionfunc();
        // this.allorders();
    }

}
