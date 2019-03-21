import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../app/api.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  public myForm: any;
  public endpoint = 'sendforgotpasswordemail';
  public url1: any = '';
  public serverurl: any = '';

  constructor(  public _http: HttpClient, public fb: FormBuilder, private router: Router, private apiService: ApiService) {
    this.url1 = apiService.domain;
    // console.log("url");
    // console.log(this.url1);
    this.serverurl = (this.url1 + this.endpoint);
    console.log(this.serverurl);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmpassword: ['', Validators.required]});
  }

  onSubmit() {
    console.log();
    console.log(this.myForm.value.password);
    console.log(this.myForm.value.confirmpassword);
    if (this.myForm.value.password != this.myForm.value.confirmpassword) {
      console.log("Password don't mach");
    }
  }

}
