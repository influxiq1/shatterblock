import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
declare const FB: any;
@Component({
  selector: 'app-affilitemarketing',
  templateUrl: './affilitemarketing.component.html',
  styleUrls: ['./affilitemarketing.component.css']
})
export class AffilitemarketingComponent implements OnInit {
public data: any;
public afflist: any;
public artistxp_banners: any;
public merchandise_banners: any;
public affiliatename: any;
public endpoint: any='datalist';
public uploadfile: any='banner';

  constructor(public apiservice: ApiService, public router: Router, private cookieService: CookieService ) {
    console.log(this.apiservice.resetpassword);
    console.log(this.apiservice.audio_img_folder_url);
  }
  getdata(){
    let sourcecondition={};
    this.apiservice.getData({'source':'users',condition:sourcecondition}).subscribe(res=> {
      let result:any;
      result = res;
      if(result.res.length>0){
        console.log(result.res[0]);
        this.affiliatename = result.res[0].auidodeadineusername;
      }
    });
  }
  ngOnInit() {
    this.getdata();
 /*   let data2={"condition":{"type":7,"status":1}};
    this.data22 = {data: data2,source:'mediaview'};
    console.log(this.data22);
*/


    //ticket sales

    let data1={"type":7,"status":1};
    this.data = {"condition": data1,source:'mediaview'};
    this.apiservice.postaffilite(this.endpoint, this.data).subscribe( res => {
      let result: any;
      result = res;
      //console.log(result);
      this.afflist=result.res;
      console.log(this.afflist);
    })


    //Artistxp Sign Up Banners

    let data2={"type":9,"status":1};
    this.data = {"condition": data2,source:'mediaview'};
    this.apiservice.postaffilite(this.endpoint, this.data).subscribe( res => {
      let result: any;
      result = res;
      this.artistxp_banners=result.res;
      console.log(this.artistxp_banners);
    })

    //Merchandise Banners

    let data3={"type":8,"status":1};
    this.data = {"condition": data3,source:'mediaview'};
    this.apiservice.postaffilite(this.endpoint, this.data).subscribe( res => {
      let result: any;
      result = res;
      this.merchandise_banners=result.res;
      console.log(this.merchandise_banners);
    })
  }

  showcopied(){
  }

  callforcopy(item){
    return 'http://api.audiodeadline.com/sharetool22.php?type=ticketsale&sponsorname='+item.sponsor+'&media_id='+item.name+'&image='+item.image+'&affiliate='+this.affiliatename;
  }

  callforcopy1(item){
    return 'http://api.audiodeadline.com/sharetool2.php?media_id='+item.name+'&username='+this.affiliatename+'&image='+item.image;
  }

  callforcopy2(item){
    return 'http://api.audiodeadline.com/sharetool23.php?media_id='+item.name+'&username='+this.affiliatename+'&image='+item.image;
  }

  postinfb(username,media_id,image){
    var link = this.apiservice.audiodeadline_php_url+'sharetool22.php?type=ticketsale&sponsorname=&media_id='+media_id+'&image='+image+'&affiliate='+username;
    console.log('link');
    console.log(link);
    FB.ui({
      method: 'feed',
      link: link,
      name: " ",
      caption:" ",
      description: " "
    },function(response){
      console.log(response);
    });
  }

  postinfb2(username,media_id,image){
    var link = this.apiservice.audiodeadline_php_url +'sharetool2.php?media_id='+media_id+'&username='+username+'&image='+image;
    FB.ui({
      method: 'feed',
      link: link,
      name: " ",
      caption:" ",
      description: " "
    },function(response){
      // console.log(response);
    });
  }

  postinfb3(username,media_id,image){
    let link = this.apiservice.audiodeadline_php_url+'sharetool23.php?media_id='+media_id+'&username='+username+'&image='+image;
    FB.ui({
      method: 'feed',
      link: link,
      name: " ",
      caption:" ",
      description: " "
    },function(response){
      // console.log(response);
    });
  }
}
