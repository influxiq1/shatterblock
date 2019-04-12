import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from "@angular/router";
import {ModalaudiodeadlineComponent} from "../modalaudiodeadline/modalaudiodeadline.component";
import {ApiService} from "../api.service";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-audiodeadlinesgreement',
  templateUrl: './audiodeadlinesgreement.component.html',
  styleUrls: ['./audiodeadlinesgreement.component.css']
})
export class AudiodeadlinesgreementComponent implements OnInit {
  fullname: string;
  public errormsg: any;
  public endpoint = 'addorupdatedata';
  constructor(public modal: MatDialog, public apiservice: ApiService,public cookieService:CookieService, public router: Router) {
    console.log('id-- '+this.cookieService.get('id'));
  }
  openDialog(){
    this.errormsg='';
    const dialogRef = this.modal.open(ModalaudiodeadlineComponent);{
      data: {myForm : this.fullname}
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.fullname = result;
      console.log('this.myForm');
      console.log(this.fullname);
    });
  }

  ngOnInit() {
  }
  onAgreement() {
    console.log(this.fullname);
    let data = {
      audiodeadline_sign: this.fullname,
      audiodeadline_agreement_date: new Date().getTime(),
      status: 3,
      id: this.cookieService.get('id'),
      create_a_user: "true"
    };
    let data1 = {data: data,source:'users'};
    console.log(data);
    if (this.fullname != '' && this.fullname!= null) {
      this.apiservice.postData(this.endpoint, data1).subscribe(res => {
        let result: any = {};
        result = res;
        console.log('result');
        console.log(result);
        if (result.status == 'success') {
          this.router.navigate(['/modeldashboard']);
        }
      })
    } else {
      this.errormsg = "Sign is required";
    }
  }

}



