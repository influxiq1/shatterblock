import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";
import { ApiService } from '../api.service';
import {el} from "@angular/platform-browser/testing/src/browser_util";
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
public user_id: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,public cookieService: CookieService, public router:Router, public apiService: ApiService) {
    this.user_id = this.cookieService.get('id');

  }

  logout(){
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }
  editpage() {
    console.log(this.cookieService.get('id'));
    this.user_id = this.cookieService.get('id');
    console.log("cookieService.get('type')=='model'");
    if (this.cookieService.get('type')=='model') {
      let link = 'modeledit/' + this.user_id;
      this.router.navigate([link]);
    } else if (this.cookieService.get('type')=='admin') {
      let link = 'admin-account/' + this.user_id;
      this.router.navigate([link]);
    } else if (this.cookieService.get('type')=='brand') {
      let link = 'modeledit/' + this.user_id;
      this.router.navigate([link]);
    }
  }
}
