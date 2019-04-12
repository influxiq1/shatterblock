import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-affilitemarketing',
  templateUrl: './affilitemarketing.component.html',
  styleUrls: ['./affilitemarketing.component.css']
})
export class AffilitemarketingComponent implements OnInit {
public data: any;
public afflist: any;
public endpoint: any='datalist';

  constructor(public apiservice: ApiService, public router: Router ) {
    console.log(this.apiservice.resetpassword);
    console.log(this.apiservice.audio_img_folder_url);
  }

  ngOnInit() {
    let data1={"condition":{"type":9,"status":1}};

    this.data = {data: data1,source:'mediaview'};

      this.apiservice.postaffilite(this.endpoint, this.data).subscribe( res => {
      let result: any;
      result = res;
      //console.log(result);
      this.afflist=result.res;
    })
  }

}
