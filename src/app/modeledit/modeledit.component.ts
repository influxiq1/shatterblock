import {Component, OnInit, EventEmitter, TemplateRef, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, FormControl} from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from "../api.service";
import {CookieService} from "ngx-cookie-service";

@Component({
    selector: 'app-modeledit',
    templateUrl: './modeledit.component.html',
    styleUrls: ['./modeledit.component.css']
})
export class ModeleditComponent implements OnInit {
    public modeldata : any;
    public stateslist : any=[];
    endpoint:any='datalist';
    endpoint1:any='addorupdatedata';
    artistxpprofileimageupdate:any='artistxpprofileimageupdate';
    public myForm: any;
    public modeldataimages: any;
    
    public uploader: any = 'upload';
    public modeluploadpath: any = this.apiservice.modelfolder;
    public modelfilepath: any = this.apiservice.Model_Image_Url;


    constructor(  public _http: HttpClient, private router: Router, public route : ActivatedRoute, public apiservice: ApiService,public cookieService: CookieService,public fb: FormBuilder) {
        this.myForm = this.fb.group({
                id: [''],
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                age: ['', Validators.required],
                phone: ['', Validators.required],
                email: ['', ModeleditComponent.validateEmail],
                city: ['', Validators.required],
                state: ['', Validators.required],
                ethnicity: ['', Validators.required],
                height: ['', Validators.required],
                eyecolor: ['', Validators.required],
                haircolor: ['', Validators.required],
                weight: ['', Validators.required],
                bust: ['', Validators.required],
                waist: ['', Validators.required],
                hips: ['', Validators.required],
                /* password: ['', Validators.required],
      confirmpassword: ['', Validators.required],*/
                athletic: [''],
                slim: [''],
                toned: [''],
                voluptuous: [''],
                tattoos: [''],
                piercings: [''],
                promotions: ['', Validators.required],
                sales: ['', Validators.required],
                retail: ['', Validators.required],
                descriptionbox: ['', Validators.required],
                facebooklink: [''],
                instagramlink: ['', Validators.required],
                twitterlink: [''],
                modelmayhemlink: [''],
                // fileservername: [''],
                // filelocalname: [''],
                // type: [''],
                // status: [''],
            }
            // , {validator: this.machpassword('password', 'confirmpassword')}
        );
    }

    ngOnInit() {
        this.apiservice.getState().subscribe(res => {
            let result;
            result = res;
            this.stateslist = result;
        }, error => {
            console.log('Oooops!');
        });

        let data1={_id:this.cookieService.get('id')};
        let data2 = {"condition": data1,source:'users'};
        this.apiservice.postData(this.endpoint, data2).subscribe( res => {
            let result:any;
            result = res;
            console.log(result);
            if(result.res.length>0){
                this.modeldata=result.res[0];
                console.log('this.modeldata');
                console.log(this.modeldata);
                console.log(this.modeldata.images);
                this.modeldataimages = this.modeldata.images;
                this.myForm = this.fb.group({
                        id: [this.modeldata._id],
                        firstname: [this.modeldata.firstname, Validators.required],
                        lastname: [this.modeldata.lastname, Validators.required],
                        age: [this.modeldata.age, Validators.required],
                        phone: [this.modeldata.phone, Validators.required],
                        email: [this.modeldata.email, ModeleditComponent.validateEmail],
                        city: [this.modeldata.city, Validators.required],
                        state: [this.modeldata.state, Validators.required],
                        ethnicity: [this.modeldata.ethnicity, Validators.required],
                        height: [this.modeldata.height, Validators.required],
                        eyecolor: [this.modeldata.eyecolor, Validators.required],
                        haircolor: [this.modeldata.haircolor, Validators.required],
                        weight: [this.modeldata.weight, Validators.required],
                        bust: [this.modeldata.bust, Validators.required],
                        waist: [this.modeldata.waist, Validators.required],
                        hips: [this.modeldata.hips, Validators.required],
                        /* password: ['', Validators.required],
               confirmpassword: ['', Validators.required],*/
                        athletic: [this.modeldata.athletic],
                        slim: [this.modeldata.slim],
                        toned: [this.modeldata.toned],
                        voluptuous: [this.modeldata.voluptuous],
                        tattoos: [this.modeldata.tattoos],
                        piercings: [this.modeldata.piercings],
                        promotions: [this.modeldata.promotions, Validators.required],
                        sales: [this.modeldata.sales, Validators.required],
                        retail: [this.modeldata.retail, Validators.required],
                        descriptionbox: [this.modeldata.descriptionbox, Validators.required],
                        facebooklink: [this.modeldata.facebooklink, Validators.required],
                        instagramlink: [this.modeldata.instagramlink, Validators.required],
                        twitterlink: [this.modeldata.twitterlink, Validators.required],
                        modelmayhemlink: [this.modeldata.modelmayhemlink, Validators.required],
                        // fileservername: [this.modeldata.firstname],
                        // filelocalname: [this.modeldata.firstname],
                        // type: [this.modeldata.firstname],
                        // status: [''],
                    }
                    // , {validator: this.machpassword('password', 'confirmpassword')}
                );
            }
        });
    }
    static validateEmail(control: FormControl){
        if (control.value == '') {
            return { 'invalidemail': true };
        }
        let filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        if (String(control.value).search(filter) == -1) {
            return { 'invalidemail': true };
        }
    }
    inputblur(val:any){
        this.myForm.controls[val].markAsUntouched();
    }
    onSubmit() {
        let x: any;
        let data = this.myForm.value;
        let data1 = {data: data,source:'users'};
        data1.data.images = this.apiservice.fileservername[this.uploader];
        console.log(data1);
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
        if(this.myForm.valid){
            this.apiservice.postData(this.endpoint1, data1).subscribe(res => {
                let result: any = {};
                result = res;
                if (result.status == 'error') {
                }
                if (result.status == 'success') {
                    console.log('updated successfully');



                    data1.data.create_a_user = 'true';
                    this.apiservice.postData(this.endpoint1, data1).subscribe(res => {
                        let result: any = {};
                        result = res;
                        if (result.status == 'success') {
                            console.log('updated successfully');
                        }
                    }, error => {
                        console.log('Oooops!');
                    });


                }
            }, error => {
                console.log('Oooops!');
            });
        }
    }
}

