import {Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../app/api.service';
import { Resolveservice } from '../../app/resolveservice';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  id: string;
}
@Component({
  selector: 'app-managedashboard',
  templateUrl: './managedashboard.component.html',
  styleUrls: ['./managedashboard.component.css']
})
export class ManagedashboardComponent implements OnInit {
   public endpoint = 'listofinsertsingledata';
  public endpoint1 = 'insertsingledata';
  public myForm: any;
  public result: any;
  public modelid: any;
  public errormg: any = '';
  public ckeditorContent: any;
  public model_influencer_list: any;
  public errckeditor;
  constructor(public fb: FormBuilder, private cookieService: CookieService, public http: HttpClient, public apiService: ApiService, public router: Router, public resolveservice: Resolveservice,public dialog: MatDialog) {
    this.myForm = this.fb.group({
      type: ['',  Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
  this.apiService.getData({'source':'model_influencer_contents_viewlistin_decending'}).subscribe(res=> {
  let result: any;
  result = res;
  console.log('result');
  console.log(result);
  this.model_influencer_list=result.res;
  if(this.model_influencer_list.length>0){
  this.myForm = this.fb.group({
  type: [this.model_influencer_list[0].type,  Validators.required],
  content: [this.model_influencer_list[0].content, Validators.required]
});
  this.modelid=this.model_influencer_list[0]._id;
}
});
  }
  onSubmit(){
    this.errckeditor = false;
    console.log('hieeeeeeeeeee');
    let data = {data:this.myForm.value};
    data.data.content=this.ckeditorContent;
    console.log('data');
    console.log(data);
  /*  if (this.ckeditorContent == null) {
      this.errckeditor = false;
    }
    else {
      this.errckeditor = true;
    }*/
    let x;
    for (x in this.myForm.controls) {
      this.myForm.controls[x].markAsTouched();
    }
    this.apiService.postData(this.endpoint1, data).subscribe(res => {
      let result: any = {};
      result = res;
      if (result.status == 'error') {
        this.errormg = result.msg;
      }
      if (result.status == 'success') {
        this.getdata();
        const dialogRef = this.dialog.open(Updatetest, {
        });
       this.myForm.reset();
        this.myForm = this.fb.group({
          type: [result.results.type,  Validators.required],
          content: [result.results.content, Validators.required]
        });
      }
    }, error => {
      console.log('Oooops!');
    });
  }

  inputblur(val:any){
    this.myForm.controls[val].markAsUntouched();
  }
  showdata(){
    console.log(this.modelid);
    let i;
    for (i in this.model_influencer_list){
      if(this.model_influencer_list[i]._id==this.modelid){
        this.myForm = this.fb.group({
          type: [this.model_influencer_list[i].type,  Validators.required],
          content: [this.model_influencer_list[i].content, Validators.required]
        });
        this.onSubmit();
      }
    }
  }
}


@Component({
  selector: 'updatetest',
  templateUrl: 'updatemodal.html',
})
export class Updatetest {
  public error: any;

  constructor(
      public dialogRef: MatDialogRef<Updatetest>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

