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
    datasource:any;
    placeholder: any=['placeholder'];
    type: any=['text'];
    name: any=['Username'];


    custom_link: any = [{label: 'Download Contract 1',url:'http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=',action:'null'},{label: 'Download Contract 2',url:'http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=',action:'null'}];
    pendingmodelapplicationarray:any=[];
    pendingmodelapplicationarray_skip:any=['_id','type','password'];
    pendingmodelapplicationarray_detail_skip:any=['_id','email','name'];
    pendingmodelapplicationarray_detail_datatype:any=[{key:"images",value:'image',fileurl:"http://18.222.26.198/upload/brandimages/" }];
    statusarray:any=[{val:1,name:'Approve'},{val:2,name:'Decline'},{val:3,name:'Lock'}];
    editroute:any= 'editroute';
    pendingmodelapplicationarray_modify_header:any={'firstname':"First Name",'email':'Email Id','lastname':'Last Name','name':"Full Name"};
    brandarray:any=[];
    notpendingapplication_view:any=[];
    adminlist:any=[];
    updateurl='addorupdatedata';
    delurl='deletesingledata';
    tablename='users';
    serachendpoint='datalist';
    // editroute:any = [{val: 1, name:"hi"}];

  constructor(public router: Router,private route: ActivatedRoute,private _apiService: ApiService) {
      console.log('custom_link');
      console.log(this.custom_link);
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
          this.pendingmodelapplicationarray=data['results'].item.pendingapplication_view;
          this.brandarray=data['results'].item.brand;
          this.notpendingapplication_view=data['results'].item.notpendingapplication_view;


      });
  }


    stateGroups:any = ['Alabama', 'Alaska', 'Arizona', 'Arkansas','California', 'Colorado', 'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho', 'Illinois', 'Indiana', 'Iowa','Kansas', 'Kentucky','Louisiana','Maine', 'Maryland', 'Massachusetts', 'Michigan','Minnesota', 'Mississippi', 'Missouri', 'Montana','Nebraska', 'Nevada', 'New Hampshire', 'New Jersey','New Mexico', 'New York', 'North Carolina', 'North Dakota']
/*
    stateGroups:any = [{
        letter: 'A',
        names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
    }, {
        letter: 'C',
        names: ['California', 'Colorado', 'Connecticut']
    }, {
        letter: 'D',
        names: ['Delaware']
    }, {
        letter: 'F',
        names: ['Florida']
    }, {
        letter: 'G',
        names: ['Georgia']
    }, {
        letter: 'H',
        names: ['Hawaii']
    }, {
        letter: 'I',
        names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
    }, {
        letter: 'K',
        names: ['Kansas', 'Kentucky']
    }, {
        letter: 'L',
        names: ['Louisiana']
    }, {
        letter: 'M',
        names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
            'Minnesota', 'Mississippi', 'Missouri', 'Montana']
    }, {
        letter: 'N',
        names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota']
    }, {
        letter: 'O',
        names: ['Ohio', 'Oklahoma', 'Oregon']
    }, {
        letter: 'P',
        names: ['Pennsylvania']
    }, {
        letter: 'R',
        names: ['Rhode Island']
    }, {
        letter: 'S',
        names: ['South Carolina', 'South Dakota']
    }, {
        letter: 'T',
        names: ['Tennessee', 'Texas']
    }, {
        letter: 'U',
        names: ['Utah']
    }, {
        letter: 'V',
        names: ['Vermont', 'Virginia']
    }, {
        letter: 'W',
        names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }];*/

    /*regConfig: FieldConfig[] = [
        {
            type: "input",
            label: "Username",
            inputType: "text",
            name: "name",
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Name Required"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern("^[a-zA-Z]+$"),
                    message: "Accept only text"
                }
            ]
        } /!*,
        {
            type: "input",
            label: "Email Address",
            inputType: "email",
            name: "email",
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Email Required"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern(
                        "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                    ),
                    message: "Invalid email"
                }
            ]
        },

        {
            type: "input",
            label: "Phone number",
            inputType: "number",
            name: "Phone",
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Phone number Required"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern(
                        "/^[1-9]{1}[0-9]{9}$/"
                    ),
                    message: "Invalid phone number"
                }
            ]
        },


        {
            type: "input",
            label: "Password",
            inputType: "password",
            name: "password",
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Password Required"
                }
            ]
        },
        {
            type: "radiobutton",
            label: "Gender",
            name: "gender",
            options: ["Male", "Female"],
            value: "Male"
        },
         /!*{
         type: "date",
         label: "DOB",
         name: "dob",
         validations: [
         {
         name: "required",
         validator: Validators.required,
         message: "Date of Birth Required"
         }
         ]
         },*!/
        {
            type: "select",
            label: "Country",
            name: "country",
            value: "UK",
            options: ["India", "UAE", "UK", "US"]
        },
        {
            type: "checkbox",
            label: "Accept Terms",
            name: "term",
            value: true
        },
        {
            type: "button",
            label: "Save"
        }*!/
    ];

    submit(value: any) {}*/
}
