import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {
  datasource:any;
    pendingmodelapplicationarray:any=[];
    brandarray:any=[];
    notpendingapplication_view:any=[];

  constructor(public router: Router,private route: ActivatedRoute,) {
    this.datasource='pendingapplication_view';
  }

  ngOnInit() {

      this.route.data.forEach((data) => {
          //PRE LOAD DATA PRIOR
          console.log('data from route ... !!!');
          console.log('json',data['results']);
          this.pendingmodelapplicationarray=data['results'].pendingapplication_view;
          this.brandarray=data['results'].brand;
          this.notpendingapplication_view=data['results'].notpendingapplication_view;


      });
  }

}
