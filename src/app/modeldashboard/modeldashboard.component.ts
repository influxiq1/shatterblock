import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";
import {DomSanitizer} from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-modeldashboard',
  templateUrl: './modeldashboard.component.html',
  styleUrls: ['./modeldashboard.component.css']
})
export class ModeldashboardComponent implements OnInit {
  datasource:any;
  modeldata:any;
  modelimage:any;
 // endpoint:any='modellist';
  endpoint:any='datalist';
  model_influencer_contents_viewlistin_decending_jocu: any=[];
  model_influencer_contents_viewlistin_decending_audio: any=[];

  constructor(public router: Router,private route: ActivatedRoute, public apiservice: ApiService,public _sanitizer: DomSanitizer, public cookieService: CookieService) {
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
        this.modelimage=this.apiservice.uplodeimg_url+'/'+this.modeldata.images[0];
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

}
