import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-modeldashboard',
  templateUrl: './modeldashboard.component.html',
  styleUrls: ['./modeldashboard.component.css']
})
export class ModeldashboardComponent implements OnInit {
  datasource:any;
  model_influencer_contents_viewlistin_decending_jocu: any=[];
  model_influencer_contents_viewlistin_decending_audio: any=[];

  constructor(public router: Router,private route: ActivatedRoute, public apiservice: ApiService) {}

  ngOnInit() {
    this.route.data.forEach((data) => {
      // PRE LOAD DATA PRIOR
      console.log(data);
      console.log('data from route ... !!!');
      console.log('json',data['results']);
      this.model_influencer_contents_viewlistin_decending_jocu=data.item.model_influencer_contents_viewlistin_decending_jocu;
      this.model_influencer_contents_viewlistin_decending_audio=data.item.model_influencer_contents_viewlistin_decending_audio;

    });
  }

}
