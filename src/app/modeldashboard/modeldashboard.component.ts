import { Component, OnInit, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";
import {DomSanitizer} from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {prevroute} from "../prevroute";
export interface DialogData {
  msg: string;
}
@Component({
  selector: 'app-modeldashboard',
  templateUrl: './modeldashboard.component.html',
  styleUrls: ['./modeldashboard.component.css']
})
export class ModeldashboardComponent implements OnInit {
  datasource:any;
  modeldata:any;
  modelimage:any;
  profileimg:any;
  secondimg:any;
 // endpoint:any='modellist';
  endpoint:any='datalist';
  endpoint1:any='artistxpprofileimageupdate';
  secondimageupdate:any='secondimgupdate';
  model_influencer_contents_viewlistin_decending_jocu: any=[];
  model_influencer_contents_viewlistin_decending_audio: any=[];

  constructor(public router: Router,private route: ActivatedRoute, public apiservice: ApiService,public _sanitizer: DomSanitizer, public cookieService: CookieService, public dialog: MatDialog,public prevroute: prevroute) {
    let previousurl = this.prevroute.getPreviousUrl();
   // console.log(previousurl);
    if(this.cookieService.get('id')!='' && this.cookieService.get('id') != null){
      this.getmodeldata();
    }
  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      // PRE LOAD DATA PRIOR
    /*  console.log(data);
      console.log('data from route ... !!!');
      console.log('json',data['results']);*/
      this.model_influencer_contents_viewlistin_decending_jocu=data['results'].item.model_influencer_contents_viewlistin_decending_jocu[0];
      this.model_influencer_contents_viewlistin_decending_audio=data['results'].item.model_influencer_contents_viewlistin_decending_audio[0];

    });
  }
  getmodeldata(){



    let data1={_id:this.cookieService.get('id')};
    let data2 = {"condition": data1,source:'allmodellist_view'};
      // let data = {_id:this.cookieService.get('id'),source:'allmodellist_view'};
    //  this.apiservice.postDatawithoutToken(this.endpoint, data).subscribe(res => {
        this.apiservice.postData(this.endpoint, data2).subscribe( res => {
      let result:any;
      result = res;
      console.log(result);
      if(result.res.length>0){
        this.modeldata=result.res[0];
        console.log('this.modeldata');
        console.log(this.modeldata);
        if(this.modeldata.profile_img!=null){
        this.modelimage=this.apiservice.uplodeimg_url+'/'+this.modeldata.profile_img;
          this.profileimg =this.modeldata.profile_img;
        }else{
          this.modelimage=this.apiservice.uplodeimg_url+'/'+this.modeldata.images[0];
        }
        if(this.modeldata.second_img!=null) {
          this.secondimg = this.modeldata.second_img;
        }
      }
    });
  }
  changeimg(imgsrc){
   // let val=this.modelimage.split('modelimages/');
  //  let indexval=this.modeldata.images.indexOf(imgsrc);
 //   this.modeldata.images.splice(indexval,1);
  //  this.modeldata.images.push(val[1]);
    this.modelimage=this.apiservice.uplodeimg_url+'/'+imgsrc;
  }
  setprofilepictureimage(img:any){
   // console.log(img);
    let data={images:img,email:this.cookieService.get('email')};
    this.apiservice.postData(this.endpoint1, data).subscribe( res => {
      let result: any = {};
      result = res;
      console.log('result');
      console.log(result);
      if (result.status == 'success') {
        // show a modal for update
        const dialogRef = this.dialog.open(Updatetest5, {
          data: {msg: 'Profile Image Updated'},
        });
      }
    })
  }
  setsecndpictureimage(img:any){
    let data={images:img,email:this.cookieService.get('email')};
    this.apiservice.postData(this.secondimageupdate, data).subscribe( res => {
      let result: any = {};
      result = res;
      console.log('result');
      console.log(result);
      if (result.msg == 'success') {
        // show a modal for update
        const dialogRef = this.dialog.open(Updatetest5, {
          data: {msg: 'Image Updated'},
        });
      }
    })
  }
}


@Component({
  selector: 'updatetest',
  templateUrl: '../commonmodals/updatemodal.html',
})
export class Updatetest5 {
  public modalmsg: any;

  constructor(public dialogRef: MatDialogRef<Updatetest5>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data.msg);
    this.modalmsg = data.msg;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}