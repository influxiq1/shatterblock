import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  public myForm: any;
  public stateslist: any;
  public endpoint: any = 'frontendsignup';
  constructor(public fb: FormBuilder, private cookieService: CookieService, public http: HttpClient, public apiService: ApiService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getState().subscribe(res => {
      let result;
      result = res;
      this.stateslist = result;
    }, error => {
      console.log('Oooops!');
    });


    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      type: ['admin'],
    }, {validator: this.machpassword('password', 'confirmpassword')});
  }

  machpassword(passwordkye: string, confirmpasswordkye: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordkye],
          confirmpasswordInput = group.controls[confirmpasswordkye];
      if (passwordInput.value !== confirmpasswordInput.value) {
        return confirmpasswordInput.setErrors({notEquivalent: true});
      } else {
        return confirmpasswordInput.setErrors(null);
      }
    };
  };



  inputblur(val:any){
    console.log('on blur .....');
    this.myForm.controls[val].markAsUntouched();
  }
  onSubmit() {
    let x: any;
    let data = this.myForm.value;
    for (x in this.myForm.controls) {
      this.myForm.controls[x].markAsTouched();
    }
    console.log(data);
    let data1 = {data: data,source:'users'};
    this.apiService.postData(this.endpoint, data1).subscribe(res => {
      console.log('okkk');
      let result: any = {};
      result = res;
      if (result.status == 'success') {
        console.log('okkk');
        this.myForm.reset();
      }
    });
  }

}
