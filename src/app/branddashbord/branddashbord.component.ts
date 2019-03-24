import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {EndpointComponent} from '../resolveservice';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-branddashbord',
  templateUrl: './branddashbord.component.html',
  styleUrls: ['./branddashbord.component.css']
})
export class BranddashbordComponent implements OnInit {

  public end:any;
  constructor(
      private activatedroute: ActivatedRoute,
      private apiservice: ApiService) { }

  ngOnInit() {
    console.log("ok");
    this.activatedroute.data.forEach(data => this.end = data);
    console.log('data');
    console.log(this.end['results'].res);
    console.log(this.end.results.res);

   /* this.apiservice.getData().subscribe(data => {
      this.endpoint = data;
    console.log('data');
    console.log(data);
    });*/
    console.log("ok1");
  }

}
