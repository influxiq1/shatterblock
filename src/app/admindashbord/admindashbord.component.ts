import {Component, OnInit, ViewChild} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Validators } from "@angular/forms";
import {FieldConfig} from "../field.interface";
//import {ShowformComponent} from;
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
   
    public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];

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
    pendingmodelapplicationarray_skip: any = ['_id','video_thamnail','type', 'password','description','blogs_image','created_at'];



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
    // send basic limit data
    limitcond:any={
        "limit":10,
        "skip":0,
        "pagecount":1
    };

    // other data
    libdata:any={
        //basecondition:{status:1},
        detailview_override:[{key:"tags_array",val:"Tags"},{key:"author",val:"Written By"},{key:"blogtitle",val:"Title"}], // optional
        updateendpoint:'statusupdate',
        hideeditbutton:true,// all these button options are optional not mandatory
        //hidedeletebutton:true,
        //hideviewbutton:false,
        //hidestatustogglebutton:true,
        // hideaction:true,
        tableheaders:['author','priority','blogtitle','status','wrongone','created_date','created_datetime'], //not required
        custombuttons:[
            {
                label:"fb search with blog title",
                link:"https://www.facebook.com/search/top/",
                type:'externallink',
                param:[{key:'blogtitle',q:'q'}],
            },
            {
                label:"G search with blog title ACtive",
                link:"https://www.google.com/search",
                type:'externallink',
                param:[{key:'blogtitle',q:'q'},{key:'author',q:'oq'}],
                cond:'status',
                condval: 1
            },{
                label:"mask blog",
                link:"https://mask-blog1.influxiq.com/blog-details",
                type:'externallink',
                paramtype:'angular',
                param:['blogtitle','_id'],
                cond:'status',
                condval: 0
            },
            {
                label:" fb profile ",
                link:"https://www.facebook.com/debasiskar007",
                type:'externallink'
            },
            {
                label:" fb profile for inactive",
                link:"https://www.facebook.com/debasiskar007",
                type:'externallink',
                cond:'status',
                condval:0
            },
            {
                label:" fb profile for active",
                link:"https://www.facebook.com/debasiskar007",
                type:'externallink',
                cond:'status',
                condval:1
            },
            {
                label:"see brand",
                route:"brand",
                type:'internallink',
                cond:'status',
                condval:0
            },
            {
                label:"see brand with param",
                route:"brand",
                type:'internallink',
                cond:'status',
                condval:0,
                param:['_id','blogtitle'],
            },
            {
                label:"Desc from data",
                type:'action',
                datatype:'local',
                datafields:['description','author','blogtitle','tags_array','image','video'],
                cond:'status',
                condval:0
            } ,
            {
                label:"Desc from api data",
                type:'action',
                datatype:'api',
                endpoint:'getblogdatabyid',
                //cond:'status',
                //condval:0,
                param:'blog_id',
                refreshdata:true
            }
        ]
    }
// send basic sort data
    sortdata:any={
        "type":'desc',
        "field":'priority',
        "options":['priority','author','category','blogtitle']
    };


    // this is a database collection or view name
    date_search_source: any='admin_blog_list';
    // datacollection
    datacollection: any='getadminbloglistdata';
    //source count
    date_search_source_count: any=0;

    // this is use for  All type of search
    authval:any= [
        { val: 'YmattZ', 'name': 'YmattZ A' },
        { val: 'YmattZ', 'name': 'YmattZ A' },
        { val: 'Ymatt', 'name': 'YmattZ AB' },
        { val: 'Jessica', 'name': 'A Jessica' }
    ];
    search_settings:any={

        datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search",  field:"created_at"}],   // this is use for  date search

        selectsearch:[{ label: 'Search By Status', field: 'status', values: this.status }], // this is use for  select search

        textsearch:[{label:"Search By Title",field:'blogtitle_search'},{label:"Search by auther",field:"author_search"}],  // this is use for  text search

        search:[{label:"Search By Author",field:'author_search',values:this.authval}]     // this is use for  Autocomplete search
    };

    // this is search block 



    brandarray: any = [];
    notpendingapplication_view: any = [];
    adminlist: any = [];

    editroute1:any='modeledit';
    
    status_gretterthan_zero_skip: any= ['_id','username','phone','city','state','ethnicity','height','haircolor','eyecolor','weight','bust','waist','hips','slim','toned','tattoos','athletic','piercings','retail','voluptuous','promotions','sales','descriptionbox','facebooklink','twitterlink','instagramlink','modelmayhemlink','type','images'];
    status_gretterthan_zero_modify_header: any = { 'dateformat': 'Date','status':'Status','email':'Email', 'name':'Full Name', 'bodytype' : 'Bodytype', 'shatterblok agreement date': 'Shatterblok Agreement Date', 'audiodeadline agreement date': 'Audiodeadline Agreement Date' };
    status_gretterthan_zero_detail_skip:any=['_id','email','name','type','status'];
    status_gretterthan_zero_detail_datatype:any=[{key:"images",value:'image',fileurl:this._apiService.uplodeimg_url }];


    // editroute:any = [{val: 1, name:"hi"}];
    //everything we need for formlibconfiguration


    emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    temtdata:any='';
    // formdata
    formfieldrefresh:boolean=false;
    updatetable:boolean=false;
    formfieldrefreshdata:any=null;
    formdata:any={
        successmessage:"Added Successfully !!",
        redirectpath:"/admindashbord1",
        submitactive:true, //optional, default true
        apiUrl:this._apiService.domain,
        endpoint:'addformdata',
        jwttoken:this._apiService.jwttoken,
        fields:[
            {
                heading:"This is Name Header <h1> Fill the form Up !! </h1>",
                label:"Name",
                name:"fullname",
                value:'Test',
                type:"text",
                validations:[
                    {rule:'required'},
                    {rule:'maxLength',value:10},
                    {rule:'minLength',value: 2}
                    ],
                prefix:"http://google.com/",
                suffix:"PM"
            },
            {
                label:"Description",
                name:"desc",
                type:'textarea',
                value:"This test !!",
                hint:"Desc .... ",
                validations:[
                    {rule:'required',message:"Email field Needs to be required"},
                    ]
            },
            {
                label:"Email",
                name:"email",
                type:'email',
                hint:"abc@gmail.com",
                validations:[
                    {rule:'required',message:"Email field Needs to be required"},
                    {rule:'pattern',value: this.emailregex,message: "Must be a valid Email"}
                    ]
            },
            {
                label:"DOB",
                name:"dob",
                type:'date',
                value:new Date().toISOString(),
                hint:"05/05/2020",
                validations:[
                    {rule:'required',message:"Email field Needs to be required"}
                    ]
            },{
                label:"DOJ",
                name:"doj",
                type:'date',
                value:new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
                hint:"05/05/2020",
                validations:[
                    {rule:'required',message:"Email field Needs to be required"}
                    ]
            },
            {
                label:"Password",
                name:"password",
                type:'password',
                hint:"******",
                validations:[
                    {rule:'required',message:"Password field Needs to be required"},
                    {rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                    ]
            },{
                label:"Confirm Password",
                name:"confirmpassword",
                type:'password',
                hint:"******",
                validations:[
                    {rule:'required',message:"Confirm Password field Needs to be required"},
                    {rule:'match',message:"Confirm Password field Needs to  match Password"},
                    //{rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                    ]
            },
            {
                label:"Age",
                name:"age",
                type:'number',
                hint:'dddd',
                validations:[
                    {rule:'required'},
                    {rule:'min',value:5},
                    {rule:'max',value:50,message: "Age can't be more than 50 "}
                    ]
            } ,
            {
                label:"Status",
                name:"status",
                hint:',0000',
                type:'select',
                val: this.status,
                value:1,
                //value: '',
                validations:[
                    {rule:'required'}
                    ],
                prefix:"http://google.com/",
                suffix:"PM"
            } ,
            {
                label:"Year",
                name:"year",
                hint:',0000',
                type:'select',
                val: [
                {val:2020,name:2020},
                {val:2021,name:2021},
                {val:2022,name:2022},
                {val:2023,name:2023},
                {val:2024,name:2024},
                {val:2025,name:2025}

                ],
                value:[2021,2022],
                multiple:true,
                //value: '',
                validations:[
                    {rule:'required'}
                    ],
                prefix:"http://google.com/",
                suffix:"PM"
            } ,
            {
                label:"Married ",
                name:"married",
                hint:'Yes/No',
                type:'radio',
                val: [{key:0,val:'Yes'},{key:1,val:'No'},{key:3,val:'Separated'},{key:4,val:'Widow'}],
                value: 4,
                validations:[
                    {rule:'required'}
                    ]
            } ,
            {
                label:"Last Visit ",
                name:"lastvisit",
                hint:'In months',
                type:'checkbox',
                multiple:true,
                val: [{key:0,val:'Less than 1'},{key:1,val:'less than 3'},{key:2,val:'less than 6'},{key:3,val:'less than 12'}],
                value: [3,0],
                validations:[
                    {rule:'required'}
                    ]
            } ,
            {
                label:"Last Visit Auto",
                name:"lastvisita",
                hint:'In months',
                type:'autocomplete',
                //multiple:true,
                val: [{key:0,val:'Less than 1'},{key:1,val:'less than 3'},{key:2,val:'less than 6'},{key:3,val:'less than 12'}],
                //value: [3,0],
                validations:[
                    {rule:'required'}
                    ]
            } ,
            {
                label:"Active",
                name:"active",
                hint:'check ???',
                type:'checkbox',
                labelPosition:'after',
                value: true,
                validations:[
                    {rule:'required'}
                    ],
                prefix:"http://google.com/",
                suffix:"PM"

            } ,
            {
                label:"City",
                name:"city",
                type:'text'
            },
            {
                //label:"City",
                name:"pid",
                type:'hidden',
                value: "900"
            }
        ]
    };
    


    constructor(public router: Router, private route: ActivatedRoute, private _apiService: ApiService) {
        // console.log('custom_link');
        // console.log(this.custom_link);
        this.datasource = '';
        let endpoint='getadminbloglistdata'; // for main data endpoint
        let endpointc='getadminbloglistdata-count'; // for count endpoint
        // data param for conditionlimit and search
        let data:any={
            "condition":{
                "limit":10,
                "skip":0
            },
            sort:{
                "type":'desc',
                "field":'priority'
            }

        }
        this._apiService.postData(endpointc, data).subscribe((res:any) => {
            // console.log('in constructor');
            // console.log(result);
            this.date_search_source_count =res.count;
            //console.warn('blogData c',res);

        }, error => {
            console.log('Oooops!');
        });

        this._apiService.postData(endpoint,data).subscribe((res:any) => {
            // console.log('in constructor');
            // console.log(result);
            this.pendingmodelapplicationarray =res.results.res;
            //console.warn('blogData',res);

        }, error => {
            console.log('Oooops!');
        });

    }

    ngOnInit() {

    }
    updateformval(){
        this.formdata.fields[0].value=this.temtdata;
        this.formfieldrefreshdata={field:'fullname',value:this.temtdata};
        setTimeout (() => {
            this.formfieldrefreshdata = {field: 'email', value: this.temtdata + '@gmail.com'};
        },50);
        this.updatetable=!this.updatetable;

    }

}
