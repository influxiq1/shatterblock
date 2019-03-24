import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../app/api.service';

@Component({
  selector: 'app-forgatepassword',
  templateUrl: './forgatepassword.component.html',
  styleUrls: ['./forgatepassword.component.css']
})
export class ForgatepasswordComponent implements OnInit {
  // public url='http://nodessl.influxiq.com:7012/sendforgotpasswordemail';
  public myForm: any;
  public result: any;
  public endpoint = 'sendforgotpasswordemail';
  public url1: any = '';
  public end: any = '';
  public serverurl: any = '';
  public errormg: any = '';
  constructor( public _http: HttpClient, public fb: FormBuilder, private router: Router, private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    this.url1 = apiService.domain;
    // console.log("url");
    // console.log(this.url1);
    this.serverurl = (this.url1 + this.endpoint);
    console.log(this.serverurl);
    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
    });
  }

  ngOnInit() {
    /*this.activatedRoute.data.forEach(data => this.end = data);
    console.log(this.end);*/
  }

  forgetPassword() {
    let x: any;
    let data = this.myForm.value;
    console.log('data');
    console.log(data);
    for (x in this.myForm.value) {
      this.myForm.controls[x].markAsTouched();
    }
    this.result = this.apiService.postData(this.endpoint, data).subscribe(data => {
      let result: any = {};
      result = data;
        console.log(result);
        console.log(result.status);
        if (result.status == 'error1') {
          this.errormg = result.msg;
        }
        if (result.status == 'error2') {
          this.errormg = result.msg;
        }
    });
    /*this._http.post(this.serverurl, data).subscribe(res => {
      let result: any = {};
      result = res;
      console.log('result.item');
      // console.log(result.item);
      if (result.status == 'error1') {
        this.errormg = result.msg;
      }
      if (result.status == 'error2') {
        this.errormg = result.msg;
      }
    });*/
  }

}
