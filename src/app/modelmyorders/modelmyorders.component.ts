import { Component, OnInit, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";
import { CookieService } from 'ngx-cookie-service';
import { Resolveservice } from '../resolveservice';

@Component({
  selector: 'app-modelmyorders',
  templateUrl: './modelmyorders.component.html',
  styleUrls: ['./modelmyorders.component.css']
})
export class ModelmyordersComponent implements OnInit {
  public modelmyorders:any;
  modelmyorders_skip: any= ['_id','userid','shatterblok_user_id','joqu_status','city','state','unique_id','created at'];
  modelmyorders_modify_header1: any = { 'firstname': 'First Name','lastname':'Last Name','email':'Email', 'age':'Age', 'phone':'Phone', 'affiliate':'Enroller','sponsor':'Sponsor','transactionId':'Transaction Id','total':'Total','promocode':'Promocode','discount':'Discount','orderdetails':'Order Time'};
  // tablename='joquuser';

  constructor(public apiservice: ApiService, public router: Router, private cookieService: CookieService,public route: ActivatedRoute, public resolveservice: Resolveservice ) {

  }

  ngOnInit() {
    this.route.data.forEach( (data) =>{
      console.log('data in proceslist');
      console.log(data);
      this.modelmyorders = data['results'].res;
    });
  }

}
