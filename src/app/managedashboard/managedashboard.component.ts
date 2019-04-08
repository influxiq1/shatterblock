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
  public endpoint1 = 'insertsingledata';
  public myForm: any;
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
    let sourcecondition={};
     this.apiService.getData({'source':'model_influencer_contents_viewlistin_decending',condition:sourcecondition}).subscribe(res=> {
       let result:any;
       result = res;
     // console.log(result.res.length);
      if(result.res.length>0){
        this.myForm = this.fb.group({
          type: [result.res[0].type,  Validators.required],
          content: [result.res[0].content, Validators.required]
        });
        this.modelid=result.res[0]._id;
        this.ckeditorContent=result.res[0].content;
      //  this.myForm.patchValue({content: result.res[0].content});
      }
      this.versionlist(result.res[0].type);


    });
  }
  versionlist(type){
  let  sourcecondition={type:type};
    this.apiService.getData({'source':'model_influencer_contents_viewlistin_decending',condition:sourcecondition}).subscribe(res=> {
      let result: any;
      result = res;
      console.log('result-----');
      console.log(result);
      if(result.res.length>0){
        this.model_influencer_list=result.res;
      }
      else{
        this.model_influencer_list=[];
      }
    });
  }

  onSubmit(){
    this.errckeditor = false;
    let data = {data:this.myForm.value};
    data.data.content=this.ckeditorContent;
    data.data.created_by=  this.cookieService.get('id');
    if (this.ckeditorContent == null) {
      this.errckeditor = true;
    }
    else {
      this.errckeditor = false;
    }
    let x;
    for (x in this.myForm.controls) {
      this.myForm.controls[x].markAsTouched();
    }
    console.log(data);
    if(this.errckeditor==false && this.myForm.valid){
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
          this.ckeditorContent=result.results.content;
           }
      }, error => {
        console.log('Oooops!');
      });
    }
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
        this.ckeditorContent=this.model_influencer_list[i].content;
     //   this.onSubmit();
      }
    }
  }
  changedata(){
    this.versionlist(this.myForm.controls['type'].value);
    setTimeout(()=>{
      let i;
      for (i in this.model_influencer_list){
        this.myForm = this.fb.group({
          type: [this.model_influencer_list[0].type,  Validators.required],
          content: [this.model_influencer_list[0].content, Validators.required]
        });
        this.ckeditorContent=this.model_influencer_list[0].content;
        // this.myForm.patchValue({content: this.model_influencer_list[0].content});
      }
    },3000);
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


/*hi*/

