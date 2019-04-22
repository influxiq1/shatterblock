import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { Resolveservice } from '../resolveservice';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // public url = 'http://nodessl.influxiq.com:7012/login';
    public endpoint = 'login';
    public myForm: any;
    public result: any;
    // public url1: any = '';
    // public serverurl: any = '';
    public errormg: any = '';
    public ipinfo: any = {};

    constructor(public fb: FormBuilder, private cookieService: CookieService, public http: HttpClient, public apiService: ApiService, public router: Router, public resolveservice: Resolveservice) {
        // this.url1 = apiService.domain;
        // console.log("url");
        // console.log(this.url1);
        // this.serverurl = (this.url1 + this.endpoint);
        // console.log(this.serverurl);
        // console.log('this.serverurl');
        // console.log(this.serverurl);
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', Validators.required]
        });


        this.apiService.getclientip().subscribe(res => {

            console.log('res');
            console.log(res);
            this.ipinfo=res;
        });
    }
    onForgetPassword() {

        console.log('ok');
        this.router.navigate((['/forgetpassword']));
    }

    onSubmit() {
        let x: any;
        this.errormg = '';
        let data = this.myForm.value;
        console.log('data');
        console.log(data);
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
        data.ipinfo=this.ipinfo;
        if(this.myForm.valid){
        this.result = this.apiService.postData(this.endpoint, data).subscribe(res => {
            let result: any = {};
            result = res;
            if (result.status == 'error') {
                this.errormg = result.msg;
            }
            // console.log(result.item[0].type);
            console.log('result.item');
            console.log(result.item);
            // console.log(result.item.type);
            // console.log(result.item[0]);
            if (result.status == 'success') {
                this.cookieService.set('email', result.item[0].email);
                this.cookieService.set('password', result.item[0].password);
                this.cookieService.set('id', result.item[0]._id);
                this.cookieService.set('jwttoken', result.token);
                this.cookieService.set('type', result.item[0].type);
                if (result.status == 'success' && result.item[0].type == 'admin') {
                    this.router.navigate(['/admindashboard']);
                } else if (result.status == 'success' && result.item[0].type == 'brand') {
                    // this.myForm.reset();
                    this.router.navigate(['/branddashboard']);
                } else if (result.status == 'success' && result.item[0].type == 'influencers') {
                    this.router.navigate(['/influencersdashboard']);
                } else if (result.status == 'success' && result.item[0].type == 'model') {
                    if(result.item[0].status==1){
                        this.router.navigate(['/agreement']);
                    }
                    if(result.item[0].status==2){
                        this.router.navigate(['/audioseadlineagreement']);
                    }
                    if(result.item[0].status==3){
                        this.router.navigate(['/modeldashboard']);
                    }
                    // if(result.item[0].status==4){
                    //     this.errormg = 'The user is blocked';
                    // }
                    //  this.router.navigate(['/modeldashboard']);
                }
              //  this.myForm.reset();

            }


        }, error => {
            console.log('Oooops!');
        });
        }

    }
    inputblur(val:any){
        console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    }

}



