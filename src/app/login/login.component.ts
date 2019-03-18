import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public url = 'http://nodessl.influxiq.com:7012/login';
public myForm: any;
  constructor(public fb: FormBuilder, private cookieService: CookieService, public http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    let x: any;
    let data = this.myForm.value;
    console.log('data');
    console.log(data);
    for (x in this.myForm.controls) {
      this.myForm.controls[x].markAsTouched();
    }
    this.http.post(this.url, data)
        .subscribe( res => {
          let result: any = {};
          result = res;
            // console.log(result.item[0].type);
            console.log("result.item");
            console.log(result.item);
            // console.log(result.item.type);
            console.log(result.item[0]);
            if(result.status=='success') {
                this.cookieService.set('username', result.item[0].username);
                this.cookieService.set('password', result.item[0].password);
                this.cookieService.set('id', result.item[0]._id);
                this.cookieService.set('jwttoken', result.token);

                if (result.status == 'success' && result.item[0].type == 'admin') {
                    this.router.navigate(['/admin']);
                }
                else if (result.status == 'success' && result.item[0].type == 'brand') {
                    this.router.navigate(['/brand']);
                }
                else if (result.status == 'success' && result.item[0].type == 'influencers') {
                    this.router.navigate(['/influencers']);
                } else {
                    console.log('Password not mach');
                }
            }


        }, error => {
            console.log('Oooops!');
        });
      this.myForm.reset();

  }
}
